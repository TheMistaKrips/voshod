import './App.css'
import Sun from './assets/sun1.png'
import Login from './assets/login.png'
import Art from './assets/voshodart.png'

function App() {

  return (
    <>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Art})` }}>
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4" >
          {/* Logo */}
          <div className="text-white font-bold text-xl flex items-center">
            <img src={Sun} alt="Logo" className="w-6 h-6 mr-2" />
            <span>VOSHOD | GAME</span>
          </div>

          {/* Links and Log In */}
          <div className="text-white space-x-8 flex items-center">
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">Контакты</a>
            <a href="#" className="hover:text-orange-400 flex items-center">
              <span>Log In</span>
              <img src={Login} alt="Log In" className="ml-2 w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Hero Section Content */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-7xl text-white font-bold mb-4">ВОСХОД</h1>
          <h2 className="text-white text-5xl font-bold mb-2">VOSHOD</h2>
          <p className="text-white text-xl mb-6">Как зарождалась история</p>
          <button className="bg-orange-600 text-white text-lg font-bold py-2 px-6 hover:bg-orange-500 rounded-lg">Играть!</button>
        </div>

      </div >
    </>
  )
}

export default App
