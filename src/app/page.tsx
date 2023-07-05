'use client';

import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import Input from '@/components/shared/Input';

const Home: React.FC = () => (
  <>
    <Heading />

    <Input value="" onChange={console.log} placeholder="email" />

    <Input value="" onChange={console.log} placeholder="password" />

    <Button>signup</Button>
  </>
);

export default Home;
