import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      type="submit"
      className={classNames(["btn", className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
