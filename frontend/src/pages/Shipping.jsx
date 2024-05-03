import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/shipping.css";
import facebook from "../assets/images/laptop_images/fcb.png";  
import instagram from "../assets/images/laptop_images/insta.png";
import x from "../assets/images/laptop_images/x.png";  

function Shipping() {
    return (
        <div>
            <div className="sticky">
                <Head />
            </div>
            <div className="shipping-container">
                <h1 className="titlee">Shipping Methods</h1>
                <h3 className="delivery-heading">Delivery throughout Tunisia:</h3>
                <p className="description">
                    Delivery is made to the address you indicated when placing your order. TechMe commits to delivering your order within 3 days
                </p>
                <p className="description">maximum after validation (you will receive an email to notify you that your package has been shipped)</p>
                <p className="description">Delivery conditions, fees and times vary depending on the delivery method you choose. </p>
                <p className="description">You will be informed of the available delivery methods, along with their corresponding times and rates, at the time you place your order.</p> 
                <p className="description">TechMe will handle the shipment with a carrier of their choice.</p>

                <div className="dado">
                    <h3 className="delivery-heading">Delivery Fees:</h3>
                    <p className="description">
                        Shipping costs are calculated based on the weight and volume of the order.
                    </p>
                    <div className="sub-delivery-info">
                        <h4 className="sub-delivery-heading">Free Delivery:</h4>
                        <div className="jj">
                            <p className="sub-delivery-description">
                                TechMe offers you free home delivery for a single package that meets the following conditions:
                             
                                <p>
                                The total order amount is greater than or equal to 300 dinars.
                                </p>
                             <p>
                                The weight of the package is less than or equal to 30 Kg.
                             </p>
                             </p>
                        </div>
                    </div>
                    <h4 className="sub-delivery-heading">Delivery Cost:</h4>
                    <div className="jj">
                        <p className="sub-delivery-description">
                            7.5 dinars for orders under 300 dinars.
                            
                            <p>
                            30 dinars for packages exceeding 30 Kg (based on volume and weight).
                            </p>
                         </p>
                    </div>
                </div>
                <h3 className="delivery-heading">Delivery Times:</h3>
                <p className="description">
                    Delivery times are given as an indication and for information purposes only.<p>They depend in particular on the availability of the products and the delivery address.</p> These deadlines are met in 99% of cases but may be extended due to unforeseen events. In particular </p><p className="description">(extreme weather conditions, strikes, public holidays, covid19, curfew...=)
                </p>
              
                <h3 className="delivery-heading">Delivery Delay:</h3>
                <p className="description">
                    <p> In case of a delay in delivery, TechMe will do its best to inform you.</p><p> You can also report the delay in delivery yourself via your Customer Area or by contacting our Customer Service by phone 73 000 000.</p><p>TechMe undertakes to do everything necessary to determine the cause of the delay and find a suitable solution </p> <p>for the effective delivery of the ordered products as soon as possible.</p> 
                </p>
                <h3 className="delivery-heading">How to get free delivery?</h3>
                <p className="description">
                    Make a purchase of 300 TND or more. The weight of the package must be less than or equal to 30 Kilos.
                </p>
                        
                <div className="ligne2"></div>
                <div className="lekha">
                    <div className="c1">  
                        <p className="ccc">join-us !</p>
                        <p className="lila">our website: <a href="https://TechMe.com/">https://TechMe.com/</a></p>
                        <div className="soca">
                            <p className="uss">Follow us on social media:</p>
                            <div className="allsoca">
                                <a href="httdivs://www.facebook.com/TechMe/">
                                    <img className="fc" src={facebook} alt="Facebook" />
                                </a>
                                <a href="https://www.instagram.com/TechMe/">
                                    <img className="insta" src={instagram} alt="Instagram" />
                                </a>
                                <a href="https://twitter.com/TechMe/">
                                    <img className="x" src={x} alt="Twitter" />
                                </a>
                            </div>
                        </div>
                        <div className="lasta">
                            <div>
                                <div className="mmail"><span className="grass">Email: </span><a href="info@techme.com">info@techme.com</a></div>
                                <div className="phone"><span className="grass">Phone number:</span> +216 73 000 000</div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipping;