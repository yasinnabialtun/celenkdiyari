// PayTR Payment Integration
// Bu dosya PayTR evrakları hazır olduğunda aktif hale getirilecek

export interface PayTRConfig {
  merchantId: string;
  merchantKey: string;
  merchantSalt: string;
  testMode: boolean;
  baseUrl: string;
}

export interface PayTRPaymentRequest {
  merchant_id: string;
  user_ip: string;
  merchant_oid: string;
  email: string;
  payment_amount: number;
  paytr_token: string;
  user_basket: string;
  debug_on: number;
  no_installment: number;
  max_installment: number;
  user_name: string;
  user_address: string;
  user_phone: string;
  merchant_ok_url: string;
  merchant_fail_url: string;
  timeout_limit: number;
  currency: string;
  test_mode: number;
}

export interface PayTRPaymentResponse {
  status: string;
  reason: string;
  token: string;
  paytr_token: string;
}

export interface PayTRCallbackData {
  merchant_oid: string;
  status: string;
  total_amount: number;
  hash: string;
  failed_reason_code?: string;
  failed_reason_msg?: string;
  test_mode: string;
  payment_type: string;
  currency: string;
  payment_amount: number;
}

// PayTR konfigürasyonu - environment variables'dan gelecek
export const getPayTRConfig = (): PayTRConfig => {
  return {
    merchantId: process.env.PAYTR_MERCHANT_ID || '',
    merchantKey: process.env.PAYTR_MERCHANT_KEY || '',
    merchantSalt: process.env.PAYTR_MERCHANT_SALT || '',
    testMode: process.env.PAYTR_TEST_MODE === 'true',
    baseUrl: process.env.PAYTR_BASE_URL || 'https://www.paytr.com'
  };
};

// PayTR token oluşturma fonksiyonu
export const generatePayTRToken = (config: PayTRConfig, paymentData: PayTRPaymentRequest): string => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const crypto = require('crypto');
  
  const hashString = 
    config.merchantId +
    paymentData.user_ip +
    paymentData.merchant_oid +
    paymentData.email +
    paymentData.payment_amount +
    config.merchantSalt;
  
  return crypto.createHash('sha256').update(hashString).digest('hex');
};

// PayTR ödeme isteği oluşturma
export const createPayTRPayment = async (
  config: PayTRConfig,
  paymentData: PayTRPaymentRequest
): Promise<PayTRPaymentResponse> => {
  try {
    const response = await fetch(`${config.baseUrl}/odeme/api/get-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(paymentData as unknown as Record<string, string>)
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('PayTR payment creation error:', error);
    throw new Error('PayTR ödeme isteği oluşturulamadı');
  }
};

// PayTR callback doğrulama
export const verifyPayTRCallback = (config: PayTRConfig, callbackData: PayTRCallbackData): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const crypto = require('crypto');
  
  const hashString = 
    callbackData.merchant_oid +
    config.merchantSalt +
    callbackData.status +
    callbackData.total_amount;
  
  const calculatedHash = crypto.createHash('sha256').update(hashString).digest('hex');
  
  return calculatedHash === callbackData.hash;
};

// PayTR iFrame URL oluşturma
export const getPayTRIframeUrl = (token: string): string => {
  return `https://www.paytr.com/odeme/guvenli/${token}`;
};

// PayTR ödeme durumları
export const PAYTR_STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed',
  PENDING: 'pending'
} as const;

// PayTR hata kodları
export const PAYTR_ERROR_CODES = {
  '1': 'Banka tarafından kart reddedildi',
  '2': 'Kart limiti yetersiz',
  '3': 'Kart bilgileri hatalı',
  '4': 'Kart süresi dolmuş',
  '5': 'Kart sahibi tarafından işlem iptal edildi',
  '6': 'Banka tarafından işlem reddedildi',
  '7': 'Kart sahibi tarafından işlem iptal edildi',
  '8': 'Kart sahibi tarafından işlem iptal edildi',
  '9': 'Kart sahibi tarafından işlem iptal edildi',
  '10': 'Kart sahibi tarafından işlem iptal edildi'
} as const;
