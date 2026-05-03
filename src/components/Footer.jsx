import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa"; 
import logo from '../assets/Logotipo_Sencillo.png'
import { FaPeopleGroup } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { LiaFacebook } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="mt-10 bg-[#001D3D] py-8 text-white">
        <div className="mx-auto max-w-7xl px-4">
            {/* First Row */}
            <div className="grid items-center gap-8 border-b border-white/20 pb-8 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
                <div className="flex justify-center lg:justify-start">
                    {/* Icon */}
                    <IconContext.Provider value={{ size: "5em" }}>
                        <FaPeopleGroup />
                    </IconContext.Provider>
                </div>
                <div className="text-center lg:text-left">
                    <h3 className="mb-3 text-4xl">Construyamos tu posicionamiento </h3>
                    <p>
                        Si necesitas comunicar con claridad, estrategia y sustento.
                    </p>
                    <p>
                        Es momento de hacerlo bien.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                    <button className="inline-flex items-center rounded-lg bg-[#F05A22] px-6 py-3 text-white">
                        Solicitar Diagnostico <FaArrowRight className="ml-2" />
                    </button>
                    <small className="mt-3 text-center">
                        Primera conversacion sin compromiso
                    </small>
                </div>
            </div>

            {/* SECOND ROW */}
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
                <div className="flex items-center justify-center gap-5 lg:justify-start">
                    <div>
                        <img src={logo} alt="Logo" className="w-40" />
                    </div>
                    <div className="text-center lg:text-left">
                        <p>
                            Comunicación con sustento 
                        </p>
                        <p>
                            que construye autoridad.
                        </p>
                    </div>
                </div>
                <div className="text-center lg:text-right">
                    <p> Siguenos </p>
                    <div className="mt-3 flex items-center justify-center gap-4 lg:justify-end">
                        <div>
                            <IconContext.Provider value={{ size: "2em" }}>
                                <BsInstagram />
                            </IconContext.Provider>
                        </div>

                        <div>
                            <IconContext.Provider value={{ size: "2.8em" }}>
                            <LiaFacebook />
                            </IconContext.Provider>
                        </div>
                        <div>
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <BsTwitterX />
                                </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </footer>
  )
}
