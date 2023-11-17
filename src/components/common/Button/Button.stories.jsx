import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
};

export const OrangeEmpty = Template.bind({});
OrangeEmpty.args = {
  children: 'Empty orange',
  color: 'orange-empty',
};

export const OrangeDisable = Template.bind({});
OrangeDisable.args = {
  children: 'Empty orange',
  color: 'orange-dis',
};

export const BlueEmpty = Template.bind({});
BlueEmpty.args = {
  children: 'Empty blue',
  color: 'blue-empty',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Press me too',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Press me please',
  size: 'large',
};

export const Square = Template.bind({});
Square.args = {
  children: '1',
  variant: 'square',
  width: '52px',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Just a link',
  variant: 'link',
};
