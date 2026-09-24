"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Home(){
  const [answer,setAnswer]=useState("")
  const router=useRouter()

  function submit(){
    if(answer.trim().toUpperCase()==="THE KING IS WAITING"){
      router.push("/checkpoint1")
    }
  }

  return(
    <main className="container">

      <h1>THE VEIL</h1>

      <div className="terminal">

        <p>VEIL RECORD 00</p>
        <p>STATUS: DAMAGED</p>

        <div className="line"></div>

        <p className="cipher">UIF LJOH JT XBJUJOH</p>

        <p>A veil was raised at 03:10.</p>
        <p>It fell at 03:16.</p>
        <p>Six minutes existed outside the normal record.</p>

      </div>

      <div className="hint">

        <p>The message follows an alphabetic rule.</p>
        <p>Find the rule. Do not search for the answer.</p>

      </div>

      <input
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        placeholder="Enter decoded message"
      />

      <button onClick={submit}>SUBMIT</button>

    </main>
  )
}