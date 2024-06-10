import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log('Request Path:', path);
  console.log('Token:', token);

  const publicPaths = [
    '/',
    '/sign-up',
    '/sign-in',
    '/features',
    '/price',
    '/blog',
    '/contact',
  ];

  const adminPaths = [
    '/admin',
    '/admin/links',
    '/admin/products',
    '/admin/videos',
    '/admin/socials',
    '/admin/analytics',
    '/admin/appearance',
    '/admin/settings',
  ];

  const authenticationForm = [
    '/sign-in',
    '/sign-up',
  ];

  const isAdminPath = adminPaths.includes(path);
  const isAuthenticationForm = authenticationForm.includes(path);


  if (isAuthenticationForm && token) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl));
  }

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL('/sign-up', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/sign-up', '/sign-in', '/features', '/price', '/blog', '/contact', '/admin', '/admin/:path*'],
};
