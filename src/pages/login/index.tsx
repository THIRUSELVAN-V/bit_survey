import React, { useEffect } from 'react'
import { useLoginStore } from '../../store/login'
import { useLogin } from '../../util/login';
import { ButtonComponent } from '../../components';
import { Logo } from '../../assets';
import { InputField } from '../../components/inputField';
import { Divider } from '@heroui/react';

function Login() {

const { LoginData,setLoginData } = useLoginStore();
    const { login, logout, requestState } = useLogin();
 console.log(LoginData);
 

    const onLogin = async () => {
        const success = await login();
        if (success) {
            // Handle successful login (e.g., redirect)
            console.log('Logged in successfully');
        }
    };
    useEffect(()=>{
        onLogin()
    },[])
  return (
   <div>
    <div className='flex justify-center items-center'>
            <div className='flex flex-col border justify-center border-gray-300 rounded-md p-6 bg-white shadow-lg w-full max-w-md'>
                <div className='flex justify-center mb-4 gap-3'>
                    <Logo />
                    <h4 className="text-primary-500 font-bold uppercase text-xl">
                        BIT SURVEY
                    </h4>

                </div>
                <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>Welcome Back!</h1>
                <p className='text-sm font-semibold text-center text-gray-500 mb-5'>Sign in to continue</p>
                <div className='mb-2'>
                    <p className='text-sm font-semibold text-gray-700 mb-2'>Email<span className='text-red-500'>*</span></p>
                    <InputField
                        type='email'
                        placeholder='Enter your email'
                        baseClaseName='mb-2 rounded-md'
                        inputValue={LoginData.email}
                        onValueChange={(val)=>setLoginData(val)}
                    />
                </div>
                <div className='mb-2'>
                    <p className='text-sm font-semibold text-gray-700 mb-2'>Password<span className='text-red-500'>*</span></p>
                    <InputField
                        placeholder='Enter your password'
                        type='password'
                        baseClaseName='mb-2 rounded-md'
                        
                    />
                </div>
                <ButtonComponent
                    buttonText='Login'
                    isIcon={false}
                    bgColor='bg-primary'
                    textClassName='text-white text-[17px]'
                    baseClassName='w-full py-2 rounded-md hover:bg-primary-dark transition-colors border-none'
                    handleOnClick={onLogin}
                />

                <div className='flex items-center my-6'>
                    <Divider className='flex-1 border-t border-gray-300' />
                    <span className='mx-4 text-sm text-gray-500'>Or Login with</span>
                    <Divider className='flex-1 border-t border-gray-300' />
                </div>

                <div className='flex justify-center border-2 border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-colors'>
                    {/* Add your social login icons or components here */}
                    <span className='text-sm text-gray-700'>Social Login</span>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Login