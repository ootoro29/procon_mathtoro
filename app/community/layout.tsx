"use client"
import Load from "@/features/layouts/loading"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const {data:session,status} = useSession();
    const router = useRouter();
    if(status === "loading"){
        return (
            <Load.LoadPage />
        );
    }
    if(status === "unauthenticated"){
        router.push("/");
        return;
    }
    return (
        <div>
            {children}
        </div>
    );
}
