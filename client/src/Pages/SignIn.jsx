import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password)
{
  return setErrorMessage("Please Fill All The Fields")
}    try {
  setLoading(true);
  setErrorMessage(null);
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // alert('SignUp Successfull')
if(data.success=== false)
{
  return setErrorMessage(data.message);
}
setLoading(false);
if(res.ok)
{
  navigate('/')
}
    }
    catch (error) {
      setErrorMessage(error.message)
      setLoading(false);
    }
  }


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
            <p className='text-sm mt-5'>This is a demo project. You can sign in with your email and password
              or with Google.</p>
          </div>
          {/* Right Side */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              
              <div>
                <Label value="Your Email" />
                <TextInput
                  type="email"
                  placeholder='Enter Your Email'
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput
                  type="password"
                  placeholder='Password'
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                {
                  loading?(
                    <>
                    <Spinner size="sm"/>
                    <span className='pl-3'>Loading...</span>
                    </>
                  ):'Sign Up'
                }
                </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't Have an Account?</span>
              <Link to="/sign-up" className='text-blue-500'>Sign Up</Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color="failure" icon={HiInformationCircle}>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default SignIn