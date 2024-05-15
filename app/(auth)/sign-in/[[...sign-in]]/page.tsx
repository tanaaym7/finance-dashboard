import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 ">
      <div className="flex h-full flex-col items-center justify-center p-4 px-4 ">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold capitalize">welcome back!</h1>
          <p className="capitalize italic text-[#b3b3b3]">
            login or register to get back to your dashboard
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center rounded-l-3xl bg-[#4172da] p-4">
        <Image src="/login.png" alt="logo" width={600} height={600} />
      </div>
    </div>
  );
}
