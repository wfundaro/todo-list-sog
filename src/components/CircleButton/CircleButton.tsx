import { useState } from "react";
import backIcon from "../../assets/back_icon.svg";
import addIcon from "../../assets/add_icon.svg";
import "./CircleButton.css";

export interface CircleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  title?: string;
  color?: string;
  hoverColor?: string;
  disabled?: boolean;
}

const CircleButton = (props: CircleButtonProps) => {
  const {
    children,
    onClick,
    ariaLabel,
    title,
    color = "#3e4058",
    hoverColor = "#63657c",
    disabled = false,
  } = props;
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="circle-button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: hover ? hoverColor : color }}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      data-testid="circle-button"
    >
      {children}
    </button>
  );
};

export const Back = (props: any) => (
  <CircleButton {...props} ariaLabel="back" title="Retour">
    <img src={backIcon} alt="Retour" />
  </CircleButton>
);

export const Add = (props: any) => (
  <CircleButton {...props} color="#4B9ED1" hoverColor="#61AAD7">
    <img style={{ padding: "4px 0 0 1px" }} src={addIcon} alt="Ajout" />
  </CircleButton>
);
