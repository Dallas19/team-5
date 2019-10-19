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
            //   label: ,
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#DD5F32", "#EEB449", "#215393", "#DD5F32"],
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
                label: "# of people under 200% Federal Poverty Level Recruited for Program",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#DD5F32", "#EEB449", "#215393", "#DD5F32"],
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
                label: "# of people under 200% Federal Poverty Level Recruited for Program",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#DD5F32", "#EEB449", "#215393", "#DD5F32"],
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
                //   label: ,
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#EEB449", "#215393", "#DD5F32"],
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
                    label: "# of people under 200% Federal Poverty Level Recruited for Program",
                      pointRadius: 0,
                      pointHoverRadius: 0,
                      backgroundColor: [ "#EEB449", "#215393", "#DD5F32"],
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

const betterOff1 = {
    data: canvas => {
        return {
          labels: ["Metric A"],
          datasets: [
            {
            label: "# of people under 200% Federal Poverty Level Recruited for Program",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [ "#215393", "#DD5F32"],
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
            label: "# of people under 200% Federal Poverty Level Recruited for Program",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [ "#215393", "#DD5F32"],
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
            label: "# of people under 200% Federal Poverty Level Recruited for Program",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [  "#215393", "#DD5F32"],
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
  betterOff1,
  betterOff2,
  betterOff3
};
