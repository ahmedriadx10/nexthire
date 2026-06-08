import { RegisterForm } from "@/components/authentication/RegisterForm";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const SignupPage = () => {
  return (
    <section className='mt-30 border border-[#ffffff]/15 max-w-2xl w-[90%] mx-auto p-6 rounded-lg'>
<div className='text-center max-w-md mx-auto space-y-3'>
     <h2 className="text-4xl   font-bold">
          <span className="text-blue-500">Next</span>Hire
        </h2>
        <h3 className='text-3xl'>Create Your Account</h3>
        <p className='leading-7'>Ready to land your dream job? Sign up in seconds and connect with top companies."</p>
        </div>
<RegisterForm/>

      <div className="mt-10 space-y-5">
        <div className="flex justify-between text-xs items-center gap-2 text-white ">
          <p className="border  w-[55%] md:w-full   "></p>

          <p className="w-full  text-center tracking-widest text-nowrap">
            OR REGISTER WITH
          </p>
          <p className=" border w-[55%] md:w-full "></p>
        </div>

        <Button
          className="w-full  bg-white"
        >
          <FcGoogle />
          <span className="text-black font-semibold">
            Sign up with Google
          </span>
        </Button>

        <div className="flex gap-1 justify-center">
          <p className="text-slate-500">Already have an account?</p>{" "}
          <Link href={"/login"} className="text-accent font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;