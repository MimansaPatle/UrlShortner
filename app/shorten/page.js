"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';



const Shorten = () => {

  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {                                              //Taken from Postman </>
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    //When you send data to an API using fetch, the server needs to know the format. If you're sending JSON, this line is required so the backend knows how to read the body.

    const raw = JSON.stringify({                //JSON.stringify() is a JavaScript method that converts a JavaScript object into a JSON-formatted string.
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,        //	These are the HTTP headers for the request.
      body: raw,
      redirect: "follow"         //Tells the browser to automatically follow redirects if the server responds with one (like 301 or 302 status codes).
    };

    fetch("/api/generate", requestOptions)     //This sends an HTTP request to the /api/generate
      .then((response) => response.json())
      .then((result) => {
        {/* result milne k baad */ }
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        toast.success(result.message)

      })

      .catch((error) => console.error(error));
  }


  return (
    <main className="  md:h-[94vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

      <section className="grid md:grid-cols-2 min-h-[100vh]">
        <div className='mt-50 md:m-0 flex justify-center items-center flex-col gap-10 '>

          <div className='flex justify-center items-center  '>
            <h1 className='ml-7 md:ml-0 text-4xl text-blue-400 font-bold'>Generate your short URLs</h1>
          </div>
          <div className='flex justify-center items-center flex-col gap-5 '>
            <input className=" text-center text-[#212529] bg-white rounded-md p-2 w-[300px]"
              type='text'
              placeholder='Enter your URL'
              value={url}
              onChange={e => { seturl(e.target.value) }} />
            <input className="text-[#212529] text-center bg-white rounded-md p-2 w-[300px]"
              type='text'
              placeholder='Enter your preferred short URL text'
              value={shorturl}
              onChange={e => { setshorturl(e.target.value) }} />
            <button onClick={generate}
              
              disabled={!url.trim() || !shorturl.trim()}     //  !url.trim() returns true if the trimmed url is an empty string.
              className={`rounded-lg shadow-lg p-3 py-2 font-bold my-2 text-white 
                         ${url.trim() && shorturl.trim() ? "hover:bg-yellow-300 cursor-pointer" : " bg-gray-500 border border-amber-300 cursor-not-allowed"}`}>
              <img className=' hover:h-[40] hover:w-[40] h-[30px] w-[30px] rounded-2xl' src='magic.png' alt='magic' />
            </button>
            <ToastContainer />


            {generated && <> <span className='text-blue-500 font-bold text-lg'>Your Link </span>
              <code><Link className='text-white hover:font-bold' target="_blank" href={generated}>{generated}</Link></code></>}

             {/* target="_blank" is an HTML attribute used to tell the browser to open the link in a new tab or window. */}
             {/* {generated}>{generated} , here first generated is to "Display" and second one is for "Link to" */}
          </div>


        </div>

        <div className=" flex items-center justify-center flex-col md:mr-[10vw]">
          <img className="md:p-0 p-5 flex item-center justify-center mix-blend-color-dodge w-[300px] h-[300px] rounded-full" src="shortner.jpg" alt="image" />
        </div>
      </section>

    </main>
  )
}

export default Shorten
