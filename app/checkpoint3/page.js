"use client"

import {useState} from "react"

export default function Checkpoint3(){
  const [answer,setAnswer]=useState("")
  const [passed,setPassed]=useState(false)

  function submit(){
    if(answer.trim().toUpperCase()==="GOJOWINS"){
      setPassed(true)
    }else{
      alert("Wrong answer. Try again.")
    }
  }

  if(passed){
    return(
      <main className="container">

        <h1>THE VEIL HAS FALLEN</h1>

        <div className="terminal">

          <p>GOJOWINS.</p>

          <div className="line"></div>

          <p>So you finally reached the end.</p>
          <p>The barrier has fallen.</p>
          <p>You survived Sukuna's Domain.</p>

          <p className="success">PASS.</p>

        </div>

      </main>
    )
  }

  return(
    <main className="container">

      <h1>FINAL RECORD</h1>

      <div className="terminal">

        <p>YUJI ITADORI</p>
        <p>FINAL TRANSMISSION</p>

        <div className="line"></div>

        <p>The battle is over.</p>
        <p>Something was left behind.</p>
        <p>Not everything written here was meant to be seen.</p>

      </div>

      <div className="final-record">

        <p>RECORD STATUS: CORRUPTED</p>

        <p
          className="hidden-record"
          data-clue="HPKPXJO T"
        >
          FINAL RECORD DATA
        </p>

      </div>

      <div className="hint">

        <p>The record has one final secret.</p>
        <p>Some things reveal themselves only when you look closer.</p>
        <p>The old rule may still remember the way.</p>

      </div>

      <input
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        placeholder="Enter final answer"
      />

      <button onClick={submit}>SUBMIT</button>

    </main>
  )
}