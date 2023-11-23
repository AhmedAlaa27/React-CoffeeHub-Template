import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from '../CoffeeHub/Group14.png'
import image2 from '../CoffeeHub/Group13.png'
import icon1 from '../CoffeeHub/1.png'
import icon2 from '../CoffeeHub/2.png'
import icon3 from '../CoffeeHub/3.png'
import icon4 from '../CoffeeHub/4.png'
import icon5 from '../CoffeeHub/5.png'
import icon6 from '../CoffeeHub/1.png'

function Home() {
    return (
    <div className="home">
        <div className="container">
            <div className="landing">
                <div className="content">
                    <div className="text">
                        <p>Starting off your day can be tough, Why not start your day with us!</p>
                    </div>
                    <div className="links">
                        <a className="btn active" href="#">Shop now</a>
                        <a className="btn" href="#">Learn more</a>
                    </div>
                </div>
                <div className="image">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container paragraph">
                <div className="content">
                    <div className="text">
                        <h3>Why CoffeHub?</h3>
                        <p>Embrace the artistry of coffee at CoffeeHub, where the purist of the
                           perfect brew meets a community of passionate coffee enthusiasts.
                           CoffeHub isn't just a website; it's a hevan for those seeking a delightful coffee experience.</p>
                    </div>
                    <div className="links">
                        <a className="btn active" href="#">Order now</a>
                    </div>
                </div>
                <div className="image">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="coffee">
                <div className="header">
                    <h2>Today's Special</h2>
                </div>
                <div className="boxes">
                    <div className="row">
                        <div className="col-4 box">
                            <img src={icon1} alt="" />
                            <div className="text">
                                <h5>Caffe macchiato</h5>
                                <p>$35.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-4 box">
                            <img src={icon2} alt="" /> 
                            <div className="text">
                                <h5>Ice Coffee</h5>
                                <p>$10.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-4 box">
                            <img src={icon3} alt="" /> 
                            <div className="text">
                                <h5>Frappuccino</h5>
                                <p>$12.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 box">
                            <img src={icon4} alt="" />
                            <div className="text">
                                <h5>Latte macchiato</h5>
                                <p>$20.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-4 box">
                            <img src={icon5} alt="" />
                            <div className="text">
                                <h5>Cappuccino</h5>
                                <p>$5.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-4 box">
                            <img src={icon6} alt="" />
                            <div className="text">
                                <h5>Caffe mocha</h5>
                                <p>$25.00</p>
                                <a href="#" className="btn">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Home;