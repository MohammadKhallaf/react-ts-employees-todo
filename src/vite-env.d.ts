/// <reference types="vite/client" />

type uuid = string | number | null;

interface User {
  id: uuid;
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

interface Group {
  id: number;
  label: string;
}
