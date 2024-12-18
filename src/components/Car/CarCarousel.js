import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarCarousel.scss';

function CarCarousel({ vehicle }) {
  const imgExtension = 'avif';

  if (vehicle) {
    return (
      <Carousel statusFormatter={(currentItem, total) => `${currentItem} sur ${total}`} className='car-carousel'>
        <div>
          <img 
            src={vehicle.imgFront || (() => { try { return require(`../../datasets/img/${vehicle.code}_front.${imgExtension}`); } catch { return ''; } })()} 
            alt='Front' 
          />
          <p className='legend'>Front</p>
        </div>
        <div>
          <img 
            src={vehicle.imgBack || (() => { try { return require(`../../datasets/img/${vehicle.code}_back.${imgExtension}`); } catch { return ''; } })()} 
            alt='Back' 
          />
          <p className='legend'>Back</p>
        </div>
        <div>
          <img 
            src={vehicle.imgSide || (() => { try { return require(`../../datasets/img/${vehicle.code}_side.${imgExtension}`); } catch { return ''; } })()} 
            alt='Side' 
          />
          <p className='legend'>Side</p>
        </div>
        <div>
          <img 
            src={vehicle.imgDashboard || (() => { try { return require(`../../datasets/img/${vehicle.code}_dashboard.${imgExtension}`); } catch { return ''; } })()} 
            alt='Dashboard' 
          />
          <p className='legend'>Dashboard</p>
        </div>
        <div>
          <img 
            src={vehicle.imgBackseats || (() => { try { return require(`../../datasets/img/${vehicle.code}_backseats.${imgExtension}`); } catch { return ''; } })()} 
            alt='Back seat' 
          />
          <p className='legend'>Back seat</p>
        </div>
        <div>
          <img 
            src={vehicle.imgTrunk || (() => { try { return require(`../../datasets/img/${vehicle.code}_trunk.${imgExtension}`); } catch { return ''; } })()} 
            alt='Trunk' 
          />
          <p className='legend'>Trunk</p>
        </div>
      </Carousel>
    );
  }

  return null;
}

export default CarCarousel;
