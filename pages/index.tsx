import Head from 'next/head'
import { useState } from 'react';
import Modal from '../components/modal'
import AuthForm from '../components/Auth/AuthForm'
import darklogo from '../public/darklogo.png'
import Image from 'next/image';
export default function Home() {
  const [show, setShow] = useState(false);
  const onHide = () => setShow(false);
  return (
    <div className="relative">
      <Head>
        <title>86212</title>
        <link rel="icon" href="https://storeno.b-cdn.net/stores/2-2022/1645555359021.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@200;300;400;600&family=Montserrat:wght@300;400;500;600;700;800&family=Readex+Pro:wght@200;600&family=Tajawal:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Modal show={show} onHide={onHide}>
        <AuthForm />
        </Modal>
      <div className="w-80 rounded-full h-80 top-56 bg-fuchsia-400 absolute "></div>
      <div className="w-40 rounded-full right-1/2 top-64 h-40 bg-fuchsia-300 absolute "></div>
      <div className="w-60 rounded-bl-full rounded-tl-full h-80 top-36 right-0 bg-pink-400 absolute "></div>
      <div className="w-60 rounded-full h-80 top-2/3 right-1/4 bg-blue-300 absolute "></div>
      <div className="w-60 rounded-full h-52 top-2/4 right-3/4 bg-teal-200 absolute "></div>
      <div className="w-80 rounded-full h-64 bottom-3.5 right-1/4 bg-primary-default absolute "></div>
      {/* Headers */}
      <main className='px-3/4 z-30 font-body w-full backdrop-blur-3xl bg-slate-50 bg-opacity-25	'>
      
      <section className="flex w-full justify-center sticky z-30 top-0 backdrop-blur-3xl bg-gray-50 bg-opacity-50	 md:justify-start h-auto py-4 md:px-20">
          <img 
           className="w-28 h-14 object-cover hidden md:block"
          src="https://storeno.b-cdn.net/stores/2-2022/1645547322319.png" alt="" />
           <img 
           className="w-20 h-8 object-cover block md:hidden"
          src="https://storeno.b-cdn.net/stores/2-2022/1645555359021.png" alt="" />
      </section>

       <section className="flex w-full h-auto py-4 px-5 md:px-20">
          <div className="md:flex-1 flex flex-col md:items-start items-center justify-center">
            <h1 className="text-5xl font-bold font-body md:text-left text-center text-slate-900"><span className="text-primary-default">“</span> From china to your door <span className="text-primary-default">”</span></h1>
            <h3 className="text-md mt-2 font-light font-body md:text-left text-center text-slate-900">Your all-in-one Solutions provider for import operations from China to Morocco</h3>
            <button onClick={() =>setShow(true)} className='bg-primary-default text-white md:self-start mt-8 py-3 w-40 px-8 rounded-lg'>Join Now</button>
          </div>
          <div className="flex-1 hidden md:block relative">
            <img className='w-full object-cover h-full' src="https://storeno.b-cdn.net/stores/2-2022/1645661967825.png" alt="" />
            {/* <div className="bg-white absolute animate-bounce  top-8 right-48  rounded-lg">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982852.jpeg" className='rounded-lg w-24 shadow-lg' alt="" />
            </div>
            <div className="bg-white absolute animate-bounce bottom-1 right-20  ">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982573.jpeg" className='rounded-lg shadow-lg w-24' alt="" />
            </div>
            <div className="bg-white absolute animate-bounce top-48 left-20 ">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982120.png" className='rounded-lg shadow-lg w-24' alt="" />
            </div> */}
          </div>
       </section>

        <section className="w-full mt-8 flex justify-center items-center">
            <div className="w-3/4 text-slate-700 text-center py-8 px-1 md:px-28 lg:px-44 bg-orange-300  rounded-3xl ">
              <div className='flex items-center justify-center space-x-3 text-3xl font-bold' title="86212">Who is{" "}<img 
           className="w-28 h-14 object-cover ml-2"
          src="https://storeno.b-cdn.net/stores/2-2022/1645547322319.png" alt="" /> ?</div> 
              <p className="text-lg font-medium pt-2">We link the bridge between Moroccan buyers and Chinese verified Suppliers , We offer a comprehensive and inclusive Business pack , starting from Sourcing , Quality Inspection , Freight in all its forms , and Custom Clearance at the country of destination.</p>
            </div>
        </section>

        <section className="pt-5 px-14 mt-4 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 sm:gap-x-3 3xl:flex flex-wrap justify-center">
        <div className="flex-1 relative rounded-xl shadow-xl p-4 bg-white">
                <img className="absolute -top-1 bg-slate-100 rounded-full -left-1 w-10" src="https://storeno.b-cdn.net/stores/2-2022/1645574443972.png" alt="" />
                <p className="text-xl text-primary-default ml-6 font-semibold">Advanced filters <span className="text-sm font-normal text-center text-slate-900">(Advanced Access)</span>  </p>
                <p className='text-sm font-medium mt-1'>Get a full and detailed access to a wide range of products from thousands of Chinese verified suppliers.</p>
            </div>
            <div className="flex-1 relative rounded-xl shadow-xl p-4 bg-white">
                <img className="absolute -top-1 bg-slate-100 rounded-full -left-1 w-10" src="https://storeno.b-cdn.net/stores/2-2022/1645575448107.png" alt="" />
                <p className="text-xl text-primary-default ml-6 font-semibold">Personalized Discovery <span className="text-sm font-normal text-center text-slate-900">( Step by Step Guide  )</span> </p>
                <p className='text-sm font-medium mt-1'>
                Get a step by step personalized guidance , our specialized team assures to provide you with the most comprehensive accompagnement during the whole process of importation. </p>
            </div>
            <div className="flex-1 relative rounded-xl shadow-xl p-4 bg-white">
                <img className="absolute -top-1 bg-slate-100 rounded-full -left-1 w-10" src="https://storeno.b-cdn.net/stores/2-2022/1645575568019.png" alt="" />
                <p className="text-xl text-primary-default ml-6 font-semibold">Purchase <span className="text-sm font-normal text-center text-slate-900">( Customer-oriented Platform ) </span> </p>
                <p className='text-sm font-medium mt-1'>We aspire to make 86212 your one stop platform to all of your purchases from China . </p>
            </div>
        </section>
        <section className="w-full lg:px-20 shadow-sm lg:py-4 mt-10">
            <div className="bg-primary-dark text-center py-10 md:px-32">
              <p className="text-primary-default font-semibold pb-4 text-3xl">LINKING THE BRIDGE</p>
              <p className="text-xl text-white font-normal">
                  between chinese suppliers and Moroccan importers
                  simplifying and automatising the import process for
                  Moroccan buyers</p>
            </div>
        </section>
          <div className="font-bold text-4xl mt-8 text-center">Packs</div>
        <section className="pt-5 mx-2 pb-10 flex flex-wrap md:space-x-8 justify-center items-center">
          
          <div className="flex flex-col justify-center items-center w-72 mt-5 bg-white py-4 rounded-lg shadow-xl">
            <div className="bg-slate-100 rounded-full ">
              <img className="m-4 w-14" src="https://storeno.b-cdn.net/stores/2-2022/1644972914846.png" alt="" />
            </div>
              <p className="font-bold text-xl">Discovery</p>
              {/* <p className="font-bold text-xl text-orange-500">$155.99</p> */}
              <button className="rounded-lg bg-primary-default mt-3 px-10 py-2 text-white">Get It Now</button>
          </div>

          <div className="flex flex-col justify-center items-center w-72 mt-5 bg-white py-4 rounded-lg shadow-xl">
          <div className="bg-slate-100 rounded-full ">
            <img className="m-4 w-14" src="https://storeno.b-cdn.net/stores/2-2022/1644972914846.png" alt="" />
          </div>
            <p className="font-bold text-xl">Ecommerce</p>
            {/* <p className="font-bold text-xl text-orange-500">$155.99</p> */}
            <button className="rounded-lg bg-primary-default mt-3 px-10 py-2 text-white">Get It Now</button>
        </div>
          
          <div className="flex flex-col justify-center items-center w-72 mt-5 bg-white py-4 rounded-lg shadow-xl">
            <div className="bg-slate-100 rounded-full ">
              <img className="m-4 w-14" src="https://storeno.b-cdn.net/stores/2-2022/1644972914846.png" alt="" />
            </div>
              <p className="font-bold text-xl">Premium</p>
              {/* <p className="font-bold text-xl text-orange-500">$155.99</p> */}
              <button className="rounded-lg bg-primary-default mt-3 px-10 py-2 text-white">Get It Now</button>
          </div>
          

        </section>
        <section className="w-full md:px-12 px-3 lg:px-20 space-x-6 py-4 mt-10 ">
              <div className="bg-gray-200 md:mx-6 mx-2 lg:mx-10  rounded-lg md:px-11 px-7 lg:px-20 flex md:flex-row  flex-col justify-center items-center py-9 shadow-lg">
              <div className="flex flex-col space-y-7 flex-1">
                <h1 className="font-semibold text-3xl text-primary-default">Simplify category planning efforts</h1>
                <div>
                  <h2 className="font-medium text-xl">Supplier qualification</h2>
                  <p className="text-md font-light">Drive the biggest return from your appointments with 'name' 
                    Account Relationship team, who identify the best suppliers to grow your business.</p>
                </div>
                <div>
                  <h2 className="font-medium text-xl">Virtual and In-Person appointment execution</h2>
                  <p className="text-md font-light">Review new and existing product opportunities with suppliers in a private meeting 
                    setting at an <span className="text-primary-default font-semibold">86212</span> program. These appointments take place in one location over 2 to 3 days.</p>
                </div>
                <div>
                  <h2 className="font-medium text-xl">Vendor management</h2>
                  <p className="text-md font-light">Receive follow up based on your preferred methods and timelines. <span className="text-primary-default font-semibold">86212</span>  guides suppliers on how to best
                     engage with you after program appointments.</p>
                </div>
              </div>
              <div className="flex-1 mt-7 pl-9">
                  <img className="w-3/4 object-cover" src="https://storeno.b-cdn.net/stores/2-2022/1645054269344.jpeg" alt="" />
                  <img className="w-1/3 mt-8 float-right object-cover" src="https://storeno.b-cdn.net/stores/2-2022/1645054387932.jpeg" alt="" />
              </div>
              </div>
        </section>
        <section className="w-full lg:px-20 shadow-sm lg:py-4 mt-10">
            <div className="bg-white py-10 md:px-10 flex md:flex-row flex-col items-center justify-around">
              <p className="text-3xl font-normal">Get your account now</p>
            </div>
        </section>
        <section>
        <AuthForm />
        </section>


        <section className="w-full px-20 py-4 flex items-center justify-between bg-primary-dark mt-10">
        <img 
           className="w-29 h-10 object-cover ml-2"
          src="https://storeno.b-cdn.net/stores/2-2022/1645552414120.png" alt="" />
          <div><span className="text-base font-light text-white">copyright 2022</span> </div>
        </section>
      </main>
    </div>
  )
}
