import Calculator from './Calculator'

function App() {
  return (
    <div className="h-screen bg-blue-800 flex"> 
      <div className="w-full bg-yellow-500 flex flex-row-3 gap-5 m-2">
        <nav className="w-64 bg-red-500 text-white">
          <Calculator />
        </nav>
        <div className="bg-green-500 flex flex-col flex-1">
          <nav className="h-64 bg-blue-500 text-white">
          </nav>
          <div className="h-full bg-white text-black">
            
          </div>
          <nav className="h-64 bg-blue-500 text-white">
          </nav>
        </div>
        <nav className="w-64 bg-red-500 text-white">
          <Calculator />
        </nav>
      </div>  
    </div>
  )
}

export default App