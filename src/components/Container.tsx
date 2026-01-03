import { Menu } from "./Menu";
import { Header } from "./Header";
import { Content } from "./Content";
import { Gallery } from "./Gallery";
import { Overlay } from "./Overlay";
import { useState } from "react";

export const Container = () => {
    const menuItems = [
        { text: 'About', href: '#about' },
        { text: 'Careers', href: '#careers' },
        { text: 'Events', href: '#events' },
        { text: 'Products', href: '#products' },
        { text: 'Support', href: '#support' }
    ];
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); 

    return (
        <div className="container">
            <Overlay 
                isOpen={isOverlayOpen} 
                onClose={() => setIsOverlayOpen(false)}
            />
            <Header>
                <Menu
                    items={menuItems}
                    variant="header"
                    styles={['flex', 'r-space-between', 'headerMenu']}
                    onHamburgerClick={() => setIsOverlayOpen(true)} 
                />
            </Header> 
            <Content />
            <Menu
                items={menuItems}
                variant="footer"
                showLogo={true}
                styles={['flex', 'f-col', 'footerMenu', 'center']}
                isCentered={true}
            />
        </div>
    );
}
