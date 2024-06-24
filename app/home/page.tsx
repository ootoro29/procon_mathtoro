"use client"
import { useSession } from "next-auth/react";
import Home from "@/features/layouts/home";
import { signOut } from "next-auth/react";

export default function HomePage(){
    const {data:session,status} = useSession();
    
    if(session){
      return (
        <Home.HomePage></Home.HomePage>
      );
    }
  }
  