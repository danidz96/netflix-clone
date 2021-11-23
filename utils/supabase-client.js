import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const updateUserName = async (user, name) => {
  await supabase
    .from('profiles')
    .update({
      full_name: name,
    })
    .eq('id', user.id)
}
