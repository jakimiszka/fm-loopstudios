import curiosity from '../assets/mobile/image-curiosity.jpg';
import deepEarth from '../assets/mobile/image-deep-earth.jpg';
import nightArcade from '../assets/mobile/image-night-arcade.jpg';
import soccerTeam from '../assets/mobile/image-soccer-team.jpg';
import grid from '../assets/mobile/image-grid.jpg';
import fromAbove from '../assets/mobile/image-from-above.jpg';
import pocketBorealis from '../assets/mobile/image-pocket-borealis.jpg';
import fishEye from '../assets/mobile/image-fisheye.jpg';


export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery--item">
                <img src={deepEarth} alt="Deep Earth" />
                <h2>Deep Earth</h2>
            </div>
            <div className="gallery--item">
                <img src={nightArcade} alt="Night Arcade" />
                <h2>Night Arcade</h2>
            </div>
            <div className="gallery--item">
                <img src={soccerTeam} alt="Soccer Team" />
                <h2>Soccer Team</h2>
            </div>
            <div className="gallery--item">
                <img src={grid} alt="The Grid" />
                <h2>The Grid</h2>
            </div>
            <div className="gallery--item">
                <img src={fromAbove} alt="From Up Above VR" />
                <h2>From Up Above VR</h2>
            </div>
            <div className="gallery--item">
                <img src={pocketBorealis} alt="Pocket Borealis" />
                <h2>Pocket Borealis</h2>
            </div>
            <div className="gallery--item">
                <img src={curiosity} alt="The Curiosity" />
                <h2>The Curiosity</h2>
            </div>
            <div className="gallery--item">
                <img src={fishEye} alt="The Fisheye" />
                <h2>Make it Fisheye</h2>
            </div>
        </div>
    );
}