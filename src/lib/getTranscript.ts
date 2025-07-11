import { ClientType, Innertube } from 'youtubei.js/web';

interface TranscriptSegment {
  text: string;
  startMs: string;
  endMs: string;
}

interface InitialSegment {
  start_ms: string;
  end_ms: string;
  snippet: {
    text?: string; // Make text optional to match the library type
  };
}

export async function getTranscript(videoId: string, lang: string = 'en'): Promise<TranscriptSegment[]> {
  const yt = await Innertube.create({
    client_type: ClientType.WEB,
    lang,
    fetch: async (input, init) => {
      return fetch(input, init);
    },
  });

  const info = await yt.getInfo(videoId);  
  const scriptInfo = await info.getTranscript();

  if (!scriptInfo?.transcript?.content?.body?.initial_segments) {
    throw new Error("Transcript not available for this language.");
  }

  return scriptInfo.transcript.content.body.initial_segments.map((segment: InitialSegment) => ({
    text: segment.snippet.text ?? '',
    startMs: segment.start_ms,
    endMs: segment.end_ms,
  }));
}