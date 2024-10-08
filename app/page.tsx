export default function Home() {
  return (
    <main>
      {/* Header para banner y barra de navegacion */}
      <header className=" w-screen h-20 bg-[#27303F]">
        <div className="grid grid-cols-2 md:grid-cols-8 bg-[#27303F]">
          <h1 className=" order-1 text-2xl font-bold text-white text-center  md:mt-2 col-span-2 pt-3">
            TrainingUp
          </h1>
          <a href="#home" className="order-2 text-2xl font-light col-span-2 hover:scale-105 hover:shadow-md transition-all active:scale-95 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 " >
            Inicio
          </a>
          <a href="#dashboard" className="order-3 text-2xl font-light  col-span-2 hover:scale-105 hover:shadow-md transition-all active:scale-95 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 ">
            Calendario
          </a>
          <nav className="order-4 text-xl font-semibold  col-span-2 h-10 items-center pl-20 text-white invisible md:visible">
            <svg className="h-10 w-10 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              Training
            </nav>
        </div>
      </header>
      {/* Nombre de perfil */}
      <nav id="home" className="bg-slate-100 mt-24 md:m-0 h-full w-full text-7xl border-2 border-blue-900 ">
        <menu className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-2xl m-2 p-4 gap-3 flex col-span-4 shadow-lg  border border-blue-900">
            <img className="rounded-full h-20 w-20 border border-gray-100 shadow-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOcxIbxfuAZxJPi6LzSVTM4RGlqQ_U2U_rQ&s" />
            <div className="text-3xl pt-4">Chris Froome</div>
          </div>
          <div>
            {/* banner de bienvenida */}
          </div>
          <div className="text-center text-4xl shadow-xl col-span-4 font-extrabold border mx-2 mt-10 border-blue-800">
            Bienvenido a tu entrenamiento Chris
          </div>
        </menu>
        {/* seccion planes de entrenamiento */}
        <menu className="grid grid-cols-1 md:grid-cols-3 mt-20">
          <div className="ml-1 border-x-4 grid grid-cols-1 text-3xl h-auto w-full">
            <p className="text-3xl font-semibold text-blue-700 ">Planes de Entrenamiento</p>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno sprints
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className=" flex hover:scale-105 hover:shadow-md transition-all active:scale-95 gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno de una semana
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno por intervalos
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno de fuerza
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
          </div>
          {/* Seccion del entreno planificado y/o hecho para el dia */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-x-4 text-2xl w-full ">
            <p className="col-span-2 text-3xl font-semibold text-blue-700">Entreno de hoy</p>
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-3 col-span-2 h-20 w-full">
            <p className="col-span-3 flex gap-20">
              Road Cycling
              <svg className="h-10 w-10 text-lime-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
            </p>
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>            <p className="md:visible invisible">2:00:00</p>
            <p className="md:visible invisible">56 km</p>
            </div>
          </div>
          {/* Seccion de eventos y competencias */}
          <div className="pl-1 text-2xl grid grid-cols-1">
            <p className="text-3xl font-semibold text-blue-700">Eventos</p>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Vuelta a España
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Tour de France
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Vuelta a Catalunya
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex hover:scale-105 hover:shadow-md transition-all active:scale-95 shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Giro De Italia
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            
          </div>
        </menu>
      </nav>
      {/* Calendario */}
      <nav id="dashboard" className="grid grid-cols-1 bg-slate-100 h-full w-full divide-x md:grid-cols-4 mt-20">
        <menu className="font-light grid grid-cols-7 col-span-3 h-full w-full order-2 border-2 border-slate-500 ">
          <div className="border-2 h-20 col-span-7 border-slate-500 ">
            <h1 className="text-7xl font-semibold ">Octubre</h1>
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Domingo
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Lunes
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Martes
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Miercoles
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Jueves
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Viernes
          </div>
          <div className="font-bold border-2 h-20 border-slate-500 ">
            Sabado
          </div>
          <div className="border-2 col-start-3 border-slate-500 ">
            1
            {/* entreno planificado en el dia */}
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">2:00:00</p>
              <p className="col-span-3 md:visible invisible">56 km</p>
            </div>
          </div>
          <div className="border-2 h-auto border-slate-500 ">
            2
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">5:00:00</p>
              <p className="col-span-3 md:visible invisible">160 km</p>
            </div>
          </div>
          <div className="border-2  border-slate-500 ">
            3
          </div>
          <div className="border-2  border-slate-500 ">
            4
          
          </div>
          <div className="border-2 border-slate-500 ">
            5
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">3:00:00</p>
              <p className="col-span-3 md:visible invisible">90 km</p>
            </div>
          </div>
          <div className="border-2 border-slate-500 ">
            6
          </div>
          <div className="border-2 border-slate-500 ">
            7
          </div>
          <div className="border-2 border-slate-500">
            8
          </div>
          <div className="border-2 border-slate-500 ">
            9
          </div>
          <div className="border-2 border-slate-500 ">
            10
          </div>
          <div className="border-2 border-slate-500 ">
            11
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">3:00:00</p>
              <p className="col-span-3 md:visible invisible">90 km</p>
            </div>
          </div>
          <div className="border-2 border-slate-500 ">
            12
          </div>
          <div className="border-2 border-slate-500 ">
            13
          </div>
          <div className="border-2 border-slate-500 ">
            14
          </div>
          <div className="border-2 border-slate-500 ">
            15
          </div>
          <div className="border-2 border-slate-500 ">
            16
          </div>
          <div className="border-2 border-slate-500 ">
            17
          </div>
          <div className="border-2 border-slate-500 ">
            18
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">3:00:00</p>
              <p className="col-span-3 md:visible invisible">90 km</p>
            </div>
          </div>
          <div className="border-2 border-slate-500 ">
            19
          </div>
          <div className="border-2 border-slate-500">
            20
          </div>
          <div className="border-2 border-slate-500 ">
            21
          </div>
          <div className="border-2 border-slate-500 ">
            22
          </div>
          <div className="border-2 border-slate-500 ">
            23
          </div>
          <div className="border-2 border-slate-500 ">
            24
          </div>
          <div className="border-2 border-slate-500 ">
            25
          </div>
          <div className="border-2 border-slate-500 ">
            26
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">3:00:00</p>
              <p className="col-span-3 md:visible invisible">90 km</p>
            </div>
          </div>
          <div className="border-2 border-slate-500 ">
            27
          </div>
          <div className="border-2 border-slate-500 ">
            28
          </div>
          <div className="border-2 border-slate-500 ">
            29
          </div>
          <div className="border-2 border-slate-500 ">
            30
          </div>
          <div className="border-2 border-slate-500 ">
            31
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-6 w-6 md:h-8 md:w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="md:visible invisible">3:00:00</p>
              <p className="col-span-3 md:visible invisible">90 km</p>
            </div>
          </div>
        </menu>
        {/* Boton para agregar entrenamiento */}
        <div className="order-1 flex flex-col gap-1">
          <div className="hover:scale-105 hover:shadow-md transition-all active:scale-95 text-black hover:bg-[#2f5aa8]  text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#training" className="flex">
              <svg  className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
              <h3 className="font-thin">Agregar entrenamiento</h3>
            </a>
          </div>
          {/* Boton para agregar competencia */}
          <div className="hover:scale-105 hover:shadow-md transition-all active:scale-95 text-black hover:bg-[#2f5aa8] text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#training" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>
              <h3 className="font-thin">Agregar Competencia</h3>
            </a>
          </div>
          {/* boton para agregar recordatorio */}
          <div className="hover:scale-105 hover:shadow-md transition-all active:scale-95 text-black hover:bg-[#2f5aa8] text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#training" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
              <h3 className="font-thin">Agregar Recordatorio</h3>
            </a>
          </div>
        </div>
      </nav>

      {/* Seccion para insertar entrenamiento  */}
      <nav id="training" className=" shadow-2xl border-2 border-black p-3 md:mx-[40%] mx-[20%] my-[20%] h-56 w-[70%] md:w-[30%]">
        
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-5 col-span-2">
            <div className="grid grid-cols-4 grid-rows-4 col-span-4 gap-y-2">
                <div className="col-span-3 ">
                <label className="block ">
                  <span className="h-full after:text-red-500 block text-sm font-medium text-slate-700">
                  </span>
                  <input type="text" name="tittle" className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Titulo" />
                </label>
                </div>
                <div className="col-span-4 row-span-2 col-start-1 row-start-2 block">
                <span className="after:text-red-500 block text-sm font-medium text-slate-700">
                </span>
                <textarea name="textarea" id="text_training" className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Descripcion"></textarea>
                </div>
                <div className="col-start-1 row-start-4  rounded-lg">
                  <input type="date" className="border-2" />
                </div>

                <div className="col-start-4 row-start-4 border-2 border-black rounded-lg ">
                  <button className="hover:scale-105 hover:shadow-md transition-all active:scale-95 text-white hover:bg-[#1fa909] bg-[#2f5aa8] text-center h-full w-full rounded hover:text-gray-50 " >
                    <a href="#dashboard">Save</a>
                  </button>
                </div>
                <a href="#home" className="">
                  <div className="col-start-4 row-start-1 w-10 ml-[50%]">
                    <svg className="hover:scale-105 hover:shadow-md transition-all active:scale-95 hover:bg-slate-300 hover:rounded-lg h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                </a>
          </div>
        </div>
      </nav>
    </main>
  );
}
