import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default class BarGraph extends React.Component {

    state = {
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "sun"],
            datasets: [{
                label: '# of Votes',
                data: [8, 10, 3, 10, 5, 15,8],
                backgroundColor: 'rgb(100, 82, 243)',

            },
            {
                label: '# of Votes',
                data: [8, 6, 13, 6, 11, 1,8],
                backgroundColor: '#e6e7ee',

            }
        ]
        
        },
    }
    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <Bar data={this.state.data} 
                    options= {{
                       
                        maintainAspectRatio: false ,
                        legend: {
                            display: false
                          },
                          
                          scales: {
                              
                                
                              
                            xAxes: [{
                                stacked: true,
                                barPercentage: 0.4,
                                gridLines: {
                                  display: false
                               }
                            }],
                            yAxes: [{
                                // scaleShowLabels: false,
                                ticks:{
                                    display:false,
                                },
                                stacked: true,
                                 gridLines: {
                                  display: false
                               },
                               
                            }]
                         }
                    
                    }}/>
                </MDBContainer>

            </React.Fragment>
        );
    }
}
