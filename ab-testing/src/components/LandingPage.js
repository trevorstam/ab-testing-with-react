import React from 'react';

class LandingPage extends React.Component {
  render(){
    return (
      <>
        <header>
          Robots are Cool
        </header>
        <div className='description'>
          The word robot can refer to both physical robots and virtual software agents, but the latter are usually referred to as bots.[13] There is no consensus on which machines qualify as robots but there is general agreement among experts, and the public, that robots tend to possess some or all of the following abilities and functions: accept electronic programming, process data or physical perceptions electronically, operate autonomously to some degree, move around, operate physical parts of itself or physical processes, sense and manipulate their environment, and exhibit intelligent behavior, especially behavior which mimics humans or other animals.[14][15] Closely related to the concept of a robot is the field of Synthetic Biology, which studies entities whose nature is more comparable to beings than to machines.
        </div>
        <button className='call-event'>Learn More...</button>
      </>
    )
  }
}

export default LandingPage;