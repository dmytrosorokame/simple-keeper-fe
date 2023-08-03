import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/shared/Input';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: 'value',
    type: 'text',
    isCrossVisible: false,
    error: null,
  },
  argTypes: {
    value: {
      description: 'Input value',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'Input type',
      defaultValue: {
        summary: 'text',
      },
      control: {
        type: 'select',
      },
      options: ['text', 'password', 'number', 'email', 'tel', 'url'],
    },
    isCrossVisible: {
      description: 'Is cross visible',
      defaultValue: {
        summary: false,
      },
      control: {
        type: 'boolean',
      },
    },
    error: {
      description: 'Error message',
      defaultValue: {
        summary: 'null',
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {
    value: 'value',
    type: 'text',
  },
};

export const Password: TStory = {
  args: {
    ...Base.args,
    type: 'password',
  },
};

export const CrossVisible: TStory = {
  args: {
    ...Base.args,
    isCrossVisible: true,
  },
};

export const Error: TStory = {
  args: {
    ...Base.args,
    error: 'Error message',
  },
};
