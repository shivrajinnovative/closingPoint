import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import PropertyListLayout from './pages/properties/PropertyListLayout'

export default function App() {
  return (
   <BrowserRouter basename='/demo'>
    <Routes>
      <Route path="/admin" />  
      <Route path="/login" />  
      <Route path="/" element={<Layout/>} />  
      <Route path="/properties" element={<PropertyListLayout/>} />  
      <Route path="/property" element={<Layout/>} />  
    </Routes>  
   </BrowserRouter>
  )
}
