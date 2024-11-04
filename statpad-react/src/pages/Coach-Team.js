import "../css/Coach-Team.css"

const CoachTeam = () => {
    return (
        <div className = "coach-team">
            <hr className="border-line"/>
            <div class = "coach-team">
                <div class = "coach">
                    <h2 class="active">Coach Achievements</h2>
                    <div class = "coach1">
                        <img class="c1-img1" src="images/bb.jpg"></img>
                        <h2 class="active">Bill Belichick</h2>
                        <p>Bill Belichick is a legendary NFL coach, known for leading the New England Patriots to six Super Bowl titles. His career began in 1975, and he gained recognition as the defensive coordinator for the New York Giants. Though his first head coaching job with the Cleveland Browns was short, he found immense success with the Patriots starting in 2000. Renowned for his strategic mind and adaptability, Belichick is considered one of the greatest coaches in NFL history.</p>
                    </div>
                    <div class = "coach2">
                        <img class="c2-img1" src="images/sm.jpg"></img>
                        <h2 class="active">Sean McVay</h2>
                        <p>Sean McVay is one of the NFL's brightest coaching minds, best known for leading the Los Angeles Rams to a Super Bowl victory in 2022. He began his coaching career in 2008 and quickly rose through the ranks. In 2017, at just 30 years old, McVay became the youngest head coach in modern NFL history. Known for his innovative offensive schemes and leadership, McVay transformed the Rams into a consistent playoff contender. His success, highlighted by multiple playoff runs, has cemented his reputation as one of the top coaches in the league.</p>
                    </div>
                    <div class = "coach3">
                        <img class="c3-img1" src="images/sp.jpg"></img>
                        <h2 class="active">Sean Payton</h2>
                        <p>Sean Payton is a highly successful NFL coach, best known for leading the New Orleans Saints to a Super Bowl victory in 2010. He began his coaching career in the 1990s, with stops as an offensive coordinator before becoming the Saints' head coach in 2006. Payton’s offensive expertise and partnership with quarterback Drew Brees revitalized the franchise, turning the Saints into perennial contenders. Known for his innovative play-calling and leadership, Payton’s tenure with the Saints saw multiple playoff appearances, solidifying his status as one of the NFL’s most respected coaches.</p>
                    </div>
                </div>
                <div class = "team">
                    <h2 class="active">Team History</h2>
                    <div class = "team1">
                        <img class="t1-img1" src="images/db.png"></img>
                        <h2 class="active">Denver Broncos</h2>
                        <p>The Denver Broncos are a historic NFL franchise, known for winning three Super Bowl titles. Founded in 1960, the Broncos struggled early but rose to prominence in the 1970s. Led by legendary quarterback John Elway, they reached five Super Bowls, winning back-to-back titles in 1998 and 1999. Another Super Bowl win came in 2015, with a dominant defense and quarterback Peyton Manning. The Broncos have consistently been playoff contenders and are known for their passionate fan base and impact on the league’s history.</p>
                    </div>
                    <div class = "team2">
                        <img class="t2-img1" src="images/nep.png"></img>
                        <h2 class="active">New England Patriots</h2>
                        <p>The New England Patriots are one of the most successful franchises in NFL history, known for their remarkable achievements and a dedicated fan base. Founded in 1960, the team struggled in its early years but found success in the 2000s under head coach Bill Belichick and quarterback Tom Brady. The Patriots have won six Super Bowl titles, becoming a dynasty with nine Super Bowl appearances. Known for their strategic excellence and adaptability, the Patriots have set numerous records, influencing the modern game and leaving an indelible mark on the NFL landscape.</p>
                    </div>
                    <div class = "team3">
                        <img class="t3-img1" src="images/lar.png"></img>
                        <h2 class="active">Los Angeles</h2>
                        <p>The Los Angeles Rams are a storied NFL franchise with a rich history and significant impact on the league. Founded in 1936, the team was the first to move to Los Angeles in 1946 and has since undergone several transformations. Known for their innovative offenses, the Rams reached their first Super Bowl in 1979. After a long period, they returned to prominence in the 2010s, culminating in a Super Bowl victory in 2022 under head coach Sean McVay. With a passionate fan base and a reputation for resilience, the Rams continue to shape the future of the NFL.</p>
                    </div>
                </div>
            </div>
            <hr className="border-line"/>
        </div>
    );
};

export default CoachTeam;