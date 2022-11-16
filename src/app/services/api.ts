import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export const useRegister = () => {
  return async (
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) => {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
        },
      },
    });
    return { data, error };
  };
};

// let { error } = await supabase.auth.signOut();
// console.log(data);
// const { data: user } = await supabase
//   .from("profiles")
//   .select("*")
//   .eq("id", supabase.auth.admin)
//   .limit(1)
//   .single();

// console.log(user.user?.id);
// console.log(profile);
// if (user.role === admin) { ... }
