import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "_atoms";
import { ButtonStyleProps } from "src/stories/components/atoms/Button/Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});

const styles: ButtonStyleProps = {
  paddingTop: 8,
  paddingRight: 9,
  paddingBottom: 10,
  paddingLeft: 12,
  backgroundColor: '#aaaaaa',
  fontSize: 16
}

Primary.args = {
  text: "Big Button Press.",
  style: styles,
};

