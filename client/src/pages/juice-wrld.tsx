import { Link } from "wouter";

export default function JuiceWrld() {
  const songs = [
    { title: "Lucid Dreams", url: "https://www.youtube.com/watch?v=mzB1VGEGcSU" },
    { title: "All Girls Are The Same", url: "https://www.youtube.com/watch?v=h3h035Eyz5A" },
    { title: "Robbery", url: "https://www.youtube.com/watch?v=iI34LYmJ1Fs" },
    { title: "Legends", url: "https://www.youtube.com/watch?v=oQUZAYLIb5w" },
    { title: "Armed And Dangerous", url: "https://www.youtube.com/watch?v=qdvXqGz-hms" },
    { title: "Bandit (with YoungBoy Never Broke Again)", url: "https://www.youtube.com/watch?v=yyp36GaJ5hQ" },
    { title: "Righteous", url: "https://www.youtube.com/watch?v=QvXY5_3Qz1o" },
    { title: "Life's a Mess (with Halsey)", url: "https://www.youtube.com/watch?v=Sw5fNI400E4" },
    { title: "Come & Go (with Marshmello)", url: "https://www.youtube.com/watch?v=CBYhC9MNFxE" },
    { title: "Wishing Well", url: "https://www.youtube.com/watch?v=DIxdYGPXwUo" },
    { title: "Conversations", url: "https://www.youtube.com/watch?v=4xCQzXjfKhY" },
    { title: "Hate Me (with Ellie Goulding)", url: "https://www.youtube.com/watch?v=LVPqHKeQsws" },
    { title: "Hear Me Calling", url: "https://www.youtube.com/watch?v=XHc5Q_KFxHc" },
    { title: "Fast", url: "https://www.youtube.com/watch?v=pq_3eRb3jXg" },
    { title: "Empty", url: "https://www.youtube.com/watch?v=ARNSaX7MQ6c" },
    { title: "Moonlight", url: "https://www.youtube.com/watch?v=YQaYKSz3Gqo" }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-purple-900 via-black to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Link href="/">
              <button className="text-purple-400 hover:text-white transition-colors duration-300 flex items-center mx-auto mb-6">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </button>
            </Link>
            
            <div className="relative mb-6">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 filter drop-shadow-lg">
                JUICE WRLD
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-2xl text-purple-300 font-semibold mb-4">999 Forever • Emo Rap Legend</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Jarad Anthony Higgins, known as Juice WRLD, was a Chicago rapper who revolutionized emo rap with his melodic style, 
              emotional vulnerability, and freestyle genius. His music touched millions with themes of love, heartbreak, and mental health.
            </p>
          </div>

          {/* Artist Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-black text-purple-400 mb-2">999</div>
              <div className="text-gray-400">Legacy</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-black text-blue-400 mb-2">Chicago</div>
              <div className="text-gray-400">Origin</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-black text-purple-400 mb-2">Emo Rap</div>
              <div className="text-gray-400">Genre</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-black text-blue-400 mb-2">Legend</div>
              <div className="text-gray-400">Status</div>
            </div>
          </div>
        </div>

        {/* Music Collection */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Essential Tracks Collection
          </h2>
          
          <div className="grid gap-4">
            {songs.map((song, index) => (
              <div key={index} 
                   className="group bg-black/20 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transform hover:scale-[1.02]"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-music text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {song.title}
                      </h3>
                      <p className="text-purple-400 text-sm">Juice WRLD • Click to Play</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a href={song.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                      <i className="fab fa-youtube text-red-500 mr-2 text-lg"></i>
                      Play on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Legacy */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 text-center">
          <h3 className="text-3xl font-bold text-purple-300 mb-4">999 Forever</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            "Legends never die, when the world's calling you. Can you hear them screaming out your name?" 
            Juice WRLD's impact on music and mental health awareness continues to inspire millions worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}