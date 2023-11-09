import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <p>
        Discover delicious recipes from our kitchen. We have the best in the
        region.
        <br /> We offer a variety of different recipes from different countries.
        We also have catering services for events like weddings, birthday
        parties and graduations.
      </p>
      <p>You can give us a call or whatsapp on:- Tel. 0707 567 567</p>
      <p>Or visit us at LongStreet 3</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default AboutUs;
