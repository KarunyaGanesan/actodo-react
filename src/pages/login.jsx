import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login(props) {
    const user = props.user
    const navigate = useNavigate()

   const [euser, setEuser] = useState()
    const [epassword, setEpassword] = useState()
    const[ruser,setRuser] = useState(true)

    function handleuser(event) {
        setEuser(event.target.value)

    }

    function handlepass(event) {
        setEpassword(event.target.value)
    }


    function handlecheck() {
        let userfound = false

        user.forEach(function (item) {
            if (item.username === euser && item.password == epassword) {
               userfound=true
               navigate ('/landing',{state:{user:euser}})
            }
          })

          if (userfound==false)
          {
            console.log("Login Failed")
            setRuser(false)
          }

        }
        console.log(user)














    return (
        <div className="bg-black p-10">
            <div className="bg-white  p-10 border rounded-md">
                <h1 className='text-3xl font-medium'>Hey Hi</h1>
            {ruser? <p>I help you manage your activities after you login :)</p> :<p className='text-red-500'>Please signup before Login :(</p>}

               
                <div className='flex flex-col gap-2 my-2'>
                    <input
                        type='text'
                        className='w-52 border-black p-1 bg-transparent border rounded-md'
                        placeholder='username '
                        onChange={handleuser} />
                    <input
                        type='text'
                        className='w-52 border-black p-1 bg-transparent border rounded-md'
                        placeholder='password '
                        onChange={handlepass}
                    />


                    <button className="bg-purple-300 w-24 p-1 border rounded-md " onClick={handlecheck}>Login</button>
                    <p >Don't have an account? <Link to='/signup ' className="text-decoration-line: underline" >Signup</Link></p>



                </div>

            </div>

        </div>
    )
}
export default Login  