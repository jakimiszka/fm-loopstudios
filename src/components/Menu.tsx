import logoImage from '../assets/logo.svg';

interface MenuItem {
    text: string;
    href?: string;
}

interface MenuProps {
    items: MenuItem[];
    styles?: string[];
    variant?: 'header' | 'footer';
    showLogo?: boolean;
    logoSrc?: string;
    className?: string;
}

export const Menu = ({
    items,
    styles = [],
    variant = 'header',
    showLogo = true,
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
        </div>
    );
}