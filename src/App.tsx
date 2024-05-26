import React from 'react'
import {Routes,Route} from  "react-router-dom";
import './globals.css';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster";




const App = () => {
  return (
    
    <main className='flex h-screen'>
      
      <Routes>
    
      {/* {public Routes} */}

      <Route element={<AuthLayout/>}>
      <Route path='/Sign-in' element={<SigninForm/>} />
      <Route path='/Sign-up' element={<SignupForm/>}/>
      </Route>



      {/* {private Routes} */}
      
      <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
      </Routes>
      <Toaster/>

    </main>
  )
}

export default App