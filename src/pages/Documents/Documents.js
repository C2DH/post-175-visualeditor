import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import HeadingRow from '../../components/HeadingRow'
import TopSearchInput from '../../components/TopSearchInput'
import AddButton from '../../components/AddButton'
import ThemeCard from '../../components/cards/ThemeCard'
import './Documents.css'

const Documents = () => (
  <Container fluid className="margin-r-l-20">
    <HeadingRow title="Select documents">
      <TopSearchInput />
    </HeadingRow>

    <Row>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
    </Row>

    <Row>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
    </Row>

    <Row>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
      <Col md="3">
        <ThemeCard
          title="Doc title"
          cover="http://via.placeholder.com/350x150"
         />
      </Col>
    </Row>

    <div className="Translate__confirm_container">
      <Row>
        <Col md="3">
          <Button size="sm" block>Done</Button>
          <Button size="sm" block>Exit</Button>
        </Col>
        <Col md="9" />
      </Row>
    </div>
  </Container>
)

export default Documents
