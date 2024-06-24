"use client"
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
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
            <Link href={"/#"}><button>コミュニティ入場</button></Link>
        </div>
    );    
}