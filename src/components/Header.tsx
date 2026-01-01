import imageHero from '../assets/mobile/image-hero.jpg';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="mainHeader headerImage">
      {children}
      <img src={imageHero} alt="background image" />
      <div className="headerMessage">
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </header>
  );
}