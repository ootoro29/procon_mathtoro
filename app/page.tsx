import { auth, signIn, signOut } from "@/lib/auth";
import styles from "./page.module.css";
import Top from "@/features/layouts/top/Index";
export default async function Home() {
  const session = await auth();
  if(!session){
    return (
      <Top.TopPage></Top.TopPage>
    );
  }else{
    return (
      <Top.TopPageLoggedIn></Top.TopPageLoggedIn>
    );
  }
}
