/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">What is Drone Taxi?</h2>
              <p className="description">
                Drone taxi is a form of urban air mobility (UAM) that uses
                autonomous flying vehicles, commonly known as drones, to
                transport passengers and cargo through the air. This new
                technology is being developed as a potential solution to traffic
                congestion in heavily populated areas, especially in cities
                where traffic is a major problem.
              </p>
              <p className="description">
                The concept of a drone taxi is similar to that of a regular taxi
                service, except that instead of driving on roads, the vehicle
                flies through the air. Passengers can book a ride through a
                mobile app and are then picked up from a designated location,
                such as a rooftop landing pad, and flown to their destination.
                The drones are typically designed to be electric-powered and can
                travel at speeds of up to 60 mph (96 km/h) over distances of
                around 20 miles (32 km).
              </p>
              <p className="description">
                One of the main advantages of drone taxis is their ability to
                bypass traffic, which can significantly reduce travel times.
                Additionally, since they are electric-powered, they are more
                environmentally friendly than traditional forms of
                transportation that use fossil fuels. However, the technology is
                still in its early stages of development, and there are several
                challenges that need to be addressed before it can become a
                viable mode of transportation, including safety, regulatory
                approval, and infrastructure requirements such as landing pads
                and charging stations.
              </p>
              <p className="description">
                Despite these challenges, several companies and governments
                around the world are investing in the development of drone taxi
                technology, and it is expected to become more common in the
                coming years.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
