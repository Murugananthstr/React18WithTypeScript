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
}

const Button = ({ buttonColor, children }: Props) => {
  return (
    <div>
      {buttonColor}
      <button type="button" className={"btn btn-" + buttonColor}>
        {children}
      </button>
    </div>
  );
};

export default Button;
