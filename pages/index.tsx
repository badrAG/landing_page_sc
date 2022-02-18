import Head from 'next/head'
import { useState } from 'react';
import Modal from '../components/modal'
import AuthForm from '../components/Auth/AuthForm'
export default function Home() {
  const [show, setShow] = useState(false);
  const onHide = () => setShow(false);
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,800;0,900;1,400&display=swap"
      rel="stylesheet"
    />
      </Head>
      <Modal show={show} onHide={onHide}>
        <AuthForm />
        </Modal>
      <div className="w-80 rounded-full h-80 bg-yellow-400 absolute "></div>
      <div className="w-40 rounded-full right-1/2 top-64 h-40 bg-fuchsia-300 absolute "></div>
      <div className="w-60 rounded-bl-full rounded-tl-full h-80 top-36 right-0 bg-pink-400 absolute "></div>
      <div className="w-60 rounded-full h-80 top-2/3 right-1/4 bg-pink-400 absolute "></div>
      <div className="w-60 rounded-full h-52 top-2/4 right-3/4 bg-teal-200 absolute "></div>
      <div className="w-80 rounded-full h-64 bottom-3.5 right-1/4 bg-green-300 absolute "></div>
      {/* Headers */}
      <main className='px-3/4 z-30 font-body w-full backdrop-blur-3xl bg-slate-50 bg-opacity-25	'>
      
      <section className="flex w-full justify-center md:justify-start h-auto py-4 md:px-20">
          <h1 className="text-2xl text-slate-900 font-bold">LOGO</h1>
      </section>

       <section className="flex w-full h-auto py-4 px-5 md:px-20">
          <div className="md:flex-1 flex flex-col md:items-start items-center justify-center">
            <h1 className="text-5xl font-medium font-body md:text-left text-center text-slate-900">The industry standard platform for retail product discovery and sourcing.</h1>
            <h3 className="text-xl mt-2 font-light font-body md:text-left text-center text-slate-900">A single place to discover thousands of innovative products</h3>
            <button onClick={() =>setShow(true)} className='bg-slate-900 text-white md:self-start mt-8 py-3 w-40 px-11 rounded-lg'>Join Now</button>
          </div>
          <div className="flex-1 hidden md:block relative">
            <img className='w-full object-cover h-full' src="https://storeno.b-cdn.net/stores/2-2022/1644942099892.png" alt="" />
            <div className="bg-white absolute animate-bounce  top-8 right-48  rounded-lg">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982852.jpeg" className='rounded-lg w-24 shadow-lg' alt="" />
            </div>
            <div className="bg-white absolute animate-bounce bottom-1 right-20  ">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982573.jpeg" className='rounded-lg shadow-lg w-24' alt="" />
            </div>
            <div className="bg-white absolute animate-bounce top-48 left-20 ">
            <img src="https://storeno.b-cdn.net/stores/2-2022/1644942982120.png" className='rounded-lg shadow-lg w-24' alt="" />
            </div>
          </div>
       </section>

        <section className="w-full mt-8 flex justify-center items-center">
            <div className="w-3/4 text-slate-700 text-center py-8 px-10 md:px-28 lg:px-44 bg-orange-300  rounded-3xl ">
              <h1 className='text-3xl font-bold'>Who is ''Name'' ?</h1> 
              <p className="text-lg font-medium pt-2">is the leading product discovery platform enabling retail buyers to efficiently discover innovative and emerging products.</p>
            </div>
        </section>

        <section className="pt-5 px-7 mt-4 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 sm:gap-x-3 lg:gap-x-4 xl:gap-x-5 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
            {[1,2,3,4].map((i)=>(
              <div key={i} className="flex-1 relative rounded-xl shadow-xl p-4 bg-white">
                <img className="absolute -top-1 bg-slate-100 rounded-full -left-1 w-10" src="https://storeno.b-cdn.net/stores/2-2022/1644974547935.png" alt="" />
                <p className="text-xl text-stone-800 ml-6 font-semibold">Advanced filters</p>
                <p className='text-ms'>Filter brand and product discovery by location, certifications, distribution, and more.</p>
            </div>
            )) }
        </section>
          <div className="font-bold text-4xl mt-8 text-center">Packs</div>
        <section className="pt-5 mx-2 pb-10 flex flex-wrap md:space-x-8 justify-center items-center">
          {[1,2,3].map((k)=>(<div key={k} className="flex flex-col justify-center items-center w-72 mt-5 bg-white py-4 rounded-lg shadow-xl">
            <div className="bg-slate-100 rounded-full ">
              <img className="m-4 w-14" src="https://storeno.b-cdn.net/stores/2-2022/1644972914846.png" alt="" />
            </div>
              <p className="font-bold text-xl">Startup</p>
              <p className="font-bold text-xl text-orange-500">$155.99</p>
              <button className="rounded-lg bg-orange-400 mt-3 px-10 py-2 text-white">Get It Now</button>
          </div> ))}
        </section>
        <section className="w-full md:px-12 px-3 lg:px-20 space-x-6 py-4 mt-10 ">
              <div className="bg-slate-100 md:mx-6 mx-2 lg:mx-10  rounded-lg md:px-11 px-7 lg:px-20 flex md:flex-row  flex-col justify-center items-center py-9 shadow-lg">
              <div className="flex flex-col space-y-7 flex-1">
                <h1 className="font-semibold text-3xl text-orange-500">Simplify category planning efforts</h1>
                <div>
                  <h2 className="font-medium text-xl">Supplier qualification</h2>
                  <p className="text-md font-light">Drive the biggest return from your appointments with 'name' 
                    Account Relationship team, who identify the best suppliers to grow your business.</p>
                </div>
                <div>
                  <h2 className="font-medium text-xl">Virtual and In-Person appointment execution</h2>
                  <p className="text-md font-light">Review new and existing product opportunities with suppliers in a private meeting 
                    setting at an ''name'' program. These appointments take place in one location over 2 to 3 days.</p>
                </div>
                <div>
                  <h2 className="font-medium text-xl">Vendor management</h2>
                  <p className="text-md font-light">Receive follow up based on your preferred methods and timelines. ''name'' guides suppliers on how to best
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
              <p className="text-3xl font-light">Get your account now</p>
              <button className="px-12 py-2 text-xl font-normal rounded-lg mt-3 md:m-0 bg-orange-500">Pre-registration</button>
            </div>
        </section>
        <section className="w-full px-20 py-4 flex items-center justify-between bg-slate-900 mt-10">
          <div><span className="text-base font-bold text-white">LOGO</span></div>
          <div><span className="text-base font-light text-white">copyright 2022</span> </div>
        </section>
      </main>
    </div>
  )
}