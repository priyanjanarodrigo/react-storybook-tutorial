import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { Size } from "../components/Button";

/**
 * Setting up the story object for the Button compoent as ButtonStory and exporting it.
 * (Here we have nested the directory hierarchy as we are putting the "Button Story "inside "Components")
 * 
 * Here, the title refers to the title of the story and the component refers to the actual component 
 * which is rendered via this particular story.
 * 
 * Instead the below code, we can also define as follows:
 * 
 *   export default { title: 'Button Story',component: Button } as ComponentMeta<typeof Button>;
 */
const ButtonStory: ComponentMeta<typeof Button> = {
    title: 'Components/Button Story', // title of the story
    component: Button, // The component which is rendered via this particular story
    /**
     * argTypes is how we define the different types of all of our arguments, and be able to define the things 
     * such as actions for onClick.
     */
    argTypes: {
        /** 
         * This is the handleClick prop in Button component(This will not auto recognized by storybook as 
         * we don't define it as onClick).
         * 
         * Here we explicitly define it as an action, which performs some operation so we want to log it in actions section in story.
        */
        handleClick: { action: "handleClick" }
    }
}

export default ButtonStory;


/**
 * To make this Button component configurable (to configure to handle controls)/ to make it interactable while the story is being run,
 * we need to setup following code for enabling interactivity.
 * 
 * First thing is to setup a base function which is commonly named as "Template". This is the template that all of the different 
 * stories follow. Template function will take "args" as the parameter and spread it as properties passed to the Button component.
 */

const Template: ComponentStory<typeof Button> = args => <Button {...args} />


/**
 * To specify what the different stories for the Button component are (for the named "Button Story" above), all we need is 
 * to create constant variables/functions for each story, assign the Template function defied above, and the pass the arguments to the
 * component.
 * 
 * The constant variable/ function name that we define becomes the name of the story. i.e. if we name the function as Red, we will have
 * a story named "Red" inside of the "Button Story" folder.
 */

export const Red = Template.bind({}); // This will copy the Template function to the Red constant variable.
// We can use following approach to setup the arguments/props which are passed to the Button component.
Red.args = {
    backgroundColor: "red",
    color: "white",
    label: "Press Me"
}

export const SmallGreen = Template.bind({});
SmallGreen.args = {
    backgroundColor: "green",
    color: "white",
    label: "Press Me",
    size: Size.SM,
}

export const LargeGreen = Template.bind({});
LargeGreen.args = {
    backgroundColor: "green",
    color: "white",
    label: "Press Me",
    size: Size.LG,
}

export const MediumBlack = Template.bind({});
MediumBlack.args = {
    backgroundColor: "black",
    color: "white",
    label: "Press Me",
    size: Size.MD,
}

export const LengthyTextYellow = Template.bind({});
LengthyTextYellow.args = {
    backgroundColor: "yellow",
    color: "black",
    label: "This is a yellow button with some lengthy text",
    size: Size.MD,
}