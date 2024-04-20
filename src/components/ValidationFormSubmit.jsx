import React, { useRef, useState } from 'react'
import '../formStyles/formStyle.css'
export const  ValidationonSubmit= () => {

const [formData,setFormData]=useState({
username:'',
password:''


})
const[Validation,setValidation]=useState({
    invalidusername:false,
    invalidpassword:false 


})



const updateFormData=(identifier,event)=>{

    setFormData((prev)=>({...prev,[identifier]:event.target.value}))


}


// let invalidusername
// let invalidpassword

function handleSubmit(event){

event.preventDefault();
setValidation((prev)=>({...prev,['invalidusername']: formData.username=='' || formData.username.length<5  }))
setValidation((prev)=>({...prev,['invalidpassword']: formData.password=='' || formData.password.length<5  }))
console.log('x')
}

  return (
    <div id='form-container'>


<form id='form' onSubmit={handleSubmit}>
    <label> <b> Validation on Form Submit</b></label>
<input type="text"  id='username' value={formData.username} onChange={(event)=>updateFormData('username',event)} className='form-input' />
{Validation.invalidusername && <span>Invalid Username</span> }
<input type="password"   id='password' value={formData.password} onChange={(event)=>updateFormData('password',event)} className='form-input' />
{Validation.invalidpassword && <span>Invalid pasword</span> }
<button type='submit'  id='form-submit-button'>Log In</button>


</form>
    </div>
  )
}

