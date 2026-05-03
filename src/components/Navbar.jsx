import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "../assets/logotipo.png";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; 

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <nav className=" text-dark">
      <div className="flex justify-between items-center mx-auto container">
        <img src={logo} alt="COMO_Logo" className="w-40 " />

        {/* Navbar for large screens */}

        <ul className="md:flex items-center space-x-6 hidden">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Metodologia</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>

          <li>
            <button className="inline-flex items-center rounded-lg bg-[#F05A22] px-6 py-3 text-white">
                Solicitar Diagnóstico<FaArrowRight className="ml-2" />
            </button>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden m-8 ">
          {isMenuOpen ? (
            <RiCloseLargeFill size={20} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu size={20} onClick={toggleMenu} />
          )}
        </div>
      </div>
      {/* Navbar for small screens */}

      {isMenuOpen && (
        <ul className="flex items-center space-y-6 flex-col mt-4. text-center  md:hidden ">
          <li>
            <a href="" className="">
              Inicio
            </a>
          </li>
          <li>
            <a href="" className="">
              Servicios
            </a>
          </li>
          <li>
            <a href="" className="">
              Contacto
            </a>
          </li>
          <li>
            <a href="" className="">
              Metodologia
            </a>
          </li>
          <li>
            <a href="" className="">
              Nosotros
            </a>
          </li>

          <li>
             <button className="inline-flex items-center rounded-lg bg-[#F05A22] px-6 py-3 text-white">
                Solicitar Diagnóstico<FaArrowRight className="ml-2" />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
