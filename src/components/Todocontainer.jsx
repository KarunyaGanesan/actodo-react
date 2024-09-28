//Component To do container

import TodoList from "./TodoList"
import AddtodoForm from "./AddtodoForm"
import { useState } from "react"



function TodoContainer() {

    const[addlist,setaddlist] = useState([
    {
        id:1,
        activity: 'Go for a walk',
    },
    {
        id:2,
        activity:"Don't skip breakfast"
    }
])
    return (
        <div className="flex flex-row gap-7 my-2 flex-wrap">
           
            <AddtodoForm addlist ={addlist}setaddlist={setaddlist}></AddtodoForm>
            <TodoList addlist ={addlist}setaddlist={setaddlist} ></TodoList>
            

        </div>
    )

}
export default TodoContainer