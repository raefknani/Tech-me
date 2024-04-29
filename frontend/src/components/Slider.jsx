import React, { useState, useEffect } from 'react';
import '../components/styling/Slider.css';
import 'boxicons';

import laptop1 from '../assets/images/laptop_images/laptop1.png';
import laptop2 from '../assets/images/laptop_images/laptop2.png';
import laptop3 from '../assets/images/laptop_images/laptop3.png';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showSlide(slideIndex);
    }, [slideIndex]);

    function showSlide(index) {
        const slides = document.querySelectorAll('.NewLaptopBox');
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function prevSlide() {
        const newIndex = slideIndex === 0 ? 2 : slideIndex - 1;
        setSlideIndex(newIndex);
    }

    function nextSlide() {
        const newIndex = slideIndex === 2 ? 0 : slideIndex + 1;
        setSlideIndex(newIndex);
    }

    return (
        <div className="NewSliderContainer">
            <div className='NewSlider'>
                <div className="NewLaptopBox">
                    <img src={laptop1} alt="none" />
                    <p className="Newp1">PC PORTABLE MSI PRESTIGE 15 I7 12È GÉN 8GO GTX 1650</p>
                    <p className="Newp2">TND 4569,00</p>
                </div>
        
                <div className="NewLaptopBox" style={{display: 'none'}}>
                    <img src={laptop2} alt="none" />
                    <p className="Newp1">PC PORTABLE ASUS TUF GAMING A15 AMD RYZEN 9 8GO RTX 4070</p>
                    <p className="Newp2">TND 5119,00</p>
                </div>
                <div className="NewLaptopBox" style={{display: 'none'}}>
                    <img src={laptop3} alt="none" />
                    <p className="Newp1">PC Portable Gamer LENOVO LOQ 15APH8 AMD RYZEN 7 32Go RTX 3050</p>
                    <p className="Newp2">TND 3259,00</p>
                </div>
            </div>
        
            <span className="Newprev" onClick={prevSlide}>
                <box-icon size="60px" name="chevron-left" />
            </span>
            <span className="Newnext" onClick={nextSlide}>
                <box-icon size="60px" name="chevron-right" />
            </span>
        </div>
    );
}

export default Slider;
