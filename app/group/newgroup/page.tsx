"use client"
import Group from "@/features/layouts/group"
import { useState } from "react";

export default function NewGroupPage() {
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