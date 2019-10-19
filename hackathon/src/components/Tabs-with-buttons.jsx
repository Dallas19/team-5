import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, Card, NavLink, Button,  CardText } from 'reactstrap';
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { typeCastExpression } from '@babel/types';
import {
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { HorizontalBar } from "react-chartjs-2";
import {
  howMuch,
  howMuch2,
  howMuch3,
  howWell1,
  howWell2,
  howWell3,
  betterOff1,
  betterOff2,
  betterOff3
} from "variables/strategy_charts.jsx";

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
      data: [Math.floor(Math.random()*100) + 1, Math.floor(Math.random()*100) + 1, Math.floor(Math.random()*100) + 1]
    }
  ]
};

const Strategies2 = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
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
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center">
                <p className="card-category">How Much</p>
                <HorizontalBar
                    height={7} width = {30} data={howMuch.data} options = {howMuch.options}/>
                    <HorizontalBar
                    height={7}  width = {30} data={howMuch2.data} options = {howMuch2.options} />
                     <HorizontalBar
                    height={7}  width = {30}  data={howMuch3.data} options = {howMuch3.options} />
                    <br/>
                    <Link
                    to="/admin/Internal"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">How Well</p>
                    <HorizontalBar
                    height={7} width = {30} data={howWell1.data} options = {howWell1.options}/>
                    <HorizontalBar
                    height={7} width = {30} data={howWell2.data} options = {howWell2.options} />
                    <HorizontalBar
                    height={7} width = {30} data={howWell3.data} options = {howWell3.options} />
                    
                    <br/>
                    <Link
                    to="/admin/InternalB"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">Better Off</p>
                    <HorizontalBar
                    height= {7} width = {30} data={betterOff1.data} options = {betterOff1.options}/>
                    <HorizontalBar
                    height={7} width = {30} data={betterOff2.data} options = {betterOff2.options} />
                    <HorizontalBar
                    height={7} width = {30} data={betterOff3.data} options = {betterOff3.options} />
                    <br/>
                    <Link
                    to="/admin/InternalC"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    </Col>
                    </Row>
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
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Strategy 2</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center">
                <p className="card-category">How Much</p>
                <HorizontalBar
                    height={7} width = {30} data={howMuch.data} options = {howMuch.options}/>
                    <HorizontalBar
                    height={7}  width = {30} data={howMuch2.data} options = {howMuch2.options} />
                     <HorizontalBar
                    height={7}  width = {30}  data={howMuch3.data} options = {howMuch3.options} />
                    <br/>
                    <Link
                    to="/admin/Internal"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">How Well</p>
                    <HorizontalBar
                    height={7} width = {30} data={howWell1.data} options = {howWell1.options}/>
                    <HorizontalBar
                    height={7} width = {30} data={howWell2.data} options = {howWell2.options} />
                    <HorizontalBar
                    height={7} width = {30} data={howWell3.data} options = {howWell3.options} />
                    <br/>
                    <Link
                    to="/admin/InternalB"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">Better Off</p>
                    <HorizontalBar
                    height= {7} width = {30} data={betterOff1.data} options = {betterOff1.options}/>
                    <HorizontalBar
                    height={7} width = {30} data={betterOff2.data} options = {betterOff2.options} />
                    <HorizontalBar
                    height={7} width = {30} data={betterOff3.data} options = {betterOff3.options} />
                    
                    <br/>
                    <Link
                    to="/admin/InternalC"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <Button outline color="warning">Program 1A</Button>{' '}
                  </Link>
                    </Col>

                    </Row>
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
  );
}



export default Strategies2; 