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
  children: string;
  onClick: () => void;
}

const Button = ({ buttonColor, children, onClick }: Props) => {
  return (
    <div>
      {buttonColor}
      <button
        type="button"
        className={"btn btn-" + buttonColor}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
