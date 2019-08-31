import React, {Component, Fragment} from 'react';
import {Bar} from 'react-chartjs-2';




class StressLevelTracker extends Component{
    render(){
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };


        
    return(
        <Fragment>
            <div>INSERT STRESS LEVELS</div> 
            <canvas id="myChart"></canvas>
            < Bar 
            data={data}
             
            />
        </Fragment>
    )}
}

export default StressLevelTracker

