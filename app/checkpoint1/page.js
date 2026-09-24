"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Checkpoint1(){
  const [answer,setAnswer]=useState("")
  const router=useRouter()

  function submit(){
    if(answer.trim().toUpperCase()==="MAHORAGA"){
      router.push("/checkpoint2")
    }
  }

  return(
    <main className="container">

      <h1>VEIL RECORD 01</h1>

      <div className="terminal">

        <p>YUJI ITADORI</p>
        <p>RECORD 01</p>

        <div className="line"></div>

        <p>The battle was recorded carefully.</p>

        <p>But the important details may not be where you expect them.</p>

        <p>Every exchange has a beginning and an end.</p>

        <p>Sometimes the end tells you more than the beginning.</p>

        <p>Read what remains after each sentence finishes.</p>

      </div>

      <div className="record">

        <p>Reading the situation carefully, Yuji watched as Gojo and Sukuna continued their intense battle in the moment.</p>

        <p>Every exchange revealed something new about the abilities being used across the arena.</p>

        <p>As the fight continued, Mahoraga gradually adapted to the technique protecting Gojo from harm.</p>

        <p>During another exchange, Sukuna began to understand how that adaptation could be used to his opponent.</p>

        <p>Eventually, Gojo launched a powerful attack that caused enormous damage, forcing Sukuna to change his response.</p>

        <p>Near the end of the battle, Sukuna remained focused on what Mahoraga had learned through its adaptation.</p>

        <p>Despite the damage he had taken, Sukuna continued searching for a way around Gojo's defense on the ground.</p>

        <p>Suddenly, the final attack changed everything and brought the battle to its decisive attack.</p>

      </div>

      <input
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        placeholder="Enter recovered message"
      />

      <button onClick={submit}>SUBMIT</button>

    </main>
  )
}