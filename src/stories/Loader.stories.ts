import type { Meta, StoryObj } from '@storybook/react';

import Loader from '../components/shared/Loader';

const meta = {
  title: 'Loader',
  component: Loader,
  tags: ['autodocs'],
  args: {
    className: '',
  },
  argTypes: {
    className: {
      description: 'Loader class name',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {},
};

export const WithClassName: TStory = {
  args: {
    className: 'w-10 h-10',
  },
};
