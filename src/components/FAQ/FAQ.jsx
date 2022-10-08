import "./Faq.scss";
import faqImage from "../../Assets/images/FAQ.png";

const FAQ = () => {
  return (
    <div id="faq" className="faqContainer">
      <div className="txt">
        <h1 className="heading">FAQs</h1>
        <section>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item" id="question1">
                <a className="accordion-link" href="#question1">
                  <div className="flex">
                    <h3>What is Skills++ ?</h3>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>
                    Skills++ is the biggest UPSKILLING program for future geeks
                    and programmers by Zairza.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question2">
                <a className="accordion-link" href="#question2">
                  <div className="flex">
                    <h3>What's the outcome of Skills++ ?</h3>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>
                    Skills++ is here to hone your skills and give you you a
                    headstart in a domain that may be new to you. So tighten
                    your seat belts and enjoy this ride full of learning and
                    growing with us.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question3">
                <a className="accordion-link" href="#question3">
                  <div className="flex">
                    <h3>In how many domains can you enroll ?</h3>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>
                    You can enroll in one domain only. So that you can focus on
                    one domain properly.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question4">
                <a className="accordion-link" href="#question4">
                  <div>
                    <h3>How much time do you have to give weekly ?</h3>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>
                    Depends on you how you approach your tasks and utilize the
                    resources given to you. But this should not take more than
                    an hour or two per day. Don't worry we are here to help you
                    if you're stuck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="img">
        <img src={faqImage} alt="" className="img-f" />
      </div>
    </div>
  );
};

export default FAQ;
