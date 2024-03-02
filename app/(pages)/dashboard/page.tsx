import ProtectedRoute from '@/app/auth/protectedRoute'
import React from 'react'


function Dashboard() {

  return (
    <ProtectedRoute>
      <div>Dashboard</div>
    </ProtectedRoute>
  )
}

export default Dashboard