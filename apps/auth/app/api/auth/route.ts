export async function GET(request: Request) {
  const accessToken = { value: '123' };
  const sourceUrl = new URL(request.url).searchParams.get(
    'sourceUrl'
  ) as string;

  return new Response(null, {
    headers: {
      Location: sourceUrl,
      'set-cookie': `authorization=${accessToken.value}; HttpOnly; Secure; SameSite=None`,
    },
    status: 308,
  });
}
