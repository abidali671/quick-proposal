import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rswqowhmjbwycxzefpop.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzd3Fvd2htamJ3eWN4emVmcG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjAyNTIsImV4cCI6MjAxODYzNjI1Mn0.VZeOAslkP3XHYBg0ircAw7jWmjOaN_ZpVMuMnvbdl_4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
