import React, { useRef, useState } from 'react'
import '../formStyles/formStyle.css'
export const  TraditionalForm= () => {
const usernameRef=useRef(null);
const passwordRef=useRef(null);
const formData={username:'',password:''};
const handleSubmit=(event)=>{

    event.preventDefault()

    const form_=new FormData(event);
    // let data=Object.fromEntries(form_.entries())
    console.log(form_)



}


  return (
    <div id='form-container'>


<form onSubmit={handleSubmit} id='form'>
    <label> <b>  Traditional Form</b></label>
<input type="text" name='username'  id='username' className='form-input' />
<input type="password" name='password'   id='password' className='form-input' />
<button type='submit'  id='form-submit-button'>Log In</button>


</form>
    </div>
  )
}
