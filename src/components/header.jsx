//component header

function Header(props){

    return(
        <div>
            <h1 className="font-normal text-2xl"> Hello {props.name}!</h1>
            <p>I help you manage your activties :)</p>
        </div>
    )
}
export default Header