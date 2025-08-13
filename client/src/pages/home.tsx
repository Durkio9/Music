import { Link } from "wouter";

export default function Home() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated background with emerging elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-gray via-medium-gray to-dark-gray">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-16 left-8 text-4xl text-neon-green animate-bounce-slow opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>♪</div>
            <div className="absolute top-24 right-16 text-3xl text-neon-orange animate-pulse-slow opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>♫</div>
            <div className="absolute bottom-20 left-12 text-4xl text-purple-accent animate-bounce opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>♬</div>
            <div className="absolute bottom-16 right-20 text-3xl text-yellow-accent animate-pulse opacity-0 animate-fade-in-up" style={{animationDelay: '2s'}}>♭</div>
          </div>
        </div>
        
        {/* Main Logo with Clean Design */}
        <div className="relative z-10 text-center opacity-0 animate-emerge-up">
          <div className="relative mb-8 p-12 rounded-3xl bg-gradient-to-br from-slate-800/40 via-gray-900/40 to-black/40 backdrop-blur-xl shadow-2xl">
            {/* Floating background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl animate-pulse"></div>
            
            {/* Main logo with vibrant styling */}
            <h1 className="relative text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-500 cursor-pointer" 
                style={{
                  letterSpacing: '0.15em',
                  textShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                  filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.8))'
                }}>
              MELVIN
            </h1>
            
            {/* Dynamic underlines */}
            <div className="mt-6 mx-auto w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="mt-2 mx-auto w-24 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60"></div>
            
            {/* Subtitle with enhanced styling */}
            <div className="mt-6 space-y-2">
              <p className="text-xl md:text-2xl text-cyan-300 font-semibold tracking-wide">Chicago Drill & Melodic Rap Hub</p>
              <p className="text-md text-purple-300 font-medium">Authentic Street Music Collection</p>
            </div>
          </div>
          
          {/* Enhanced music stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-700/30 p-4 rounded-xl border border-cyan-500/30">
              <div className="text-2xl font-black text-cyan-300">96</div>
              <div className="text-cyan-200 text-sm">Total Tracks</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 p-4 rounded-xl border border-purple-500/30">
              <div className="text-2xl font-black text-purple-300">6</div>
              <div className="text-purple-200 text-sm">Artists</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-700/30 p-4 rounded-xl border border-pink-500/30">
              <div className="text-2xl font-black text-pink-300">HD</div>
              <div className="text-pink-200 text-sm">Quality</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-700/30 p-4 rounded-xl border border-orange-500/30">
              <div className="text-2xl font-black text-orange-300">24/7</div>
              <div className="text-orange-200 text-sm">Access</div>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-6 space-x-6 opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <i className="fas fa-music text-cyan-400 text-4xl animate-bounce drop-shadow-lg hover:scale-110 transition-transform"></i>
            <i className="fas fa-headphones text-purple-400 text-4xl animate-bounce drop-shadow-lg hover:scale-110 transition-transform" style={{animationDelay: '0.2s'}}></i>
            <i className="fas fa-microphone text-pink-400 text-4xl animate-bounce drop-shadow-lg hover:scale-110 transition-transform" style={{animationDelay: '0.4s'}}></i>
            <i className="fas fa-vinyl-record text-orange-400 text-4xl animate-spin drop-shadow-lg hover:scale-110 transition-transform" style={{animationDuration: '3s'}}></i>
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
            PREMIUM FEATURES
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-500 group">
              <div className="text-center mb-4">
                <i className="fas fa-download text-4xl text-emerald-400 group-hover:animate-bounce"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Free Download</h3>
              <p className="text-gray-300 text-sm">Download all tracks in high quality format completely free</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 group">
              <div className="text-center mb-4">
                <i className="fas fa-stream text-4xl text-blue-400 group-hover:animate-pulse"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Instant Streaming</h3>
              <p className="text-gray-300 text-sm">Stream instantly without buffering or interruptions</p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-6 rounded-2xl border border-violet-500/30 hover:border-violet-400 transition-all duration-500 group">
              <div className="text-center mb-4">
                <i className="fas fa-mobile-alt text-4xl text-violet-400 group-hover:animate-bounce"></i>
              </div>
              <h3 className="text-xl font-bold text-violet-400 mb-2">Mobile Optimized</h3>
              <p className="text-gray-300 text-sm">Perfect experience across all devices and screen sizes</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-900/20 to-pink-900/20 p-6 rounded-2xl border border-rose-500/30 hover:border-rose-400 transition-all duration-500 group">
              <div className="text-center mb-4">
                <i className="fas fa-clock text-4xl text-rose-400 group-hover:animate-spin"></i>
              </div>
              <h3 className="text-xl font-bold text-rose-400 mb-2">Always Updated</h3>
              <p className="text-gray-300 text-sm">Fresh content added regularly to keep the collection current</p>
            </div>
          </div>
        </div>

        {/* Music Genres Section */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
            MUSIC GENRES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-500/30 hover:border-red-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-fire text-5xl text-red-400 group-hover:animate-pulse"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Chicago Drill</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Raw, aggressive beats with heavy 808s. Born from Chicago's South Side streets, telling real stories of survival and street life.
              </p>
              <div className="text-red-300 text-sm">
                <strong>Artists:</strong> King Von, Lil Durk, Chief Keef era
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-heart text-5xl text-purple-400 group-hover:animate-bounce"></i>
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Melodic Rap</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Emotional storytelling with melodic flows. Combines vulnerability with street authenticity, creating deeply personal narratives.
              </p>
              <div className="text-purple-300 text-sm">
                <strong>Artists:</strong> YNW Melly, Juice WRLD, Lil Loaded
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-2xl border border-green-500/30 hover:border-green-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-dollar-sign text-5xl text-green-400 group-hover:animate-spin"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Trap Hip-Hop</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Atlanta-influenced trap sounds with conscious lyrics. Hard-hitting production mixed with social commentary and success stories.
              </p>
              <div className="text-green-300 text-sm">
                <strong>Artists:</strong> Lil Baby, future collaborations
              </div>
            </div>
          </div>
        </div>

        {/* Chicago Drill History Section */}
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h2 className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8">
            CHICAGO DRILL EVOLUTION
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {/* Origins Card */}
            <div className="bg-gradient-to-br from-red-900/20 to-yellow-900/20 p-8 rounded-2xl border border-red-500/30 hover:border-red-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-city text-5xl text-red-400 group-hover:animate-pulse"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">South Side Origins</h3>
              <p className="text-gray-300 leading-relaxed">
                Born in Chicago's South Side neighborhoods like Englewood and O-Block, drill music emerged in the early 2010s as a raw, unfiltered voice of street life.
              </p>
            </div>

            {/* Sound Card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-waveform-lines text-5xl text-purple-400 group-hover:animate-bounce"></i>
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">The Sound</h3>
              <p className="text-gray-300 leading-relaxed">
                Dark, minimalist beats with heavy 808s and snappy snares. Aggressive lyrical delivery telling stories of survival, loyalty, and street code.
              </p>
            </div>

            {/* Impact Card */}
            <div className="bg-gradient-to-br from-green-900/20 to-yellow-900/20 p-8 rounded-2xl border border-green-500/30 hover:border-green-400 transition-all duration-500 group">
              <div className="text-center mb-6">
                <i className="fas fa-globe text-5xl text-green-400 group-hover:animate-spin"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Global Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                From Chicago blocks to worldwide influence. Artists like Chief Keef, King Von, and others brought drill to mainstream recognition.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Drill Evolution Timeline</h3>
          <div className="space-y-8">
            {/* 2012 */}
            <div className="flex items-center space-x-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center font-black text-white text-sm group-hover:animate-pulse shadow-lg">
                2012
              </div>
              <div className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl group-hover:from-emerald-900/20 group-hover:to-teal-900/20 transition-all duration-300 border border-gray-600/50 group-hover:border-emerald-500/50">
                <h4 className="text-xl font-bold text-emerald-400">Chief Keef Era Begins</h4>
                <p className="text-gray-300">Chief Keef releases "I Don't Like" putting Chicago drill on the worldwide map</p>
                <div className="mt-2 text-sm text-emerald-300">Impact: Global drill movement starts</div>
              </div>
            </div>

            {/* 2018 */}
            <div className="flex items-center space-x-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center font-black text-white text-sm group-hover:animate-pulse shadow-lg">
                2018
              </div>
              <div className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl group-hover:from-red-900/20 group-hover:to-orange-900/20 transition-all duration-300 border border-gray-600/50 group-hover:border-red-500/50">
                <h4 className="text-xl font-bold text-red-400">King Von's Rise</h4>
                <p className="text-gray-300">"Crazy Story" introduces storytelling drill to mainstream audiences</p>
                <div className="mt-2 text-sm text-red-300">Impact: Narrative-driven drill becomes popular</div>
              </div>
            </div>

            {/* 2019 */}
            <div className="flex items-center space-x-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-black text-white text-sm group-hover:animate-pulse shadow-lg">
                2019
              </div>
              <div className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl group-hover:from-purple-900/20 group-hover:to-pink-900/20 transition-all duration-300 border border-gray-600/50 group-hover:border-purple-500/50">
                <h4 className="text-xl font-bold text-purple-400">Melodic Fusion</h4>
                <p className="text-gray-300">Artists like YNW Melly blend drill with melodic rap creating new subgenres</p>
                <div className="mt-2 text-sm text-purple-300">Impact: Emotional vulnerability in drill music</div>
              </div>
            </div>

            {/* 2020-2024 */}
            <div className="flex items-center space-x-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center font-black text-white text-xs group-hover:animate-pulse shadow-lg">
                NOW
              </div>
              <div className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl group-hover:from-blue-900/20 group-hover:to-cyan-900/20 transition-all duration-300 border border-gray-600/50 group-hover:border-blue-500/50">
                <h4 className="text-xl font-bold text-blue-400">Digital Renaissance</h4>
                <p className="text-gray-300">Platforms like MELVIN preserve and celebrate drill culture for new generations</p>
                <div className="mt-2 text-sm text-blue-300">Impact: Cultural preservation meets modern accessibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Selection Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 text-gradient-green-orange text-3d logo-shadow">
            Featured Artists
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore complete catalogs from six legendary rap artists who shaped modern hip-hop culture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          {/* King Von Card */}
          <Link href="/king-von">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-red-black p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-red-500/30 hover:border-yellow-400">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 group-hover:from-red-500/30 group-hover:to-yellow-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-yellow-400/20 group-hover:text-yellow-400/40 transition-all duration-500 group-hover:animate-pulse">♔</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-crown text-yellow-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-yellow-accent transition-colors duration-300">
                      KING VON
                    </h3>
                    <p className="text-red-400 font-semibold">Chicago Drill King</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Master storyteller of Chicago drill. Known for vivid narratives and authentic street tales.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-yellow-400 font-bold">Origin</div>
                      <div className="text-gray-300">Parkway Gardens, Chicago</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-yellow-400 font-bold">Style</div>
                      <div className="text-gray-300">Storytelling Drill</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-yellow-accent group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* YNW Melly Card */}
          <Link href="/melly">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-purple-black p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-purple-500/30 hover:border-pink-400">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-pink-400/20 group-hover:text-pink-400/40 transition-all duration-500 group-hover:animate-bounce">♡</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-heart text-pink-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-purple-accent transition-colors duration-300">
                      YNW MELLY
                    </h3>
                    <p className="text-purple-400 font-semibold">Melodic Rap Pioneer</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Emotional storyteller blending melody with raw lyrics. Known for hit "Murder on My Mind".
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-purple-400 font-bold">Origin</div>
                      <div className="text-gray-300">Gifford, Florida</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-purple-400 font-bold">Style</div>
                      <div className="text-gray-300">Melodic Drill/Rap</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-accent group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Lil Durk Card */}
          <Link href="/lil-durk">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-purple-900 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-blue-500/30 hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-blue-400/20 group-hover:text-blue-400/40 transition-all duration-500 group-hover:animate-bounce">♪</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-microphone text-blue-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                      LIL DURK
                    </h3>
                    <p className="text-blue-400 font-semibold">OTF Leader</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Chicago drill pioneer and melodic rap innovator. Known for emotional storytelling and versatile flow.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-blue-400 font-bold">Origin</div>
                      <div className="text-gray-300">Chicago, Illinois</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-blue-400 font-bold">Style</div>
                      <div className="text-gray-300">Drill/Melodic Rap</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400 group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Lil Baby Card */}
          <Link href="/lil-baby">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900 to-blue-900 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-green-500/30 hover:border-green-400">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-green-400/20 group-hover:text-green-400/40 transition-all duration-500 group-hover:animate-bounce">$</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-dollar-sign text-green-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                      LIL BABY
                    </h3>
                    <p className="text-green-400 font-semibold">Trap Superstar</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Atlanta trap rap superstar with melodic flows and conscious lyrics addressing social issues.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-green-400 font-bold">Origin</div>
                      <div className="text-gray-300">Atlanta, Georgia</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-green-400 font-bold">Style</div>
                      <div className="text-gray-300">Trap/Hip Hop</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-400 group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Lil Loaded Card */}
          <Link href="/lil-loaded">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900 to-orange-900 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-red-500/30 hover:border-red-400">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-red-400/20 group-hover:text-red-400/40 transition-all duration-500 group-hover:animate-bounce">★</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-star text-red-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-red-400 transition-colors duration-300">
                      LIL LOADED
                    </h3>
                    <p className="text-red-400 font-semibold">6locc Star</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Dallas rap rising star known for viral hits and melodic drill style with catchy hooks.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-red-400 font-bold">Origin</div>
                      <div className="text-gray-300">Dallas, Texas</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-red-400 font-bold">Style</div>
                      <div className="text-gray-300">Melodic Drill</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-red-400 group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Juice WRLD Card */}
          <Link href="/juice-wrld">
            <div className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-purple-500/30 hover:border-purple-400">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 text-6xl text-purple-400/20 group-hover:text-purple-400/40 transition-all duration-500 group-hover:animate-bounce">999</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-music text-purple-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors duration-300">
                      JUICE WRLD
                    </h3>
                    <p className="text-purple-400 font-semibold">999 Forever</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4 group-hover:text-white transition-colors duration-300">
                    Chicago emo rap legend who revolutionized hip-hop with emotional vulnerability and melodic genius.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-purple-400 font-bold">Origin</div>
                      <div className="text-gray-300">Chicago, Illinois</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-purple-400 font-bold">Style</div>
                      <div className="text-gray-300">Emo Rap/Hip Hop</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-400 group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-play-circle mr-2 text-xl"></i>
                    <span className="font-semibold">16 Tracks Available</span>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12">Platform Analytics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400 p-6 rounded-2xl hover:from-emerald-800/50 hover:to-teal-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-emerald-300 mb-3 group-hover:animate-bounce">96</div>
              <div className="text-emerald-200 text-sm font-medium">Premium Tracks</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400 p-6 rounded-2xl hover:from-blue-800/50 hover:to-indigo-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-blue-300 mb-3 group-hover:animate-pulse">6</div>
              <div className="text-blue-200 text-sm font-medium">Elite Artists</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400 p-6 rounded-2xl hover:from-purple-800/50 hover:to-violet-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-purple-300 mb-3 group-hover:animate-bounce">100%</div>
              <div className="text-purple-200 text-sm font-medium">Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 backdrop-blur-sm border-2 border-pink-500/30 hover:border-pink-400 p-6 rounded-2xl hover:from-pink-800/50 hover:to-rose-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-pink-300 mb-3 group-hover:animate-pulse">16</div>
              <div className="text-pink-200 text-sm font-medium">Per Artist</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border-2 border-orange-500/30 hover:border-orange-400 p-6 rounded-2xl hover:from-orange-800/50 hover:to-red-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-orange-300 mb-3 group-hover:animate-bounce">HD</div>
              <div className="text-orange-200 text-sm font-medium">Audio Quality</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-sky-900/40 backdrop-blur-sm border-2 border-cyan-500/30 hover:border-cyan-400 p-6 rounded-2xl hover:from-cyan-800/50 hover:to-sky-800/50 transition-all duration-300 group">
              <div className="text-4xl font-black text-cyan-300 mb-3 group-hover:animate-spin">∞</div>
              <div className="text-cyan-200 text-sm font-medium">Pure Vibes</div>
            </div>
          </div>
          
          {/* Additional engagement stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 p-6 rounded-2xl border border-yellow-500/30">
              <i className="fas fa-users text-3xl text-yellow-400 mb-3"></i>
              <div className="text-2xl font-black text-yellow-300">10K+</div>
              <div className="text-yellow-200 text-sm">Monthly Listeners</div>
            </div>
            <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 p-6 rounded-2xl border border-lime-500/30">
              <i className="fas fa-download text-3xl text-lime-400 mb-3"></i>
              <div className="text-2xl font-black text-lime-300">50K+</div>
              <div className="text-lime-200 text-sm">Total Downloads</div>
            </div>
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 p-6 rounded-2xl border border-teal-500/30">
              <i className="fas fa-heart text-3xl text-teal-400 mb-3"></i>
              <div className="text-2xl font-black text-teal-300">95%</div>
              <div className="text-teal-200 text-sm">User Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-2xl border border-indigo-500/30">
              <i className="fas fa-globe text-3xl text-indigo-400 mb-3"></i>
              <div className="text-2xl font-black text-indigo-300">Global</div>
              <div className="text-indigo-200 text-sm">Worldwide Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
