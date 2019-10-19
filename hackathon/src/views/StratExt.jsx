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
import React, {useState} from "react";
// react plugin used to create charts
import { Line, Pie, HorizontalBar } from "react-chartjs-2";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  howMuch,
  howMuch2,
  howWell,
  betterOff
} from "variables/StratExt_charts.jsx";

const data = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80]
    }
  ]
};

const StratExt = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
      <>
        <div className="content">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            READY CHILDREN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            SUCCESSFUL STUDENTS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            STRONG INDIVIDUALS AND FAMILIES
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            SAFETY NET
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          
        </TabPane>
        <TabPane tabId="2">
          
        </TabPane>
        <TabPane tabId="3">
          
        </TabPane>
        <TabPane tabId="4">
          
        </TabPane>
      </TabContent>
      <br/>
    <h4><u>Indicator 1 : % of population at or below 200% of Federal Poverty Level (FPL)</u></h4>
    <br/>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Strategy A</CardTitle>
                  <p >Provide and/or build capacity for organizations that offer education and workforce development (e.g. adult basic
education and/or non-degree certificates, industry-specific certificates or other career pathways) to clients at or
below 200% of FPL. </p>
                </CardHeader>
                <CardBody>

                <p className="card-category">How Much</p>
                  <HorizontalBar
                    height={30} data={howMuch.data} options = {howMuch.options}/>
                    
                    <br/>

                    <p className="card-category">How Well</p>
                    <HorizontalBar
                    height={30} data={howWell.data} options = {howWell.options}/>
                    
                    <br/>

                    <p className="card-category">Better Off</p>
                    <HorizontalBar
                    height= {30} data={betterOff.data} options = {betterOff.options}/>

                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }

export default StratExt;
