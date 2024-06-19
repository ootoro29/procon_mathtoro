import { auth, signOut } from "@/lib/auth";

export default async function TopPageSignOut() {
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
        </div>
    );    
}