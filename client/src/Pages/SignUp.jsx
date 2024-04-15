import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
  <>
  <div className='min-h-screen mt-20'>
<div className='flex p-8 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
  {/* Left Side */}
  <div className='flex-1'>
  <Link to="/"
          className='text-sm sm:text-xl font-semibold dark:text-white'
        >
          <span className='py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Code</span>
          Clouds
        </Link>
        <p className='text-sm mt-5'>This is a demo project. You can sign up with your email and password
            or with Google.</p>
  </div>
  {/* Right Side */}
  <div className='flex-1'>
<form className='flex flex-col gap-4'>
  <div>
    <Label value="Your UserName"/>
    <TextInput
    type="text"
    placeholder='Username'
    id="username"
    />
  </div>
  <div>
    <Label value="Your Email"/>
    <TextInput
    type="email"
    placeholder='Enter Your Email'
    id="email"
    />
  </div>
  <div>
    <Label value="Your Password"/>
    <TextInput
    type="passwprd"
    placeholder='Password'
    id="password"
    />
  </div>
  <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
</form>
<div className='flex gap-2 text-sm mt-5'>
<span>Have an Account?</span>
<Link to="sign-in" className='text-blue-500'>Sign In</Link>
</div>
  </div>
</div>
  </div>
  
  
   </>
  )
}

export default SignUp