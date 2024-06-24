"use client"
import Group from "@/features/layouts/group"
import { useEffect, useState } from "react";

export default function NewGroupPage() {
    useEffect(() => {
        const data = async () => {
            await fetch(`/api/group`,{
                method:"GET",
                headers: {
                    'Content-Type':"application/json"
                }
            }).then(async(res) => {
                console.log(await res.json());
            })
        }
        data();
        
    },[]);
    const [groupName,setGroupName] = useState("");
    const handleCreateGroup = async() => {
        const res = await fetch("/api/group",{
            method:"POST",
            headers: {
                'Content-Type':"application/json"
            },
            body: JSON.stringify({name:groupName})
        });
        const data = await res.json();
        setGroupName("");
    }
    return(
        <Group.NewGroupPage
            handleCreateGroup = {handleCreateGroup}
            groupName = {groupName}
            setGroupName = {setGroupName}
        ></Group.NewGroupPage>
    );
}