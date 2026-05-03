
// Iconos para las cartas
import { BiMessageSquareDots } from "react-icons/bi";
import CardComponent from "./CardComponent";
import { GoVideo } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import { IoEarOutline } from "react-icons/io5";
import { MetodologiaComponent } from "./MetodologiaComponent";

import { TbTargetArrow } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";


import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa"; 
import { FaCheckCircle } from "react-icons/fa";

import { HabilidadesComponent } from "./HabilidadesComponent";
import { ListaConIcon } from "./ListaConIcon";



export default function Servicios() {
return (
    <>
    <section className="pt-5">
    <div className="text-center">
        <small className="font-bold text-[#F05A22] ">
            SERVICIOS
        </small>
        <h2 className="font-bold text-4xl">
            Servicios diseñados para construir influencia
        </h2>
    </div>
    {/* Cartas de los servicios */}
    <div className="mx-auto mt-8 mb-8 flex max-w-7xl flex-wrap justify-center gap-6 px-4">

        <CardComponent 
        title={"ESTRATEGIAS DE COMUNICACIÓN Y MEDIOS"}
        description={"Definimos el rumbo. Analizamos contexto, audiencias, narrativa para diseñar estrategias que posicionan."}
        icon={ <BiMessageSquareDots /> }
        littleWords={ "Congruencia, Coherencia, Identidad" }
        color={"#009F9A"}
        />

        <CardComponent 
        title={"PRODUCCIÓN AUDIOVISUAL"} 
        description={"Convertimos ideas piezas que comunican con intención y generan impacto. "}
        icon={ <GoVideo /> }
        littleWords={ "Persuaciòn, Estimados, Credibilidad" }
        color={"#F05A22"}
        />

        <CardComponent 
        title={"COMUNICACIÓN INTERNA"}
        description={" Alineamos equipos a través de mensajes claros que fortalecen cultura y direccion"}
        icon={ <IoPeople />}
        littleWords={ "Cohesion, Sensibilidad, Construccion" }
        color={ "#662D91" }
        />

        <CardComponent 
        title={" CAMPAÑAS DIGITALES "}
        description = {" Diseñamos Campañas que conectan, posicionan y convierten en los canales correctos."}
        icon={ <PiSpeakerSimpleHighFill /> }
        littleWords={" Reputacion, Creatividad, Diseño "}
        color={"#00AEEF"}
        />

        <CardComponent 
        title={" RELACIONES PUBLICAS "}
        description={"Gestionamos percepcion vinculos y presencia estrategica con audiencias clave"}
        icon={<FaPeopleLine />}
        littleWords={"Diagnostico, Empatia, Racionalidad"}
        color={"#8DC63F"}
        />

    </div>

    {/*  metodologia  */}
    <div className="mt-8 bg-[#F1F2F2] py-8 text-center">
        <small className="text-[#009F9A] font-bold">
            METODOLOGIA
        </small>
        <h2 className="font-bold text-4xl">
            Cómo construimos comunicación con sustento
        </h2>

        <div className="mx-auto mt-8 mb-8 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-4">

            <MetodologiaComponent
            Icon={ <IoEarOutline /> }
            Number={"01"}
            StrongWord={" Escuchamos"}
            Description={"Analizamos contexto, entorno y necesidades reales."}
            Color_icon={"#009F9A"}
            />

            <MetodologiaComponent
            Icon={<TbTargetArrow />}
            Number={"02"}
            StrongWord={"Definimos"}
            Description={"Estructuramos narrative, objetos y enfoque estrategico"}
            Color_icon={"#EE7D30"}
            />

            <MetodologiaComponent
            Icon={ <BiMessageSquareDots /> }
            Number={"03"}
            StrongWord={"Comunicamos"}
            Description={"Ejecutamos con precision en los canales y formatos adecuados "}
            Color_icon={"#662D91"}
            />

            <MetodologiaComponent
            Icon={<VscGraph /> }
            Number={"04"}
            StrongWord={"Posicionamos"}
            Description={"Convertimos comunicación en reputación, influencia y resultados."}
            Color_icon={"#8DC63F"}
            />

        </div>

    </div>

    {/*  Fundamentos  */}
    <div className="mx-auto mt-8 mb-8 grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        {/* Apartado de texto  */}
        <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
            <small className="font-bold text-[#F05A22]">
                FUNDAMENTOS
            </small>
            <h2 className="text-4xl font-bold">
                Fundamentos que sostienen cada decisión
            </h2>

            <p className="mt-4">
                No son conceptos decorativos. Son criterios que guian cada estrategia y cada ejecución.
            </p>
            <div>
                <button className="mt-8 inline-flex items-center rounded-lg border border-[#F05A22] bg-white px-6 py-3 text-[#F05A22]">
                    Conoce mas sobre nosotros <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>

        {/* Apartado de habilidades  */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <HabilidadesComponent
            Icon={<HiOutlineLightBulb />}
            StrongWord={"Coherencia"}
            Description={"Ideas alineadas con propositos"}
            />

            <HabilidadesComponent
            Icon={<IoExtensionPuzzleOutline />}
            StrongWord={"Congruencia"}
            Description={"Lo que decimos es lo que hacemos"}
            />

            <HabilidadesComponent
            Icon={<LuShieldCheck />}
            StrongWord={"Credibilidad"}
            Description={"Mensajes verificables que generan confianza"}
            />

            <HabilidadesComponent
            Icon={<BiSearchAlt />}
            StrongWord={"Diagnostico"}
            Description={"Entendemos antes de proponer"}
            />

            <HabilidadesComponent
            Icon={<FaRegHeart />}
            StrongWord={"Empatia"}
            Description={"Escuchamos para entender mejor"}
            />

            <HabilidadesComponent
            Icon={<GiBrain />}
            StrongWord={"Racionalidad"}
            Description={"Decisiones basadas en analisis y datos"}
            />
        </div>
    </div>

    {/* Resultados */}
    <div className="mx-auto mt-8 mb-8 grid max-w-7xl grid-cols-1 gap-10 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
            <small className="font-bold text-[#009F9A]">
                RESULTADOS
            </small>
            <h2 className="text-4xl font-bold">
                Lo que construimos
            </h2>

            <div className="mt-5 space-y-1">
            <ListaConIcon Icon={<FaCheckCircle />} text="Autoridad en tu sector" IconColor="#009F9A" />
            <ListaConIcon Icon={<FaCheckCircle />} text="Mensajes claros y consistentes" IconColor="#009F9A" />
            <ListaConIcon Icon={<FaCheckCircle />} text="Mayor conexion con audiencia clave" IconColor="#009F9A" />
            <ListaConIcon Icon={<FaCheckCircle />} text="Reputacion clara y sostenible" IconColor="#009F9A" />
            <ListaConIcon Icon={<FaCheckCircle />} text="Resultados medibles y estrategicos" IconColor="#009F9A" />
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex h-72 w-full max-w-xl items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-gray-500">
                {/* <p>Falta agregar imagen</p> */}
                <img src="https://images.pexels.com/photos/34368131/pexels-photo-34368131.jpeg" loading="lazy" alt="Resultados_Image" />
            </div>
        </div>
    </div>

    </section>
    </>
)
}
