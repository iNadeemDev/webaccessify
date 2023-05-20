import React from 'react'
import './Features.css';
import {Link } from "react-router-dom";
function Solution() {
  return (
    <>
      <section className="Solution">
        <div className="text">
            <h1>Fast and Reliable AI-based Accessibility Solution</h1>
        </div>
        <div className="sub-text">
           <p> WebAccessify provides accessibility features to people with disabilities by utilizing cutting-edge
            AI technologies powered by Machine Learning, Deep Learning, and Natural Language Processing.</p>
        </div>
    </section>

    <section className="solutionDisability">
        <div className="solution-text">
            <h1>Accessibility Widget for everyone despite of any disability</h1>
            <p>WebAccessify is dedicated to ensuring that All the people, regardless of their abilities, can access our
                accessibility widget according to WCAG and ADA compliance.
            </p>
        </div>
        <div className="Text">
            <h1>WebAccessify is covering a wide range of Disabilities in adherence to WCAG 2.1.</h1>
        </div>
        <div className="cards-box">
            <div className="solutionCards">
                <h2>Big-sized cursor and Major Links Representation for Motor Impaired Users</h2>
                <p>Motor-impaired users are unable to maintain focus and navigate the site's Screen various pages and
                    sections. For those users, a big cursor is the best solution. Unfortunately, most websites are not
                    optimized for big cursors, preventing motor-impaired users from using Accessibility.
                    WebAccessify provides 200% Big-sized cursor and Major links Representation, allowing motor-impaired
                    users to focus on the elements while navigating through different pages and sections of the site
                    using Major Links.
                </p>
            </div>
            <div className="solutionCards">
                <h2>Understanding Improvement for Cognitive Impairment</h2>
                <p>As there are many ambiguities in the content, people with mental or cognitive problems are not able
                    to understand the actual meanings of the content.
                    Slang words and abbreviations are available which makes it difficult for a cognitively impaired user
                    to understand the exact meaning which leads to incorrect results.
                    WebAccessify is Providing a built-in Dictionary feature that will help cognitive users to understand
                    the correct meanings of the words. There is no need to search online dictionaries. They only will
                    click on our Dictionary feature and They will get the correct pronunciations, Parts of Speech,
                    Definition, and Synonyms of the highlighted text.

                </p>
            </div>
            <div className="solutionCard">
                <h2>Improvement of UI/UX for Vision Impaired users</h2>
                <p>Users with vision impairment may struggle to see the content due to the site's abundance of colors
                    and fonts. Low vision and color blindness are two visual impairments. WebAccessify provides a
                    variety of features to improve user experience and design for those users. Text alignment, text
                    spacing, and line height can all be adjusted by users. They can align text to the left, right,
                    center, and justify it, as well as increase text and line spacing. We have provided color
                    adjustments for low-vision users so that they can change the background and text colors as desired.
                    They can also enlarge content by up to 200%. Dark Mode, highlight links, Brightness, contrast, and
                    saturation are also available for colorblind users. Dyslexia users can also use specially designed
                    Dyslexia friendly font and reading guide for a better experience.

                </p>
            </div>
            <div className="solutionCard">
                <h2>Screen Reader and Voice Navigation for Blind and Physical Impaired Users</h2>
                <p>Blind and Physically Impaired Users utilize assistive technology to navigate and read content that is
                    displayed on screens. Users find it challenging to obtain these assistive technologies because of
                    their high prices. It prevents such users from getting accessibility.
                    WebAccessify is providing its important screen reader and voice navigation functions for those
                    users. By turning on our screen reader feature, they can read the entire document, and it will keep
                    reading the text. They can traverse the website's many pages and sections using the voice navigation
                    feature. For those users, Voice Navigation will carry out various voice commands like "close
                    accessibility menu," "scroll up," "scroll down," "Form Filling," etc.

                </p>
            </div>
        </div>
    </section>
    <section className="tools">
        <div className="text">
            <h1>WebAccessify’s Accessibility Features</h1>
            <p>Personalized accessibility features for every user in accordance with their particular accessibility
                requirements.
            </p>
            <h2>
                WebAccessify’s Accessibility widget is fully WCAG and ADA Compliant
            </h2>
        </div>

        <div className="components">
            <div className="small-card">
                <h3>Screen Reader</h3>
            </div>
            <div className="small-card">
                <h3>Voice Navigation </h3>
            </div>
            <div className="small-card">
                <h3>Dyslexia
                    Friendly</h3>
            </div>
            <div className="small-card">
                <h3>Pause Animation</h3>
            </div>
            <div className="small-card">
                <h3>Background
                    Color</h3>
            </div>
            <div className="small-card">
                <h3>Highlight
                    Links</h3>
            </div>
            <div className="small-card">
                <h3>Reading Guide</h3>
            </div>
            <div className="small-card">
                <h3>Major Links</h3>
            </div>
            <div className="small-card">
                <h3>Bigger Size</h3>
            </div>
            <div className="small-card">
                <h3>Text Spacing</h3>
            </div>
            <div className="small-card">
                <h3>Text Color</h3>
            </div>
            <div className="small-card">
                <h3>Text Align</h3>
            </div>
            <div className="small-card">
                <h3>Dictionary</h3>
            </div>
            <div className="small-card">
                <h3>Brightness</h3>
            </div>
            <div className="small-card">
                <h3>Saturation</h3>
            </div>
            <div className="small-card">
                <h3>Monochrome</h3>
            </div>
            <div className="small-card">
                <h3>Dark Mode</h3>
            </div>
            <div className="small-card">
                <h3>Line Height</h3>
            </div>
            <div className="small-card">
                <h3>Cursor</h3>
            </div>
            <div className="small-card">
                <h3>Contrast</h3>
            </div>
        </div>

        <div className="card">
                <h2>Free Accessibility Solution for Your Website</h2>
                <p>Enhance the accessibility of your website with our powerful and free accessibility solution, ensuring equal access and inclusivity for all users.</p>
                <div className="login-box">
                    <p1>Try Our Free Accessibility Solution</p1>
                    <button><a style={{textDecoration:"none", color: "#fff"}} href="http://dashboard.webaccessify.com/">Login</a></button>
                </div>
        </div>
    </section>
    </>
  )
}

export default Solution
