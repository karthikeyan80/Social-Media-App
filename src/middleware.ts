import { clerkMiddleware } from '@clerk/nextjs/server';
export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Protect specific routes (adjust as needed):
     * All API routes, dashboard, etc.
     */
    '/((?!_next|static|favicon.ico).*)',
  ],
};