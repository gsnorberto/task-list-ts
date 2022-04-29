import React, { useState } from "react";
import * as Styles from './styles'
import { Item } from '../../types/Item'

type Props ={
    item: Item;
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <Styles.container done={isChecked}>
            <input 
                type="checkbox" 
                checked={ isChecked }
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </Styles.container>
    );
} 