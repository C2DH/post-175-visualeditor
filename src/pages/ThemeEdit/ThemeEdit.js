import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SideEditToolbar from '../../components/SideEditToolbar'
import './ThemeEdit.css'

const ThemeEdit = () => (
  <Container fluid className="margin-r-l-20">
    <Row>
      <Col md="3">
        <SideEditToolbar />
      </Col>
      <Col md="9">
        <div className="ThemeEdit__right_container" />
      </Col>
    </Row>
  </Container>
)

export default ThemeEdit