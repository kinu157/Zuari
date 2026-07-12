import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import './index.css'
import { ContactProvider } from './contexts/contact.context'

function App() {

  return (
    <>
    <ContactProvider>
      <RouterProvider router={router} />
    </ContactProvider>
    </>
  )
}

export default App
