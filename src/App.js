import './App.css';
// import './demo.css';
import { CgMail } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoMdCamera, IoLogoYoutube, IoLogoWhatsapp, IoIosArrowDown, IoMdEgg, IoIosStar, IoIosStarHalf, IoIosArrowRoundForward, IoIosPlay } from "react-icons/io";
import { FaHandPointRight, FaUniversity, } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import logoimg from './img/logo.svg';
import logo2 from './img/logo2.svg';
import image25 from './img/image25.png';
import image26 from './img/image26.jpeg';
import image27 from './img/image27.jpeg';




function App() {
  return (
    // start top header ..................................
    <section>
      <header>
        <div className='main_header'>
          <div className='container'>
            <div className='top_header'>
              <div className='left_info'>
                <div className='mail'>
                  <h1 className='icon'><CgMail></CgMail></h1>
                  <span className='info'>info@cdmi.in</span>
                  <div className='verify'>
                    <h1 className='icon1'><FaCertificate></FaCertificate></h1>
                    <span className='cer'>verify certificate</span>
                  </div>
                </div>
              </div>
              <div className='centar_info'>
                <div>
                  <h2 className='que'>HAVE ANY QUESTION?
                    +91 90333 16003</h2>
                </div>
              </div>
              <div className='rigth_icon '>
                <div className='icon_2'>
                  <a href=''><IoLogoFacebook></IoLogoFacebook></a>
                  <a href=''><IoLogoTwitter></IoLogoTwitter></a>
                  <a href=''><IoLogoGoogleplus></IoLogoGoogleplus></a>
                  <a href=''><IoLogoLinkedin></IoLogoLinkedin></a>
                  <a href=''><IoMdCamera></IoMdCamera></a>
                  <a href=''><IoLogoYoutube></IoLogoYoutube></a>
                  <a href=''><IoLogoWhatsapp></IoLogoWhatsapp></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end top header ..........................  */}
        {/* start logo header ....................... */}
        <div className='container'>
          <div className='logo_header'>
            <div className='main_logo'>
              <img src={logoimg}></img>
            </div>
            <nav>
              <ul className='main_menu'>
                <li><a href=''>home</a></li>
                <li><a href=''>courses<IoIosArrowDown></IoIosArrowDown></a></li>
                <li><a href=''>activities<IoIosArrowDown></IoIosArrowDown></a></li>
                <li><a href=''>blog</a></li>
                <li><a href=''>know us<IoIosArrowDown></IoIosArrowDown></a></li>
                <li><a href=''>get in touch</a></li>
                <li><a href=''>student zone<IoIosArrowDown></IoIosArrowDown></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* start slider */}
      <div className='i_name'>
        <img src={require(`./img/04.jpg`)}></img>
      </div>
      {/* end slider */}
      {/* start course info */}
      <div className='course_info'>
        <div className='container '>
          <div className='info_1'>
            <h1>creative course</h1>
            <h2 className='sub_title'>offered course</h2>
          </div>
          <div className='check_box'>
            <div className='item'>
              <div className='single_item'>
                <div className='img_item'>
                  <img src={require('./img/05.jpg')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single_item '>
                <div className='img_item'>
                  <img src={require('./img/25.webp')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single_item'>
                <div className='img_item'>
                  <img src={require('./img/26.webp')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
          </div>
          <div className='check_box'>
            <div className='item'>
              <div className='single_item'>
                <div className='img_item'>
                  <img src={require('./img/27.webp')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single_item'>
                <div className='img_item'>
                  <img src={require('./img/28.webp')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single_item'>
                <div className='img_item'>
                  <img src={require('./img/29.webp')}></img>
                </div>
                <div className='title'>
                  <h3>devlopment  course</h3>
                </div>
                <div className='star'>
                  <h4 className='icon_3'><IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStar></IoIosStar>
                    <IoIosStarHalf></IoIosStarHalf>
                  </h4>
                  <button className='btn'>know more!</button>
                </div>
              </div>
            </div>
          </div>
          <button className='btn_2'>view all course
            <IoIosArrowRoundForward></IoIosArrowRoundForward></button>
        </div>
      </div>
      {/* end course info */}
      {/* start about us */}
      <div className='main_two'>
        <div className='text'>
          <div className='two_p1'>
            <div className='line1'></div>
            <div className='text_cdmi'>ABOUT US</div>
          </div>
          <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
          <p className='prag'>
            Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
          </p>
          <div className='btn_part1'>
            <a className='btn2'>Enroll Now... !</a>
          </div>
        </div>
        <div className='photo'>
          <div className='img_sir'>
            <img src={require('./img/06.jpeg')}></img>
          </div>
          <p className='play'>
            <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><IoIosPlay></IoIosPlay><i className='p_icon'></i></a>
          </p>
        </div>
      </div>
      {/* end about us */}

      {/* start parallax */}
      <div className='parallax_bg'>
        <div className='parallx'>
          <div className='parallax_img'>
            <a href='' className='p_img'><img src={require('./img/18.png')}></img></a>
          </div>
          <p className='number'>18000+</p>
          <p className='stu'>HAPPY STUDENT</p>
        </div>
        <div className='parallx'>
          <div className='parallax_img'>
            <a href='' className='p_img'><img src={require('./img/15.png')}></img></a>
          </div>
          <p className='number'>18000+</p>
          <p className='stu'>HAPPY STUDENT</p>
        </div>
        <div className='parallx'>
          <div className='parallax_img'>
            <a href='' className='p_img'><img src={require('./img/16.png')}></img></a>
          </div>
          <p className='number'>18000+</p>
          <p className='stu'>HAPPY STUDENT</p>
        </div>
        <div className='parallx'>
          <div className='parallax_img'>
            <a href='' className='p_img'><img src={require('./img/17.png')}></img></a>
          </div>
          <p className='number'>18000+</p>
          <p className='stu'>HAPPY STUDENT</p>
        </div>
      </div>






      {/* end parallax  */}
      {/* start happy student */}
      <div className='happy_stu'>
        <div className='container'>
          <div className='happy'>
            <p className='happy_title'>happy student
              <div className='line_3'></div>
            </p>
            <h1 className='spek'>alumni Speak</h1>
            <FaQuoteRight className='icon_8'></FaQuoteRight>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy_part_2'>
              <img src={image27}></img>
              <div className='bottam_info'>
                <h3 className='name_1'>Goti Shruti</h3>
                <h5 className='deve_an'><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>

              </div>
            </div>

            {/* <div className='happy_stu_img'>
              <div className='student_2'>
                <img src={image25}></img>
                <div className='happy_stu_1'>
                  <img src={image26}></img>
                </div>
              </div>
            </div> */}






            {/* <div className='w-50 happy-img'>
              <div style={{
                width: '500px',
                height: '500px',
                backgroundImage:`url(${image26})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <img src={image25}></img>

                <div className='happy1'>
                  <img src={image26}></img>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>



      {/* HAPPY STUDENTS END */}




      {/* start why  choose cerative  */}
      <div className='choose_part'>
        <div className='offer_part'>
          <div className='two_p'>
            <div className='line3'></div>
            <div className='text_cdmi'>READ OUR DIFFERENCE</div>
          </div>
          <p className='course'>WHY CHOOSE CREATIVE</p>
        </div>
        <div className='six_part1'>
          <div className='first1'>
            <div className='one1'>
              <div className='one_img1'>
                <img src={require('./img/1.png')}></img>
              </div>
              <p className='industry'>Industry Experts As Trainers</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
            <div className='one1'>
              <div className='one_img2'>
                <img src={require('./img/2.png')}></img>
              </div>
              <p className='industry'>Latest Curriculum</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
            <div className='one1'>
              <div className='one_img3'>
                <img src={require('./img/3.png')}></img>
              </div>
              <p className='industry'>Latest Technology</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
          </div>
          <div className='sec1'>
            <div className='one1'>
              <div className='one_img4'>
                <img src={require('./img/5.png')}></img>
              </div>
              <p className='industry'>Interview Assistance</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
            <div className='one1'>
              <div className='one_img5'>
                <img src={require('./img/6.png')}></img>
              </div>
              <p className='industry'>Free Upgradation</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
            <div className='one1'>
              <div className='one_img6'>
                <img src={require('./img/7.png')}></img>
              </div>
              <p className='industry'>Lifetime Support</p>
              <p className='our_p'>
                Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end why choose cerative */}

      {/* start student placement */}
      <div className='std'>
        <div className='offer_part'>
          <div className='two_p'>
            <div className='line'></div>
            <div className='text_cdmi'>STUDENT PLACEMENT</div>
          </div>
          <p className='course'>OUR RECRUITMENT PARTNERS</p>
        </div>
        <div className='company'>
          <div className='inner_com'>
            <div className='one_c'>
              <a href='https://www.resolutesolutions.in/'> <img src={require('./img/19.png')}></img></a>
            </div>
            <div className='one_c'>
              <a href='https://www.cdmi.in/'><img src={require('./img/20.png')}></img></a>
            </div>
            <div className='one_c'>
              <a href='https://www.squareinfosoft.com/'><img src={require('./img/21.png')}></img></a>
            </div>
            <div className='one_c'>
              <a href='https://trigontic.com/'><img src={require('./img/22.png')}></img></a>
            </div>
            <div className='one_c'>
              <a href='https://viraniinfotech.com/'><img src={require('./img/23.png')}></img></a>
            </div>
            <div className='one_c'>
              <a href='https://www.webmigrates.com/'><img src={require('./img/24.png')}></img></a>
            </div>
          </div>
        </div>
      </div>
      {/* end student palcement */}

      {/* start demanded course */}
      <div className='demand'>
        <p className='our_d'>Our Demanded Course -</p>
        <div className='parent_btn'>
          <div className='btn3'>
            <p className='multi'>Multimedia Training Institute In Varachha</p>
            <p className='multi'>spoken english class in katargam</p>
            <p className='multi'>Web development training in katargam</p>
            <p className='multi'>Best animation training course</p>
          </div>
          <div className='btn3'>
            <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
            <p className='multi'>Python Training Institute In Varachha</p>
            <p className='multi'>Adobe illustrator design</p>
            <p className='multi'>Adobe xd design training institute in varachha</p>
          </div>
          <div className='btn3'>
            <p className='multi'>Multimedia Training Institute In Varachha</p>
            <p className='multi'>spoken english class in katargam</p>
            <p className='multi'>Web development training in katargam</p>
            <p className='multi'>Best animation training course</p>
          </div>
          <p className='show'>Show more</p>
        </div>
      </div>
      {/* end demanded course */}
      {/* start footer  */}
      <footer className='footer_bg'>
        <div className='top_footer'>
          <div className='container '>
            <div className='footer_logo'>
              <div className='logo_img' >
                <img src={logo2}></img>
              </div>
            </div>
            <p className='text_1'>
              Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
            </p>
            <h2 className='text_2'>Follow Us On</h2>
            <div className='icon_5'>
              <a href=''><IoLogoFacebook></IoLogoFacebook></a>
              <a href=''><IoLogoTwitter></IoLogoTwitter></a>
              <a href=''><IoLogoGoogleplus></IoLogoGoogleplus></a>
              <a href=''><IoLogoLinkedin></IoLogoLinkedin></a>
              <a href=''><IoMdCamera></IoMdCamera></a>
              <a href=''><IoLogoYoutube></IoLogoYoutube></a>
              <a href=''><IoLogoWhatsapp></IoLogoWhatsapp></a>
            </div>
          </div>
          <div className="part_2">
            <h2 className='link'>Feature Links </h2>
            <ul className='menu'>
              <li><FaHandPointRight className='icon_6'></FaHandPointRight>about Us</li>
              <li><FaHandPointRight className='icon_6'></FaHandPointRight>Blogs</li>
              <li><FaHandPointRight className='icon_6'></FaHandPointRight>Join Us</li>
              <li><FaHandPointRight className='icon_6'></FaHandPointRight>Company Login</li>
              <li><FaHandPointRight className='icon_6'></FaHandPointRight>ertificate Verification</li>

            </ul>
          </div>
          <div className='part_3'>
            <h4 className='us'>Contact Us</h4>
            <h3>HEAD OFFICE - YOGICHOWK</h3>
            <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
            <h5>Mo :<span>+91 90333 16003</span></h5>
            <h3>Other Branches</h3>
            <ul className='icon_7'>
              <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
            </ul>

          </div>
        </div>
      </footer>
      {/* end footer  */}
      {/* footer */}
      <div className='copyright'>
        <div className='container'>
          <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
        </div>
      </div>
      {/* end footer */}



    </section>
    // end logo header...............

  )
}

export default App;
