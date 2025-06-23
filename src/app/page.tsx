import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";   

export default function Home() {
  return (
    <div>
      <SignedOut>
         <SignInButton>
          <button className="bg-gradient-to-l from-red-500 via-purple-400 hover:bg-gradient-to-r text-white font-bold py-2 px-4 rounded">Sign In</button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
} 
