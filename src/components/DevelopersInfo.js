import React from 'react';

const developers = [
  {
    name: 'Mochamad Daffa',
    role: '00000099702',
    email: 'mochamaddaffa05@gmail.com',
    instagram: 'https://www.instagram.com/_daaps/',
    github: 'https://github.com/dapss'
  },
  {
    name: 'Calvin Leo',
    role: '00000098707',
    email: 'calvin.leo05@gmail.com',
    instagram: 'https://www.instagram.com/calvinnnleo/',
    github: '#'
  },
  {
    name: 'Gabriel Imanullah Putra P.',
    role: '00000100492',
    email: 'bggabs12@gmail.com',
    instagram: 'https://www.instagram.com/gabrielarben/',
    github: '#'
  },
  {
    name: 'Alvin Xavier Lim',
    role: '00000098775',
    email: 'alvin.xavier@student.umn.ac.id',
    instagram: 'https://www.instagram.com/alvinxavier_/',
    github: '#'
  },
];

const DevelopersInfo = () => {
  return (
    <section id='developers' className="developers-info py-5">
      <div className="container">
        <h2 className="text-center mb-5">Meet the Developers</h2>
        <div className="row">
          {developers.map((dev, index) => (
            <div className="col-md-4" key={index}>
              <div className="card developer-card">
                <div className="card-body">
                  <h5 className="card-title">{dev.name}</h5>
                  <p className="card-text">{dev.role}</p>
                  <p className="card-text"><a href={`mailto:${dev.email}`}>{dev.email}</a></p>
                  <p className="card-text"><a href={dev.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                  <p className="card-text"><a href={dev.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersInfo;
