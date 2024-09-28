
import Todoitem from "./Todoitem"

function TodoList(props){

    const addlist = props.addlist
  const setaddlist = props.setaddlist   
    return(
        <div className="bg-purple-300 flex-col flex-grow border rounded-md p-5">
                <h1 className="font-medium text-2xl">Today's Activity</h1>
               
                {
                    addlist.length === 0?  <p className="my-1">You haven't added any activity</p> :""
                }
                {   
                    addlist.map(function(item,index)
                {
                    return <Todoitem activity ={item.activity} index ={index} id={item.id} addlist={addlist} setaddlist ={setaddlist} ></Todoitem>
                })
                }
                
                
            </div>
    )

}
export default TodoList