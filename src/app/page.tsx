'use client'
import Image from "next/image";
import { IoIosClose, IoLogoFacebook, IoLogoInstagram, IoMdHeadset } from "react-icons/io";
import {useState} from 'react'
import Link from "next/link";

export default function Home() {

  const works = [
    {
      id:1,
      title:"E - commerce application and system | Cookiy",
      des:"Do you have your own business and want to sell online ? \n Features of our application: \n -Appear in search engines easily, and this will make many people know about you from anywhere in the world. \n -Controlling orders, stores and products. \n -Obtain daily reports on profits with the utmost transparency and ease without resorting to papers and forgetting some of them. \n -Reports on the performance of products and which ones are best to avoid loss.",
      image:"/e-commerce.png"
    },
  ]

  const [selectedWork, setSelectedWork] = useState(0)


  const openDetails = () => {
    var details = document.getElementById('details')
    if(details){
      details.style.width = '100%'
      details.style.padding = '30px'
    }
  }
  const closeDetails = () => {
    var details = document.getElementById('details')
    if(details){
      details.style.width = '0px'
      details.style.padding = '0px'
    }
  }


  return (
    <div className="main normal relative">
      <header className="flex justify-around absolute w-full top-9">
        <Image loading="lazy" alt="cookiy logo" src={'/brand-logo-white.png'} width={30} height={30} />
        <button className="flex gap-2 text-sm my-auto">
          <p>Contact us</p>
          <span className="my-auto">
            <IoMdHeadset />
          </span>
        </button>
      </header>

      <div className={`headLine px-5 to-black via-neutral-950 from-neutral-900 bg-gradient-to-tl w-[100vw] h-[80vh] `}>
        <div className="flex flex-col justify-center h-full">
          <div className="justify-around flex relative">
            <div className="top-[50%] z-[10] translate-y-[-50%] text-white w-[100%] absolute lg:relative flex flex-col gap-4 justify-center">
              <h1 className="bold">own your unique world mastry</h1>
              <small className="w-[73%]">
                Imagine yourself creating your own world with your own rules easily and smoothly and succeeding in real world
              </small>
              <button className="w-fit text-sm">Create It</button>
            </div>
            <Image className="image lg:opacity-100 opacity-80" loading="lazy" src={'/headImage.png'} width={500} height={500} alt="Software Cookiy" />
          </div>
        </div>
      </div>

      <div className={`${window.innerHeight < 720 ? "mt-1" : ""} whatWeDo p-10 rounded-md bg-white w-[92vw] h-auto mx-auto mt-[-125px] left-[50%] translate-x-[-50%] shadow-lg absolute`}>
        <h1 className="text-blue-500 text-lg">- What is Cookiy ?</h1>
        <p className="md:text-2xl text-lg py-7 ">Cookiy is a new software company that aims to move you from the boring world to your own world with all your standards that you want. <br /> If you want to profit or appear o all the world in way that suits you and reflects your identity.</p>
      </div>

      <div className="whyUs flex flex-col justify-around gap-16 w-[100vw] h-[60vh] md:p-16 p-5 text-white md:mt-72 mt-96 relative">
        <div className="z-20 relative">
          <h1 className="bold md:text-3xl text-2xl">relax with cookiy</h1>
          <br />
          <p className="md:text-base text-sm">Feel comfortable when you want to manage your business or create portfolio for your job.<br /> I think the matter has become much easier with cookiy.</p>
        </div>
      </div>

      <div className="lastWork text-center flex flex-col pt-10 mb-24 px-2">
        <h3 className="text-blue-500 text-lg mb-10">- latest work -</h3>
        <div className="works flex flex-wrap justify-evenly gap-5">
          {
            works?.map((work:any) => (
              <div key={work?.id} className="work flex flex-col gap-1 w-[340px] text-start">
                <div>
                  <Image layout="responsive" src={work?.image} alt="E commerce application cookiy" width={500} height={500}/>
                </div>
                <p className="font-bold">{work?.title}</p>
                <button onClick={() => {
                  setSelectedWork(work.id)
                  openDetails()
                }} className="btn-dark">More</button>
              </div>
            ))
          }
        </div>
      </div>

      <div id="details" className="workDetails overflow-hidden transition-all w-[0px] h-[100vh] fixed flex flex-col bg-black bg-opacity-70 z-50 top-0 left-0 p-[0px]">
        <span onClick={() => closeDetails()} className="close text-red-400 hover:text-white text-5xl cursor-pointer w-fit transition-all">
          <IoIosClose />
        </span>
        <div className="work flex flex-col md:mt-16 mt-1 text-white">
          <h1 className="bold md:text-4xl text-2xl">{works.find((w:any) => w.id == selectedWork)?.title}</h1>
          <br />
          <div className="flex flex-col gap-5 md:text-base text-sm">{works.find((w:any) => w.id == selectedWork)?.des?.split('\n').map((e:any) => <p key={e}>{e}</p>)}</div>
          <br />
          <button className="w-fit">Contact us about it</button>
        </div>
      </div>



      <footer className="md:p-10 p-3 flex flex-col gap-3">
        <div className="flex gap-1">
          <Image alt="cookiy" src={'/brand-logo.png'} width={50} height={50} />
          <h1 className="my-auto">Cookiy</h1>
        </div>
        <hr />
        <div className="md:flex md:flex-row md:justify-around gap-5 flex flex-col justify-start">
          <div className="links my-auto">
            <strong className="text-lg">Links</strong>
            <Link className="flex gap-2 text-sm" href={'/'}>
              <p>Facebook</p>
              <span className="my-auto">
                <IoLogoFacebook />
              </span>
            </Link>
            <Link className="flex gap-2 text-sm" href={'/'}>
              <p>Instagram</p>
              <span className="my-auto">
                <IoLogoInstagram />
              </span>
            </Link>
          </div>
          <div className="contact flex flex-col gap-1">
            <p className="bold">follow our news</p>
            <p>Your Email</p>
            <input />
            <button className="btn-dark w-fit">Subscribe</button>
    </div>
        </div>
      </footer>
    </div>
  )
}
