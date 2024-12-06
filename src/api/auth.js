'use client';

import { supabase } from '../config/supabase';

export const signUp = async (email, password, name, phoneNumber) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    console.error('Error during sign up:', authError.message);
    return;
  }

  const userId = authData.user?.id;
  if (userId) {
    const { error: profileError } = await supabase.from('users').insert({
      id: userId,
      name: name,
      phone_number: phoneNumber,
    });

    if (profileError) {
      console.error('Error saving profile data:', profileError.message);
    } else {
      console.log('Profile data saved successfully');
    }
  }
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Error signing in:', error.message);
  } else {
    console.log('Sign in success:', data);
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
  } else {
    console.log('Sign out success');
  }
};
