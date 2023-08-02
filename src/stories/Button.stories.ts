import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/shared/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
    isOutlined: false,
  },
  argTypes: {
    children: {
      description: 'Button text',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'Is button disabled',
      defaultValue: {
        summary: false,
      },
      control: {
        type: 'boolean',
      },
    },
    isOutlined: {
      description: 'Is button outlined',
      defaultValue: {
        summary: false,
      },
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {
    children: 'Button',
  },
};

export const Outlined: TStory = {
  args: {
    ...Base.args,
    isOutlined: true,
  },
};

export const Disabled: TStory = {
  args: {
    ...Base.args,
    disabled: true,
  },
};
