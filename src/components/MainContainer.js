import React, { Component } from 'react';
import {testData} from './DataManager';
import NameContainer from './NameContainer';

export class MainContainer extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      indexToShow: 0,
      personToShow: testData[0],
      hideName: false
    }
  }
  

  render() {

    var changePerson = () => {
      console.log('Hello WOlrd');
      var i = this.state.indexToShow;
      i++;
      if(Array.from(testData).length <= i) {
        i = 0;
      } 

      this.setState({
        indexToShow: i,
        personToShow: testData[i]
      })
    }

    // var hideNameShower = () => {
    //   this.setState({
    //     hideName: !this.state.hideName
    //   })
    // }

    function hideNameShower() {
      this.setState({
        hideName: !this.state.hideName
      })
    }


    return (
      <div>
        <p>Main Container. {testData[0].name}</p>
        <button onClick={changePerson}>
          Change person
        </button>
        <button onClick={hideNameShower.bind(this)}>hide</button>
        <NameContainer person={this.state.personToShow} isHidden={this.state.hideName}/>
      </div>
    )
  }
}

export default MainContainer
