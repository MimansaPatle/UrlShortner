import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",               //popinssss dalooo
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="  md:h-[94vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <section className=" grid md:grid-cols-2 min-h-[100vh] ">
        <div className="mt-40 md:mt-0 text flex justify-center items-center flex-col md:gap-0">
          <div className={`m-5 text-xl md:text-3xl text-gray-100 font-bold ${poppins.className} items-center justify-center`}>                  {/*  poppins */}
            <p>Simplify Your Links with Lightning</p>
            <p className="items-center justify-center flex">-Fast URL Shortening</p>
          </div>
          <div className=" m-7 md:px-36 text-center text-gray-200 md:items-center justify-center">
            <p>Tired of sharing long, messy links? Our URL Shortener turns bulky URLs into clean, easy-to-share links in just one click. Whether you're posting on social media, sending a message, or organizing your links, we make it fast, secure, and effortless. No sign-up required — just paste, shorten, and share!</p>
          </div>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='cursor-pointer bg-blue-800 hover:bg-blue-950 rounded-lg shadow-lg p-3 py-2 font-bold text-white'>Try Now</button></Link>
            {/* <Link href="/github"><button className='bg-blue-800 hover:bg-blue-950 rounded-lg shadow-lg p-3 py-2 font-bold text-white'>GitHub</button></Link> */}
          </div>
        </div>

        <div className="m-15 flex items-center justify-center flex-col md:mr-[10vw]">
          <img className=" mix-blend-soft-light w-5xl" src="url.jpg" alt="image" />
        </div>
      </section>
    </main>
  );
}
