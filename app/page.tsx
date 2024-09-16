export default function Home() {
  return (
    <main>
      <header className=" w-screen h-20 bg-[#27303F]">
        <div className="grid grid-cols-8 ">
          <h1 className=" order-1 text-2xl font-bold text-white text-center mt-2 col-span-2 pt-3">
            TrainingUp
          </h1>
          <a href="#home" className="order-2 text-2xl font-light col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 " >
            Inicio
          </a>
          <a href="#dashboard" className="order-3 text-2xl font-light  col-span-2 text-white hover:bg-[#ffff] w-full h-full text-center pt-3 m-2 rounded hover:text-gray-900 ">
            Calendario
          </a>
          <nav className="order-4 text-xl font-semibold  col-span-2 h-10 items-center pl-20 text-white">
            <svg className="h-10 w-10 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              Training
            </nav>
        </div>
      </header>

      <nav id="#home" className="bg-slate-100  h-full w-full text-7xl border-2 border-blue-900 ">
        <menu className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-2xl m-2 p-4 gap-3 flex col-span-4 shadow-lg  border border-blue-900">
            <img className="rounded-full h-20 w-20 border border-gray-100 shadow-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOcxIbxfuAZxJPi6LzSVTM4RGlqQ_U2U_rQ&s" />
            <div className="text-3xl pt-4">Chris Froome</div>
          </div>
          <div>
            
          </div>
          <div className="text-center text-4xl shadow-xl col-span-4 font-extrabold border mx-2 mt-10 border-blue-800">
            Bienvenido a tu entrenamiento Chris
          </div>
        </menu>
        <menu className="grid grid-cols-2 md:grid-cols-3 mt-20">
          <div className="ml-1 border-x-4 grid grid-cols-1 text-3xl h-auto w-full">
            <p className="text-3xl font-semibold text-blue-700 ">Planes de Entrenamiento</p>
            <a href="" className="flex gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno sprints
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className=" flex gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno de una semana
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className="flex gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno por intervalos
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
            <a href="" className="flex gap-2 text-xl shadow-sm text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Entreno de fuerza
              <svg className="h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-x-4 text-2xl w-full ">
            <p className="col-span-2 text-3xl font-semibold text-blue-700">Entreno de hoy</p>
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-3 col-span-2 h-20 w-full">
            <p className="col-span-3 flex gap-20">
              Road Cycling
              <svg className="h-10 w-10 text-lime-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
            </p>
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>            <p className="">2:00:00</p>
            <p className="">56 km</p>
            </div>
          </div>

          <div className="pl-1 text-2xl grid grid-cols-1">
            <p className="text-3xl font-semibold text-blue-700">Eventos</p>

            <a href="" className="flex shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Vuelta a España
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Tour de France
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Vuelta a Cantalunya
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            <a href="" className="flex shadow-sm gap-2 text-xl text-black hover:bg-[#2f5aa8] text-left p-2 rounded hover:text-gray-50 ">
              Giro De Itailia
            <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>            
            </a>
            
          </div>
        </menu>
      </nav>

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
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="">2:00:00</p>
              <p className="col-span-3">56 km</p>
            </div>
          </div>
          <div className="border-2 h-auto border-slate-500 ">
            2
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="">5:00:00</p>
              <p className="col-span-3">160 km</p>
            </div>
          </div>
          <div className="border-2  border-slate-500 ">
            3
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="">3:00:00</p>
              <p className="col-span-3">100 km</p>
            </div>
          </div>
          <div className="border-2  border-slate-500 ">
            4
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="">2:00:00</p>
              <p className="col-span-3">56 km</p>
            </div>
          </div>
          <div className="border-2 border-slate-500 ">
            5
            <div className="bg-slate-300 rounded border-2 shadow-2xl border-blue-950 grid grid-cols-1 md:grid-cols-3 col-span-2 h-20 w-full">
              <p className="col-span-3 flex">
                Road Cycling
              </p>
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
              <p className="">3:00:00</p>
              <p className="col-span-3">90 km</p>
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
          </div>
        </menu>

        <div className="order-1 flex flex-col gap-1">
          <div className=" text-black hover:bg-[#2f5aa8] text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#training" className="flex">
              <svg  className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
              <h3 className="font-thin">Agregar entrenamiento</h3>
            </a>
          </div>
          <div className=" text-black hover:bg-[#2f5aa8] text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#evento" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="9" r="6" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></svg>
              <h3 className="font-thin">Agregar Competencia</h3>
            </a>
          </div>
          <div className=" text-black hover:bg-[#2f5aa8] text-center p-2 m-2 rounded hover:text-gray-50 ">
            <a href="#recordar" className="flex">
              <svg className="h-8 w-8 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
              <h3 className="font-thin">Agregar Recordatorio</h3>
            </a>
          </div>
        </div>
      </nav>

      <nav id="#training" className=" shadow-2xl border-2 border-black p-3 m-10 h-96 w-full">
        
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 col-span-2">
            <div className="grid grid-cols-4 grid-rows-4 col-span-4 gap-y-5">
                <div className="col-span-3 ">
                  
                  <label htmlFor="Name" className=""></label>
                  <input type="text" id="Name" name="Name" className="border-2 border-black w-[80%] h-full" />
                  
                </div>
                <div className="col-span-4 row-span-2 col-start-1 row-start-2">
                  <textarea name="textarea" id="text_training" className="h-full w-full border-2 border-black"> escribe lo que sea</textarea>
                </div>
                <div className="col-start-1 row-start-4 border-2 border-black">
                  <button className=" text-black hover:bg-[#16ef0b] bg-[#2f5aa8] text-center h-full w-full rounded hover:text-gray-50 ">Subir</button>
                </div>
                <div className="col-start-4 row-start-4 border-2 border-black">
                  4
                </div>
                <div className="col-start-4 row-start-1 w-10 ml-40">
                  <a href="#home" className="">
                    <svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </a>
                </div>
            </div>
    
        </div>
      </nav>
    </main>
  );
}
