// src/app/callback/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const CallbackPage: React.FC = () => {
  const searchParams = useSearchParams();
  const access_token = searchParams.get('access_token');
  const router = useRouter();

  useEffect(() => {
    if (access_token) {
      console.log('Access token:', access_token);

      router.push('/');
    }
  }, [access_token, router]);

  return (
    <div>
      <h1>Processing Login...</h1>
    </div>
  );
};

export default CallbackPage;
