import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, CardGroup, Card, CardColumns}  from 'react-bootstrap';
import './Home.css'
import women5 from '../Resorces/women5.jpg';
import women4 from '../Resorces/women4.jpg';
import Men1 from '../Resorces/Men1.jpg';
import sale from '../Resorces/sale.jpg';
import sale2 from '../Resorces/sale2.jpg';
import handloom from '../Resorces/handloom.jpg';
import saree from '../Resorces/saree.jpg';
import kurta from '../Resorces/kurta.jpg';
import kurta2 from '../Resorces/kurta2.jpg';
import kurta3 from '../Resorces/kurta3.jpg';
import kurta4 from '../Resorces/kurta4.jpg';
import kurta5 from '../Resorces/Kurta5.jpg';
import kurta6 from '../Resorces/Kurta6.jpg';
import kurta7 from '../Resorces/Kurta7.jpg';
import kurta8 from '../Resorces/Kurta8.jpg';
import RayonKurta1 from '../Resorces/RayonKurta1.jpg';
import RayonKurta2 from '../Resorces/RayonKurta2.jpg';
import RayonKurta3 from '../Resorces/RayonKurta3.jpg';
import RayonKurta4 from '../Resorces/RayonKurta4.jpg';
import shirt1 from '../Resorces/mentshirt.jpg';
import shirt2 from '../Resorces/mentshirt2.jpg';
import shirt3 from '../Resorces/mentshirt3.jpg';
import Brush1 from '../Resorces/brush.jpg';
import Brush2 from '../Resorces/brush2.jpg';
import Brush3 from '../Resorces/brush3.jpg';
import Brush4 from '../Resorces/brush4.jpg';
import Nailpolish1 from '../Resorces/nailPolish.jpg'
import Nailpolish2 from '../Resorces/nailPolish2.jpg'
import Nailpolish3 from '../Resorces/nailPolish3.jpg'
import Nailpolish4 from '../Resorces/nailPolish4.jpg'

const Home = ()=>{
    return(
        <div className="body">
            <Carousel>
                <Carousel.Item className="carouselStyle">
                    <img src={women5} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={women4} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={Men1} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={sale} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={handloom} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={saree} className="d-block w-100 image"></img>
                </Carousel.Item>
                <Carousel.Item className="carouselStyle">
                    <img src={sale2} className="d-block w-100 image"></img>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            <CardGroup>
            &nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={kurta}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta2}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta3}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta4}  className="cardImage"/>
            </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Aakarsha Sensational Women Kurta Sets
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={RayonKurta4}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={RayonKurta2}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={RayonKurta3}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={RayonKurta1}  className="cardImage"/>
            </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Women's Embroidered Rayon Kurta Set with Palazzos
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={shirt1}  className="cardImage"/>
                </Carousel.Item>
                {/* <Carousel.Item>
                <Card.Img variant="top" src={shirt2}  className="cardImage"/>
                </Carousel.Item> */}
                <Carousel.Item>
                <Card.Img variant="top" src={shirt3}  className="cardImage"/>
                </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Trendy Cotton Men's T-Shirt
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={Brush1}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Brush2}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Brush3}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Brush4}  className="cardImage"/>
            </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Makeup Brush
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={Nailpolish1}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Nailpolish2}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Nailpolish3}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={Nailpolish4}  className="cardImage"/>
            </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Exciting nail polish
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            <Card className="p-3">
            <Carousel>
            <Carousel.Item>
                <Card.Img variant="top" src={kurta5}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta6}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta7}  className="cardImage"/>
                </Carousel.Item>
                <Carousel.Item>
                <Card.Img variant="top" src={kurta8}  className="cardImage"/>
            </Carousel.Item>
            </Carousel>
                <Card.Body>
                
                <Card.Text>
                Freshly Arrived Stylish Women's Kurtis
                </Card.Text>
                </Card.Body>
            </Card>&nbsp;&nbsp;
            </CardGroup>
        </div>
    );
}

export default Home;
