import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function TopPageLoggedIn() {
    const session = await auth();
    return(
        <div>
            <p>Top Page</p>
            <form action={async() => {
                "use server";
                await signOut();
            }}>
                <button>サインアウト</button>
            </form>
            <p>{JSON.stringify(session,null,2)}</p>
            <Link href={"/group/newgroup"}><button>グループ作成</button></Link>
            <Link href={"/#"}><button>グループチャット入場</button></Link>
            <Link href={"/#"}><button>コミュニティ入場</button></Link>
        </div>
    );    
}