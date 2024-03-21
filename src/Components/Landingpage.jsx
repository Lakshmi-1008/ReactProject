import '../Style/Landingpage.css'
import { useNavigate } from 'react-router-dom';
import Whyactiveb from './Whyactiveb';
import Discover from './Discoverbtn';
import Knowmore1 from './Knowmore1';
import Knowmore2 from './Knowmore2';
import Discovermore from './Discovermore';
import { useState } from 'react';

const Landingpage = () => {
   let navigate=useNavigate()
   let[name,setname]=useState("")
   console.log(name);
   let[password,setpassword]=useState("")
   let[message,setmessage]=useState("")

   function login(){
      navigate("/loginpage")
   }
   function signup(){
      navigate("/signuppage")
   }
  function Whyactiveb(){
   navigate("/whyactiveb")
  } 
  function Discover(){
   navigate("/discover")
  }
  function Knowmore1(){
   navigate("/knowmore1")
  }
  function Knowmore2(){
   navigate("/knowmore2")
  }
  function Discovermore(){
   navigate("/discovermore")
  }
  function contact(){
  if(name.length>0 && password.length>0 && message.length>0){
   alert("data saved successfully")
  }
  else{
   alert("invalid")
  }

  }
   return (
      <div className="parent">
         <div className="navbar">
            <div className="icon"><img src="https://cdn.icon-icons.com/icons2/1152/PNG/512/1486506220-list-multimedia-player-music-list-music_81485.png" alt="" height="60" width="60" /></div>
            <div className="logo"><img src="https://consiliumeducation.com/itm/wp-content/uploads/sites/4/2016/11/listen-2973319_1280-geralt-Pixabay.jpg" alt="" height="60" width="100" /></div>
            <div className="buttons"><button onClick={login} id="mylogin">Login</button><button  onClick={signup} id="mysignup">Signup</button> </div>

         </div>
         <div className="hero">
            <div className="image"><img src="https://miro.medium.com/max/7746/1*xsS4AmQx4_yclsV3zsAw2A.jpeg" alt="" height="200" width="260" /></div>
            <div className="description"><h1>Helping you <br /> finding a balanced  <br />folk</h1></div>
            <div className="rightimage"><img src="https://miro.medium.com/max/7746/1*xsS4AmQx4_yclsV3zsAw2A.jpeg" alt="" height="200" width="260" /></div>
         </div>
         <div className="text">
            <p>Lorem lorem dignissimos quasi illum quaerat laborum earum nisi illo dolorem. Neque quibusdam non officiis, eos pariatur sed saepe delectus commodi accusantium ut at!</p>
         </div>
         <div className="input">
            <div className="first"> <button id="restrictbtn">age:6-8</button> <input type="text" placeholder='early age gadget exposuse' />   <button id="restrictbtn">age:12-13</button> <input type="text" placeholder='12-13 age gadget' /> </div>
            <div className="second"><button id="restrictbtn">post covid</button> <input type="text" placeholder='suggestions' /> <button id="restrictbtn">Our Solution</button> <input type="text" placeholder=' enter solutions' /> <br /></div>
         </div>   <br /> <br />

         <div className="singlebutton"><button id="button_active" onClick={Whyactiveb} >Why Active Listeners</button></div>


         <div className="secondpage">
            <div className="heading"><h1 id="heading">our core   <br /> discoveries </h1></div>
            <div className="para"><p id="mytext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cumque accusamus? Possimus porro optio vitae!</p></div>


            <div className="division">
               <div className="picture"><img src="https://static.vecteezy.com/system/resources/previews/002/356/353/original/gadget-and-social-media-addiction-poster-flat-template-vector.jpg" alt="" height="600" width="500" /></div>
               <div className="contents">
                  <div className="fcon"> <div className="mobile"><img src="https://image.shutterstock.com/z/stock-vector-hand-drawn-cute-cartoon-illustration-of-mobile-phone-with-black-screen-flat-vector-smartphone-2141899925.jpg" alt="" height="100" width="100" />
                     <br />
                     <h2>Mobile Addiction</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe voluptas id voluptatibus laboriosam odit ipsa repellat explicabo, sed qui?</p>
                  </div>  <hr />
                     <div className="mobile"><img src="https://image.shutterstock.com/z/stock-vector-hand-drawn-cute-cartoon-illustration-of-mobile-phone-with-black-screen-flat-vector-smartphone-2141899925.jpg" alt="" height="100" width="100" />
                        <br />
                        <h2>Mobile Addiction</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe voluptas id voluptatibus laboriosam odit ipsa repellat explicabo, sed qui?</p>
                     </div>
                  </div>

                  <hr />
                  <div className="scon"> <div className="mobile"><img src="https://image.shutterstock.com/z/stock-vector-hand-drawn-cute-cartoon-illustration-of-mobile-phone-with-black-screen-flat-vector-smartphone-2141899925.jpg" alt="" height="100" width="100" />
                     <br />
                     <h2>Mobile Addiction</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe voluptas id voluptatibus laboriosam odit ipsa repellat explicabo, sed qui?</p>
                  </div> <hr />
                     <div className="mobile"><img src="https://image.shutterstock.com/z/stock-vector-hand-drawn-cute-cartoon-illustration-of-mobile-phone-with-black-screen-flat-vector-smartphone-2141899925.jpg" alt="" height="100" width="100" />
                        <br />
                        <h2>Mobile Addiction</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe voluptas id voluptatibus laboriosam odit ipsa repellat explicabo, sed qui?</p>
                     </div>
                  </div>

               </div>





            </div>  <button id="discoverbtn" onClick={Discover}>Discover how</button>

            <div className="helppage">
               <div className="htext"><h1>We are here  <br />to help you</h1></div>
               <div className="mypicture">
                  <div className="myfirst"><h2>speak easy</h2><img src="https://th.bing.com/th/id/R.1400c9c5f68f6455bca4d0ee5c5bb9e1?rik=Ft9g3hZSylRxNg&riu=http%3a%2f%2fitouchforspecialneeds.pbworks.com%2ff%2f1297891049%2fEasyspeak.png&ehk=R7PYLf5dzv%2f9qgZdx6ww%2bvUHWlZHlWrbnfAKm6Hxs0w%3d&risl=&pid=ImgRaw&r=0" alt="" height="300" width="300" /></div>
                  <div className="mysecond"><h2>senseces ressurection</h2><img src="https://static.vecteezy.com/system/resources/previews/000/594/107/original/vector-cartoon-boy-playing-music-and-singing.jpg" alt="" height="300" width="300" /></div>
                  <div className="mythird"><h2>one to one session9</h2><img src="https://img.freepik.com/premium-vector/vector-illustration-two-kids-talking_723224-395.jpg?w=2000" alt="" height="300" width="300" /></div>
               </div>
            </div>

            <div className="howwe">
               <div className="headline"><h1><b>How Else We Can <br /> Help</b></h1></div>
               <div className="mybox">
                  <div className="firstbox"><h1>Grief Support Group</h1><p>Lorem ipsum dolor sit amet.</p>
                     <ul>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                     </ul>
                     <div className="pics"> <button id="mysubmit" onClick={Knowmore1}><b >Know More</b></button>   <img id="mypic" src="http://clipart-library.com/img1/1304570.png" alt="" height="200" width="200" /></div>
                  </div>

                  <div className="secondbox"><h1>Psychologist available via phone consultation</h1>
                     <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                     </ul>
                     <div className="pics"> <button id="ursubmit" onClick={Knowmore2}><b>Know More</b></button>  <img id="urpic" src="https://facultyfocus.aoeducation.org/2020-03/images/10_Tips_3_2020_I_OnlineGroupDiscussion_r01_TitleImage_v1.png" alt="" height="260" width="300" /></div>
                  </div>
               </div>

            </div>
            <div className="podcastpage">
               <div className="title">
                  <div className="ptitle"><h1><b>Podcaste <br /> everyone</b></h1></div>
                  <div className="imageee"><img src="https://th.bing.com/th/id/OIP.CfpCrCaPozWcVD3VRdiW3QAAAA?w=463&h=358&rs=1&pid=ImgDetMain" alt="" height="200" width="200" /></div>
               </div>
               <div className="textboxes">
                  <div className="tbox1">
                     <div className="fpic"> <img src="https://thumbs.dreamstime.com/b/man-thinking-hard-internet-icons-portrait-bearded-young-man-wearing-jeans-shirt-thinking-hard-eyes-closed-138851688.jpg" alt="" height="150" width="100" /><br />   </div>
                     <div className="ftext">Episode-1 <h2>social media</h2><hr /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus doloribus qui  . </div>
                  </div>
                  <div className="tbox2">
                     <div className="spic"> <img src="https://th.bing.com/th/id/R.3119088e8e26b29deb06a475d93a0483?rik=UGEya3llguFRIQ&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1369450.jpg&ehk=kjNFWOOXU3rh67%2fVyvy7UVzkuimVQr8cTYIjTtxd8cs%3d&risl=&pid=ImgRaw&r=0" alt="" height="150" width="100" /></div>
                     <div className="stext">Episode-2 <h2>social media</h2><hr /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus doloribus qui  . </div>
                  </div>
                  <div className="tbox3">
                     <div className="tpic"><img src="https://mind.help/wp-content/uploads/2022/09/social-media-addiction-site.jpg" alt="" height="150" width="100" /></div>
                     <div className="ttext">Episode-3<h2>social media</h2><hr /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus doloribus qui  </div>
                  </div>

               </div>
               <button id="mydisco" onClick={Discovermore}>Discover more</button>
            </div>
            <div className="mentor">
               <img src="https://thumbs.dreamstime.com/z/business-concept-coaching-mentoring-skill-brainstorm-cartoon-flat-design-isolated-vector-illustration-153011285.jpg" alt="" height="800" width="1200" /></div>

            <div className="touchvtus">
               <h1>Get  in Touch <br /> With Us </h1>
               <div className="twin">
                  <div className="tone">
                    Full Name:  <input value={name} required onChange={(e)=>{setname(e.target.value)}} type="text " placeholder='full name' />
                  </div>
                  <div className="tone">
                     Password:<input value={password} required onChange={(e)=>{setpassword(e.target.value)}} type="password " placeholder='password' />
                  </div>

               </div>
               <div className="message">Message <input value={message} onChange={(e)=>{setmessage(e.target.value)}} type="text" placeholder='enter your message here' /></div>
               <div className="lastlinee"><p>Lorem ipsum dolor sit amet.</p>
                 <button onClick={contact}> submit</button></div>
            </div>
            <div className="onestep">
               <div className="links">
                  <div className="navigation"><img src="https://cdn.icon-icons.com/icons2/1152/PNG/512/1486506220-list-multimedia-player-music-list-music_81485.png" alt="" height="50" width="50" /> <br />
                     <p id="ampara">Lorem ipsum dolor sit amet, sequi molestias, eveniet cum necessitatibs non similique odit, repudiandae, aliquid vel.</p></div>
                  <div className="navigation">
                     <a href="">Navigation</a> <ol>Home</ol><ol>Blog</ol> <ol>Engage</ol>  <ol>Podcast</ol> <ol>Login/Signup</ol>

                  </div>
                  <div className="navigation">
                     <a href="">Legal</a><ol>Get in Touch</ol>
                     <ol>Testimonial</ol>
                     <ol>FAQ's</ol>
                     <ol>Help</ol>
                     <ol>Privacy Policy</ol>
                     <ol>Terms&Conditions</ol>

                  </div>
                  <div className="navigation">
                     <a href="">Contact Us</a><ol>📞 123456778</ol>
                     <ol>dfghjkl</ol>

                  </div>

               </div>
              

            </div>

         </div>
      </div>
   );
}

export default Landingpage;