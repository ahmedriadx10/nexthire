"use client";


import {Button, FieldError, Form, Input, Label, Radio, RadioGroup, TextField} from "@heroui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginForm() {

  const [eye, setEye] = useState(false);
  const eyeClick = () => {
    setEye(!eye);
  };
const handleSubmit=(e)=>{
e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())

console.log(exactFormData)




}


  return (
    <Form className="mt-5 flex  flex-col gap-4" onSubmit={handleSubmit}>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input className='p-2.5 rounded-lg bg-foreground/10 text-white autofill:bg-foreground/20 autofill:transition-colors duration-[50000s]' placeholder="john@example.com"    
/>
        <FieldError />
      </TextField>


      <TextField
      className='relative'
        isRequired
        minLength={8}
        name="password"
      type={eye?'text':'password'}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input className='p-2.5 rounded-lg bg-foreground/10 text-white autofill:bg-foreground/20 autofill:transition-colors duration-[50000s]'  placeholder="Enter your password" />
    <div className="absolute top-9 right-3 text-lg" onClick={eyeClick}>
            {eye ? <FaEye /> : <FaEyeSlash />}
          </div>
        <FieldError />
      </TextField>




      <div className="flex gap-2">
        <Button type="submit" fullWidth>
       
        Login
        </Button>
 
      </div>
    </Form>
  );
}