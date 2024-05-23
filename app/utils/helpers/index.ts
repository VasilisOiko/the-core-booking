import { cookies } from 'next/headers'

// Function to check if the user is authenticated
const getAuthenticationStatus = (): boolean => {
    const cookieStore = cookies()
    const tokenCookie = cookieStore.get('token')
    console.log("tokenCookie: ", !!tokenCookie, tokenCookie);
    return !!tokenCookie;
};

export { getAuthenticationStatus }