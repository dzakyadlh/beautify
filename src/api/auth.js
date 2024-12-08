import { supabase, supabaseAdmin } from '../config/supabase';

export const signUp = async (email, password, name, phoneNumber) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    console.error('Error during sign up:', authError.message);
    throw new Error(authError.message);
  }

  const userId = authData.user?.id;
  if (userId) {
    const { error: profileError } = await supabaseAdmin.from('users').insert({
      id: userId,
      name: name,
      email: email,
      phone_number: phoneNumber,
      is_admin: false,
    });

    if (profileError) {
      console.error('Error saving profile data:', profileError.message);
      throw new Error(profileError.message);
    }

    return true;
  }
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Error signing in:', error.message);
    throw new Error(error.message);
  }
  return true;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
    throw new Error(error.message);
  }
  return true;
};
