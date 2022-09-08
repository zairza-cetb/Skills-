import "../css/Faq.css";
import faqImage from "../Assets/images/FAQ.png";

const FAQ = () => {
    return (
        <div className="faqContainer">
            <div className="txt">
                <h1 className="heading">FAQs</h1>
                <section>
                    <div class="container">
                        <div class="accordion">
                            <div class="accordion-item" id="question1">
                                <a class="accordion-link" href="#question1">
                                    <div class="flex">
                                        <h3>What is Skills++?</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer">
                                    <p>Skills++ is the biggest UPSKILLING program for future geeks and programmers by Zairza.</p>
                                </div>
                            </div>
                            <div class="accordion-item" id="question2">
                                <a class="accordion-link" href="#question2">
                                    <div class="flex">
                                        <h3>UX/UI DESIGN</h3>

                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                </div>

                            </div>
                            <div class="accordion-item" id="question3">
                                <a class="accordion-link" href="#question3">
                                    <div class="flex">
                                        <h3>FRONTEND DEVELOPMENT</h3>

                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                </div>

                            </div>
                            <div class="accordion-item" id="question4">
                                <a class="accordion-link" href="#question4">
                                    <div>
                                        <h3>BACKEND DEVELOPMENT</h3>

                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
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

    )
}

export default FAQ