import React from "react";

export default function Carousel(){

  // TO CHANGE THE CAPTIONS AND PHOTOS OF CAROUSEL EDIT THESE CONSTANTS
  const firstSlide = {
    caption: "Aavansh at Symaroh'24",
    para: "Street play day at Symbiosis Center for Management, Noida",
    img: "./Images/grp_pic_1.jpg"
  }
  const secondSlide = {
    caption: "Aavansh at Anugoonj Prelims 2023",
    para: "Stage and street play team. Performed at KCC Institute",
    img: "./Images/grp_pic_2.jpg"
  }
  const thirdSlide = {
    caption: "President, Teacher Coordinator and Vice President of Aavansh",
    para: "",
    img: "./Images/grp_pic_3.jpg"
  }

  ///////////////////////////////////////////////////////////////////////
  
    return <div className="carsol">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={firstSlide.img} alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5>{firstSlide.caption}</h5>
        <p>{firstSlide.para}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={secondSlide.img} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>{secondSlide.caption}</h5>
        <p>{secondSlide.para}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={thirdSlide.img} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>{thirdSlide.caption}</h5>
        <p>{thirdSlide.para}</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
}