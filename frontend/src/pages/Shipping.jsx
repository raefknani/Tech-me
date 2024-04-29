import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/shipping.css";
import logo from "../assets/images/logos/logo.png";
import facebook from "../assets/images/laptop_images/fcb.png";  
import instagram from "../assets/images/laptop_images/insta.png";
import x from "../assets/images/laptop_images/x.png";  

function Shipping() {
    return (
        <div className="shipping-container">
            <Head />
            <div className="content">
                <h1 className="titlee">Delivery Methods</h1>
                <div className="biit">
                    <div className="delivery-info">
                        <h3 className="delivery-heading">Delivery throughout Tunisia:</h3>
                        <p className="description">
                            Delivery is made to the address you indicated when placing your
                            order. TechMe commits to delivering your order within 3 days
                            maximum after validation (you will receive an email to notify you
                            that your package has been shipped). Delivery conditions, fees,
                            and times vary depending on the delivery method you choose. You
                            will be informed of the available delivery methods, along with
                            their corresponding times and rates, at the time you place your
                            order. TechMe will handle the shipment with a carrier of their
                            choice.
                        </p>
                    </div>
                    <div className="delivery-info">
                        <div className="dado">
                            <h3 className="delivery-heading">Delivery Fees:</h3>
                            <p className="description">
                                Shipping costs are calculated based on the weight and volume of
                                the order.
                            </p>
                            <div className="sub-delivery-info">
                                <h4 className="sub-delivery-heading">Free Delivery:</h4>
                                <div className="jj">
                                    <p className="sub-delivery-description" class="azzz">
                                        TechMe offers you free home delivery for a single package
                                        that meets the following conditions:
                                    </p>
                                    <p className="pp" class="pss">
                                        {" "}
                                        The total order amount is greater than or equal to 300
                                        dinars.
                                    </p>
                                    <p className="pp" class="pee">
                                        {" "}
                                        The weight of the package is less than or equal to 30 Kg.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sub-delivery-info">
                            <div className="dado">
                                <h4 className="sub-delivery-heading">Delivery Cost:</h4>
                                <div className="jj">
                                    <p className="ppp" class="psss">
                                        {" "}
                                        7.5 dinars for orders under 300 dinars.
                                    </p>
                                    <p className="ppp">
                                        {" "}
                                        30 dinars for packages exceeding 30 Kg (based on volume and
                                        weight).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-info">
                        <h3 className="delivery-heading">Delivery Times:</h3>
                        <p className="description">
                            Delivery times are given as an indication and for information
                            purposes only. They depend in particular on the availability of
                            the products and the delivery address. These deadlines are met in
                            99% of cases but may be extended due to unforeseen events. In
                            particular (extreme weather conditions, strikes, public holidays,
                            covid19, curfew...)
                        </p>
                    </div>
                    <div className="delivery-info">
                        <h3 className="delivery-heading">Delivery Delay:</h3>
                        <p className="description">
                            In case of a delay in delivery, TechMe will do its best to inform
                            you. You can also report the delay in delivery yourself via your
                            Customer Area or by contacting our Customer Service by phone 73
                            000 000. TechMe undertakes to do everything necessary to determine
                            the cause of the delay and find a suitable solution for the
                            effective delivery of the ordered products as soon as possible.
                        </p>
                    </div>
                    <div className="delivery-info">
                        <h3 className="delivery-heading">How to get free delivery?</h3>
                        <p className="description">
                            Make a purchase of 300 TND or more. The weight of the package must
                            be less than or equal to 30 Kilos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="JoinUsContainer">
                    <p class="j">join-us !</p>
                    <p className="linkWebsite">our website: <span><a href="https://TechMe.com/">https://TechMe.com/</a></span></p>
                    <h3>Follow us on social media:</h3>
                    <div className="smIcons">
                        <ul>
                            <li><img src={facebook}/></li>
                            <li><img src={instagram}/></li>
                            <li><img src={x}/></li>
                        </ul>
                    </div>
                    <h3>Cantact us:</h3>

                    <ul className="a">
                        <div>
                            <p className="m">email: <a href="livraison@TechMe.com "> livraison@TechMe.com </a> |{" "}
                                <a href="devis@TechMe.com "> devis@TechMe.com </a>
                            </p>
                        </div>
                    </ul>
                    <div>
                        <p>
                            Phone number: <span className="coc">+216 73 000 000</span>{" "}
                        </p>
                    </div>    
            </div>
            <div className="logoo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default Shipping;
