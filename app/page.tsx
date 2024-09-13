export default function Home() {
  return (
    <main>
      <header className="fixed w-screen border-b bg-[#27303F]">
      <div className="grid grid-cols-7">
        <h1 className=" text-2xl font-bold text-white text-center col-span-2 pt-3">
          Training
        </h1>
        <a href="#home" className="col-span-2 text-white hover:bg-[#ffff] w-full text-center pt-3 m-2 rounded hover:text-gray-900 order-1">
          Home
        </a>
        <a href="#home" className="col-span-2 text-white hover:bg-[#ffff] w-full text-center pt-3 m-2 rounded hover:text-gray-900 order-1">
          Dashboard
        </a>
      </div>
      </header>
    </main>
  );
}
