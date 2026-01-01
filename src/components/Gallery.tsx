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
                <h2>DEEP<br /> EARTH</h2>
            </div>
            <div className="gallery--item">
                <img src={nightArcade} alt="Night Arcade" />
                <h2>NIGHT<br /> ARCADE</h2>
            </div>
            <div className="gallery--item">
                <img src={soccerTeam} alt="Soccer Team" />
                <h2>SOCCER<br /> TEAM</h2>
            </div>
            <div className="gallery--item">
                <img src={grid} alt="The Grid" />
                <h2>THE<br /> GRID</h2>
            </div>
            <div className="gallery--item">
                <img src={fromAbove} alt="From Up Above VR" />
                <h2>FROM UP<br /> ABOVE VR</h2>
            </div>
            <div className="gallery--item">
                <img src={pocketBorealis} alt="Pocket Borealis" />
                <h2>POCKET<br /> BOREALIS</h2>
            </div>
            <div className="gallery--item">
                <img src={curiosity} alt="The Curiosity" />
                <h2>THE<br /> CURIOSITY</h2>
            </div>
            <div className="gallery--item">
                <img src={fishEye} alt="The Fisheye" />
                <h2>MAKE IT<br /> FISHEYE</h2>
            </div>
        </div>
    );
}