import Link from "next/link";
import SignupFormComponent from "./components/sign-up-form";

const SignupPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="font-medium text-[54px] text-[#FAFAFA]">
            Create Your Account
          </h1>
          <p className=" text-lg text-[#71717A]">
            And easily manage your social medias in one place!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center p-4 gap-4 w-[440px] h-[400px]">
            <SignupFormComponent />

            <p className="text-sm text-[#898889]">
              Already have an account ?{" "}
              <Link className="text-[#FAFAFA]" href={"/authentication/signin"}>
                {" "}
                Login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
