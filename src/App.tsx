import React, {useState} from "react";
import * as Styles from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'Fazer a atividade de geografia', done: false },
        { id: 2, name: 'Buscar o carro na oficina', done: true }
    ]);

    return (
        <Styles.container>
            <Styles.Area>
                <Styles.Header>Lista de Tarefas</Styles.Header>

                <AddArea />

                {list.map((item, index)=>(
                    <ListItem key={index} item={item}></ListItem>
                ))}
            </Styles.Area>
        </Styles.container>
    )
}

export default App;