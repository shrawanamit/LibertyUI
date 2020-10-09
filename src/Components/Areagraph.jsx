import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import '../SCSS/graph.scss';

export default class Areagraph extends React.Component {
  state = {
    dataLine: {
      labels: ["2013", "2014","2015" ,"2016","2017", "2018","2019"],
      datasets: [
        {
          backgroundColor: "rgb(173, 180, 245)",
          borderColor: 'rgb(104, 110, 232)',
          borderWidth:2,
          pointBorderWidth: 3,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [150, 200, 150, 200, 350, 320,400]
        },
        {
          backgroundColor: 'rgb(217, 225, 253)',
          borderColor: 'rgb(104, 110, 232)',
          borderWidth:2,
          pointBorderWidth: 3,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [300, 400, 300,340, 700, 550,730]
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
                ticks:{
                    display:false,
                },
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