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
      <nav>
        hola
      </nav>
      <nav id="dashboard" className="grid grid-cols-1 bg-slate-100 h-full w-full divide-x md:grid-cols-4">
        <menu className="font-light grid grid-cols-7 col-span-3 h-full w-full order-2 border-2 border-slate-500 ">
          <div className="border-2 h-20 col-span-7 border-slate-500 ">
            <h1 className="text-7xl font-semibold ">Octubre</h1>
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Domingo
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Lunes
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Martes
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Miercoles
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Jueves
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            Viernes
          </div>
          <div className=" border-2 h-20 border-slate-500 ">
            Sabado
          </div>
          <div className="border-2 col-start-3 h-20 border-slate-500 ">
            1
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            2
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            3
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            4
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            5
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            6
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            7
          </div>
          <div className="border-2 h-20 border-slate-500">
            8
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            9
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            10
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            11
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            12
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            13
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            14
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            15
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            16
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            17
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            18
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            19
          </div>
          <div className="border-2 h-20 border-slate-500">
            20
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            21
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            22
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            23
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            24
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            25
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            26
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            27
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            28
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            29
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            30
          </div>
          <div className="border-2 h-20 border-slate-500 ">
            31
          </div>
        </menu>

        <div className="order-1 flex flex-col gap-1">
          <div>
            <a href="#entrenamiento" className="flex">
              <svg  className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
              <h3 className="font-thin">Agregar entrenamiento</h3>
            </a>
          </div>
          <div>
            <a href="#evento" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>
              <h3 className="font-thin">Agregar Competencia</h3>
            </a>
          </div>
          <div>
            <a href="#recordar" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
              <h3 className="font-thin">Agregar Recordatorio</h3>
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
}
