import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"



// Higher-order function to create protected server-side props
const ProtectedRoute = ({ children }: { children: ReactNode }) => {

  // const pathname = usePathname()
  // const { isAuthenticated } = useAuth()
  // const router = useRouter()

  // useEffect(() => {

  //   console.log("isAuthenticated: ", isAuthenticated)
  //   if (!isAuthenticated) {
  //     console.log("redirect to login")
  //     // Redirect user to login if not authenticated
  //     router.push("/login")
  //   } else if (pathname === "/login") {
  //     console.log("from login page redirect to dashboard")
  //     // Redirect authenticated user away from login page
  //     router.push("/dashboard")
  //   }
  // }, [isAuthenticated, router])

  // if (!isAuthenticated && pathname !== "/login") {
  //   return null // Prevent rendering until authentication check is done
  // }

  // return <>{children}</>
  
}

export default ProtectedRoute