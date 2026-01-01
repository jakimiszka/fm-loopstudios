import logoImage from '../assets/logo.svg';
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';

interface MenuItem {
    text: string;
    href?: string;
}

interface MenuProps {
    items: MenuItem[];
    styles?: string[];
    variant?: 'header' | 'footer';
    showLogo?: boolean;
    showSocials?: boolean;
    showRights?: boolean;
    logoSrc?: string;
    className?: string;
}

export const Menu = ({
    items,
    styles = [],
    variant = 'header',
    showLogo = true,
    showSocials = variant === 'footer',
    showRights = variant === 'footer',
    logoSrc = logoImage,
    className = ''
}: MenuProps) => {
    const baseClass = 'menu ' + (variant === 'header' ? 'header' : 'footer');
    const combinedClass = `${baseClass} ${className} ${styles.join(' ')}`.trim();

    return (
        <div className={combinedClass}>
            {showLogo && (
                <div className="menu logo">
                    <img src={logoSrc} alt={`${variant} logo`} />
                </div>
            )}
            <div className="menu--items">
                <ul className="flex">
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.href ? (
                                <a href={item.href}>{item.text}</a>
                            ) : (
                                <span>{item.text}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menu--mobile">
                <span className="menu--mobile__hamburger">&#9776;</span>
            </div>
            {showSocials && (
                <div className='menu--socials'>
                    <span className="menu--socials__facebook">
                        <img src={facebookIcon} alt="Facebook" />
                    </span>
                    <span className="menu--socials__twitter">
                        <img src={twitterIcon} alt="Twitter" />
                    </span>
                    <span className="menu--socials__pinterest">
                        <img src={pinterestIcon} alt="Pinterest" /> 
                    </span>
                    <span className="menu--socials__instagram">
                        <img src={instagramIcon} alt="Instagram" />
                    </span>
                </div>
            )}
            {showRights && (
                <div className='menu--rights'>
                    <p>&copy; 2024 Loopstudios. All rights reserved.</p>
                </div>
            )}
        </div>
    );
}