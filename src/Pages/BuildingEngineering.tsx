// import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

export function BuildingEngineering() {
  // const [serverData, setServerData] = useState('');

  // useEffect(() => {
  //   async function readServerData() {
  //     const resp = await fetch('/api/hello');
  //     const data = await resp.json();

  //     console.log('Data from server:', data);

  //     setServerData(data.message);
  //   }

  //   readServerData();
  // }, []);

  return (
    <>
      <div className="full-width-title">
        <h2>Building Engineering</h2>
        <h3>
          The team at Advanced Building Services provides a boutique approach
          establishing what you are looking for and need to achieve optimal
          building performance with our team of engineers with 40+ years of
          experience. The key to success is how we match expertise with
          personality for each individual project.
        </h3>
      </div>
      <div className="column-container">
        <div className="columns-sm">
          <div className="box-border">
            <img
              src="/src/assets/3RDClassEngineers.jpg"
              alt="3rd class engineers picture"
            />
            <h4>3rd Class Engineer</h4>
            <p>
              Body text for whatever you'd like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
          <div className="box-border">
            <img
              src="/src/assets/full time or part time.jpg"
              alt="full time or part time work picture"
            />
            <h4>Full-time or Part-time</h4>
            <p>
              Body text for whatever you'd like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
          <div className="box-border">
            <img
              src="/src/assets/boiler room plant services.jpg"
              alt="Boiler Room Plant Services picture"
            />
            <h4>Boiler Room Plant Services</h4>
            <p>
              Body text for whatever you'd like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
        </div>
        <div className="columns-sm">
          <div className="box-border">
            <img
              src="/src/assets/maintenence engineering programs.jpg"
              alt="Maintenance Engineering Programs picture"
            />
            <h4>Maintenance Engineering Programs</h4>
            <p>
              Body text for whatever you'd like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
          <div className="box-border">
            <img
              src="/src/assets/weekly engineering services.jpg0"
              alt="Weekly Engineering Services picture"
            />
            <h4>Weekly Engineering Services</h4>
            <p>
              Body text for whatever you'd like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
