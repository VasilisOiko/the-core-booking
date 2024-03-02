import React from 'react'
import protectedRoute from "./auth/protectedRoute"
import { Spinner } from './components';
import ProtectedRoute from './auth/protectedRoute';

function page() {
  return (
    <ProtectedRoute>
      <div className='static object-center'>
          <Spinner/>
      </div>
    </ProtectedRoute>
  )
}

export default page