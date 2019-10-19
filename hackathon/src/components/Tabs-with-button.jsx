import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button,  CardText } from 'reactstrap';
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

class Strategies2 extends React.Component {
  render() {

  return (
    <div>
    <h3>Indicator 1</h3>
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
                  <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button outline color="warning">Program 1A</Button>{' '}
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">How Well</p>
                    <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button outline color="warning">Program 1B</Button>{' '}
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">Better Off</p>
                    <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button  outline color="warning">Program 1C</Button>{' '}
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
                  <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button outline color="warning">Program 1A</Button>{' '}
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">How Well</p>
                    <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button outline color="warning">Program 1B</Button>{' '}
                    </Col>
                    <Col className="text-center">
                    <p className="card-category">Better Off</p>
                    <HorizontalBar width={200}
                    height={100} data={data} />
                    <br/>
                    <Button outline color="warning">Program 1C</Button>{' '}
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
}


export default Strategies2;