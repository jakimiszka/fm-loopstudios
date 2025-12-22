import image from '../assets/image-equilibrium.jpg';
import avatar from '../assets/image-avatar.png';
import ethIcon from '../assets/icon-ethereum.svg';
import clockIcon from '../assets/icon-clock.svg';
import iconView from '../assets/icon-view.svg';

export const Card = () => {
    return (
        <div className="card flex f-col rounded">
            <div className='card--image'>
                <img className='rounded' src={image} alt="Victor Crest" />
                <div className="overlay rounded">
                    <img src={iconView} alt="Icon View"/>
                </div>
            </div>
            
            <div className="card--content flex f-col" data-active='true'>
                <h2>Equilibrium #3429</h2>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className="card--content__details flex f-row r-space-between">
                    <div className="card--content__details__price flex f-row v-center">
                        <img src={ethIcon} alt="Ethereum Icon"/>
                        <span>0.071 ETH</span>
                    </div>
                    <div className="card--content__details__time flex f-row v-center">
                        <img src={clockIcon} alt="Clock Icon" />
                        <span>3 days left</span>
                    </div>
                </div>
                <div className="card--content__profile flex f-row v-center">
                    <img className="avatar" src={avatar} alt="Avatar" />
                    <p className='fontPrefix'>Creaction of <span className='fontName'>Jules Wyvern</span> </p>
                </div>
            </div>
        </div>
    );
}
