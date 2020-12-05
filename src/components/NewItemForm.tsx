import React, { useState } from 'react';
import { useFocus } from 'hooks/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';

interface NewItemFormProps {
  onAdd(text: string): void;
}

export function NewItemForm({ onAdd }: NewItemFormProps): JSX.Element {
  const [text, setText] = useState<string>('');
  const inputRef = useFocus();

  function handleAddText(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') onAdd(text);
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}
