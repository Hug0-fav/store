import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://degcpkipyhgiygrlguvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZ2Nwa2lweWhnaXlncmxndXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMDUyNDQsImV4cCI6MjA2MDY4MTI0NH0.njuQkBwN6zG8dfkoK6FIiezwym7dALPylKgJ3T10jB8";

export const supabase = createClient(supabaseUrl, supabaseKey);
