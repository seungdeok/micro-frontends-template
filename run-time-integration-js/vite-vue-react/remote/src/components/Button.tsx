function Button({
  text = "Home Button",
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  function handleClick() {
    onClick?.();
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default Button;
