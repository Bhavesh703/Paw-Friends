export default function Contact() {
  return (
    <div className="contactcontainer">
      <div className="contactform">
        <div className="contactus">
          <h1> We’d love to hear from you</h1>
          <form />
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Phone" />
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <input type="submit" value="Submit" />
        </div>
        {/* <img src={"/assets/david-lezcano-m-Doa-GTrUw-unsplash.jpg"} /> */}
      </div>
    </div>
  );
}
