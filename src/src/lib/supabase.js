import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eycnswfyfbxwnswcymzh.supabase.co'
const supabaseKey = 'eycnswfyfbxwnswcymzh'

export const supabase = createClient(supabaseUrl, supabaseKey)