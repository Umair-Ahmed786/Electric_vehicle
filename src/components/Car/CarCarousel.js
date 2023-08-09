import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarCarousel.scss'

function CarCarousel({vehicle}) {
    if (vehicle) {
        const hasImage =
            !!vehicle.imgFront ||
            !!vehicle.imgBack ||
            !!vehicle.imgSide ||
            !!vehicle.imgDashboard ||
            !!vehicle.imgBackseats ||
            !!vehicle.imgTrunk

        if (hasImage) {
            return (<Carousel className="car-carousel">
                {vehicle.imgFront && <div>
                    <img src={vehicle.imgFront} alt="Avant"/>
                    <p className="legend">Avant</p>
                </div>}
                {vehicle.imgBack && <div>
                    <img src={vehicle.imgBack} alt="Arrière"/>
                    <p className="legend">Arrière</p>
                </div>}
                {vehicle.imgSide && <div>
                    <img src={vehicle.imgSide} alt="Côté"/>
                    <p className="legend">Côté</p>
                </div>}
                {vehicle.imgDashboard && <div>
                    <img src={vehicle.imgDashboard} alt="Tableau de bord"/>
                    <p className="legend">Tableau de bord</p>
                </div>}
                {vehicle.imgBackseats && <div>
                    <img src={vehicle.imgBackseats} alt="Banquette arrière"/>
                    <p className="legend">Banquette arrière</p>
                </div>}
                {vehicle.imgTrunk && <div>
                    <img src={vehicle.imgTrunk} alt="Coffre"/>
                    <p className="legend">Coffre</p>
                </div>}
            </Carousel>)
        }
    }
}

export default CarCarousel;
