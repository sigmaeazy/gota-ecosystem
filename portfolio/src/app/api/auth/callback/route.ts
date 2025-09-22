import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Placeholder para callback de autenticação
  return NextResponse.json({ message: 'Auth callback endpoint' });
}

export async function POST(request: NextRequest) {
  // Placeholder para callback de autenticação POST
  return NextResponse.json({ message: 'Auth callback endpoint' });
}