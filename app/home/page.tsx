"use client"
import { useSession } from "next-auth/react";
import Home from "@/features/layouts/home";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage(){
    const {data:session,status} = useSession();
    useEffect(() => {
        const dataFetch = async() => {
            const res = await fetch("/api/group");
            const data = await res.json();
            console.log(data);
        }
        dataFetch();
    },[]);
    if(session){
      return (
        <Home.HomePage></Home.HomePage>
      );
    }
  }
  