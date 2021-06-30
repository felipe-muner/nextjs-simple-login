import { useEffect } from "react";


export default function Home(){
  return (
    <div>
      <form method="POST" action="/api/login">
        <input type="text" defaultValue="admin" />
        <br />
        <input type="password" defaultValue="admin" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
} 