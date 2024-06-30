"use client"
import { Group } from "@/types";
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage(
    {
        groups
    }:{
        groups:Group[]
    }
) {
    const {data:session,status} = useSession();
    const router = useRouter();
    return(
        <div>
            <p>Top Page</p>
            <button onClick={() => {
                signOut();
                router.push("/");
            }}>サインアウト</button>
            <p>{JSON.stringify(session,null,2)}</p>
            <Link href={"/group/newgroup"}><button>グループ作成</button></Link>
            <Link href={"/#"}><button>グループチャット入場</button></Link>
            <p>グループ一覧</p>
            {
                groups.map((group,i) => (
                    <div key = {i}>
                        <p>{group.name}</p>
                        <Link href={`/group/${group.id}`}><button>入場</button></Link>
                    </div>
                ))
            }
            <Link href={"/#"}><button>コミュニティ入場</button></Link>
        </div>
    );    
}