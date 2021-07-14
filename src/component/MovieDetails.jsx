import { useState } from "react"
import { useEffect } from "react"
// import items from "../data/menu.json"
import { Card, Container, Row, Col } from "react-bootstrap"
import {Section} from './Section'

const MovieDetail = (props) => {
  const [movie, setMovie] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let id = props.match.params.id
    let correctMovie = Section.find(
      (movieObject) => movieObject.id.toString() === id
    )
    console.log(correctMovie)
    if (correctMovie) {
      setMovie(correctMovie)
    } else {
      setNotFound(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col md={8} className="text-center">
          {notFound && <h1>404 - MOVIE NOT FOUND</h1>}
          {movie && (
            <Card>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>{movie.price}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail
