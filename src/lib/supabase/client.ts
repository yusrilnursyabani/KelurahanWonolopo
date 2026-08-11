import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dnyvpvjopqeuxbjiaepx.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_ZP6DBpHV8u9BhW-7vxochA_6-W-y1R8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
