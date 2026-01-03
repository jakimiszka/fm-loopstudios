import closeIcon from '../assets/icon-close.svg';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Overlay = ({ isOpen, onClose }: OverlayProps) => {
    return (
        <div className={`overlay ${isOpen ? 'overlay--open' : ''}`}>
            <img src={closeIcon} alt="Close overlay" onClick={onClose} />
            <ul className="overlay--items">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
        </div>
    );
}