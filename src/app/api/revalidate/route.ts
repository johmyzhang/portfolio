import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
