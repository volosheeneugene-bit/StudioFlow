// src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

// Твои данные из Supabase (ты уже скопировал их в .env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Создаём клиент для работы с базой
export const supabase = createClient(supabaseUrl, supabaseAnonKey);