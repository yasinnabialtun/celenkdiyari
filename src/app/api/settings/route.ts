export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { SiteSettings, SettingsUpdateRequest } from '@/types/settings';

const SETTINGS_DOC_ID = 'site-settings';

export async function GET() {
  try {
    console.log('⚙️ Fetching site settings...');

    const settingsRef = doc(db, 'settings', SETTINGS_DOC_ID);
    const settingsSnap = await getDoc(settingsRef);

    if (settingsSnap.exists()) {
      const settings = { id: settingsSnap.id, ...settingsSnap.data() } as SiteSettings;
      console.log('✅ Site settings loaded successfully');

      return NextResponse.json({
        success: true,
        settings
      });
    } else {
      // Varsayılan ayarları oluştur
      const defaultSettings: SiteSettings = {
        id: SETTINGS_DOC_ID,
        siteName: 'Çelenk Diyarı',
        siteDescription: 'Doğanın en güzel hali - Özel günlerinizde sevdiklerinizi mutlu edecek çelenkler',
        siteKeywords: 'çelenk, çiçek, açılış, cenaze, tören, ferforje, saksı bitkisi',
        siteUrl: 'https://celenkdiyari.com',
        logoUrl: '/images/logo-removebg-preview.png',
        faviconUrl: '/favicon.ico',
        contact: {
          phone: '0535 561 26 56',
          email: 'info@celenkdiyari.com',
          address: 'İstanbul, Türkiye',
          whatsapp: '0535 561 26 56',
          workingHours: 'Pazartesi - Cumartesi: 09:00 - 18:00'
        },
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          linkedin: '',
          youtube: ''
        },
        seo: {
          metaTitle: 'Çelenk Diyarı - Doğanın En Güzel Hali',
          metaDescription: 'Özel günlerinizde sevdiklerinizi mutlu edecek, doğal ve taze çelenkler. Profesyonel tasarım ve kaliteli hizmet garantisi.',
          metaKeywords: 'çelenk, çiçek, açılış, cenaze, tören, ferforje, saksı bitkisi, çelenk diyarı'
        },
        theme: {
          primaryColor: '#16a34a',
          secondaryColor: '#059669',
          accentColor: '#10b981',
          fontFamily: 'Geist'
        },
        business: {
          currency: 'TL',
          taxRate: 18,
          shippingCost: 50,
          freeShippingThreshold: 500,
          minOrderAmount: 100
        },
        notifications: {
          emailNotifications: true,
          smsNotifications: true,
          orderNotifications: true,
          stockNotifications: true
        },
        security: {
          maintenanceMode: false,
          allowRegistration: true,
          requireEmailVerification: false
        },
        maintenance: {
          isActive: false,
          message: 'Sitemiz şu anda bakım çalışması nedeniyle hizmet verememektedir. Lütfen daha sonra tekrar deneyiniz.',
          specialDays: []
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        updatedBy: 'admin'
      };

      // Varsayılan ayarları kaydet
      await setDoc(settingsRef, defaultSettings);
      console.log('✅ Default settings created');

      return NextResponse.json({
        success: true,
        settings: defaultSettings
      });
    }

  } catch (error) {
    console.error('❌ Error fetching site settings:', error);

    return NextResponse.json({
      error: 'Failed to fetch site settings',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('⚙️ Updating site settings...');

    const updateData: SettingsUpdateRequest = await request.json();
    console.log('📝 Update data:', updateData);

    const settingsRef = doc(db, 'settings', SETTINGS_DOC_ID);

    const updatePayload = {
      ...updateData,
      updatedAt: new Date().toISOString(),
      updatedBy: 'admin'
    };

    await updateDoc(settingsRef, updatePayload);
    console.log('✅ Site settings updated successfully');

    return NextResponse.json({
      success: true,
      message: 'Site settings updated successfully'
    });

  } catch (error) {
    console.error('❌ Error updating site settings:', error);

    return NextResponse.json({
      error: 'Failed to update site settings',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
