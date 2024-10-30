import React, { useEffect, useState } from 'react'
import { useAppContext } from './Appcontext';
import { Link } from 'react-router-dom';
import UseForm from '../Hooks/UseForm';
import { getData } from '../Helpers/peticiones';


const Login = () => {
  const url_usuarios = 'http://localhost:3000/users';
  const {loged, setLoged} = useAppContext();
  const [datosUser, setDatosUser]=useState();

  
  //en vez de useState usar useForm hook personalizado
  const [datosFormulario, handleChange,reset]=UseForm({
    username:'',//telefono
    pass:'',
  });

  //no es neceario crear el handlechange porque viene del hook useform
  const  handleSubmit= async (e)=>{
    e.preventDefault();
    {/*console.log(datosFormulario.tel);
    console.log(datosFormulario.pass);*/}
    const respFind = datosUser?.find(
      (fi) =>
        fi.name === datosFormulario.username && fi.password === datosFormulario.pass
    );
    
  }

  
  useEffect(() => {
    async function carga() {
      const users = await getData(url_usuarios);
      {/*console.log('useeffects__')
      console.log(users);*/}
      setDatosUser(users);
    }
    carga();
  }, []);


  return (
      <>
        <div>
          <div  style={{ textAlign: 'center', fontFamily:'Inter', color:'#4B4B4B',width:'100%' }}>
            <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
                Welcome back {loged}
            </div>
            <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
                Sign in to an existing account
                using your phone number
            </div>

            <form onSubmit={handleSubmit}>
                <input className='Input'
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingrese el nombre del usuario"
                            onChange={handleChange}
                            required
                />

                <input className='Input'
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Ingrese Password"
                    onChange={handleChange}
                    required
                />
                <div  className='fix-bot' style={{padding:'20px'}}>    
                    <button style={{
                        marginTop: '10px',  // Espacio entre imagen y botón
                        padding: '10px 20px', // Ajuste opcional del botón
                        display: 'inline-block',
                        background: 'linear-gradient(to right, #BFC3FC, #A2C3FC)', // Gradient background
                        width:'100%',
                        fontSize:'14px',
                        fontWeight:'400',
                        color:'#4B4B4B'
                        }}>Login</button>
                    <div style={{marginTop:'10px'}} >Don't have account? 
                        <Link to='/register' className='custom-link'>
                          Sign up 
                        </Link>
                    </div>
                </div>
            </form>

          </div>
        </div>
      </>    
  )
}

export default Login