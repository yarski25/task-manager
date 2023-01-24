interface IButton {
  color: string;
  text: string;
  onClick: React.MouseEventHandler;
}

const Button = ({ color, text, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

export default Button;
