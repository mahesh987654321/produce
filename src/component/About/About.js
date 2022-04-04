import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutmain">
      <div>
        <h1 className="aboutH1">About Seller</h1>
        <p>
          Delmarva's Premier Pre-Owned Outlet Salisbury MD and Laurel DE are
          more than just great towns to spend a day at--they're part of a warm,
          and vibrant community full of adventurous and driven people. And the
          team at The Car Store is so proud to be an active member of it.
          Located just a few miles from Berlin MD, Seaford DE, Millsboro DE and
          Delmar MD, our dealerships are always looking for new ways to work
          with, get involved with, and give back to our local community. Whether
          you visit one of our dealership locations or just browse online, we're
          always happy to welcome you. Why do Maryland and Delaware drivers love
          to visit us? It could be the great selection of Chevrolets, Hyundais,
          Fords, Dodges, Rams, Mercedes and BMW's or any of our many other Makes
          of pre-owned cars, trucks and SUVs or, it could be our friendly staff
          of sales folks, who are on-hand to help you compare vehicles, explore
          your financing options for your vehicle buying experience. But why not
          all of the above? At The Car Store, we take the full-service
          experience to a whole new level--and that goes beyond just shopping
          for a used vehicle. Our auto service center is conveniently located to
          provide expert maintenance and car repairs for all makes and models.
          Whether you need a simple oil change, a quick tire rotation, a
          multi-point inspection, a seasonal tire change, or a professional look
          at your transmission, our team is here to help. Need service your
          Chevrolet Malibu, Chevrolet Silverado 1500, Ford F-150, Ford Fusion or
          Hyundai Sonata, or any other vehicle, we can help with honest and
        </p>
      </div>
      <div>
        <img
          className="aboutImg"
          src={
            "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
