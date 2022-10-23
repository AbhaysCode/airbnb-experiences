import './hero.css';
function Hero(){
    return(
        <div>
        <div className="image-container">
            <img src="grid.png" class="img-fluid hero-image" alt="Responsive image"></img>
        </div>
        <header>
        <h1>Online Experiences</h1>
        <p>Join Unique Interactive Activites led by<br/>one-of-a kind host all without leaving<br/>home.</p>
        </header>
        </div>
    )
}
export default Hero;