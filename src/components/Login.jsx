import React, { useEffect, useState } from 'react'
import { useAppContext } from './Appcontext';
import { Link, useNavigate } from 'react-router-dom';
import UseForm from '../hooks/UseForm';
import Swal from 'sweetalert2';
import { getData } from '../helpers/getData';



const Login = ({setIsLoggedIn}) => {
  const url_usuarios = 'http://localhost:3000/users';
  const {loged, setLoged} = useAppContext();
  const [datosUser, setDatosUser]=useState();

  const navigate = useNavigate()


  useEffect(() => {
     const carga= async()=> {
      const users = await getData(url_usuarios);
      {/*console.log('useeffects__')
      console.log(users);*/}
      setDatosUser(users.data);
    
    }
    carga();
  }, []);

 
  //en vez de useState usar useForm hook personalizado
  const [datosFormulario, handleChange,reset] =UseForm({
    email:'',
    pass: '',
  });

  //no es neceario crear el handlechange porque viene del hook useform
  const  handleSubmit= async (e)=>{
    e.preventDefault();
    {/*console.log(datosFormulario.tel);
    console.log(datosFormulario.pass);*/}
    console.log(datosUser)
    const respFind = datosUser.find(
      (fi) =>
        fi.email === datosFormulario.email && fi.password === datosFormulario.pass
    );
    console.log(respFind)
    setLoged(respFind)

    if (respFind) {
      localStorage.setItem('isLoggedIn', 'true')
      sessionStorage.setItem('idUser',respFind.id)
      setIsLoggedIn(true)
      navigate('/home')
      if (respFind.email === 'Administrator@gmail.com'){
          console.log('welcome admin')
          localStorage.setItem('isAdminIn', 'true')
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Email o Contraseña Incorrectos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  



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

            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem', margin:'2rem'}}>
                <input className='Input'
                            type="text"
                            id="email"
                            name="email"
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