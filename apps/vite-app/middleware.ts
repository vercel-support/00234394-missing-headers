// middleware.js
import { next } from '@vercel/edge';

export default async function middleware(request: Request) {
  console.log(request.headers.get('x-authorization'));

  // This is always null/undefined
  if (request.headers.get('x-authorization')) {
    return next();
  }

  return Response.redirect(
    `http://localhost:4200/api/auth?sourceUrl=${request.url}`
  );
}