"use client"
import { useSession } from "next-auth/react";
import Home from "@/features/layouts/home";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Group } from "@/types";

export default function HomePage(){
    const {data:session,status} = useSession();
    const [groups,setGroups] = useState<Group[]>([]);
    useEffect(() => {
        const dataFetch = async() => {
            const res = await fetch("/api/group");
            const data = await res.json() as Group[];
            setGroups((prev) => {
                return [...prev,...data];
            });
        }
        dataFetch();
    },[]);
    if(session){
      return (
        <Home.HomePage
            groups = {groups}
        ></Home.HomePage>
      );
    }
  }
  