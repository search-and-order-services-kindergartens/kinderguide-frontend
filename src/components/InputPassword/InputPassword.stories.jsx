import { InputPassword } from './InputPassword';

export default {
  title: 'Input',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <InputPassword {...arg} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'form',
};

export const Password = Template.bind({});
Password.args = {
  variant: 'password',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Search = Template.bind({});
Search.args = {
  variant: 'search',
};

export const Price = Template.bind({});
Price.args = {
  variant: 'price',
};
