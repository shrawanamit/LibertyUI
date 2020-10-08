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
          // label: "My First dataset",
          // fill: true,
          // lineTension: 0.3,
          backgroundColor: "white",
          borderColor: 'rgb(107, 113, 233)',
          // borderCapStyle: "butt",
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: "miter",
          // pointBorderColor: "rgb(205, 130,1 58)",
          // pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 4,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: "rgb(0, 0, 0)",
          // pointHoverBorderColor: "rgba(220, 220, 220,1)",
          // pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [50, 75, 35, 40, 75, 100]
        },
        {
          // label: "My Second dataset",
          // fill: true,
          // lineTension: 0.3,
          backgroundColor: 'white',
          borderColor: '#C7D0EE',
          // borderCapStyle: "butt",
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: "miter",
          pointBorderColor: 'rgb(217, 225, 253)',
          // pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 5,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: "rgb(0, 0, 0)",
          // pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          // pointHoverBorderWidth: 2,
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
            // responsive: true }

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