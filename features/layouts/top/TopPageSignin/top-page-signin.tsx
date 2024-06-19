import { auth, signIn } from "@/lib/auth";

export default async function TopPageSignIn() {
    const session = await auth();
    return(
        <div>
            <p>Top Page</p>
            <form action={async() => {
                "use server";
                await signIn("google");
            }}>
            <button>サインイン</button>
            </form>
            <p>{JSON.stringify(session,null,2)}</p>
        </div>
    );
}