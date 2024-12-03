import "../css/Home.css"
    
const Home = () => {
    return (
        <div className = "home">
            <hr class="border-line"></hr>
            <div class = "description">
                <h2 class="active">Welcome to StatPad!</h2>
                <p>StatPad is a comprehensive sports statistics platform that provides detailed insights into player performance and team history. Users can easily view individual player stats and track their college history, gaining a full overview of their athletic journey. In addition, StatPad features dedicated coach and team pages that showcase historical data, achievements, and performance stats, offering valuable insights into a team's development and coaching impact. The platform also includes data management tools, allowing authorized users to add or delete player information, ensuring rosters and stats stay current. StatPad is designed to streamline the process of tracking player progress, analyzing team success, and assessing coaching strategies.</p>
            </div>
            <div class = "images">
                <img class="slide-show" img src="images/slide-show.jpg"></img>        
            </div>
            <hr class="border-line"></hr>
        </div>     
    );
};

export default Home;