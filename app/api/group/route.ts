import { auth } from "@/lib/auth";
import { pool } from "@/lib/db";
import { Group } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async() => {

    try {
        const rows = await pool.query('SELECT * FROM groups'); 
        return new NextResponse(JSON.stringify(rows.rows),{status:200});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}

export const POST = async(req:NextRequest) => {
    try {
        const session = await auth();    
        if(!session)return new NextResponse(JSON.stringify("認証エラー"),{status:500});
        const {name:name} = await req.json();
        const user_id = session.user?.id;
        const groups_values = [name];
        const rows = (await pool.query('INSERT INTO groups(name) VALUES($1) RETURNING *',groups_values)); 
        const data = (rows.rows[0] as Group);
        console.log(JSON.stringify(rows.rows));
        const group_member_values = [data.id,user_id];
        const member_rows = await pool.query('INSERT INTO group_member(group_id, user_id) VALUES($1, $2) RETURNING *',group_member_values); 
        return new NextResponse(JSON.stringify(rows.rows),{status:201});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}
   