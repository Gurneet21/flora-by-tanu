import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const origin = new URL(request.url).origin;

  if (code) {
    try {
      const supabase = getSupabase();
      await supabase.auth.exchangeCodeForSession(code);
    } catch {
      // Supabase not configured — redirect home
    }
  }

  return NextResponse.redirect(origin);
}
