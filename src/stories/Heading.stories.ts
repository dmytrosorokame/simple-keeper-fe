import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/shared/Heading';

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Base: TStory = {
  args: {},
};
