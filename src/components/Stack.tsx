import { ReactElement, ReactNode } from "react";

export enum Direction { ROW = "row", COLUMN = "column" };

enum FlexWrap { WRAP = "wrap", NOWRAP = "nowrap" };

type StackProps = {
    children: ReactNode,
    spacing: number,
    wrap: boolean,
    direction: Direction
};

const Stack: React.FC<StackProps> = ({
    children,
    spacing = 2,
    direction = Direction.ROW,
    wrap = false,
}): ReactElement => {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? FlexWrap.WRAP : FlexWrap.NOWRAP,
        flexDirection: direction,
    }
    return (
        <div style={style}>{children}</div>
    )
};

export default Stack;