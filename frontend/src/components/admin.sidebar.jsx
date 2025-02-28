import React from 'react'


import { NavLink }  from 'react-router-dom';

const sidebar = () =>{


    return(
      <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink to="/admin/inventory" exact activeClassName="active" className="block p-2 hover:bg-gray-700 rounded">
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addnewproduct" exact activeClassName="active" className="block p-2 hover:bg-gray-700 rounded">
              Add New Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>



    );
};


export default sidebar;





