import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './App.Routes.jsx'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context.jsx'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
