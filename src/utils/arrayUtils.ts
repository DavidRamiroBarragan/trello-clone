interface Item {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string): number => {
  return items.findIndex((item: T) => item.id === id);
};

export function overrideItemAtIndex<T>(array: T[], newItem: T, targetIndex: number): T[] {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }
    return newItem;
  });
}
