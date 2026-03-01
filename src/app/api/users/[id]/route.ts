export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('👤 Fetching user:', id);
    
    const userRef = doc(db, 'users', id);
    const docSnap = await getDoc(userRef);
    
    if (!docSnap.exists()) {
      console.log('❌ User not found:', id);
      return NextResponse.json({
        error: 'User not found'
      }, { status: 404 });
    }
    
    const user = {
      id: docSnap.id,
      ...docSnap.data()
    };
    
    console.log('✅ User found:', id);
    
    return NextResponse.json({
      success: true,
      user,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error fetching user:', error);
    
    return NextResponse.json({
      error: 'Failed to fetch user',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('📝 Updating user:', id);
    
    const userData = await request.json();
    console.log('📝 User data for update:', userData);
    
    if (!id) {
      console.log('❌ No user ID provided for update');
      return NextResponse.json({
        error: 'User ID is required for update'
      }, { status: 400 });
    }
    
    console.log('✅ Validation passed for update');
    
    const userRef = doc(db, 'users', id);
    
    // Check if the document exists before updating
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      console.log('❌ User not found for update:', id);
      return NextResponse.json({
        error: 'User not found'
      }, { status: 404 });
    }
    
    await updateDoc(userRef, {
      ...userData,
      updatedAt: new Date().toISOString()
    });
    
    console.log('✅ User updated successfully in Firebase with ID:', id);
    
    return NextResponse.json({
      success: true,
      id: id,
      user: { id: id, ...userData },
      message: 'User updated successfully',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error updating user:', error);
    
    return NextResponse.json({
      error: 'Failed to update user',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('🗑️ Deleting user:', id);
    
    const userRef = doc(db, 'users', id);
    
    // Check if the document exists before deleting
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      console.log('❌ User not found for deletion:', id);
      return NextResponse.json({
        error: 'User not found'
      }, { status: 404 });
    }
    
    await deleteDoc(userRef);
    
    console.log('✅ User deleted successfully');
    
    return NextResponse.json({
      success: true,
      message: 'User deleted successfully',
      userId: id,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error deleting user:', error);
    
    return NextResponse.json({
      error: 'Failed to delete user',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

