
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/contact'
import Dashboard from './Pages/Dashboard/Dashboard'
import User from './Pages/User'
import Profile from './Pages/Profile'
import Jobs from './Pages/Jobs'
import AnotherUser from './Pages/AnotherUser'

import UserDetails from './Pages/UserDetails'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Simple Routingz */}

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


        {/* Nested Routing */}

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='users' element={<User />} />
          <Route path='profiles' element={<Profile />} />
          <Route path='jobs' element={<Jobs />} />
        </Route>


        {/* Dynamic Routes */}

        <Route path='/user' element={<AnotherUser />} />
        <Route path='/user/:id' element={<UserDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App