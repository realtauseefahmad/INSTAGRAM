import { RouterProvider } from 'react-router'
import { router } from './App.Routes.jsx'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context.jsx'
import {PostContextProvider} from "./features/post/post.context.jsx"

function App() {

  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
