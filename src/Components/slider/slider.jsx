import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'; 

import Left from '../../img/sliderimg/leftimbtn.png'
import Right from '../../img/sliderimg/rightimbtn.png'

function Carousel(props){
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
  
        //иконки нужно поискать
        nextArrow: <img src={Right} alt="Next" />,
        prevArrow: <img src={Left} alt="Prev" />
      };
     
  
      return (
        <div className='main__conrainer'>
        <Slider {...settings}>
          

        {props.name.im1 && (<div>
                <img src = {props.name.im1}  className='image__item'/>
                <p className='text__item'>{props.name.tim1}</p>                
			</div>)
		}
        {props.name.im2 && (<div>
                <img src = {props.name.im2}  className='image__item'/>
                <p className='text__item'>{props.name.tim2}</p>
			</div>)
		}
        {props.name.im3 && (<div>
                <img src = {props.name.im3}  className='image__item'/>
                <p className='text__item'>{props.name.tim3}</p>
			</div>)
		}
        {props.name.im4 && (<div>
                <img src = {props.name.im4}  className='image__item'/>
                <p className='text__item'>{props.name.tim4}</p>
			</div>)
		}
        {props.name.im5 && (<div>
                <img src = {props.name.im5}  className='image__item'/>
                <p className='text__item'>{props.name.tim5}</p>
			</div>)
		}
        {props.name.im6 && (<div>
                <img src = {props.name.im6}  className='image__item'/>
                <p className='text__item'>{props.name.tim6}</p>
			</div>)
		}

        </Slider>
        </div>
      );
    }
  
  export default Carousel;
  
