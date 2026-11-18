import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type CardProps = {
  title: string;
  text: string;
};

export function Card({ title, text }: CardProps) {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <small>Núverandi þema er: {themeCtx?.theme}</small>
    </div>
  );
}
