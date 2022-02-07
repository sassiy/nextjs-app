
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';

export default function About(){
    const [user, setUser] = useState([])

    const fetchUserInfo = async ()=> {
        const response = await fetch('/api/user')
        const data = await response.json()
        setUser(data)
    }
    return(
        <>
        <Head>
            <title>SSS</title>
        </Head>
           <Link href="/">
             <a  style={{color: "blue"}}>Back to Home</a>
           </Link>
        <button onClick={fetchUserInfo}>ユーザー情報を取得</button>
        {user.map((u)=> {
            return (
                <div key={u.id}>
                    <p>{u.id}: {u.name}</p>
                </div>
            )
        })}
        <h2>環境変数</h2>
        <p>{process.env.NEXT_PUBLIC_API_KEY}</p>
        </>
    )
}