import React, { ReactElement } from "react";

export enum Size { LG = "lg", MD = "md", SM = "sm" }

type ButtonProps = {
    label: string,
    backgroundColor: string,
    color: string,
    size: Size,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
};

const Button: React.FC<ButtonProps> = ({
    label,
    backgroundColor = "red",
    color = "black",
    size = Size.MD,
    handleClick
}): ReactElement => {
    let scale: number = 1;

    if (size === "sm") scale = 0.75;
    if (size === "lg") scale = 1.5;

    const style = {
        backgroundColor,
        color,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
        cursor: "pointer"
    }

    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    );
}

export default Button;