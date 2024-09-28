// component card

function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className=" text-center flex-grow p-5 py-10 m-5  border rounded-md">
        <p className="font-medium text-xl">{props.title}</p>
        <p className="font-medium text-xl">{props.subtitle}</p>
        </div>
    )


}
export default Card