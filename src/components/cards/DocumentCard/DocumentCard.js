import React from 'react'
import GenericCard from '../GenericCard'
import { Button } from 'reactstrap'
import './DocumentCard.css'


const DocumentCard = ({ title = '', cover = null, onClick, status=null }) => (
  <GenericCard
    className="DocumentCard__card"
    title={title}
    cover={cover}
    footerButton={<Button onClick={onClick}><i className="fa fa-crosshairs" aria-hidden="true"></i></Button>}
  />
)


export default DocumentCard
