import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://lkkwtdwwxjdinexskbqb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxra3d0ZHd3eGpkaW5leHNrYnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTQyMjcsImV4cCI6MjA0MzAzMDIyN30.Nr6XpulvoMefQnyXI0WQ5RKZSm4-ho-Q1ZHdvV3pbEI";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
