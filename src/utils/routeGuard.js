import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../config/supabase'; // Import supabase client
import { CircularProgress } from '@mui/material';
import LoadingScreen from '@/components/loadingScreen';

export const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for changes in authentication state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session); // If session exists, user is authenticated
        setIsLoading(false);
      }
    );

    // Check initial authentication state
    const session = supabase.auth.session();
    setIsAuthenticated(!!session);
    setIsLoading(false);

    // Cleanup listener on unmount
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  if (isLoading) return <LoadingScreen />;

  if (!isAuthenticated) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export const RedirectIfAuthenticated = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for changes in authentication state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session); // If session exists, user is authenticated
        setIsLoading(false);
      }
    );

    // Check initial authentication state
    const session = supabase.auth.session();
    setIsAuthenticated(!!session);
    setIsLoading(false);

    // Cleanup listener on unmount
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
