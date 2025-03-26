import React,{ useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import UseEffect from './Hooks/UseEffect'
import UseState from './Hooks/UseState'
import AgroECart from './Pages/Agro'
import Parent from './Hooks/UseContext/Parent'
import { UserProvider } from './Hooks/UseContext/UserContext'
import Child from './Hooks/UseContext/Child'
import UseRef from './Hooks/UseContext/UseRef'
import UseRef1 from './Hooks/UseContext/UseRef1'
import UseMemo from './Hooks/UseContext/UseMemo'
import UseReducer from './Hooks/UseReducer'
import Parent1 from './Hooks/UseCallback/Parent1'

function App() {
  const user1="Shiyaam"
  return (
    <div>
      {/* <UseRef />
      <UseRef1 />
      <UseMemo /> */}
      {/* <UseReducer /> */}
      {/* <Parent1 /> */}
      {/* <Parent user={user1}/> */}
      {/* <UserProvider>
        <Child />
      </UserProvider> */}
      <Navbar/>
      {/* <UseEffect />
      <UseState /> */}
      {/* <AgroECart/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App;
