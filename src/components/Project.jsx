import React from 'react';
import AirBusan from './AirBusan';
import Eight from './Eight';
import Movie from './Movie';
import Cook from './Cook';

const Project = () => {
  return (
    <>
    <section className='project-box'>
      <AirBusan/>
    </section>
    <section className='project-box'>
       <Eight/>
    </section>
    <section className='project-box'>
       <Movie/>
    </section>
    <section className='project-box'>
       <Cook/>
    </section>
    </>
  );
};

export default Project;