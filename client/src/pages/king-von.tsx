import { kingVonSongs, type Song } from "../data/music-data";

function SongItem({ song, index }: { song: Song; index: number }) {
  const handleClick = () => {
    window.open(song.youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="song-item flex items-center justify-between p-4 rounded-lg bg-light-gray hover:bg-neon-green hover:text-black transition-all duration-300 group cursor-pointer transform hover:scale-105"
      onClick={handleClick}
      title={`Play "${song.title}" on YouTube`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
      }}
    >
      <div className="flex items-center">
        <i className="fas fa-play-circle text-2xl mr-4 group-hover:animate-bounce text-neon-green group-hover:text-black"></i>
        <div>
          <h3 className="font-semibold">{song.title}</h3>
          <p className="text-sm text-gray-400 group-hover:text-black">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fab fa-youtube text-red-500 text-xl group-hover:text-black"></i>
        <span className="text-xs text-gray-500 group-hover:text-black">Click to Play</span>
      </div>
    </div>
  );
}

export default function KingVon() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Artist Header */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 p-1 hover:animate-pulse">
            <div 
              className="w-full h-full rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center text-white shadow-inner relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center">
                <i className="fas fa-crown text-5xl mb-2 text-yellow-300"></i>
                <div className="text-lg font-black">KING</div>
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-black text-gradient-red-yellow mb-4">
            KING VON
          </h1>
          <p className="text-xl text-gray-300">Chicago Drill Legend</p>
          <div className="flex justify-center items-center mt-4">
            <i className="fas fa-crown text-yellow-accent text-2xl animate-bounce"></i>
          </div>
        </div>

        {/* Music Playlist */}
        <div className="bg-medium-gray rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <i className="fas fa-list-ul text-neon-green mr-3"></i>
              Complete Catalog
            </h2>
            <div className="text-right">
              <p className="text-sm text-gray-400">Click any song to play on YouTube</p>
              <p className="text-xs text-neon-green">🎵 16 tracks available</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {kingVonSongs.map((song, index) => (
              <SongItem key={index} song={song} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
