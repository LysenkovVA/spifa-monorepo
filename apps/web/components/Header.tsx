"use client"

import Link from "next/link";

export const Header = () => {
    return <div style={{display: "flex", alignItems: "center", justifyItems: "center", height: 70, backgroundColor: "darkgray"}}>
        <div style={{fontSize: 30}}>
            <Link href={"http://localhost:3000"}>{"Main page"}</Link>
            <Link href={"http://localhost:3000/service"}>{"Service page"}</Link>
        </div>
    </div>
}