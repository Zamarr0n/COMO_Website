import { IconContext } from "react-icons";

export function HabilidadesComponent({Icon, StrongWord, Description}) {
  return (
    <div className="flex h-full items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div>
        {/* icono */}
        <IconContext.Provider value={{ size: "3em" }}>
            {Icon}
        </IconContext.Provider>
      </div>
      <div>
        {/* texto */}
        <strong>{StrongWord}</strong>
        <p className="mt-1">{Description}</p>
      </div>
    </div>
  );
}
