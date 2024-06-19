import { auth, signIn, signOut } from "@/lib/auth";
import styles from "./page.module.css";
import Top from "@/features/layouts/top/Index";
export default async function Home() {
  const session = await auth();
  if(!session){
    return (
      <Top.TopPageSignIn></Top.TopPageSignIn>
    );
  }else{
    return (
      <Top.TopPageSignOut></Top.TopPageSignOut>
    );
  }
}
