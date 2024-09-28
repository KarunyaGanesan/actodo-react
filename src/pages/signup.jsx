import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(props){
  const user = props.user
  const setuser = props.setuser
  const navigate = useNavigate()


    const [euser, setEuser] = useState()
    const [epassword, setEpassword] = useState()

    function handleuser(event) {
        setEuser(event.target.value)

    }

    function handlepass(event) {
        setEpassword(event.target.value)
    }

    function addusers(){
        setuser([...user,{username:euser, password:epassword}])
        navigate('/')

    }
    console.log(user)

    return(
        <div className="bg-black p-10">
        <div className="bg-white  p-10 border rounded-md">
            <h1 className='text-3xl font-medium'>Hey Hi</h1>
            <p> You can Sigup here :) </p>
            <div className='flex flex-col gap-2 my-2'>
                <input
                type='text'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
            placeholder='username '
            onChange={handleuser}/>
            <input
                type='text'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
            placeholder='password '
            onChange={handlepass}/>
            <input
                type='text'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
             placeholder='confirm password '/>
                <button className="bg-orange-300 w-24 p-1 border rounded-md " onClick={addusers}>Signup</button>
                <p >Already have an account? <Link to ='/ 'className="text-decoration-line: underline" >Login</Link></p>
                
                 
            </div>

        </div>
        
    </div>
    )
}
export default SignUp