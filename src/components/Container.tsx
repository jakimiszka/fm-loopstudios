import { Menu } from "./Menu";
import { Header } from "./Header";
import { Content } from "./Content";
import { Gallery } from "./Gallery";

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
            <Header>
                <Menu
                    items={menuItems}
                    variant="header"
                    styles={['flex', 'r-space-between']}
                />
            </Header>
            
            <Content />
            <Content />
            {/* <Gallery /> */}
            <Menu
                items={menuItems}
                variant="footer"
                showLogo={true}
                styles={['flex', 'f-col']}
            />
        </div>
    );
}
