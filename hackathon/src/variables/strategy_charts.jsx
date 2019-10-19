/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Charts.defaults.global.legend.display = false;
const howMuch = {
    data: canvas => {
        return {
          labels: ["Metric A"],
          datasets: [
            {
                label: "# of People under 200% Federal Poverty Level Enrolled in Program(How Much) SIFIC 1A",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['rgba(221,95,50,0.65)', "#EEB449", "#215393", "#DD5F32"],
              hoverBackgroundColor: 'rgba(221,95,50,1)',
              borderWidth: 0,
              data: [342, 480, 530, 120]
            }
          ]
        };
      },
      options: {
          scales:{
              xAxes:[{
                  ticks:{
                      beginAtZero: true,
                      steps: 10,
                      stepValue: 40,
                      max: 400

                  }
              }]
          }
      }
    };
    const howMuch2 = {
        data: canvas => {
            return {
              labels: ["Metric B"],
              datasets: [
                {
                    label: "# of People under 200% Federal Poverty Level Enrolled in Program(How Much) SIFIC 1B",
                    pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ['rgba(221,95,50,0.65)',"#DD5F32", "#EEB449", "#215393", "#DD5F32"],
                  hoverBackgroundColor: 'rgba(221,95,50,1)',
                  borderWidth: 0,
                  data: [600]
                }
              ]
            };
          },
          options: {
            scales:{
                xAxes:[{
                    ticks:{
                        beginAtZero: true,
                        steps: 12,
                        stepValue: 100,
                        max: 1200
  
                    }
                }]
            }
        }
    };
    const howMuch3 = {
        data: canvas => {
            return {
              labels: ["Metric C"],
              datasets: [
                {
                    label: "# of People under 200% Federal Poverty Level Enrolled in Program(How Much) SIFIC 1C",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ['rgba(221,95,50,0.65)',"#DD5F32", "#EEB449", "#215393", "#DD5F32"],
                  hoverBackgroundColor: 'rgba(221,95,50,1)',
                  borderWidth: 0,
                  data: [600]
                }
              ]
            };
          },
          options: {
            scales:{
                xAxes:[{
                    ticks:{
                        beginAtZero: true,
                        steps: 12,
                        stepValue: 50,
                        max: 600
  
                    }
                }]
            }
        }
    };
    const howWell1 = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                    label: "# of Recruited People who were Enrolled in Program (How Well) SIFIC 1A",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ['RGBA(238,180,73,0.65)', "#215393", "#DD5F32"],
                  hoverBackgroundColor: 'RGBA(238,180,73,1)',
                  borderWidth: 0,
                  data: [ 180]
                }
              ]
            };
          },
          options: {
              scales:{
                  xAxes:[{
                      ticks:{
                          beginAtZero: true,
                          steps: 12,
                          stepValue: 20,
                          max: 240
    
                      }
                  }]
              }
          }
        };
        const howWell2 = {
            data: canvas => {
                return {
                  labels: ["Metric B"],
                  datasets: [
                    {
                        label: "# of Recruited People who were Enrolled in Program (How Well) SIFIC 1B",
                        pointRadius: 0,
                      pointHoverRadius: 0,
                      backgroundColor: [ 'RGBA(238,180,73,0.65)', "#215393", "#DD5F32"],
                      hoverBackgroundColor: 'RGBA(238,180,73,1)',
                      borderWidth: 0,
                      data: [50]
                    }
                  ]
                };
              },
              options: {
                scales:{
                    xAxes:[{
                        ticks:{
                            beginAtZero: true,
                            steps: 12,
                            stepValue: 5,
                            max: 60
      
                        }
                    }]
                }
            }
        };
        const howWell3 = {
            data: canvas => {
                return {
                  labels: ["Metric B"],
                  datasets: [
                    {
                        label: "# of Recruited People who were Enrolled in Program (How Well) SIFIC 1c",
                        pointRadius: 0,
                      pointHoverRadius: 0,
                      backgroundColor: [ 'RGBA(238,180,73,0.65)', "#215393", "#DD5F32"],
                      hoverBackgroundColor: 'RGBA(238,180,73,1)',
                      borderWidth: 0,
                      data: [55]
                    }
                  ]
                };
              },
              options: {
                scales:{
                    xAxes:[{
                        ticks:{
                            beginAtZero: true,
                            steps: 12,
                            stepValue: 5,
                            max: 60
      
                        }
                    }]
                }
            }
        };

const betterOff1 = {
    data: canvas => {
        return {
          labels: ["Metric A"],
          datasets: [
            {
            label: "# of Participating Clients with Income above 200% of Federal Poverty Level at the time of Program Completions SIFIC 1a",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [ "rgba(33,83,147,0.65)", "#DD5F32"],
              hoverBackgroundColor: 'rgba(33,83,147,1)',
              borderWidth: 0,
              data: [76]
            }
          ]
        };
      },
      options: {
        scales:{
            xAxes:[{
                ticks:{
                    beginAtZero: true,
                    steps: 12,
                    stepValue: 8,
                    max: 96

                }
            }]
        }
    }
};
const betterOff2 = {
    data: canvas => {
        return {
          labels: ["Metric B"],
          datasets: [
            {
                label: "# of Participating Clients with Income above 200% of Federal Poverty Level at the time of Program Completions SIFIC 1B",
                pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [ "rgba(33,83,147,0.65)", "#DD5F32"],
              hoverBackgroundColor: 'rgba(33,83,147,1)',
              borderWidth: 0,
              data: [160]
            }
          ]
        };
      },
      options: {
        scales:{
            xAxes:[{
                ticks:{
                    beginAtZero: true,
                    steps: 12,
                    stepValue: 15,
                    max: 180

                }
            }]
        }
    }
};
const betterOff3 = {
    data: canvas => {
        return {
          labels: ["Metric C"],
          datasets: [
            {
                label: "# of Participating Clients with Income above 200% of Federal Poverty Level at the time of Program Completions SIFIC 1C",
                pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [  "rgba(33,83,147,0.65)", "#DD5F32"],
              hoverBackgroundColor: 'rgba(33,83,147,1)',
              borderWidth: 0,
              data: [190]
            }
          ]
        };
      },
      options: {
        scales:{
            xAxes:[{
                ticks:{
                    beginAtZero: true,
                    steps: 12,
                    stepValue: 20,
                    max: 240

                }
            }]
        }
    }
};

module.exports = {
  howMuch,
  howMuch2,
  howMuch3,
  howWell1,
  howWell2,
  howWell3,
  betterOff1,
  betterOff2,
  betterOff3
};
