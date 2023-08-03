import type { Meta, StoryObj } from '@storybook/react';

import LoadingButton from '../components/shared/LoadingButton';

const meta = {
  title: 'LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
  args: {
    children: 'LoadingButton',
    disabled: false,
    isOutlined: false,
    isLoading: false,
  },
  argTypes: {
    isLoading: {
      description: 'Is button loading',
      defaultValue: {
        summary: false,
      },
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Button text',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof LoadingButton>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {
    children: 'Button',
  },
};

export const Loading: TStory = {
  args: {
    ...Base.args,
    isLoading: true,
  },
};
