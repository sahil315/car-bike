// pages/[id].js
import Axios from "axios";
import { useRouter } from "next/router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'tailwindcss/tailwind.css';
import Image from 'next/image' 
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// router is required for fallback: true
const Vehicle = ({ vehicle }) => {
  
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
        
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
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

<Row>
   <img alt="img" style={{width:100 + '%' , height:300 + 'px'}} src={vehicle.ImageB} />
</Row>

<Row className="mt-8 py-10 text-center">
  <Col>
    <p className="text-4xl">{vehicle.Name}</p>
  </Col>
  <Col>
  <p className="text-4xl">{vehicle.Price}</p>
  </Col> 
  <Col>
  <Button variant="primary" >Get Offer</Button>
  </Col> 
</Row >

<Row className="mt-16">
<span className="text-2xl text-center mt-10 mb-10">Product Highlights</span>
<ol className="justify-evenly flex mt-10">
      
      {vehicle.ImageSVG.map((index) => (
          <li className="iconsvg" key={index}>
               <Image  width={50} height={50} layout="responsive" src={index} /> 
          </li>
           
          
        ))}
      </ol>
 <ol className="mb-10 justify-evenly flex ">
        {vehicle.ProductH.map(( index) => (
          <li key={index}>
            {index}
          </li>
        ))}
      </ol>
     
</Row>





</Container>
    
  );
};

export default  Vehicle;

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(`https://6197c5b4164fa60017c22e0d.mockapi.io/vehicles/${params.id}`);
  const vehicle = data;
  return {
    props: {
       vehicle,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get("https://6197c5b4164fa60017c22e0d.mockapi.io/vehicles");
  const vehicles = data.slice(0, 10);
  const paths = vehicles.map((vehicle) => ({ params: { id: vehicle.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};