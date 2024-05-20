import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import "react-lazy-load-image-component/src/effects/blur.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    <ToastContainer 
      position="top-right"
      autoClose={1000}
      limit={2}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ReactQueryDevtools initialIsOpen/>
  </React.StrictMode>,
)
