'use client';
import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

export const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const currentSession = supabase.auth.session();
    setSession(currentSession);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <UserSessionContext.Provider value={{ session }}>
      {children}
    </UserSessionContext.Provider>
  );
};
