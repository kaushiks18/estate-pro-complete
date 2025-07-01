import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qgwarskhyzgucxqruzbv.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnd2Fyc2toeXpndWN4cXJ1emJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTk1MTUsImV4cCI6MjA2NjQ3NTUxNX0.IF4NMyHWMBFrDqiXFzOQYbUQ47ZaZWN8E1HCVXqtmaw'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type { Database } from './types'
