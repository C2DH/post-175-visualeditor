import React from 'react'
import { Card, CardImg, CardBlock, CardTitle, Button } from 'reactstrap'
import './GenericCard.css'

const GenericCard = ({ title="", cover="", footerButton=null}) => (
  <div>
    <Card className="GenericCard__card">
      <CardImg top width="100%" src={cover} alt="Card image cap" className="GenericCard__img"/>
      <div className="GenericCard__textContainer">
        <CardTitle className="GenericCard__title">{title}</CardTitle>
        <div className="GenericCard_footerButton">{ footerButton }</div>
      </div>
    </Card>
    </div>
)

export default GenericCard