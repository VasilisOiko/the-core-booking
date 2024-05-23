import React from 'react'
import protectedRoute from "./auth/protectedRoute"
import { Spinner } from './components';
import ProtectedRoute from './auth/protectedRoute';
import { ConfigProvider } from 'antd';


function page() {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
      },
    }}
    >
      <ProtectedRoute>
        <div className='static object-center'>
            <Spinner/>
        </div>
      </ProtectedRoute>
    </ConfigProvider>
  )
}

export default page;