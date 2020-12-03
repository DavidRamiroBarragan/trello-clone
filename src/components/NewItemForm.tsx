import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../styles";
import { useFocus } from "../utils/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState<string>("");
  const inputRef = useFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key) onAdd(text);
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}
