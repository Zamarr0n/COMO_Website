import { IconContext } from "react-icons";

export function MetodologiaComponent({Icon, Number, StrongWord, Description, Color_icon}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-xs flex-col items-center">
      <div className="mx-auto flex h-30 w-30 items-center justify-center rounded-full bg-white">
        {/* icon here  */}
        <IconContext.Provider value={{ size: "5em", color: Color_icon }}>
          {Icon}
        </IconContext.Provider>
      </div>
      <span className="mt-4 inline-block h-3 w-3 rounded-full"
      style={{ backgroundColor: Color_icon }}
      ></span>
      <div className="mt-3 text-center">
        {/* text Here */}
        <div>
          <strong className="font-bold"
          style={{ color: Color_icon }}
          > {Number} </strong>
        </div>

        <strong>{StrongWord}</strong>
        <p className="mt-1">{Description}</p>
      </div>
    </div>
  );
}
