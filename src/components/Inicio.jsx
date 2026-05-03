import { FaArrowRight } from "react-icons/fa"; 
import { TbTargetArrow } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { IconContext } from "react-icons";
import heroImage from "../assets/Como_HeroImage.webp";

export default function Inicio() {
  return (
    
    <>  
    {/* Hero Section */}
    <section className="mx-auto my-10 grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2">
    {/* Text column */}
    <div>
    <small>
        Somos un despacho de <br /> <strong className="text-[#F05A22]">comunicación con sustento</strong>
    </small>
    <h1 className="mt-5 mb-5 text-6xl font-bold text-left">
        Comunicación <br />con sustento que <br />construye <strong className="text-[#F05A22]">autoridad</strong>
    </h1>
    <small>
        Estrategia, contenido y medios alineados para <br /> posicionar, influir y generar resultados reales.
    </small>

    <div className="mt-8 flex flex-wrap gap-4">
        <button className="inline-flex items-center rounded-lg bg-[#F05A22] px-6 py-3 text-white">
            Solicitar Diagnóstico<FaArrowRight className="ml-2" />
        </button>
        <button className="inline-flex items-center rounded-lg border border-[#F05A22] bg-white px-6 py-3 text-[#F05A22]">
            Conocer Servicios<FaArrowRight className="ml-2" />
        </button>
    </div>

    <div className="mt-8 mb-8 flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
            <IconContext.Provider value={{ size: "2.5em" }}>
                <TbTargetArrow />
            </IconContext.Provider>
            <p>Estrategia <br /> antes que ejecución</p>
        </div>

        <div className="flex items-center gap-3">
            <IconContext.Provider value={{ size: "2.5em" }}>
                <TbMessages />
            </IconContext.Provider>
            <p>Mensajes que <br /> posicionan</p>
        </div>

        <div className="flex items-center gap-3">
            <IconContext.Provider value={{ size: "2.5em" }}>
                <BsGraphUpArrow />
            </IconContext.Provider>
            <p>Decisiones basadas en <br /> análisis</p>
        </div>
    </div>
    </div>

    {/* Image column */}
    <div className="flex items-center justify-center">
        <div className="flex h-96 w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-gray-500">
            {/* <p>Falta agregar imagen</p> */}
            <img src={heroImage} alt="Hero Image" className="h-full w-full rounded-2xl object-cover" />
        </div>
    </div>

    </section>
    </>

  
)
}
