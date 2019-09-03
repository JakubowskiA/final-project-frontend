import React, {Component, Fragment} from 'react';
import {Bar} from 'react-chartjs-2';
// import {pick} from 'underscore';
import moment from 'moment';


class StressLevelTracker extends Component{
    state={
        data:[],
        preLevels:[],
        postLevels:[],
        creationDates:[],
        formattedDates:[]
    }
    
    selectData=()=>{
// NEXT STEPS!!!!!!!! TO LIMIT DATA, BEFORE CHART INFO IS EXTRACTED USE SLICE TO GRAB X MOST RECENTLY CREATED PIECES OF DATA
        let allData = this.state.data
        if (allData.length > 15){
            allData.slice(-15)
        } 

        console.log('ohi', allData);
        // allData.forEach()
        let creationDates = []
        let preLevels = []
        let postLevels = []

        
          allData.forEach(a=>(
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
                moment(String(date)).format('ll')
            )
        )
        this.setState({formattedDates})
        console.log('datesop',formattedDates)
        
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
                backgroundColor: 'rgba(56, 215, 224, 0.4)',
                borderColor: 'rgb(56, 215, 224)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                // data: this.state.preLevels
                data: [...this.state.preLevels]
              },
              {
                label: 'Final Stress Levels',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [...this.state.postLevels]
              }
            ],
          }


        
    return(
        <Fragment>
            <div>INSERT STRESS LEVELS</div> 
            {/* <canvas id="myChart"></canvas> */}
            <div>
            < Bar 
            data={data}
            options={{
                scales: {
                  yAxes: [{
                    // ticks: {
                    //   beginAtZero: true
                    // }
                    ticks: {
                        min: 0, // minimum value
                        max: 10 // maximum value
                    }
                  }]
                }
              }}
            />
            </div>
        </Fragment>
    )}
}

export default StressLevelTracker

