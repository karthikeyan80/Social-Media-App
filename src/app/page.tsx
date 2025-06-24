
import { Button } from "@/components/ui/button";
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
    <div className="m-4 flex justify-center">
     <h1>Home Page Content Here!</h1>
    </div>
  );
} 
