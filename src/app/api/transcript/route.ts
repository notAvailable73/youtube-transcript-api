import { getTranscript } from '@/lib/getTranscript';
import { NextResponse } from 'next/server';

function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v');
    } else if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const lang = searchParams.get('lang') || 'en';

  if (!url) {
    return NextResponse.json({ error: 'Missing YouTube URL' }, { status: 400 });
  }

  const videoId = extractVideoId(url);
  if (!videoId) {
    return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
  }

  try {
    const transcript = await getTranscript(videoId, lang);
    return NextResponse.json({ success: true, transcript });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
