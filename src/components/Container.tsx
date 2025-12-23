import { Menu } from "./Menu";

export const Container = () => {
    const menuItems = [
        { text: 'About', href: '#about' },
        { text: 'Careers', href: '#careers' },
        { text: 'Events', href: '#events' },
        { text: 'Products', href: '#products' },
        { text: 'Support', href: '#support' }
    ];

    return (
        <div className="container">
            <Menu
                items={menuItems}
                variant="header"
                styles={['flex', 'r-space-between']}
            />
            <Menu
                items={menuItems}
                variant="footer"
                showLogo={true}
                styles={['flex', 'f-col']}
            />
        </div>
    );
}
