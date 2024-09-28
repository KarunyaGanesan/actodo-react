function Todoitem(props) {
    const addlist = props.addlist
    const setaddlist = props.setaddlist

    function handledelete(deleteid) {

         const temparr = addlist.filter(function(item) {
            if (item.id == deleteid) {
                return false
            }
            else {
                return true
            }

        })
        setaddlist(temparr)

    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-500" onClick={() => handledelete(props.id)} >Delete</button>

        </div>


    )

}
export default Todoitem