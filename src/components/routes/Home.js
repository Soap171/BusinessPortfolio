import React from "react";
import img1 from "./img/img (1).jpg";
import img2 from "./img/img (2).jpg";
import Container from "../Container"; // Fix the import path here
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DestinationData from "../Destination_Section/DestinationData";
import ServicesData from "../Cards/ServiceData";

function Home() {
  return (
    <>
      <Navbar />
      <Container
        img={img1}
        alt="none"
        title="Discover the World's Wonders with Wanderlust Adventures"
        text="Embark on a Journey of Exploration and Adventure with Our Expert Guidance. Let Wanderlust Adventures be Your Passport to Unforgettable Memories!"
        btnText="Let's Go"
        url="/Contact"
        btnClass="homeBtn"
      />
      <div className="destination">
        <h1>Ignite Your Wanderlust</h1>
        <p>
          Embark on a journey beyond the ordinary. Immerse yourself in
          extraordinary destinations and create memories that last a lifetime.
        </p>

        <DestinationData
          className="first-des"
          heading="Explore the Enchanting Hills of Sri Lanka"
          text="Embark on an extraordinary railway adventure through the heart of Sri Lanka's Hill Country. Traverse through the central highlands, where the air is crisp, and the scenery is adorned with breathtaking tea plantations. Immerse yourself in the charm of the Hill Country Railway."
          image1={img1}
          image2={img2}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Discover Serenity on the Hill Country Railway"
          text="Indulge in a mesmerizing railway journey through the picturesque landscapes of Sri Lanka's Hill Country. Unwind as the train gracefully winds its way through lush tea plantations and enjoy the cool breeze. The Hill Country Railway promises a tranquil escape for those seeking a unique travel experience."
          image1={img1}
          image2={img2}
        />
      </div>
      <Container
        img={img2}
        alt="none"
        title="Discover the World's Wonders with Wanderlust Adventures"
        text="Embark on a Journey of Exploration and Adventure with Our Expert Guidance. Let Wanderlust Adventures be Your Passport to Unforgettable Memories!"
      />{" "}
      {/* Add alt prop here */}
      <div className="services">
        <h1>Our Services</h1>
        <p>
          Streamlined Train Transportation Services at Your Fingertips! Discover
          the Convenience of QR Ticketing, Parcel Booking, and Real-Time
          Schedules with swfitrail. Whether you're a frequent traveler or a
          business in need of reliable shipping solutions, swfitrail is your
          go-to platform for hassle-free train transportation services. Explore
          our range of features designed to make your train journeys and parcel
          shipments more efficient and enjoyable.
        </p>
        <div className="service-card">
          <ServicesData
            image={img1}
            heading="Train Schedules"
            text="Stay On Track with Train Schedules: Easily access train schedules from your location to your destination on swfitrail. Plan your journeys efficiently and set up SMS notifications for specific train arrivals and departures. Never miss a train again – swfitrail keeps you informed and on time"
            title="Schedules"
            link="/Schedules"
          />

          <ServicesData
            image={img2}
            heading="QR Tickets"
            text="Experience Ultimate Convenience: Our QR Ticket Subscription Plans simplify train travel. No more ticket hassles. Choose from flexible options daily, monthly, or long-term. Enjoy quick, paperless ticketing and journey hassle-free with swfitrail! Join today!"
            title="Subscriptions"
            link="/Subscriptions"
          />

          <ServicesData
            image={img1}
            heading="Parcel Bookings"
            text="Simplify Parcel Booking Online: Enjoy the convenience of booking parcels online with swfitrail. Easily arrange shipments from your home or office using our user-friendly platform. Send parcels to your preferred destinations effortlessly."
            title="Parcel Booking"
            link="/Booking"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
