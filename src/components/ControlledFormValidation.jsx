import React, { useRef, useState } from 'react'
import '../formStyles/formStyle.css'
export const  ControlledFormValidation= () => {

const [formData,setFormData]=useState({
username:'',
password:''


})

const[isEdit,setIsEdit]=useState({
    username:false,
password:false

})


const updateFormData=(identifier,event)=>{

    setFormData((prev)=>({...prev,[identifier]:event.target.value}))
    setIsEdit((prev)=>({...prev,[identifier]:false}))

}
let invalidusername
let invalidpassword
invalidusername= isEdit.username==true && formData.username.length<5  
invalidpassword=isEdit.password==true && formData.password.length<5  
const handleValidation=(identifier,event)=>{
    setIsEdit((prev)=>({...prev,[identifier]:true}))






}

  return (
    <div id='form-container'>


<form id='form'>
    <label> <b> controlled form validation </b></label>
<input type="text"  id='username' value={formData.username} onChange={(event)=>updateFormData('username',event)} onBlur={()=>handleValidation('username')} className='form-input' />
{invalidusername && <span>invalid name</span>}
<input type="password"   id='password' value={formData.password} onChange={(event)=>updateFormData('password',event)} onBlur={()=>handleValidation('password')} className='form-input' />
{invalidpassword && <span>invalid password</span>}
<button type='submit'  id='form-submit-button'>Log In</button>


</form>
    </div>
  )
}
