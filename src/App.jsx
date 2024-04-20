import { useState } from 'react'
import './App.css'
import { ControlledForm } from './components/ControlledForm'
import { FormInfo } from './components/FormInfo'
import { Formref } from './components/formRef'
import { TraditionalForm } from './components/TraditionalForm'
import { ControlledFormValidation } from './components/ControlledFormValidation'
import { ValidationonSubmit } from './components/ValidationFormSubmit'

function App() {


  return (
  <>
<div id='app-container'>


<ControlledForm/>
<Formref/>

<TraditionalForm/>

<ControlledFormValidation/>
<ValidationonSubmit/>




</div>



  </>
  )
}

export default App
