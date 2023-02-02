import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stack, { Direction } from "../components/Stack";

export default {
    title: "Components/Stack Story",
    component: Stack,
    argTypes: {
        /**
         * This numberOfChilren is an additional arguments which is specific to the storybook and the component is not
         * having such an argument and not needed anywhere within the component. It is only needed for the storybook.
         */
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<any> = ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>
        {[...Array.from(Array(numberOfChildren).keys())].map(num => {
            let style = {
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };
            return <div style={style}> {num + 1}</div>;
        })}
    </Stack>
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: Direction.ROW,
    spacing: 2,
    wrap: false
}

export const Vertical = Template.bind({});
Vertical.args = {
    direction: Direction.COLUMN,
    spacing: 2,
    wrap: false
}

export const NoSpacing = Template.bind({});
NoSpacing.args = {
    direction: Direction.ROW,
    spacing: 0,
    wrap: false
}

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
    numberOfChildren: 100, // storybook specific argument only
    direction: Direction.ROW,
    spacing: 2,
    wrap: true
}

export const EmptyContainer = Template.bind({});
EmptyContainer.args = {
    numberOfChildren: 0, // storybook specific argument only
    direction: Direction.ROW,
    spacing: 2,
    wrap: false
}
