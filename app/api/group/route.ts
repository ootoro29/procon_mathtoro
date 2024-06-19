import { pool } from "@/lib/db";
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

    const {name:name} = await req.json();
    const values = [name];
    try {
        const rows = await pool.query('INSERT INTO groups(name) VALUES($1)',values); 
        return new NextResponse(JSON.stringify(rows.rows),{status:201});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}
   