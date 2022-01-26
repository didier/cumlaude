import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const getServiceSupabase = () =>
	createClient(import.meta.env.VITE_SUPABASE_URL, process.env['SUPABASE_PRIVATE_KEY'])
export default supabase
