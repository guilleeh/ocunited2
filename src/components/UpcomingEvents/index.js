import React from 'react';
import Heading from '../Heading';
import './css/style.css';
//import '../Donation/index.css';
import Sponsors from './images/Sponsors.png';
import Woman from './images/woman.png';
import Group from './images/group.png';
import Stage from './images/Stage.png';
import Singer from './images/singer.png';
import Golfer from './images/golfer.png';
import GolfCourse from './images/golf-course.png';
import Quote from './images/quote.png';
import Employees from './images/employees.png';
import Social from './images/Social.png';
import FooterLogo from './images/footer-logo.png';
import Registration from '../Registration/registrationIndex';
import ReactModal from 'react-modal';
import Gathering from './videos/gathering.mp4';







class UpcomingEvents extends React.Component{
    state={
        donation_visibility:false,
        
    };

    show_modal = () =>{
        this.setState({donation_visibility:true});
        document.body.style.setProperty("overflow-y","hidden");
    }

    hide_modal = () =>{
        this.setState({donation_visibility:false});
        document.body.style.setProperty("overflow-y","auto");
    }


  render(){
      return(
          <div className = "events-container">
          <div className="square">
          <section class="banner">
                
                <div class="background"><video src={Gathering} autoPlay loop muted/>
                
                </div>
            </section>
          </div>
              <Heading />
        
                );
              <ReactModal 
                    isOpen={this.state.donation_visibility}
                    onRequestClose={this.hide_modal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    className="DonationModal"
                    overlayClassName="Overlay"
                >
                    <div id = "makeadonation">Event Registration</div>
                    <Registration hide_modal={this.hide_modal} />
                </ReactModal>
                <div className="buttons">
                        <li onClick={this.show_modal}><div className="buttontext">Register</div></li>
                </div>
              <section class="banner">
                
                  <div class="background">
                  <div class = "centered">RESTORING FAMILIES &amp; COMMUNITIES TOGETHER</div>
                  <div class = "quote_centered">THE LOVE OF OUR NEIGHBOR IN ALL ITS FULLNESS SIMPLY MEANS BEING ABLE TO SAY, "WHAT ARE GOING THROUGH?" </div>
                  </div>
              </section>
              <br></br>
              <section class="container1">
                  <h2>MADE POSSIBLE BY:</h2>
                  <div className="sponsors"> <img src={Sponsors} alt="sponsors"/></div>
              </section>
              <main>
                  <section class="event-one">
                  <h2>EVENTS SUMMARY</h2>
                  <h3>NO JOB TOO BIG OR SMALL</h3>
                  <h2>COMMUNITY SERVICE HELPS ALL</h2>
                  <div className="womanVolunteer"> <img src={Woman} alt="womanVolunteer"/></div>
                  <div className="group"> <img src={Group} alt="group"/></div>
                  <h3>LOVE YOUR CITY</h3>
                  <h4>BE A PART OF SERVE DAY THIS YEAR! DETAILS AND SCHEDULING</h4>
                  <ul>
                      <li>SCHEDULE</li>
                      <li>07:00 AM – Team Meeting at OC United Booth</li>
                      <li>08:00 AM – DTF Plaza Rally</li>
                      <li>09:15 AM – Volunteers Sent out to Project Sites</li>
                      <li>09:30 AM – Capture Photo / Video at Project Sites</li>
                      <li>12:15 PM – Media Team Arrive at Fullerton College to capture Luncheon</li>
                      <li>01:00 PM – Debrief</li>
                  </ul>
                 
                  <button type="submit" form="#" value="Submit">Register</button>
                  </section>
                  <section class="event-two">
                  <h3>INVEST IN YOUR TALENT</h3>
                  <h2>OUR TALENT IS TO GROW YOURS</h2>
                  <div className="stage"> <img src={Stage} alt="stage"/></div>
                  <div className="singer"> <img src={Singer} alt="singer"/></div>
                  <h3>FULLERTON'S GOT TALENT</h3>
                  <h4>THE FULLERTON ROTARY PRESENTS THE FIRST ANNUAL FULLERTON'S GOT TALENT SHOW</h4>
                  <p>Come enjoy a fun night of local talent. See eight of our local Non-profit organizations compete with local talent for the grand prize. There will be snacks, soft drinks, wine and beer available for purchase. Funds raised will go to the Fullerton Rotary Foundation to support the participating non-profits and other Youth In Need in our community</p>
                  <ul>
                      <li>SCHEDULE OF EVENTS</li>
                      <li>5:00 PM - 6:30 PM DINNER RECEPTION @ A &amp;V’S</li>
                      <li>7:00 PM - 8:30 PM FOX THEATER SHOW</li>
                      <li>8:30 PM - AFTER PARTY &amp; ARTIST RECEPTION</li>
                  </ul>
                  <button class ="register" type="submit" form="#" value="Submit">Register</button>

                  </section>
                  <section class="event-three">
                  <h3>SWING INTO ACTION</h3>
                  <h2>WHAT HAPPENS ON THE GOLF COURSE, STAYS ON THE GOLF COURSE</h2>
                  <div className="golfer"> <img src={Golfer} alt="golfer"/></div>
                  <div className="golf-course"> <img src={GolfCourse} alt="golf-course"/></div>
                  <h3>CHARITY GOLF TOURNAMENT</h3>
                  <h4>OC UNITED'S SECOND ANNUAL CHARITY GOLF TOURNAMENT</h4>
                  <p>We are excited to invite you to OC United’s Second Annual Charity Golf Tournament on Wednesday, June 26th, 2019 at Coyote Hills Golf Course!</p>
                  <ul>
                      <li>CONTESTS</li>
                      <li>Longest Drive (Men’s and Women’s)</li>
                      <li>Hole In One</li>
                      <li>Closest To The Pin (Men’s and Women’s)</li>
                      <li>Putting Contest</li>
                      <li>Betting Hole</li>
                      <li>Helicopter Ball Drop
                      $10 Per Ball Or $25 For 3 Balls</li>
                  </ul>
                  <button type="submit" form="#" value="Submit">Register</button>

                  </section>
                  <div className="quote"> <img src={Quote} alt="quote-mark"/></div>
                  <p>“Love Fullerton was an awesome experience for our families. All the volunteers made our ladies feel wonderful, not only did they do haircuts, but they also did manicures and pedicures. Not only did the ladies enjoy themselves but the children as well, received haircuts, manicures, and pedicures... every one of them were so grateful and ecstatic about their new looks. It truly had the “spa day” feel... All that participated were immensely pleased and loved their new looks and their colored toes and fingernails! We take our hats off to Grace and all the volunteers that made this day a special one!” </p>
              </main>

              <div className = "container_footer">
                  <section class="connect">
                    <div class="contact">
                    <h5>CONTACT</h5>
                    <p>418 W COMMONWEALTH AVE.,
                        FULLERTON, CA 92832
                        (714) 515 - 3085</p>
                    </div>
                    <div class="connect-with-us">
                    <h4>CONNECT WITH US</h4>
                    <div className="employees"> <img src={Employees} alt="employees"/></div>
                    <div className="social"> <img src={Social} alt="social"/></div>
                    </div>
                    <h4>JOIN OUR MAILING LIST</h4>
                    <form class="form-inline" action="/action_page.php">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Your email address" name="email"/>

                    <button type="submit">SIGN UP</button>
                    </form>

                    <footer>
                        <div class="right">
                        <p>COPYRIGHT &copy; 2019 OC UNITED. ALL RIGHTS RESERVED.</p>
                        </div>
                        <div class="left">
                            <ul>
                                <li>TERMS OF USE</li>
                                <li>PRIVACY POLICY</li>
                                <li>JOBS</li>
                            </ul>
                        </div>
                        <div class="middle">
                        <div className="footer-logo"> <img src={FooterLogo} alt="footer-logo"/></div>
                        </div>
                      </footer>

                      </section>
              </div>

          </div>
      );
  }
}

export default UpcomingEvents;
