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
               <div className="square">
               <section class="banner">

                       <ReactPlayer className='react-player'
                       url='https://vimeo.com/262118519'
                       width='100%' height='100%'
                       autoPlay loop muted playing
                       />

                   </section>
                   <h1>RESTORING FAMILIES &amp; COMMUNITIES TOGETHER</h1>
                   <h4>THE LOVE OF OUR NEIGHBOR IN ALL ITS FULLNESS SIMPLY MEANS BEING ABLE TO SAY, "WHAT ARE YOU GOING THROUGH?" </h4>   
               </div>
            
             
             <section class="container1">
                 <h2 className="sponsor-header">Made Possible By:</h2>
                 <div className="sponsors">
                 <Image
                   src={Sponsors}
                   height={350}
                   width={750}
                 />
                 </div>
             </section>
            
                 <section class="event-one">
                   <div className="event-one-items">
                       <h1>EVENTS SUMMARY</h1>
                       <hr></hr>
                       <div id="yellowcircle"></div>
                       <h3 className="header3">NO JOB TOO BIG OR SMALL</h3>
                       <h2>COMMUNITY SERVICE<br/>HELPS ALL</h2>
                       <hr className="yellow-line"></hr>
                       <div className="womanVolunteer">
                           <Image
                               src={Woman}
                               height={1300}
                               width={500}
                               alt="womanVolunteer"
                           />
                       </div>
                       <div className="group"> 
                       <Image
                               src={Group}
                               height={1000}
                               width={550}
                               alt="group"
                           />
                       </div>
                       <div className="event-one-text">
                               <h3>LOVE YOUR CITY</h3>
                               <div className="triangle"></div>
                               <h4>BE A PART OF SERVE DAY THIS YEAR! <br/>DETAILS AND SCHEDULING</h4>
                               <ul>
                                   <li>SCHEDULE</li>
                                   <br></br>
                                   <li>07:00 AM – Team Meeting at OC United Booth</li>
                                   <li>08:00 AM – DTF Plaza Rally</li>
                                   <li>09:15 AM – Volunteers Sent out to Project Sites</li>
                                   <li>09:30 AM – Capture Photo / Video at Project Sites</li>
                                   <li id='long-text'>12:15 PM – Media Team Arrive at Fullerton College to capture Luncheon</li>
                                   <li>01:00 PM – Debrief</li>
                               </ul>
                       </div>
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
                       <div className="event-one-btn">
                               <li onClick={this.show_modal}><div className="event-one-text">Register</div></li>
                       </div>
                   </div>
                 </section>
                 <section class="event-two">
                        <h3 id="event-two-h3">INVEST IN YOUR TALENT</h3>
                        <h2 id="event-two-h2">OUR TALENT IS TO <br/>GROW YOURS</h2>
                        <hr className="blue-line"></hr>
                        <div id="bluecircle"></div>
                        <div className="stage"> 
                        <Image
                            src={Stage}
                            height={1000}
                            width={540}
                            alt="stage"
                        />
                        </div>
                        <div className="singer"> 
                        <Image
                            src={Singer}
                            height={1500}
                            width={590}
                            alt="singer"
                        />
                        </div>
                        <div className="schedule-container2">
                            <h3 id="schedule-header-evt2">FULLERTON'S GOT TALENT</h3>
                            <div className="blue-triangle"></div>
                            <div className="schedule-header2-evt2">
                            <h4>THE FULLERTON ROTARY PRESENTS THE FIRST <br/>ANNUAL FULLERTON'S GOT TALENT SHOW</h4>
                            <p>Come enjoy a fun night of local talent. See eight of our local <br/>
                            Non-profit organizations compete with local talent for the <br/>
                            grand prize. There will be snacks, soft drinks, wine and beer <br/>
                            available for purchase. Funds raised will go to the Fullerton <br/>
                            Rotary Foundation to support the participating non-profits and <br/>
                            other Youth In Need in our community</p>
                            </div>
                            <ul>
                                <li id="child1">SCHEDULE OF EVENTS</li>
                                <li>5:00 PM - 6:30 PM DINNER RECEPTION @ A&amp;V’S</li>
                                <li>7:00 PM - 8:30 PM FOX THEATER SHOW</li>
                                <li>8:30 PM - AFTER PARTY &amp; ARTIST RECEPTION</li>
                            </ul>
                        </div>

                 </section>
                 <section class="event-three">
                    <h3>SWING INTO ACTION</h3>
                    <h2>WHAT HAPPENS ON THE<br/>GOLF COURSE, STAYS ON<br/>THE GOLF COURSE</h2>
                    <hr className="event3-line"></hr>
                    <div id="redcircle"></div>
                    <div className="golfer"> 
                        <Image
                            src={Golfer}
                            height={1500}
                            width={600}
                            alt="golfer"
                        />
                    </div>
                    <div className="golf-course"> 
                    <Image
                        src={GolfCourse}
                        height={1500}
                        width={590}
                        alt="golfcourse"
                    />
                    </div>
                    <div className="event3-header1">CHARITY GOLF TOURNAMENT</div>
                    <div className="black-triangle"></div>
                    <div className="schedule-container3">
                        <h4>OC UNITED'S SECOND ANNUAL CHARITY <br/>
                            GOLF TOURNAMENT</h4>
                        <p>We are excited to invite you to OC United’s Second Annual <br/>
                           Charity Golf Tournament on Wednesday, June 26th, 2019 <br/>
                           at Coyote Hills Golf Course!</p>
                        <ul>
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
                 </section>
                 <section className="testimonials">
                   <div className="quote"> <img src={Quote} alt="quote-mark"/></div>
                   <p>“Love Fullerton was an awesome experience for our families. All the volunteers made our ladies feel wonderful, not only did they do haircuts, but they also did manicures and pedicures. Not only did the ladies enjoy themselves but the children as well, received haircuts, manicures, and pedicures... every one of them were so grateful and ecstatic about their new looks. It truly had the “spa day” feel... All that participated were immensely pleased and loved their new looks and their colored toes and fingernails! We take our hats off to Grace and all the volunteers that made this day a special one!” </p>
                 </section>

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

