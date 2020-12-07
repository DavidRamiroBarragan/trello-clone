import { DragItem } from 'types/DragItem';

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => Boolean(!isPreview && draggedItem?.type === itemType && draggedItem?.id === id);
