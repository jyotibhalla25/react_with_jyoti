import { useState } from "react"

function App() {

  const [color,setColor] = useState("black")

  return (
    
          <div className="  h-screen flex flex-wrap fixed  justify-center bottom-1 inset-x-0 px-2"
          style={{backgroundColor:color}}
  >

  <div className="bg-white h-16  justify-center  p-4 rounded-3xl shadow-lg mt-72"  
  >
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-2" style={{background:"red"}}  onClick={()=> setColor("red")}>
  Red
</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{background:"green"}}  onClick={()=> setColor("green")}>
  Green
</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-2" style={{background:"olive"}} onClick={()=> setColor("olive")}>
  Yellow
</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-2" style={{background:"blue"}} onClick={()=> setColor("blue")}>
  Blue
</button>
<button className="outline-none px-4 py-1 rounded-full text-black shadow-lg ml-2" style={{background:"white"}} onClick={()=> setColor("white")}>
  White
</button>
<button className="outline-none px-4 py-1 rounded-full text-black shadow-lg ml-2" style={{background:"pink"}} onClick={()=> setColor("pink")}>
  Pink
</button>
  </div>

    </div>


  )
}

export default App
