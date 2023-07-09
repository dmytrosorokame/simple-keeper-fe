'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

const AddCategory: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleNameClear = (): void => {
    setName('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('submit');

    handleNameClear();
  };

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <Input
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          isCrossVisible={!!name}
          onCrossClick={handleNameClear}
        />
      </div>

      <div className="mb-5">
        <Button type="submit">add</Button>
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </form>
  );
};

export default AddCategory;
