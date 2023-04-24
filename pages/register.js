// @ts-nocheck
import RegisterForm from '../components/RegisterForm';
import { useRouter } from 'next/router';
const Register = () =>{
    const router = useRouter();
    async function registratinoHandler(enteredRegisterData){
        
        const response = await fetch('/api/register',{
            method: 'POST',
            body: JSON.stringify(enteredRegisterData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if(data.status === 201){
            alert("User Created")
            router.push('/login')
        }else{
            alert(data.error)
            router.push('/register')
        }
    }
    return <RegisterForm onRegister={registratinoHandler}/>

}

export default Register; 