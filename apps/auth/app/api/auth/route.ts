export async function GET(request: Request) {
  const accessToken = { value: '123' };
  const sourceUrl = new URL(request.url).searchParams.get('sourceUrl') as string;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-authorization', `Bearer ${accessToken.value}`);
  requestHeaders.set('Location', sourceUrl);

  return new Response('null', {
    headers: requestHeaders,
    status: 308,
  });
}
