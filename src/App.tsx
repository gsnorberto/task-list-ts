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

    const handleAddTask = (taskName: string) => {
        let newList = [...list]
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        })
        setList(newList);
    }

    const handleChangeDone = (isChecked: boolean, item: Item) => {
        let newList = [...list]

        for(var i in list){
            if(list[i].id === item.id){
                newList[i].done = isChecked;
                break;
            }
        }
        setList(newList);
    }

    return (
        <Styles.container>
            <Styles.Area>
                <Styles.Header>Lista de Tarefas</Styles.Header>

                <AddArea onEnter={handleAddTask} />

                {list.map((item, index)=>(
                    <ListItem key={index} item={item} onChecked={handleChangeDone}></ListItem>
                ))}
            </Styles.Area>
        </Styles.container>
    )
}

export default App;