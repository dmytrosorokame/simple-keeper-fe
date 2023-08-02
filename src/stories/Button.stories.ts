import type { Meta, StoryObj } from '@storybook/react';

import Button from 'components/shared/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const PRIMARY: TStory = {
  args: {
    children: 'Button',
  },
};
