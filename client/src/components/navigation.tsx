import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="bg-medium-gray shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <button className="text-2xl font-black text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105 relative border-2 border-gray-600 hover:border-white px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-lg backdrop-blur-sm"
                      style={{
                        letterSpacing: '0.1em',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                      }}>
                <i className="fas fa-music mr-2 text-gray-400"></i>
                <span className="relative">
                  MELVIN
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-400 to-white transform scale-x-0 hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                </span>
              </button>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/king-von">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/king-von' 
                    ? 'bg-gradient-to-r from-yellow-600 to-red-600 text-white border-yellow-400 shadow-lg shadow-yellow-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-600 hover:text-white border-gray-600 hover:border-yellow-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-crown mr-1 text-yellow-400"></i>VON
              </button>
            </Link>
            <Link href="/melly">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/melly' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-lg shadow-purple-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white border-gray-600 hover:border-purple-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-heart mr-1 text-purple-400"></i>MELLY
              </button>
            </Link>
            <Link href="/lil-durk">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/lil-durk' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400 shadow-lg shadow-blue-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white border-gray-600 hover:border-blue-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-microphone mr-1 text-blue-400"></i>DURK
              </button>
            </Link>
            <Link href="/lil-baby">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/lil-baby' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white border-green-400 shadow-lg shadow-green-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white border-gray-600 hover:border-green-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-dollar-sign mr-1 text-green-400"></i>BABY
              </button>
            </Link>
            <Link href="/lil-loaded">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/lil-loaded' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-400 shadow-lg shadow-red-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:text-white border-gray-600 hover:border-red-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-star mr-1 text-red-400"></i>LOADED
              </button>
            </Link>
            <Link href="/juice-wrld">
              <button 
                className={`px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs border-2 ${
                  location === '/juice-wrld' 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-lg shadow-purple-400/25' 
                    : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white border-gray-600 hover:border-purple-400 backdrop-blur-sm'
                }`}
              >
                <i className="fas fa-music mr-1 text-purple-400"></i>JUICE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
