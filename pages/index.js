import Head from 'next/head'
import Image from 'next/image'
import  '../styles/Home.module.css'
import Axios from "axios";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'  
import slide1 from '../public/a8.webp';
import slide2 from '../public/etron.webp';
import slide3 from '../public/lexus.webp';
import slide5 from '../public/urus.webp';
import slide4 from '../public/rs7.webp';


const Index = (props) => {
  const vehicles = props.data;

  return (
      <Container>

<Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">GetCar.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/1">Product</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
        id="searchBar"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel fade className="mt-6">
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div className="mt-10 popular">
<Row>

   
    {vehicles.map((vehicle) => (
   <Col>
        <Card className="my-6" key={vehicle.id}>
          <div className="img-box">
            <Image variant="top"   width={400} height={200} layout="responsive"  src={vehicle.Image} alt="" title="" />
          </div>
      
      <Card.Body>
        <Card.Title>{vehicle.Name}</Card.Title>
        <Card.Text>
        {vehicle.Price}
        </Card.Text>
        <Link
              href={{
                pathname: "/[id]",
                query: { id: vehicle.id },
              }}
            >
               <Button variant="primary">Go somewhere</Button>
              
            </Link>
       
      </Card.Body>
    </Card>
    </Col>
  ))}
  </Row>
</div>

<footer>
         <a
           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer"
         >
          
         </a>
</footer>
      </Container>
  
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await Axios.get("https://6197c5b4164fa60017c22e0d.mockapi.io/vehicles");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};