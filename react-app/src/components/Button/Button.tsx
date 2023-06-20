import { ReactNode } from "react";
import style from "./Button.module.css";

interface Props {
  buttonColor:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ buttonColor, children, onClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        // className={"btn btn-" + buttonColor}
        className={style.fancyButton}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
