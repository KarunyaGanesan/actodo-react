import "../index.css"
import Header from "../components/header"
import Card from "../components/card"
import TodoContainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-slate-100 p-10 border rounded-md ">
                {/*Header*/}
                <Header name ={data.state.user}></Header>
                {/*Container*/}
                <div className="flex gap-7 justify-between flex-wrap">
                   <Card bgcolor={'#93C5FD'} title ={'23°'} subtitle = {'Coimbatore'}></Card>
                   <Card bgcolor={'#F472B6'} title ={'June 11'} subtitle ={'12:30:52'}></Card>
                   <Card bgcolor ={'#FDE047'} title ={'Built'} subtitle ={'Using React'}></Card>
                </div>
                <TodoContainer/>
            </div>
        </div>
    )

}
export default Landing