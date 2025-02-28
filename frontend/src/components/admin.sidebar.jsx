import React from 'react'


import { NavLink }  from 'react-router-dom';

const sidebar = () =>{


    return(
      <div className="bg-gray-800 text-white w-55 h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
          <a href="/admin/inventory" className="block text-white text-center hover:bg-gray-700 py-2">Manage Inventory</a>
          </li>
          <li>
          <a href="/admin/addnewproduct" className="block text-white text-center hover:bg-gray-700 py-2">Add New Product</a>
          </li>
          
        </ul>
      </nav>
    </div>



    );
};




export default sidebar;





