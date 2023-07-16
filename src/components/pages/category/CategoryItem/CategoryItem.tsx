import React from 'react';
import { toast } from 'react-toastify';

import { useDeleteCategoryMutation } from '@/api/category.api';
import Line from '@/components/icons/Line/';
import IconButton from '@/components/shared/IconButton';
import { hidePopup, showPopup } from '@/store/popup/popup.slice';
import { useAppDispatch } from '@/store/store';
import { ICategory } from '@/types/categories';
import { Popup } from '@/types/popup';

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ category }) => {
  const [deleteCategory] = useDeleteCategoryMutation();
  const dispatch = useAppDispatch();

  const handleDeleteCategory = (): void => {
    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onCancel: () => {
            dispatch(hidePopup());
          },
          onConfirm: async () => {
            try {
              await deleteCategory(category.id);

              toast('Category deleted successfully!');
            } catch (error) {
              toast('Something went wrong!');
            }

            dispatch(hidePopup());
          },
        },
      }),
    );
  };

  return (
    <div className="pb-2 border-b-black border-b-2 flex justify-between">
      {category.name}

      <IconButton onClick={handleDeleteCategory}>
        <Line className="w-full" />
      </IconButton>
    </div>
  );
};

export default CategoryItem;
