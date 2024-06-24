import { auth, signIn, signOut } from "@/lib/auth";
import styles from "./page.module.css";
import Top from "@/features/layouts/top/Index";
import { Group } from "@/types";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();
  const API_BASE_URL = process.env.BASE_URL;
  if(!session){
    return (
      <Top.TopPage></Top.TopPage>
    );
  }else{
    redirect("/home");
  }
}
