import React from "react";
import "./button.css"

export const Button = ({ entorno = "base", children, ...props }) => {
  return (
    <button className={`library-button ${entorno}-button`} {...props}>{children}</button>
  )
}
