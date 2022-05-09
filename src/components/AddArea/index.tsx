import React, { useState } from "react";
import * as Styles from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Styles.container>
            <div className="image">➕</div>
            <input
                type="text"
                id=""
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Styles.container>
    );
}