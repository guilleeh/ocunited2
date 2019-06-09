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
import ReactPlayer from 'react-player';
import Image from 'react-image-resizer';








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
          <Heading />
          {/* Header */}
              <header id="showcase" className="grid">
                   <div className='player-wrapper'>
                       <ReactPlayer className='react-player'
                       url='https://vimeo.com/262118519'
                       width='100%' height='100%'
                       autoPlay loop muted playing
                       />
                   </div>
                   <div className="video-header">
                           <h1>RESTORING FAMILIES &amp; COMMUNITIES TOGETHER</h1>
                           <br></br>
                           <h4>THE LOVE OF OUR NEIGHBOR IN ALL ITS FULLNESS SIMPLY MEANS BEING ABLE TO SAY, "WHAT ARE YOU GOING THROUGH?" </h4>
                    </div>
              </header>

           {/* Main Area */}
           <main id="main">
               {/* Section A */}
               <section id="section-a" class="grid">
                   <div class="content-wrap">
                       <h2 className="sponsor-header">Made Possible By:</h2>
                       <div className="sponsors">
                           <Image
                           src={Sponsors}
                           height={350}
                           width={750}
                           />
                       </div>
                   </div>
               </section>

               {/* Section B */}
               <section id="section-b" class="grid">
                   <div class="content-wrap">
                       <h1 id="events-summary">EVENTS SUMMARY</h1>
                       <div className="divider div-transparent div-dot"></div>
                       <div id="yellow-circle" className="circles"></div>
                       <h3 className="content-title">NO JOB TOO BIG OR SMALL</h3>
                       <h2 className="content-title2">COMMUNITY SERVICE<br/>HELPS ALL</h2>
                       <hr className="yellow-line"></hr>
                       <div className="woman-volunteer">
                           <Image
                               src={Woman}
                               height={600}
                               width={600}
                               alt="woman-volunteer"
                           />
                           <div className="buttons">
                              <li id="register-section-b" onClick={this.show_modal}><div className="buttontext">Register</div></li>
                           </div>
                       </div>
               
                       <ReactModal
                               isOpen={this.state.donation_visibility}
                               onRequestClose={this.hide_modal}
                               shouldCloseOnOverlayClick={true}
                               shouldCloseOnEsc={true}
                               className="DonationModal"
                               overlayClassName="Overlay">
                               <div id = "makeadonation">Event Registration</div>
                               <Registration hide_modal={this.hide_modal} />
                           </ReactModal>
                       <div className="group">
                           <Image
                               src={Group}
                               height={350}
                               width={550}
                               alt="group"
                           />
                       </div>
                       <div className="schedule-container1">
                           <h3 className="content-title3">LOVE YOUR CITY</h3>
                           <div id="divider1" className="dividers"></div>
                           <h4 id="section-b-h4" className="h4">BE A PART OF SERVE DAY THIS YEAR! <br/>DETAILS AND SCHEDULING</h4>
                           <ul id="section-b-list" className="li">
                               <li id="child1">SCHEDULE</li>
                               <br></br>
                               <li>07:00 AM – Team Meeting at OC United Booth</li>
                               <li>08:00 AM – DTF Plaza Rally</li>
                               <li>09:15 AM – Volunteers Sent out to Project Sites</li>
                               <li>09:30 AM – Capture Photo / Video at Project Sites</li>
                               <li id='long-text'>12:15 PM – Media Team Arrive at Fullerton College to capture Luncheon</li>
                               <li>01:00 PM – Debrief</li>
                           </ul>
                       </div>
                   </div>
               </section>

               {/* Section C */}
               <section id="section-c" class="grid">
                   <div class="content-wrap">
                       <div className="event-headers">
                           <h3 className="content-title">INVEST IN YOUR TALENT</h3>
                           <h2 className="content-title2">OUR TALENT IS TO <br/>GROW YOURS</h2>
                           <hr className="blue-line"></hr>
                       </div>
                       <div id="blue-circle" className="circles"></div>
                       <div className="stage">
                           <Image
                               src={Stage}
                               height={350}
                               width={540}
                               alt="stage"
                           />
                       </div>
                       <div className="singer">
                           <Image
                               src={Singer}
                               height={500}
                               width={590}
                               alt="singer"
                           />
                           <div className="buttons">
                              <li id="register-section-c" onClick={this.show_modal}><div className="buttontext">Register</div></li>
                          </div>
                       </div>
                       <div className="schedule-container2">
                           <h3 className="content-title3">FULLERTON'S GOT TALENT</h3>
                           <div id="divider2" className="dividers"></div>
                           <div>
                           <h4 id="section-c-h4" className="h4">THE FULLERTON ROTARY PRESENTS THE FIRST <br/>ANNUAL FULLERTON'S GOT TALENT SHOW</h4>
                           <p>Come enjoy a fun night of local talent. See eight of our local <br/>
                           Non-profit organizations compete with local talent for the <br/>
                           grand prize. There will be snacks, soft drinks, wine and beer <br/>
                           available for purchase. Funds raised will go to the Fullerton <br/>
                           Rotary Foundation to support the participating non-profits and <br/>
                           other Youth In Need in our community</p>
                           </div>
                           <ul id="section-c-list" className="li">
                               <li id="child2">SCHEDULE OF EVENTS</li>
                               <li>5:00 PM - 6:30 PM DINNER RECEPTION @ A&amp;V’S</li>
                               <li>7:00 PM - 8:30 PM FOX THEATER SHOW</li>
                               <li>8:30 PM - AFTER PARTY &amp; ARTIST RECEPTION</li>
                           </ul>
                       </div>
                   </div>
               </section>

               {/* Section D */}
               <section id="section-d" class="grid">
                   <div class="content-wrap">
                       <h3 className="content-title">SWING INTO ACTION</h3>
                       <h2 className="content-title2">WHAT HAPPENS ON THE<br/>GOLF COURSE, STAYS ON<br/>THE GOLF COURSE</h2>
                       <hr className="black-line"></hr>
                       <div id="red-circle" className="circles"></div>
                       <div className="golfer">
                           <Image
                               src={Golfer}
                               height={600}
                               width={600}
                               alt="golfer"
                           />
                           <div className="buttons">
                              <li id="register-section-d" onClick={this.show_modal}><div className="buttontext">Register</div></li>
                          </div>
                       </div>
                       <div className="golf-course">
                       <Image
                           src={GolfCourse}
                           height={300}
                           width={590}
                           alt="golfcourse"
                       />
                       </div>
                       <div className="schedule-container3">
                           <h3 className="content-title3">CHARITY GOLF TOURNAMENT</h3>
                           <div id="divider3" className="dividers"></div>
                               <h4 id="section-d-h4" className="h4">OC UNITED'S SECOND ANNUAL CHARITY <br/>
                                   GOLF TOURNAMENT</h4>
                               <p>We are excited to invite you to OC United’s Second Annual <br/>
                                   Charity Golf Tournament on Wednesday, June 26th, 2019 <br/>
                                   at Coyote Hills Golf Course!</p>
                               <ul id="section-d-list" className="li">
                                   <li id="child2">CONTESTS</li>
                                   <li>Longest Drive (Men’s and Women’s)</li>
                                   <li>Hole In One</li>
                                   <li>Closest To The Pin (Men’s and Women’s)</li>
                                   <li>Putting Contest</li>
                                   <li>Betting Hole</li>
                                   <li>Helicopter Ball Drop
                                   $10 Per Ball Or $25 For 3 Balls</li>
                               </ul>
                       </div>
                       <div id="footer-circle" className="circles">
                           <div className="quote-mark">
                               <Image
                                   src={Quote}
                                   height={50}
                                   width={50}
                                   alt="quote-mark"
                               />
                           </div>
                           <p className="footer-paragraph">“Love Fullerton was an awesome experience for our families. All the volunteers made our ladies feel wonderful, not only did they do haircuts, but they also did manicures and pedicures. Not only did the ladies enjoy themselves but the children as well, received haircuts, manicures, and pedicures... every one of them were so grateful and ecstatic about their new looks. It truly had the “spa day” feel... All that participated were immensely pleased and loved their new looks and their colored toes and fingernails! We take our hats off to Grace and all the volunteers that made this day a special one!” </p>
                       </div>
                   </div>
               </section>

               {/* Section E */}
               <section id="section-e" class="grid">
                   <div class="content-wrap">
                       <div class="contact">
                           <h5>CONTACT</h5>
                           <hr id="contact-divider"></hr>
                           <p>418 W COMMONWEALTH AVE.,<br/>
                               FULLERTON, CA 92832 <br/>
                               (714) 515 - 3085</p>
                       </div>
                       <div class="connect-with-us">
                       <div id="middle-connect">
                           <h4>CONNECT WITH US</h4>
                           <div id="connect-w-us"></div>
                       </div>
                           <div className="employees">
                           <Image
                               src={Employees}
                               height={200}
                               width={300}
                               alt="employees"
                           />
                           </div>
                           <div className="social-handle"> <img src={Social} alt="social"/></div>
                       </div>
                       <div class="mail-list">
                           <h5>JOIN OUR MAILING LIST</h5>
                           <hr id="mailing"></hr>
                       </div>
                       <form class="form-inline-events" action="/action_page.php">
                           <label for="email">Email:</label>
                           <input type="email" id="email" placeholder="Your email address" name="email"/>
                           <button type="submit">SIGN UP</button>
                       </form>
                   </div>
               </section>
           </main>

           {/* Footer */}
           <footer id="main-footer" class="grid">
               <div className="footer-container">
                   <div class="left">
                       <ul>
                           <li>TERMS OF USE | PRIVACY POLICY | JOBS</li>
                       </ul>
                   </div>
                   <div class="middle">
                       <div className="footer-logo"> <img src={FooterLogo} alt="footer-logo"/></div>
                   </div>
                   <div class="right">
                       <p>COPYRIGHT &copy; 2019 OC UNITED. ALL RIGHTS RESERVED.</p>
                   </div>
               </div>
           </footer>
        </div>
    );
}
}

export default UpcomingEvents;





{/*<ReactModal
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
   <div className="event-one-btn">
       <li onClick={this.show_modal}><div className="event-one-text">Register</div></li>
   </div>
                   */}




