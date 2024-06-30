"use client"
import { Group } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GroupPage({params}:{params:{group_id:string}}) {
    const group_id = params.group_id;
    const {data:session,status} = useSession();
    const [group,setGroup] = useState<Group>();
    const router = useRouter();
    useEffect(() => {
        const dataFetch = async() => {
            await fetch(`/api/group/${group_id}`).then(async(res) => {
                const data = (await res.json()) as Group;
                if(!data){
                    router.push("/home");
                }
                setGroup({id:data.id,name:data.name,image:data.image});
            });
        }
        dataFetch();
    },[]);
    return(
        <div>
            <p>{group_id}</p>
            <p>{group?.name}</p>
        </div>
    );
}