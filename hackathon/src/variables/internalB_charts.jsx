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
            label: "",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#DD5F32"],
              borderWidth: 0,
              data: [340]
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
                      stepValue: 40,
                      max: 480

                  }
              }]
          }
      }
    };
    const howMuch2 = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                label: "",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#DD5F32"],
                  borderWidth: 0,
                  data: [320]
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
    const howWell = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                label: "# of people under 200% Federal Poverty Level Recruited for Program",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: [ "#EEB449", "#215393", "#DD5F32"],
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
                        stepValue: 60,
                        max: 720
  
                    }
                }]
            }
        }
    };
    const betterOff = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                label: "# of people under 200% Federal Poverty Level Recruited for Program",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#215393", "#DD5F32"],
                  borderWidth: 0,
                  data: [235]
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
                        stepValue: 22,
                        max: 500
  
                    }
                }]
            }
        }
    };

module.exports = {
  howMuch,
  howMuch2,
  howWell,
  betterOff
};