import logoImage from '../assets/logo.svg';

interface MenuProps {
    items: string[];
    styles?: string[];
}

export const Menu = ({ items, styles = [] }: MenuProps) => {
    return (
        <div className={`menu ${styles.join(' ')}`}>
            <div className="logo">
                <img src={logoImage} alt="header logo"/>
            </div>
            <div className="items">
                <ul className="flex r-space-around">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}