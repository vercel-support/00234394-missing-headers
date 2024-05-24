// middleware.js
import { next } from '@vercel/edge';

export default async function middleware(request: Request) {
  const authCookie = request.headers.get('cookie');

  if (authCookie) {
    return next();
  }

  return Response.redirect(
    `http://localhost:3002/api/auth?sourceUrl=${request.url}`
  );
}
