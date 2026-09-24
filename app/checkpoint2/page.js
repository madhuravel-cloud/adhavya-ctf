"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Checkpoint2(){
  const [answer,setAnswer]=useState("")
  const router=useRouter()

  function submit(){
    if(answer.trim().toUpperCase()==="NOBARA HELP"){
      router.push("/checkpoint3")
    }
  }

  return(
    <main className="container">

      <h1>VEIL RECORD 02</h1>

      <div className="terminal">

        <p>YUJI ITADORI</p>
        <p>RECORD 02</p>

        <div className="line"></div>

        <p>The battle left almost nothing behind.</p>

        <p>I found this image inside the damaged record.</p>

      </div>

      <div className="transmission">

        <img
          src="/veil_hidden.jpg"
          alt="Damaged Veil Record"
          className="record-image"
        />

        <br/>
        <br/>

        <a
          href="/veil_hidden.jpg"
          download="veil_record.jpg"
          className="download"
        >
          DOWNLOAD RECORD
        </a>

      </div>

      <div className="hint">

        <p>A veil hides more than what the eye can show.</p>
        <p>Look at what the image is made of.</p>

      </div>

      <input
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        placeholder="Enter the recovered message"
      />

      <button onClick={submit}>SUBMIT</button>

    </main>
  )
}