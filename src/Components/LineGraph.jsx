import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import '../SCSS/graph.scss';

export default class LineGraph extends React.Component {
  state = {
    dataLine: {
      labels: ["", "2007","" ,"2009","", "2011"],
      datasets: [
        {
          backgroundColor: "white",
          borderColor: 'rgb(107, 113, 233)',
          pointBorderWidth: 4,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [50, 75, 35, 40, 75, 100]
        },
        {
          backgroundColor: 'white',
          borderColor: '#C7D0EE',
          pointBorderColor: 'rgb(217, 225, 253)',
          pointBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 75, 15,50, 100, 60]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataLine} 
          options={{
            responsive: true,
            legend: {
              display: false
            },
            
            scales: {
              xAxes: [{
                
                 gridLines: {
                    display: false
                 }
              }],
              yAxes: [{
                ticks:{
                  display:false,
              },
                 gridLines: {
                    display: false
                 },
                 scaleShowLabels: false,
              }]
           }
          }} />

      </MDBContainer>
    );
  }
}