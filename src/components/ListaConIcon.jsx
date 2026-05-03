import { IconContext } from "react-icons";

export function ListaConIcon({Icon, text, IconColor}) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <IconContext.Provider value={{ color: IconColor }}>
        {Icon}
      </IconContext.Provider>
      <span>{text}</span>
    </div>
  )
}
