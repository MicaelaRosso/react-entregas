import React from 'react'
import { FaHome } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";

export const Navbar = () => {
  return (
    <div>
        <div>
        <a href="/#">
            <img src="/logoaqua.png" alt='' />
        </a>

        </div>

          <div>
          <a href="/#">
            <div>
            <span>Home</span>
            <FaHome/>
            </div>
          </a>

          <div>
            <span> Productos</span>
            <PiPlantDuotone/>
          </div>

          <div>
            <span>
            Iniciar Sesión
          </span>
          <FaUserCircle/>
          </div>
      </div>
    </div>
  )
}
