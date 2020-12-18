import React , { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import  Logo  from '../Assets/Media/logo_black.svg'
import Error from '../Components/Error'


const Login = () => {

    const [ dataLogin , setDataLogin ] = useState({ email: "", password: "" });
    const [ alert , setAlert ] = useState( null );
    const [ loadingSpinner , setLoadingSpinner ] = useState(false)
    const History = useHistory()
    
    const { email , password } = dataLogin

    const  handleData = e =>{ setDataLogin({ ...dataLogin, [e.target.name]:e.target.value }) }

    const handleSubmit = e =>{
        e.preventDefault()

        if( email === "" || password === "" ){
            //alerta
            setAlert('Algunos datos son invalidos')
            return;
        }
        setAlert(null)
        //confirmar que esten en la ddbb ( no seguro )

        //spinner +
        setLoadingSpinner(true)
        setTimeout(()=>{
            
            setLoadingSpinner(false)
            
            History.push('/main')

            setDataLogin({ email: "", password: "" })
        },2000)
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 justify-items-center">
            <div className="w-full max-w-lg space-y-8 p-5 rounded-xl shadow-lg">
                <div className="text-center ">
                    <img src={Logo} alt="mailup-logo" className="w-3/5 mx-auto my-5"/>
                    <h1 className="text-3xl mt-10">Iniciar Sesion</h1>
                </div>
                { alert ? <Error alert={alert}/> : null }
                <form action="#" className="min-w-full" onSubmit={handleSubmit}>
                    <div className="min-w-full mt-5 ">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="block w-full py-3 px-2 bg-white rounded-md focus:border focus:border-red-600 " 
                            placeholder="ej: jhon@jhon.com" 
                            onChange={handleData}
                        />
                    </div>
                    <div className="min-w-full my-5">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="block w-full py-3 px-2 bg-white rounded-md" 
                            placeholder="**********" 
                            onChange={handleData}
                        />
                    </div>
                        <button type="submit" className="block w-full bg-blue-300 hover:bg-blue-400 transition duration-300 ease-in-out  py-3 rounded-md text-white uppercase text-xl ">
                            { loadingSpinner 
                            ?
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            :
                                <div className="bg-transparent">Entrar</div> 
                            }
                        </button>

                    <div className="min-w-full my-5 sm:flex sm:justify-between text-center">
                        <div  className="text-center my-5">
                            <Link to={'/signin'} className="hover:text-blue-400 transition duration-300 ease-in-out ">No tienes cuenta? <span className="font-bold">crea una gratis!</span> </Link>
                        </div>
                        <p className="my-5 hover:text-blue-400">Olviaste tu contraseña?</p>
                    </div>

                </form>        
            </div>
        </div>
       
    )
}

export default Login
