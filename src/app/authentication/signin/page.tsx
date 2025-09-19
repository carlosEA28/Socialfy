import { Button } from "@/components/ui/button";

import Link from "next/link";
import SigninFormComponent from "./components/sign-in-form";

const SigninPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-20">
        <div className="text-center">
          <h1 className="font-medium text-[54px] text-[#FAFAFA]">
            Login to Your Account
          </h1>
          <p className=" text-lg text-[#71717A]">
            Welcome back! Enter your account to access
          </p>
        </div>

        <div className="flex gap-52 ">
          <div className="flex flex-col items-center justify-center p-4 gap-4 w-[440px] h-[300px] ">
            <SigninFormComponent />
            <p className="text-sm text-[#898889]">
              Don’t have an account yet?{" "}
              <Link className="text-[#FAFAFA]" href={"/authentication/signup"}>
                {" "}
                Register now!
              </Link>
            </p>
          </div>

          <div className="flex flex-col p-4 items-center gap-8 w-[440px] h-[267px]">
            <div className="text-center">
              <h3 className="font-medium text-lg text-[#FAFAFA]">
                Want to login with your social media account ?
              </h3>

              <p className=" text-lg text-[#71717A]">
                Choose one of the available social logins
              </p>
            </div>
            <Button className="w-full h-[72px]" asChild>
              <Link href={"/authentication/social"}>Go to social</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
