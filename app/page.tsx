import React from "react"
import { Spinner } from "./components"
import ProtectedRoute from "./auth/protectedRoute"
// import 'antd/dist/antd.css'
// import '../styles/globals.css'


function Page() {
  return (
        <div className="static object-center">
          <h1>loading</h1>
            <Spinner/>
        </div>
  )
}

export default Page
