import React, { useState, useRef } from 'react';
import { musicTracks } from '../data';

const TrackPlayer = ({ track, isPlaying, onTogglePlay }) => {
  const audioRef = useRef(null);
  
  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="music-player-card d-flex align-items-center mb-3 bg-white p-3 shadow-sm" style={{borderRadius: '20px', transition: '0.3s'}}>
      <button 
        onClick={() => onTogglePlay(track.title)}
        className="btn p-0 d-flex align-items-center justify-content-center mr-4"
        style={{
            width: '40px', 
            height: '40px', 
            marginRight: '20px',
            borderRadius: '50%', 
            backgroundColor: '#213528', 
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0
        }}
      >
        {isPlaying ? (
            <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>❚❚</span>
        ) : (
            <span style={{fontSize: '1.5rem', marginLeft: '5px'}}>▶</span>
        )}
      </button>

      <div className="flex-grow-1">
        <h5 className="mb-0" style={{fontFamily: 'Playfair Display, serif'}}>{track.title}</h5>
        <small className="text-muted">Traditional Folk Song</small>
      </div>

      <audio ref={audioRef} src={track.url} onEnded={() => onTogglePlay(null)} />
      
      <div className="d-none d-md-block text-muted ml-3" style={{opacity: 0.5}}>
        {isPlaying ? (
             <div className="d-flex align-items-end" style={{height: '30px', gap: '3px'}}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} style={{
                        width: '4px', 
                        height: `${Math.random() * 100}%`, 
                        backgroundColor: '#C26D53',
                        animation: `bounce 0.5s infinite alternate ${i * 0.1}s`
                    }} />
                ))}
             </div>
        ) : (
            <span style={{letterSpacing: '2px', fontSize: '0.8rem'}}>00:00 / 04:38</span>
        )}
      </div>
      
      <style>{`
        @keyframes bounce {
            from { height: 20%; }
            to { height: 100%; }
        }
      `}</style>
    </div>
  );
};

const LocalMusic = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const handleTogglePlay = (title) => {
    if (currentSong === title) {
      setCurrentSong(null);
    } else {
      setCurrentSong(title);
    }
  };

  return (
    <section id="music" className="py-5" style={{backgroundColor: '#F2EFE9'}}>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-5 mb-5 mb-md-0">
                <span className="section-subtitle text-left d-block mb-2" style={{color: '#C26D53', letterSpacing: '2px', fontWeight: 'bold'}}>LISTEN</span>
                <h2 className="text-left mb-3 display-4">Sounds of the Land</h2>
                <p className="text-muted" style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                    Immerse yourself in the traditional melodies of the Batak people. 
                    These songs tell stories of love, homeland, and heritage, preserved through generations.
                </p>
            </div>

            <div className="col-md-7">
                {musicTracks.map((track, index) => (
                    <TrackPlayer 
                        key={index} 
                        track={track} 
                        isPlaying={currentSong === track.title}
                        onTogglePlay={handleTogglePlay}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default LocalMusic;