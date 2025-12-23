import { Menu } from "./Menu";

export const Container = () => {
    return (
        <div className="container">
            <Menu 
                items={['About', 'Careers', 'Events', 'Products', 'Support']} 
                styles={['flex', 'r-space-between']} />
            <Menu 
                items={['About', 'Careers', 'Events', 'Products', 'Support']} 
                styles={['flex', 'f-col', 'r-space-between']} />
        </div>
    );
}
