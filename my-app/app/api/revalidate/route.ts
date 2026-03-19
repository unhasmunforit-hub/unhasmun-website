import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

// Sesuai dengan yang kita masukkan di .env.local
const secret = process.env.SANITY_REVALIDATE_SECRET_WEBHOOK;

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | { current: string };
    }>(req, secret);

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Tentukan path mana yang perlu di-refresh
    if (body._type === "article") {
      // Refresh halaman daftar artikel
      revalidatePath("/world-review");
      
      // Refresh halaman detail artikel (jika ada slug)
      const slug = typeof body.slug === "string" ? body.slug : body.slug?.current;
      if (slug) {
          revalidatePath(`/world-review/${slug}`);
      }
    }

    return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
