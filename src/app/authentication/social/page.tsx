import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const SocialPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-20">
        <div className="text-center">
          <h1 className="font-medium text-[54px] text-[#FAFAFA]">
            Login with Social Media
          </h1>
          <p className=" text-lg text-[#71717A]">
            Choose one social media to complete your login!
          </p>
        </div>
      </div>

      <div>
        <ScrollArea className="h-[500px] w-[600px] rounded-md border p-4">
          <div className="grid grid-cols-2 gap-4">
            {/* REFATORAR PARA COLOCAR EM UM CLIENT COMPONENT */}

            {/* ADD HOVER NOS CARDS, ADICIONE INTERAÇÃO */}
            <Card className="bg-[#222222]">
              <CardContent className="flex items-center justify-center gap-4 p-4">
                <Image src="/google.svg" alt="Google" width={50} height={50} />
              </CardContent>
            </Card>

            <Card className="bg-[#222222]">
              <CardContent className="flex items-center justify-center gap-4 p-4">
                <Image
                  src="/facebook.svg"
                  alt="Rede Social"
                  width={50}
                  height={50}
                />
              </CardContent>
            </Card>

            <Card className="bg-[#222222]">
              <CardContent className="flex items-center justify-center gap-4 p-4">
                <Image
                  src="/apple.svg"
                  alt="Rede Social"
                  width={50}
                  height={50}
                />
              </CardContent>
            </Card>

            <Card className="bg-[#222222]">
              <CardContent className="flex items-center justify-center gap-4 p-4">
                <Image
                  src="/medium.svg"
                  alt="Rede Social"
                  width={50}
                  height={50}
                />
              </CardContent>
            </Card>

            <Card className="bg-[#222222]">
              <CardContent className="flex items-center justify-center gap-4 p-4 ">
                <Image
                  src="/linkedin.svg"
                  alt="Rede Social"
                  width={50}
                  height={50}
                />
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
      <p className="text-sm text-[#898889]">
        Wanna continue with email?{" "}
        <Link className="text-[#FAFAFA]" href={"/authentication/signin"}>
          {" "}
          Login!
        </Link>
      </p>
    </div>
  );
};

export default SocialPage;
