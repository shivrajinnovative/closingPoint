import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

export default function App() {
  return (
   <BrowserRouter basename='/demo'>
    <Routes>
      <Route path="/admin" />  
      <Route path="/login" />  
      <Route path="/" element={<Layout/>} />  
    </Routes>  
   </BrowserRouter>
  )
}
