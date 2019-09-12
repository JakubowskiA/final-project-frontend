import React, {Component, Fragment} from 'react';
import {Bar} from 'react-chartjs-2';
import moment from 'moment';

const NUM_SHOWN = 5

class StressLevelTracker extends Component{
    state={
        data:[],
        preLevels:[],
        postLevels:[],
        creationDates:[],
        formattedDates:[],
        index:0
    }
    
    selectData=()=>{
        
      let allData = this.state.data
      let displayData
      if (this.state.index>NUM_SHOWN){
        displayData = allData.slice((this.state.index-NUM_SHOWN), this.state.index)
      } else{
        displayData = allData.slice(0, this.state.index)
      }

      let creationDates = []
      let preLevels = []
      let postLevels = []
        
      displayData.forEach(a=>(
        preLevels.push(Object.values(a)[1]),
        postLevels.push(Object.values(a)[6]),
        creationDates.push(Object.values(a)[8]),
        this.setState({preLevels}),
        this.setState({postLevels}),
        this.setState({creationDates})
      ))

    // Formats dates
      let formattedDates = creationDates.map(
        date=>(
            moment(String(date)).format('lll')
        )
      )
      this.setState({formattedDates})      
    }

    // Retrieves data from earlier entries
    earlierEntries=()=>{
      let currentIndexE = this.state.index
      this.setState({index:currentIndexE-NUM_SHOWN}, ()=>this.selectData())
    }

    // Retrieves data from later entries
    laterEntries=()=>{
      let currentIndexL = this.state.index
      this.setState({index:currentIndexL+NUM_SHOWN}, ()=>this.selectData())      
    }

    // Retrieves user's stress level data
    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userId}/stress_levels`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accepts: 'application/json',
              'User-Id':this.props.userId
            }
          })
            .then(resp => resp.json())
            .then(data => {
              this.setState({ data }); 
              this.setState({ index:this.state.data.length })           
              this.selectData()
            });
    }

    render(){
        
        const dates = this.state.creationDates.forEach(
            date=> moment(String(date)).format('LLL')
        )

        
        const data = {
            labels: [...this.state.formattedDates],
            datasets: [
              {
                label: 'Initial Stress Levels',
                backgroundColor: 'rgba(121, 214, 228, 0.8)',
                borderColor: 'rgb(121, 214, 228)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(121, 214, 228, 0.6)',
                hoverBorderColor: 'rgb(121, 214, 228)',
                data: [...this.state.preLevels]
              },
              {
                label: 'Final Stress Levels',
                
                backgroundColor: 'rgba(126, 241, 226, 0.8)',
                borderColor: 'rgb(126, 241, 226)',
                // backgroundColor: 'rgb(159, 240, 178, 0.7)',
                // borderColor: 'rgb(159, 240, 178)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(126, 241, 226, 0.5)',
                hoverBorderColor: 'rgb(126, 241, 226)',
                data: [...this.state.postLevels]
              }
            ],
          }


        
    return(
        <Fragment >
            <div >
            < Bar 
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
                scales: {
                  yAxes: [{
                    ticks: {
                        min: 0, // minimum value
                        max: 10 // maximum value
                    }
                  }]
                }
              }}
            />
            <div >
            <button className="btn earlier-btn normal-buton" onClick={this.earlierEntries} disabled={this.state.index <= NUM_SHOWN}>Earlier</button>
            <button className="btn later-btn normal-buton" onClick={this.laterEntries} disabled={this.state.index === this.state.data.length}>Later</button>
            </div>
            <br/><br/>
            </div>
        </Fragment>
    )}
}

export default StressLevelTracker

