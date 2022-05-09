import React, { useState } from "react";
import * as Styles from './styles'
import { Item } from '../../types/Item'

type Props ={
    item: Item;
    onChecked: (isChecked2: boolean, item: Item) => void
}

export const ListItem = ({ item, onChecked }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        onChecked(!isChecked, item);
    }

    return(
        <Styles.container done={isChecked}>
            <input 
                type="checkbox" 
                checked={ isChecked }
                onChange={handleChecked}
            />
            <label>{item.name} - {item.done ? 'Feito': "Pendente"}</label>
        </Styles.container>
    );
} 