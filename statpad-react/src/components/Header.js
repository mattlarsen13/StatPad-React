import "../css/Header.css";

const Header = () => {
    return (
        <header>
            <div className = "header">
                <h1>StatPad</h1>
                <h2>Your destination for all things NFL Statistics!</h2>
            </div>
            <div class="hamburger" id="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </header>
    );
};

export default Header;