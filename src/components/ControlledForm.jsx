import React, { useState } from 'react'
import '../formStyles/formStyle.css'
export const ControlledForm = () => {

const[formData,setFormData]=useState({username:'',password:''})


const handleSubmit=(event)=>{

    event.preventDefault()
console.log(formData)


}
const updateForm=(id,event)=>{

       
    
    setFormData(prev=>
    ({
        ...prev,[id]:event.target.value
    
    })
      

    
    
    
    )
    
}

  return (
    <div id='form-container'>


<form onSubmit={handleSubmit} id='form'>
    <label> <b>  Controlled Form</b></label>
<input type="text"  id='username' value={formData.username} onChange={(event)=>updateForm('username',event)} className='form-input' />
<input type="password"  value={formData.password} onChange={(event)=>updateForm('password',event)}   id='password' className='form-input' />
<button type='submit'  id='form-submit-button'>Log In</button>


</form>
    </div>
  )
}
