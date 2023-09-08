import { useState } from 'react'
import Employee from './components/Employee'
import { v4 as uuidv4 } from 'uuid';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
import Header from "./components/Header"
import Employees from "./pages/Employees"
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import Customers from "./components/Customers"
function App() {
  return (
    <> 
    <Employees />
    </>
  )
}

export default App
