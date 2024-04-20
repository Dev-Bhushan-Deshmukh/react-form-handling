import React, { useRef, useState } from 'react'
import '../formStyles/formStyle.css'
export const  Formref= () => {
const usernameRef=useRef(null);
const passwordRef=useRef(null);
const formData={username:'',password:''};
const handleSubmit=(event)=>{

    event.preventDefault()


    formData['username']=usernameRef.current.value;
    
    formData['password']=passwordRef.current.value


    console.log(formData);
    usernameRef.current.value='';
    passwordRef.current.value='';
}


  return (
    <div id='form-container'>


<form onSubmit={handleSubmit} id='form'>
    <label> <b>  Ref Form</b></label>
<input type="text"  id='username' ref={usernameRef} className='form-input' />
<input type="password"   id='password' ref={passwordRef} className='form-input' />
<button type='submit'  id='form-submit-button'>Log In</button>


</form>
    </div>
  )
}
