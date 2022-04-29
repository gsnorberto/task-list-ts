import React from "react";
import * as Styles from './styles'

export const AddArea = () => {
    return (
        <Styles.container>
            <div className="image">➕</div>
            <input
                type="text"
                id=""
                placeholder="Adicione uma tarefa"
            />
        </Styles.container>
    );
}