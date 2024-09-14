export default function Home() {
  return (
    <main>
      <header className=" w-screen h-20 bg-[#27303F]">
        <div className="grid grid-cols-8 ">
          <h1 className=" order-1 text-2xl font-bold text-white text-center col-span-2 pt-3">
            Training
          </h1>
          <a href="#home" className="order-2 col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 " >
            Home
          </a>
          <a href="#dashboard" className="order-3 col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 ">
            Dashboard
          </a>
          <nav className="order-4 col-span-2 h-10 items-center pl-10 pt-2 text-white">
            <svg className="h-8 w-8 text-zinc-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="17" cy="6" r="2" />  <path d="M9 11a4.97 4.97 0 1 0 3.95 7.95" />  <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" /></svg>
            Training
          </nav>
        </div>
      </header>
      <nav className="grid grid-cols-[20%_f1] bg-blue-400 h-full md:grid-cols-2 divide-x">
        <menu id="#dashboard" className=" grid grid-cols-2 h-full w-full order-2 md:grid-cols-4">
          <div className="border-2 border-slate-500 order-1">
            1
          </div>
          <div className="border-2 border-slate-500 order-2">
            2
          </div>
          <div className="border-2 border-slate-500 order-3">
            3
          </div>
          <div className="border-2 border-slate-500 order-4">
            4
          </div>
          <div className="border-2 border-slate-500 order-5">
            5
          </div>
          <div className="border-2 border-slate-500 order-6">
            6
          </div>
          <div className="border-2 border-slate-500 order-7">
            7
          </div>
          <div className="border-2 border-slate-500 order-8">
            8
          </div>
        </menu>
        <div className="order-1">
          hola
        </div>
      </nav>
    </main>
  );
}
