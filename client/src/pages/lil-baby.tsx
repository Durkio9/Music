import { Link } from "wouter";
import { lilBabySongs } from "../data/music-data";

export default function LilBaby() {
  const handlePlaySong = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-dark-gray to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl font-black text-gradient-green-orange mb-4">
              LIL BABY
            </h1>
            <p className="text-xl text-green-400 font-medium">Quality Control Music</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-green-400 hover:scale-105 transition-transform duration-300 shadow-2xl">
              <i className="fas fa-dollar-sign text-6xl text-yellow-400"></i>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-medium-gray p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-green-400 font-bold text-lg mb-2">Real Name</h3>
              <p className="text-gray-300">Dominique Armani Jones</p>
            </div>
            <div className="bg-medium-gray p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-green-400 font-bold text-lg mb-2">Origin</h3>
              <p className="text-gray-300">Atlanta, Georgia</p>
            </div>
            <div className="bg-medium-gray p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300">
              <h3 className="text-green-400 font-bold text-lg mb-2">Genre</h3>
              <p className="text-gray-300">Trap / Hip Hop</p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Atlanta trap rap superstar known for melodic flows, chart-topping hits, and conscious lyrics 
              addressing social issues while maintaining street credibility. Grammy-nominated artist with multiple platinum albums.
            </p>
            <i className="fas fa-trophy text-green-400 text-2xl animate-bounce"></i>
          </div>
        </div>

        {/* Music Playlist */}
        <div className="bg-medium-gray rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <i className="fas fa-list-ul text-green-400 mr-3"></i>
              Complete Catalog
            </h2>
            <div className="text-right">
              <p className="text-sm text-gray-400">Click any song to play on YouTube</p>
              <p className="text-xs text-green-400">🎵 16 tracks available</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {lilBabySongs.map((song, index) => (
              <div 
                key={index}
                className="bg-dark-gray p-4 rounded-lg flex items-center justify-between hover:bg-green-500/10 transition-all duration-300 cursor-pointer song-item group border border-transparent hover:border-green-400/50"
                onClick={() => handlePlaySong(song.youtubeUrl)}
                title={`Play ${song.title} on YouTube`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">{song.title}</h3>
                    <p className="text-gray-400 text-sm">{song.artist}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to Play
                  </span>
                  <i className="fab fa-youtube text-red-500 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  <i className="fas fa-play-circle text-green-400 text-2xl group-hover:animate-pulse"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              <i className="fas fa-home mr-2"></i>
              Back to Hub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}