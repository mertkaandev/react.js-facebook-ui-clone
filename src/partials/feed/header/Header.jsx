import React from "react";
import "./header.css"

const Header = () => {

     return (
        <div className="header">

            <div className="headerWrapper">

                   <div className="headerTop">

                      <div className="headerOptions">
                        <span className="headerText">Stories</span>
                      </div>

                      <div className="headerOptions"> 
                        <span className="headerText">Reels</span>
                      </div>

                      <div className="headerOptions"> 
                        <span className="headerText">Rooms</span>
                      </div>
                       
                   </div>

                   <hr className="headerHr"></hr>

                   <div className="headerBottom">

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/mert.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/mert.jpg" alt="" />
                        <h5 className="headerImgText1">Create a story</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/moriarty.jpg" alt="" /> 
                        <img className="headerImg1" src="/assets/person/moriarty.jpg" alt="" />
                        <h5 className="headerImgText2">James Moriarty</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/patrick.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/patrick.jpg" alt="" />
                        <h5 className="headerImgText3">Patrick Bateman</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/tyler.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/tyler.jpg" alt="" />
                        <h5 className="headerImgText4">Tyler Durden</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/kayzer.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/kayzer.jpg" alt="" />
                        <h5 className="headerImgText5">Kayzer Söze</h5>
                      </div>
                       
                   </div>

            </div>

        </div>
     )

     
}

export default Header;