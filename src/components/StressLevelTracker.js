import React, {Component, Fragment} from 'react';
import {Bar} from 'react-chartjs-2';
// import {pick} from 'underscore';
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
        
        console.log('i', this.state.index);
        
        let allData = this.state.data
        let displayData
        if (this.state.index>NUM_SHOWN){
          displayData = allData.slice((this.state.index-NUM_SHOWN), this.state.index)
        } else{
          displayData = allData.slice(0, this.state.index)
        }
      //   if (this.state.data.length>NUM_SHOWN){
      //   displayData = allData.slice((this.state.index-NUM_SHOWN), this.state.index)
      // } else{
      //   displayData = allData
      // }
        // if (allData.length > 15){
        //     allData.slice(-15)
        // } 

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
        // preLevels.push(Object.values(object1)[1])
        // console.log('pre',preLevels)
        // console.log('post',postLevels)
        // console.log('creationDates',creationDates)
        // console.log(this.state);
        

        let formattedDates = creationDates.map(
            date=>(
                // moment(String(date)).format('LLL')
                moment(String(date)).format('lll')
            )
        )
        this.setState({formattedDates})
        console.log('datesop',formattedDates)
        
    }

    earlierEntries=()=>{
      console.log('gu', NUM_SHOWN);
      
      let currentIndexE = this.state.index
      // if (currentIndex > NUM_SHOWN){
      this.setState({index:currentIndexE-NUM_SHOWN}, ()=>this.selectData())
    // }
      
    }

    laterEntries=()=>{
      let currentIndexL = this.state.index
      // if (currentIndex < this.state.data.length){
      this.setState({index:currentIndexL+NUM_SHOWN}, ()=>this.selectData())
    // }
      
    }

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
        // console.log('from backend',this.state.data);
        // console.log('pres', this.state.preLevelData);
        
        
        // let xLabels = this.state.data.forEach(mapCreatedAt)

        //     entry=>
        //     entry.map(entry=>
        //         entry.created_at)
        //     )
        // console.log('xla', xLabels);
        const dates = this.state.creationDates.forEach(
            date=> moment(String(date)).format('LLL')
            // date=> moment(String(date)).format('LLL')
        )
            // console.log('dates', dates)

        
        const data = {
            labels: [...this.state.formattedDates],
            datasets: [
              {
                label: 'Initial Stress Levels',
                backgroundColor: 'rgba(56, 215, 224, 0.5)',
                borderColor: 'rgb(56, 215, 224)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(56, 215, 224, 0.3)',
                hoverBorderColor: 'rgb(56, 215, 224)',
                // data: this.state.preLevels
                data: [...this.state.preLevels]
              },
              {
                label: 'Final Stress Levels',
                backgroundColor: 'rgb(61, 255, 122, 0.5)',
                borderColor: 'rgb(61, 255, 122)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(61, 255, 122, 0.3)',
                hoverBorderColor: 'rgb(61, 255, 122)',
                data: [...this.state.postLevels]
              }
            ],
          }


        
    return(
        <Fragment >
            <div  >
            < Bar 
            data={data}
            options={{
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
            <button onClick={this.earlierEntries} disabled={this.state.index <= NUM_SHOWN}>Earlier</button>
            <button onClick={this.laterEntries} disabled={this.state.index === this.state.data.length}>Later</button>
            </div>
        </Fragment>
    )}
}

export default StressLevelTracker

