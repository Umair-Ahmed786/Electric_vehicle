import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarCarousel.scss';

function CarCarousel({ vehicle }) {
  const imgExtension = 'avif';

  if (vehicle) {
    return (
      <Carousel statusFormatter={(currentItem, total) => `${currentItem} sur ${total}`} className='car-carousel'>
        <div>
          <img src={vehicle.imgFront ?? require(`../../datasets/img/${vehicle.code}_front.${imgExtension}`)} alt='Avant' />
          <p className='legend'>Avant</p>
        </div>
        <div>
          <img src={vehicle.imgBack ?? require(`../../datasets/img/${vehicle.code}_back.${imgExtension}`)} alt='Arrière' />
          <p className='legend'>Arrière</p>
        </div>
        <div>
          <img src={vehicle.imgSide ?? require(`../../datasets/img/${vehicle.code}_side.${imgExtension}`)} alt='Côté' />
          <p className='legend'>Côté</p>
        </div>
        <div>
          <img src={vehicle.imgDashboard ?? require(`../../datasets/img/${vehicle.code}_dashboard.${imgExtension}`)} alt='Tableau de bord' />
          <p className='legend'>Tableau de bord</p>
        </div>
        <div>
          <img src={vehicle.imgBackseats ?? require(`../../datasets/img/${vehicle.code}_backseats.${imgExtension}`)} alt='Banquette arrière' />
          <p className='legend'>Banquette arrière</p>
        </div>
        <div>
          <img src={vehicle.imgTrunk ?? require(`../../datasets/img/${vehicle.code}_trunk.${imgExtension}`)} alt='Coffre' />
          <p className='legend'>Coffre</p>
        </div>
      </Carousel>
    );
  }
}

export default CarCarousel;
