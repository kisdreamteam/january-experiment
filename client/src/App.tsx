function App() {
  return (
    <div className="h-screen bg-blue-800 flex"> 

      <div className="flex flex-row bg-yellow-400 w-full">

        <div className="flex flex-col bg-red-500 w-[250px] ml-2">
        </div>

        <div className="flex flex-col bg-green-500 w-full ml-2 mt-2 mr-2">
            <nav className="h-[150px] bg-gray-200">
            </nav>
            <main className="h-full bg-gray-800">
            </main>
            <footer className="h-[150px] bg-gray-500">
            </footer>
        </div>

      </div>
    </div>
  )
}
export default App
