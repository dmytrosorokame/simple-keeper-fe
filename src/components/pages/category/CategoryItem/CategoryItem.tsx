import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useDeleteCategoryMutation } from '@/api/category.api';
import Line from '@/components/icons/Line';
import IconButton from '@/components/shared/IconButton';
import Loader from '@/components/shared/Loader';
import { showPopup } from '@/store/popup/popup.slice';
import { useAppDispatch } from '@/store/store';
import { ICategory } from '@/types/categories';
import { Popup } from '@/types/popup';

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  const [deleteCategory, { isLoading: isDeleting }] = useDeleteCategoryMutation();

  const handleDeleteCategory = useCallback((): void => {
    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onConfirm: async () => {
            try {
              await deleteCategory(category.id);

              toast('Category deleted successfully!');
            } catch (error) {
              toast('Something went wrong!');
            }
          },
        },
      }),
    );
  }, [dispatch, deleteCategory, category]);

  return (
    <div className="pb-2 border-b-black border-b-2 flex justify-between">
      {category.name}

      {isDeleting ? (
        <Loader className="w-5 h-5" />
      ) : (
        <IconButton onClick={handleDeleteCategory}>
          <Line className="w-full" />
        </IconButton>
      )}
    </div>
  );
};

export default CategoryItem;
