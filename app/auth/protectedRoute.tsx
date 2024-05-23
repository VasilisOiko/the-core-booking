import { cookies } from 'next/headers'
import { RedirectType, redirect, useRouter  } from 'next/navigation';
import { NextResponse } from 'next/server';
import { ReactNode } from 'react';
import { getAuthenticationStatus } from '../utils/helpers';

// Function to check if the user is authenticated
// const isAuthenticated = (): boolean => {
//     const cookieStore = cookies()
//     const tokenCookie = cookieStore.get('token')
//     console.log("tokenCookie: ", !!tokenCookie, tokenCookie);
//     return !!tokenCookie;
// };

// Higher-order function to create protected server-side props
const ProtectedRoute= ({children}:{children: ReactNode}) => {
  // Check if the user is authenticated
  const isAuthenticated = getAuthenticationStatus();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    console.log("redirect to login")
    redirect("/login", RedirectType.replace);
  }


  // If user is authenticated, call the original getServerSideProps function
  return <div>{children}</div>;
};

export default ProtectedRoute