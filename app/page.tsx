export default function Home() {
  return (
    <main>
      <header className="fixed w-screen h-20 bg-[#27303F]">
        <div className="grid grid-cols-8 ">
          <h1 className=" order-1 text-2xl font-bold text-white text-center col-span-2 pt-3">
            Training
          </h1>
          <a href="#home" className="order-2 col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 order-1">
            Home
          </a>
          <a href="#home" className="order-3 col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 order-1">
            Dashboard
          </a>
          <nav className="order-4 col-span-2 h-10 items-center pl-10 pt-2 text-white">
           {/*  <img src="https://cdn-icons-png.flaticon.com/512/4245/4245087.png" className="h-10 w-10"></img> */}
            <svg className="h-8 w-8 text-zinc-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="17" cy="6" r="2" />  <path d="M9 11a4.97 4.97 0 1 0 3.95 7.95" />  <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" /></svg>
            Training
          </nav>
        </div>
      </header>
        <div className="">
        </div>
    </main>
  );
}
