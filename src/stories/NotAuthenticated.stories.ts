import type { Meta, StoryObj } from '@storybook/react';

import NotAuthenticated from '../components/generic/NotAuthenticated';

const meta = {
  title: 'NotAuthenticated',
  component: NotAuthenticated,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof NotAuthenticated>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {},
};
