import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

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
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
        },
      },
    });
    if (error) {
      toast.error("Something went wrong");
    }
    return { data, error };
  };
};
