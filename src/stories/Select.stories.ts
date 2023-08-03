import type { Meta, StoryObj } from '@storybook/react';

import Select from '../components/shared/Select';

const meta = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: [{ value: 'value1', label: 'label1' }],
    selectedOption: null,
  },
  argTypes: {
    options: {
      description: 'Select options',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'object',
      },
    },
    selectedOption: {
      description: 'Selected option',
      defaultValue: {
        summary: 'null',
      },
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {
    options: [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
    ],
    selectedOption: null,
  },
};

export const WithSelectedOption: TStory = {
  args: {
    ...Base.args,
    selectedOption: { value: 'value1', label: 'label1' },
  },
};
