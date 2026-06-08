import { LoginForm } from "@/components/authentication/LoginForm";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <section className='mt-30 border border-[#ffffff]/15 max-w-2xl w-[90%] mx-auto p-6 rounded-lg'>
<div className='text-center max-w-md mx-auto space-y-3'>
     <h2 className="text-4xl   font-bold">
          <span className="text-blue-500">Next</span>Hire
        </h2>
        <h3 className='text-3xl'>Sign In to Your Account</h3>
        <p className='leading-7'>Sign in to access your personalized experience."</p>
        </div>
<LoginForm/>


      <div className="mt-10 space-y-5">
        <div className="flex justify-between text-xs items-center gap-2 text-white ">
          <p className="border  w-[55%] md:w-full   "></p>

          <p className="w-full  text-center tracking-widest text-nowrap">OR CONTINUE WITH</p>
          <p className=" border w-[55%] md:w-full "></p>
 
        </div>

        <Button className="w-full bg-white" >
          <FcGoogle />
          <span className="text-black font-semibold">Login with Google</span>
        </Button>
        

        <div className="flex gap-1 justify-center">
          <p className="text-slate-500">Don’t have an account? </p>{" "}
          <Link href={"/register"} className="text-accent font-semibold">
            Sign up
          </Link>
        </div>
      </div>

    </section>
  );
};

export default LoginPage;