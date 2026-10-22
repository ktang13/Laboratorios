import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://qemapenoukfuyvymmkjp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbWFwZW5vdWtmdXl2eW1ta2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2Mjk4ODIsImV4cCI6MjEwODIwNTg4Mn0.uZCnb4BUJkn3SfHGrkaJ5pnrjTwStuOGUzE7Uim1DKw";

export const supabase = createClient(supabaseUrl, supabaseKey);