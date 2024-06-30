import { query } from './../../../../lib/db';
import { auth } from "@/lib/auth";
import { pool } from "@/lib/db";
import { Group } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";


export const GET = async(req:NextRequest,{params}:{params:{group_id:string}}) => {
    
    const group_id = params.group_id;
    const session = await auth();
    if(!session || !session.user)return new NextResponse(JSON.stringify("認証エラー"),{status:401});        

    try {
        const groups_find_values = [group_id,session.user.id];
        const rows = await pool.query(`
                SELECT * 
                    FROM groups 
                    WHERE id = $1 AND EXISTS (
                        SELECT group_id
                            FROM group_member
                            WHERE user_id = $2
                    )
            `,
            groups_find_values
        ); 
        return new NextResponse(JSON.stringify(rows.rows[0]),{status:200});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}
