import { useState } from "react"

function AddtodoForm(props){
    const addlist = props.addlist
    const setaddlist =props.setaddlist

    function handleinput(event){
        setnewactivity(event.target.value)

    }

    function handleadd(){
        setaddlist([...addlist,{id:addlist.length+1,activity:newactivity}])
        setnewactivity("")

    }

    const [newactivity,setnewactivity] =useState()
            return(<div>
                <h1 className="text-2xl font-medium my-3">Manage Activities</h1>
                <input className="my-3 border border-black p-1" placeholder="Next  Activity?" value={newactivity}  onChange={handleinput}></input>
                <button className=" bg-black text-white p-1 border border-black " onClick={handleadd}>Add</button>
            </div>
)}
export default AddtodoForm