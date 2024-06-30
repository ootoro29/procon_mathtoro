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
            const datas = await res.json() as Group[];
            datas.map((data) => {
              setGroups((prev) => {
                  if(prev.findIndex((v) => v.id == data.id) == -1){
                    return [...prev,data];
                  } else{
                    return [...prev];
                  }
              });
            })
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
  