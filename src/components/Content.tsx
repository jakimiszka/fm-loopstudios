import interactice from '../assets/mobile/image-interactive.jpg';
import { Gallery } from './Gallery';

export const Content = () => {
    return (
        <main className="content">
            <section className="content--intro r-space-around">
                <div className="content--intro__text f-col r-space-between">
                    <img src={interactice} alt="Interactive" />
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
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
                <div className="content--intro__image introImage"></div>
            </section>
            <section className="content--creations f-col r-space-around">
                <h2>Our Creations</h2>
                <Gallery />
                <button className="btn btn--see-all">See All</button>
            </section>
        </main>
    );
}           