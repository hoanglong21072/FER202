import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/images/pizza1.jpg";
import image2 from "../assets/images/pizza2.jpg";
import image3 from "../assets/images/pizza3.jpg";
import image4 from "../assets/images/pizza4.jpg";
import image5 from "../assets/images/pizza5.jpg";
const CarouselComponent = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="abc"/>
                <Carousel.Caption>
                    <h3>Neapolitan Pizza</h3>
                    <p>
                        if you are looking for a traditional Italian pizza, the Neapolitan
                        is the best option
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image2} alt="Second slide" />
                <Carousel.Caption>
                <h3>Neapolitan Pizza</h3>
                <p>
                    if you are looking for a traditional Italian pizza, the Neapolitan
                    is the best option
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                <h3>Neapolitan Pizza</h3>
                <p>
                    if you are looking for a traditional Italian pizza, the Neapolitan
                    is the best option
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image4} alt="Third slide" />
                <Carousel.Caption>
                <h3>Neapolitan Pizza</h3>
                <p>
                    if you are looking for a traditional Italian pizza, the Neapolitan
                    is the best option
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image5} alt="Third slide" />
                <Carousel.Caption>
                <h3>Neapolitan Pizza</h3>
                <p>
                    if you are looking for a traditional Italian pizza, the Neapolitan
                    is the best option
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselComponent;