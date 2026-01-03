import interactive from '../assets/mobile/image-interactive.jpg';
import { Gallery } from './Gallery';

export const Content = () => {
    return (
        <main className="content">
            <section className="content--intro">
                <img src={interactive} alt="Interactive" />
                <div className="content--intro__text">
                    <h1>THE LEADER IN <br /> INTERACTIVE VR</h1>
                    <p>
                        The world is getting smaller and we’re becoming more mobile. 
                        So why should our experiences be any different? 
                        Loopstudios 
                        aims to provide world-class 
                        experiences for 
                        mobile users.   
                        Whether you’re 
                        looking for 
                        a new 
                        VR headset or 
                        
                        an old favorite, 
                        we’ve got you covered. 
                    </p>
                </div> 
            </section>
            <section className="content--gallery">
                <h1 className='content--gallery__title'>OUR CREATIONS</h1>
                <button className="btn">See All</button>
                <Gallery />
            </section>
        </main>
    );
}           