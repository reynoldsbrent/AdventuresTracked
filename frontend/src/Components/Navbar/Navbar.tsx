import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/useAuth';

interface Props {}

const Navbar = (props: Props) => {
    const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="font-bold text-bg-700 flex items-center space-x-20">
          <Link to="/" className="text-bg-700 hover:text-darkBlue">
            AdventuresTracked
          </Link>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="font-bold hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-blue-700 hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-blue-700 hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar