import { cookies } from 'next/headers';

const useAuth = () => {

  const cookieStore = cookies();

  const isAuthenticated = () => {
    return cookieStore.has('token')
  }

  const login = (token: string) => {
    cookieStore.set('token', token);
  };

  const logout = () => {
    cookieStore.delete('token');
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;