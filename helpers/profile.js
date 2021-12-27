import { supabase } from '@utils/supabase-client'

export const createProfile = async (user, name) => {
  await supabase
    .from('profiles')
    .update({
      full_name: name,
      avatar_url: '/images/avatars/placeholder.png',
    })
    .eq('id', user.id)
}

export const updateProfile = async (user) => {
  await supabase
    .from('profiles')
    .update({
      user,
    })
    .eq('id', user.id)
}
