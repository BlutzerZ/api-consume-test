"use client";

// components/SignInButton.tsx
import React from 'react';
import axios from 'axios';

async function signInWithGoogle() {
  try {
    const response = await axios.get<{ url: string }>(
      'https://api-academic-chat.wafiq.my.id/auth/sing-in/google',
      {
        params: {
          callback_url: 'http://127.0.0.1:3000/callback',
        },
        headers: {
          accept: 'application/json',
        },
      }
    );

    // Redirect jika URL tersedia di response
    if (response.data.url) {
      window.location.href = response.data.url;
    } else {
      console.error('URL untuk redirect tidak ditemukan dalam respons.');
    }
  } catch (error) {
    console.error('Error saat melakukan sign in:', error);
  }
}

const SignInButton: React.FC = () => {
  return (
    <button onClick={signInWithGoogle}>
      Sign In with Google
    </button>
  );
};

export default SignInButton;
