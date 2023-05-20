import React from 'react'
import './Timeline.css'
function Timeline() {
  return (
    <>
      <section className="About">
        <div className="content">
            <div className="text">
                <h1>About Us</h1>
            </div>
            <div className="card">
                <div className="card-text">
                    <h1> WebAccessify:Voice-based Accessibility Solution </h1>
                    <p>WebAccessify is an innovative technology maker that provides a voice-based
                        accessibility solution by using Artificial intelligence, Computer Vision,
                        Machine Learning and Deep Learning for the people with disabilities so that they
                        may access their desired content through any website without any barrier.
                    </p>
                </div>

                <div className="images">
                    <div className="imageContent">
                        <img src="images/About1.png" alt=""/>
                        <p>Secure</p>
                    </div>
                    <div className="imageContent">
                        <img src="images/About3.png" alt=""/>
                        <p>Reliable</p>
                    </div>
                    <div className="imageContent">
                        <img src="images/About3.png" alt=""/>
                        <p>Fast Solution</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container"></div>
    <section className="Motivation">
        <div className="Motivation-text">
            <h1>
                WHY WE ARE PROVIDING THIS?
            </h1>
            <p>We all know that using the internet completely and getting benefits from it is the
                basic right of every human. There are more than 2 Billion people in the world
                that are suffered from any disability like motor impairment, Vision impairment,
                etc., and cannot access the internet properly. They face many difficulties in
                getting benefits from the internet.<br />
                W3C launched WAl (Web Accessibility Initiative) in 1997 by considering these
                difficulties for the disabled, in which they described their standards for providing
                accessibility features in the software, website, or web application for them so that
                they may get ease from difficulties. There was a lawsuit and heavy fine against
                those companies which violates the provision of accessibility.<br />
                That's why we are providing our solutions to businesses and companies that will
                increase their business potential and it will benefit their customers of accessing
                the content.</p>
        </div>
    </section>
    <section className="Vision">
        <div className="VisionCards">
            <div className="VisionCard">
                <h2>Target Audience</h2>
                <p>Our solution is for small
                    Businesses, Enterprises, and
                    Companies whose customers
                    cannot access the content from
                    their websites or applications.
                    They cannot get the product or
                    service according to their need
                    because there contains no feature
                    for them. by using our solution
                    companies will increase their
                    business potential, revenue to an
                    extent and get escade trom
                    lawsuits. Their Customers can get
                    benefits from it and avail of their
                    desired service.
                </p>
            </div>
            <div className="VisionCard">
                <h2>Our Vision</h2>
                <p>Our vision is to make weo content accessible to all people whether the are normal or disabled. Our
                    priority Is to make a voice-based
                    accessibility solution, so that people
                    r Interact with the website
                    throuan their voice to access Its
                    content The aim behind it is to
                    provide web accessibility througn
                    voice, to the disabled and those
                    who want easy navigation without using a keyboard, and also facilitate
                    them by providing the best user
                    experience and enhanced usability
                    through various accessibility
                    features.
                </p>
            </div>
        </div>
    </section>
    <section className="timeline">
        <div className="text-section">
            <h1>OUR TIMELINE</h1>
            <p>In Jan 2021, about 2 vears ago, we researched now to make the web accessible for the disabled. We studied
                different brands and competitors for getting information on how they have performed this task, and which
                services
                the are providing so that we may get better services to the market and provide our voice-based
                accessibility solution.
            </p>
        </div>
        <div className="timeline-containers">
            <div className="timeline-Container left">
                <div className="Content">
                    <h2>Jan 2021 - April 2021</h2>
                    <p>First of all, we started our work for the vision impaired. Some of them suffered from
                        colorblindness which makes it difficult for them to differentiate between various colors used on
                        the website and creates barriers for them to get accessibility. We developed various features to
                        provide accessibility and improve the user experience for them. These users can change the
                        background color through the “Background Color” feature, and change the font color through the
                        “Text Color”. We provided Dark Mode, Highlight Links (for highlighting various links available
                        in the whole website), Brightness, Contrast, saturation, and Monochrome features for colorblind
                        users.</p>
                </div>
            </div>
            <div className="timeline-Container right">
                <div className="Content">
                    <h2>May 2021 - Sep 2021</h2>
                    <p>After developing accessibility features for the vision impaired,We also worked for low-vision
                        users which makes it hard for them to read the content. We provided Text Magnifier for this
                        issue. We provided them with Text Alignment, Text spacing, and Line Height features as well.
                        Dyslexia-friendly font and Reading Guide are also available for Dyslexia users to understand the
                        text and remain focused on the content.</p>
                </div>
            </div>
            <div className="timeline-Container left">
                <div className="Content">
                    <h2>Sep 2021 - Dec 2021</h2>
                    <p>Then we started our work for the motor impaired. It’s not easy for them to see the cursor and
                        perform content navigation. We
                        provided them with a Big-sized cursor available in 2 variants (a white cursor with a black
                        border for the dark background and a black cursor with a white border for the white background)
                        to see the cursor easily on the screen as well as Display Major Links feature for displaying all
                        the major links of the website in a modal box to provide navigation by finding desired link to
                        reach that page as it makes difficult for motor impaired to find desired content on complex
                        websites.</p>
                </div>
            </div>
            <div className="timeline-Container right">
                <div className="Content">
                    <h2>Feb 2022 – Jun 2022</h2>
                    <p>After developing accessibility features for the motor impaired, we started our work for the
                        cognitive impaired. Some websites are developed in such a way that they contain many slang words
                        and abbreviations. It is very difficult for the cognitive impaired to understand which leads to
                        incorrect results. They find a translator to understand the exact meaning by leaving the site.
                        It wastes most of their time. We provided them with an embedded dictionary that gives exact
                        meanings, synonyms, definitions, and pronunciation. There is no need to leave the site for
                        finding an online translator. </p>
                </div>
            </div>
            <div className="timeline-Container left">
                <div className="Content">
                    <h2>Feb 2022 - Jun 2022</h2>
                    <p>After developing accessibility features for the cognitively impaired, we started our work for the
                        blind and physically impaired. It is very difficult for them to see the content and they cannot
                        interact with the web properly. We provided a voice navigation feature for the physically
                        impaired to interact with the web through voice. We also provided both a screen reader and voice
                        navigation features for the Blinds to enable two-way communication. They can listen to what is
                        on the web through a screen reader and interact with it through voice to perform an action.</p>
                </div>
            </div>
            <div className="timeline-Container right">
                <div className="Content">
                    <h2>Jun 2022 - August 2022</h2>
                    <p>According to the data of W3Techs, 43.2% of websites on the internet used WordPress in 2022 which
                        was a 5% increment from the previous year. It means 2 out of 5 websites use WordPress for
                        development. Later on, we started to develop a WordPress plugin for 43.2% of websites so that we
                        may play our role in providing accessibility solutions for the disabled. We are providing free
                        accessibility plugin for WordPress.</p>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Timeline
