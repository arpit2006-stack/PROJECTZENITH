import React from 'react'

import { Routes, Route } from "react-router-dom";

import Header from '../components/admin.header';
import Sidebar from '../components/admin.sidebar';

import Inventory from './inventory';
import AddnewProduct from './addnewproduct';




const Adminpannel = () => {
  return (<>
       <Header/>
       <Sidebar/>
       {/* <Routes>
       <main>
        <Route path="/admin/inventory" element={<Inventory/>} />
        <Route path="/admin/addnewproduct" element={<AddnewProduct/>} />
       </main>
       </Routes>      */}
  </>
    
      

       
      
      
    
    
  )
}

export default Adminpannel;
