/// <reference types="vite/client" />

interface User {
  id: string | number | null;
  first_name: string | null;
  last_name: string | null;
  is_admin: boolean;
  group: number | null;
  users: User[];
}

interface Task {
  id: number | string;
  user_id: number | string;
  content: string;
  created_at: string;
  is_complete: boolean;
}
