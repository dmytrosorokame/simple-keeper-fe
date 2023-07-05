'use client';

import Button from '@/components/shared/Button';

const Home: React.FC = () => {
  return (
    <>
      <div className="mb-5">
        <Button>expenses</Button>
      </div>

      <div className="mb-5">
        <Button>categories</Button>
      </div>

      <Button isOutlined>logout</Button>
    </>
  );
};

export default Home;
