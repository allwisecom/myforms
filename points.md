// Collecting data & providing feedback
// Controlled Fields - We collect data of form controls in 'State'
// Uncontrolled Fields - We dont collect data of form controls 'State' - - FormData API
// ReactRouter Form - provide feedback when form gets submitted

// Validating Data
// Native validation - context validaton api (built in the browser), required,minlength,maxlength & pattern
// 3rd party - RHF (React Hook Forms) - proper validation

pattern='"\S+@\S+\.\S+"'

// Native Validation - Browser validaton criterias (constraint validation api ) - required,minlength etc

https://caniuse.com/?search=form+validation

Browser incompatibility

Lack of uniformity
Total lack of support.
Known issues.
Inconsistency

We can go for react hook form for consistency in validation across all platforms

npm install react-hook-form

import {useForm} from 'react-hook-form';
const {register, handlesubmit, formstate: {errors, issubmitting, issubmitsuccessful}} = useForm() //popular hook

function handleFormSubmit()
{

}

<Form onSubmit = {handleSubmit(handleFormSubmit)}>
<input
type 
name
{... (register("name", {required: "you must enter your name"}))}
/>

<div> {errors.name}</div>

Another way of validation but mostly hook form is better
https://formik.org/

---

// Collecting data & providing feedback
// Controlled Fields - We collect data of form controls in 'State'
// Uncontrolled Fields - We dont collect data of form controls 'State' - - FormData API
// ReactRouter Form - provide feedback when form gets submitted

// Validating Data
// Native validation - context validaton api (built in the browser), required,minlength,maxlength & pattern
// 3rd party - RHF (React Hook Forms) - proper validation

// React hook form

import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const {
register,
handleSubmit,
formState: { errors, isSubmitting, isSubmitSuccessfull },
} = useForm(); // popular hook

function handleFormSubmit(){

}

<form onSubmit={handleSubmit(handleFormSubmit)}>
  <input
    type="text"
    id="name"
    {...(register("name", { required: "You must enter your name" })}
  />
 
  <div>{errors.name}</div>
  <div>{errors.email}</div>
 
 
  <input
    type="text"
    id="name"
    {...(register("email", { required: "You must enter a proper email" })}
  />
 
  <button type='submit'> submit the form </button>
</form>;

react hooks validation works on <form> constrol

<Form > when use this control we need action callback and redirect
