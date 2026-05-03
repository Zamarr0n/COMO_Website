// Iconos para las cartas
import { IconContext } from "react-icons";


export default function CardComponent({title, description, icon, littleWords, color}) {
    return (
    
    <div className="flex w-full max-w-sm flex-col border rounded-lg border-gray-300 shadow-lg shadow-gray-500/50">
                <div className="flex flex-1 flex-col m-5">
                <div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: color }}
                >
                    <IconContext.Provider value={{ size: "3em" }}>
                        {icon}
                    </IconContext.Provider>
                </div>
                <h3 className="mt-3 mb-3 text-2xl font-bold" style={{ color }}>
                    {title}
                </h3>
                <p className="mb-5 flex-1">
                    {description}
                </p>
                <hr></hr>
                <small style={{ color }}>
                    {littleWords}
                </small>
                </div>
    </div>
  )
}
