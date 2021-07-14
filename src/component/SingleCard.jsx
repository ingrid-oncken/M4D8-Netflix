// import { Component } from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"

const SingleCard = (props) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  return (
    <Card style={{ border: "none" }}>
      <Link to={"/ShowDetail/" + props.id}>
        <Card.Img
          show={show}
          variant="top"
          src={props.imgPoster}
          style={{ height: "142px", width: "270px" }}
          className="img-fluid cover-img"
          onClick={handleShow}
        />
      </Link>
    </Card>
  )
}

export default SingleCard
