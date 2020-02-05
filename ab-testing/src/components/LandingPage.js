import React from 'react';
import { Experiment, Variant, emitter, experimentDebugger } from '@marvelapp/react-ab-test';
import MixPanel from 'mixpanel';

import './_landingPage.scss';

require('dotenv').config();

const mixpanel = MixPanel.init(`process.env.REACT_APP_MIXPANEL_TOKEN`);


experimentDebugger.enable();
emitter.defineVariants('button-test', ['control', 'blue', 'green', 'gold'], [25, 25, 25, 25])

class LandingPage extends React.Component {
  onButtonClick =()=>{
    emitter.emitWin('button-test');
  }

  render(){
    return (
      <div className='component-wrapper'>
        <header>
          Robots are Cool
        </header>
        <div className='description'>
          The word robot can refer to both physical robots and virtual software agents, but the latter are usually referred to as bots.[13] There is no consensus on which machines qualify as robots but there is general agreement among experts, and the public, that robots tend to possess some or all of the following abilities and functions: accept electronic programming, process data or physical perceptions electronically, operate autonomously to some degree, move around, operate physical parts of itself or physical processes, sense and manipulate their environment, and exhibit intelligent behavior, especially behavior which mimics humans or other animals.[14][15] Closely related to the concept of a robot is the field of Synthetic Biology, which studies entities whose nature is more comparable to beings than to machines.
        </div>
        <Experiment name='button-test'>
          <Variant name='control'>
            <button className='button-control' onClick={ this.onButtonClick }>Learn More...</button>
          </Variant>
          <Variant name='blue'>
            <button className='button-blue' onClick={ this.onButtonClick }>Learn More...</button>
          </Variant>
          <Variant name='green'>
            <button className='button-green' onClick={ this.onButtonClick }>Learn More...</button>
          </Variant>
          <Variant name='gold'>
            <button className='button-gold'onClick={ this.onButtonClick }>Learn More...</button>
          </Variant>
        </Experiment>
      </div>
    )
  }
}

emitter.addPlayListener('button-test', (experimentName, variantName)=>{
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

emitter.addWinListener('button-test', (experimentName, variantName)=>{
  console.log(`Variant ${variantName} of experiment ${experimentName} has been clicked`);
  mixpanel.track(`${experimentName} ${variantName}`, {
    experiment: experimentName,
    variant: variantName
  })
});


export default LandingPage;