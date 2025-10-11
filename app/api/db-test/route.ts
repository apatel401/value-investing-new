export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/mongoose";

export async function GET() {
  try {
    const mongoose = await connectToDatabase();

    const conn = mongoose.connection;
    const state = conn.readyState; // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting

    // Try a low-cost ping using the native driver to verify round-trip connectivity
    let ping: unknown = null;
    try {
      if (conn.db) {
        // The driver supports admin().ping() or db.command({ ping: 1 }) depending on version
        if (typeof (conn.db as any).admin === "function" && typeof (conn.db as any).admin().ping === "function") {
          ping = await (conn.db as any).admin().ping();
        } else if (typeof (conn.db as any).command === "function") {
          ping = await (conn.db as any).command({ ping: 1 });
        }
      }
    } catch (e) {
      // If ping fails, we still return connection info with ok=false below
      return NextResponse.json(
        {
          ok: false,
          error: String(e instanceof Error ? e.message : e),
          state,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: state === 1,
      state,
      host: (conn as any).host ?? undefined,
      name: conn.name,
      user: (conn as any).user ?? undefined,
      ping,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: String(error instanceof Error ? error.message : error),
      },
      { status: 500 }
    );
  }
}
