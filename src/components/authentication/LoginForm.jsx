"use client";


import { authClient } from "@/lib/auth-client";
import {Button, FieldError, Form, Input, Label, Radio, RadioGroup, Spinner, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const eyeClick = () => {
    setEye(!eye);
  };
const handleSubmit=async(e)=>{
e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())


const result=await authClient.signIn.email({

  ...exactFormData
},{
  onRequest:()=>{
    setLoading(true)
  }
})



if(result?.data?.user){

setLoading(false)
  toast.success("Login sucessfull")
router.push("/")
}



if(result?.error?.message){


  setLoading(false)
  toast.error(result?.error?.message)
}

else if(result?.error?.statusText){

  setLoading(false)
  toast.error(result?.error?.statusText)
}










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
       
 {loading?<Spinner color="current"></Spinner>:'Login'}
        </Button>
 
      </div>
    </Form>
  );
}