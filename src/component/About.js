
import { useContext } from "react";
import "./About.css";
import userContext from "../utility/userContext";
// import Header from "./Header";

const About = () => {

  const {userName}=useContext(userContext);

  console.log(userName);

  return (
    <div>
      <h1 id="story-heading">"{userName!=='User' && userName + ", "}Do you know our story?"</h1>
      <p className="about-para">
        Welcome to Swaadly, your ultimate destination for a seamless food
        ordering experience, bringing the richness of flavors right to your
        doorstep. At Swaadly, we believe in turning every meal into a
        celebration of taste, convenience, and happiness.
      </p>
      <h2 className="about-heading"> Our Story</h2>
      <p className="about-para">
        Swaadly started with a simple yet powerful idea: to make good food
        accessible to everyone with just a tap. Founded by a group of passionate
        food lovers and tech enthusiasts, the journey began in 2020 when we
        noticed a gap in food delivery services—lack of affordability,
        inconsistent quality, and limited local flavors. Driven by a vision to
        bridge this gap, Swaadly was born. The name, inspired by the Hindi word
        “Swaad” meaning taste, reflects our mission to provide flavorful meals
        that resonate with your heart and palate.
      </p>

      <h2 className="about-heading">Our Purpose </h2>

      <div className="about-para">
        At Swaadly, our goal is to revolutionize the food delivery experience
        by:
        <ul>
          <li>
            Celebrating Diversity in Cuisine: From local street food to
            international delicacies, we curate a menu that caters to every
            craving.
          </li>
          <li>
            Empowering Local Restaurants: We partner with small and big food
            businesses alike, giving them a digital platform to thrive and
            connect with a wider audience.
          </li>
          <li>
            Ensuring Quality and Hygiene: With stringent quality checks, Swaadly
            ensures that every meal is prepared with care, fresh ingredients,
            and love.
          </li>
          <li>
            Affordable Options for All: Great food should not break the bank.
            Swaadly ensures competitive pricing with exclusive deals and
            discounts for our users.
          </li>
        </ul>
      </div>
      <h2 className="about-heading"> Why Swaadly? </h2>
      <div className="about-para">
        Here’s what sets us apart:
        <ul>
          <li>
            Lightning-Fast Deliveries: With an advanced delivery system and
            dedicated riders, we ensure your food reaches you piping hot, right
            on time.
          </li>
          <li>
            Personalized Recommendations: Our AI-powered system learns your
            preferences to recommend dishes you’ll love.
          </li>
          <li>
            Swaadly Select: A premium feature that provides early access to
            special menus,exclusive deals, and priority deliveries.{" "}
          </li>
          <li>
            Eco-Friendly Packaging:Committed to sustainability, we use
            biodegradable packaging to reduceour environmental footprint.{" "}
          </li>
          <li>
            24/7 Customer Support: Whatever your need, our friendly support team
            is always available to assist you.
          </li>
        </ul>
      </div>
      <h2 className="about-heading"> Join the Swaadly Community </h2>
      <p className="about-para">
        Whether you're a food connoisseur, a late-night snacker, or a family
        looking to enjoy quality time over a hearty meal, Swaadly is here to
        make your dining experience memorable. With over a million satisfied
        customers and counting, Swaadly continues to grow, bringing joy to every
        plate it serves. Ready to explore the world of flavors? Download the
        Swaadly app today and taste the difference!
      </p>
    </div>
  );
};

export default About;
