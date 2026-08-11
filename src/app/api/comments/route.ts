import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { addInMemoryComment, type CommentItem } from "@/lib/mock-store";
import { sanitizeComment, sanitizeString } from "@/lib/sanitize";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { berita_id, author_name, author_email, comment_text, is_anonymous } = body;

    if (!berita_id || !author_name || !author_email || !comment_text) {
      return NextResponse.json(
        { success: false, message: "Semua kolom formulir komentar wajib diisi!" },
        { status: 400 }
      );
    }

    const cleanAuthorName = sanitizeString(author_name.trim());
    const cleanAuthorEmail = sanitizeString(author_email.trim());
    const cleanCommentText = sanitizeComment(comment_text.trim());

    const newComment: CommentItem = {
      id: "c-" + Date.now(),
      berita_id,
      author_name: cleanAuthorName,
      author_email: cleanAuthorEmail,
      comment_text: cleanCommentText,
      is_anonymous: Boolean(is_anonymous),
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([newComment])
        .select()
        .single();

      if (!error && data) {
        addInMemoryComment(data);
        return NextResponse.json({
          success: true,
          data,
          message: "Komentar Anda berhasil dikirim!",
        });
      }
    } catch {
      // Fallback
    }

    addInMemoryComment(newComment);
    return NextResponse.json({
      success: true,
      data: newComment,
      message: "Komentar Anda berhasil dikirim!",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal mengirim komentar.", error: String(err) },
      { status: 500 }
    );
  }
}
