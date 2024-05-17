import React from 'react';

const musicTracks = [
  {
    title: 'Butet',
    // artist: 'Thania',
    url: '/audio/butet.mp3'
  },
  {
    title: 'Sinanggar Tulo',
    // artist: 'Artist 2',
    url: '/audio/sinanggar.mp3'
  },
  {
    title: 'Alusi Au',
    // artist: 'Artist 2',
    url: '/audio/alusi.mp3'
  },
];

const LocalMusic = () => {
  return (
    <section id="music" className="local-music py-5">
      <div className="container">
        <h2 className="text-center mb-5">Local Music</h2>
        <div className="list-group">
          {musicTracks.map((track, index) => (
            <div key={index} className="list-group-item">
              <h5 className="mb-1">{track.title}</h5>
              {/* <p className="mb-1">{track.artist}</p> */}
              <audio controls>
                <source src={track.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalMusic;
