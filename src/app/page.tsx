import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export default function Home() {


  return (
    <div className="main normal">
      <header className="absolute z-50 w-full p-3">
        <div className="flex md:justify-around justify-between">
          <div>
            <Image src={'/brand-logo-white.png'} alt="Cookiy" width={30} height={30} />
          </div>
          <div className="flex gap-4 my-auto text-white">
            <Link href={'/'}>
              <FaInstagram />
            </Link>
            <Link href={'/'}>
              <FaTiktok />
            </Link>
            <Link href={'/'}>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </header>

      <div className="landing overflow-hidden relative bg-[url(/landing_bg.png)] bg-cover w-[100vw] h-[80vh]">
        <Image className="w-full absolute opacity-20 h-[100vh] scale-x-125" src={'/landing bg.gif'} alt="Cookiy eyes" width={500} height={500} />
        <div className="h-full text-center flex flex-col justify-center">
          <div className="text-white z-40 bold lg:flex lg:flex-row md:flex gap-4 md:flex-col lg:gap-3 mx-auto">
            <h1 id="fH1" className="overflow-hidden">Be visible with radiance</h1>
            <h1 id="fH2" className="lg:mt-12 lg:ms-[-70px] h-auto overflow-hidden
            from-slate-300 via-red-200 to-purple-300 bg-clip-text text-transparent bg-gradient-to-tl
            ">among all eyes</h1>
          </div>
          <button id="btnLanding" className="z-40 overflow-hidden w-fit mx-auto
          flex gap-2 mt-4
          ">
            <p className="my-auto">More</p>
            <span className="my-auto">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>

      <br />
      <br />

      <div className="problems px-5">
        <div className="flex flex-col justify-around md:flex md:flex-row">
          <div className="w-fit mx-auto">
            <Image width={500} height={500} src={'/problems/projectManagment.png'} alt="project managment with cookiy software" />
          </div>
          <div className="my-auto">
            <h3 className="text-red-300 bold mb-2">Have Problem in your project ?</h3>
            <p>If you having an issue in your project you can
              organize and manage it with our servecis</p>
          </div>
        </div>

        <br />
        <br />

        <div className="flex flex-col justify-around md:flex md:flex-row-reverse bg-slate-200 p-3">
          <div className="w-fit mx-auto">
            <Image width={400} height={400} src={'/problems/repeating.png'} alt="repeating tasks" />
          </div>
          <div className="my-auto">
            <h3 className="text-red-300 bold mb-2">Stop repeating !</h3>
            <p>Why repeating while our system can do your
              tasks for you</p>
            <button className="z-40 overflow-hidden w-fit
          flex gap-2 mt-4 bg-red-200
          ">
              <p className="my-auto">More</p>
              <span className="my-auto">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="w-[100vw] px-5 flex flex-col justify-center h-[430px] bg-fixed bg-center bg-[url(/BeYoubg.png)] bg-cover">
        <div className="w-fit mx-auto">
          <Image src={'/BeYou.png'} alt="Be Cookiy" width={500} height={500} />
        </div>
      </div>


      <br />
      <br />

      <div className="products">
        <h3 className="bold text-center bg-red-200">Our Products</h3>
        <br />
        <div className="productsContainser">
          <div className="product text-center bg-slate-50 p-5 rounded-md">
            <h4 className="text-2xl font-bold">SHOWCASE YOUR IDENTIFY</h4>
            <p className="
            from-red-400 via-rose-600 to-purple-400 text-sm bg-gradient-to-tl bg-clip-text text-transparent
            ">Allure Customers Worldwide, Manage Stocks, Manage Orders And More</p>
            <button className="my-2">More</button>
            <div className="flex justify-center gap-10 flex-wrap mt-10 bg-slate-100 rounded-md shadow-lg p-2 mx-auto">
              <div className="w-[500px]">
                <Image layout="responsive" width={500} height={500} alt="E-commerce Cookiy Application" src={'/products/first/store.png'} />
              </div>
              <div className="w-[500px]">
                <Image layout="responsive" width={500} height={500} alt="E-commerce Cookiy Dashboard" src={'/products/first/dashboard.png'} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <br />
      <br />

      <footer className="p-2 pb-4">
        <div className="flex gap-2 mb-5">
          <div>
            <Image src={'/brand-logo.png'} alt="Cookiy" width={50} height={50} />
          </div>
          <h3 className="my-auto font-bold">Cookiy</h3>
        </div>
        <div className="flex md:flex-wrap md:flex md:flex-row flex-col gap-5 justify-around">
          <div>
            <Link 
            href={'/'} 
            className="flex gap-1 text-purple-600">
              <span>
                Instagram
              </span>
              <span className="my-auto">
                <FaInstagram />
              </span>
            </Link>
            <Link 
            href={'/'} 
            className="flex gap-1 text-neutral-700 ">
              <span>
                Tik Tok
              </span>
              <span className="my-auto">
                <FaTiktok />
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <small className="text-neutral-600">about</small>
              <small>Software Company</small>
            </div>
            <div className="flex flex-col">
              <small className="text-neutral-600">intership</small>
              <small>See Available Interships</small>
            </div>
            <div className="flex flex-col">
              <small className="text-neutral-600">terms and privacy</small>
            </div>
          </div>

          <div>
            <strong>Follow The News</strong>
            <div className="flex flex-wrap">
              <input />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
