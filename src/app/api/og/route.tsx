import { ImageResponse } from '@vercel/og';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Blog Post';
  const description = searchParams.get('description') || '';

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1f1f1f 0%, #2d2d2d 100%)',
        color: 'white',
        padding: '60px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: 56,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          lineHeight: 1.2,
          maxWidth: '90%',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 28,
          textAlign: 'center',
          color: '#b3b3b3',
          lineHeight: 1.4,
          maxWidth: '90%',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: 'flex',
          marginTop: '50px',
          fontSize: 18,
          color: '#f97316',
        }}
      >
        digital-garden
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
