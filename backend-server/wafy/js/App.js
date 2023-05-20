var apiKey = null;

// ###### Global variables ###### //
var wafy_btn_wrapper;
var wafy_btn;
var wafy_widget_wrapper;
var wafy_close_widget;

// disability profile selection
var wafy_isSetVision = false;
var wafy_isSetBlind = false;
var wafy_isSetDyslexic = false;
var wafy_isSetCognitive = false;
var wafy_isSetAdhd = false;
var wafy_isSetMotor = false;

// checking voice interaction features status
var wafy_isSetReader = false;
var wafy_isSetVoice = false;

// checking colors section features status
var wafy_isSetDarkContrast = false;
var wafy_isSetHighContrast = false;
var wafy_isSetLowContrast = false;
var wafy_isSetMonochrome = false;
var wafy_isSetHighSaturation = false;
var wafy_isSetLowSaturation = false;
var wafy_isSetTextColor = false;
var wafy_isSetBgColor = false;

// checking alignment section features status
var wafy_isSetFontSize = false;
var wafy_isSetDyslexia = false;
var wafy_isSetLeftAlign = false;
var wafy_isSetRightAlign = false;
var wafy_isSetCenterAlign = false;
var wafy_isSetJustifyAlign = false;
var wafy_isSetLineHeight = false;
var wafy_isSetTextSpacing = false;
var wafy_isSetHighlightLinks = false;
var wafy_isSetHighlightHeadings = false;

// checking useful adjustment section features status
var wafy_isSetAnimations = false;
var wafy_isSetImages = false;
var wafy_isSetWhiteCursor = false;
var wafy_isSetBlackCursor = false;
var wafy_isSetKeyboardNav = false;
var wafy_isSetHighlightHover = false;
var wafy_isSetReadingMask = false;
var wafy_isSetReadingGuide = false;

(async function(apiKey) {
    try {
      const response = await fetch('https://manage.cyclic.app/wafy/configs?apiKey='+apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': apiKey
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const wafy_config_data = await response.json();
      // Checking subscription status
      if (wafy_config_data.client.widget_status !== 'active') {
        throw new Error('This website is not registered with us or widget is disabled.');
      } else {
        WafyLoadWidget(wafy_config_data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  })(apiKey);

// ### Load the widget and resources ### //
function WafyLoadWidget(wafy_config_data) {
    // Loading the CSS file
    var wafy_head = document.getElementsByTagName('HEAD')[0];
    var wafy_css_link = document.createElement('link');
    wafy_css_link.rel = 'stylesheet';
    wafy_css_link.type = 'text/css';
    wafy_css_link.href = 'https://manage.cyclic.app/wafy.css';
    wafy_head.appendChild(wafy_css_link);
    ////////////////////////////////////

    // Embedding Accessibility btn //
    document.body.insertAdjacentHTML('beforeend',
        `
        <div class="wafy-app">
        <div class="wafy-btn-wrapper" id="wafy-btn-wrapper">
        <svg class="wafy-btn" id="wafy-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.000000 48.000000"
        preserveAspectRatio="xMidYMid meet">
        <title>Accessibility Widget</title>
        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)">
            <path d="M175 425 c-83 -29 -145 -132 -130 -214 14 -77 73 -142 146 -161 161
        -44 300 132 224 281 -31 58 -116 110 -180 109 -11 -1 -38 -7 -60 -15z m150
        -38 c80 -45 108 -151 62 -232 -63 -112 -231 -112 -294 0 -85 150 82 317 232
        232z" />
            <path d="M185 376 c-102 -44 -122 -172 -40 -245 64 -56 147 -50 204 14 53 61
        50 143 -7 198 -48 46 -102 57 -157 33z m75 -31 c17 -20 5 -45 -20 -45 -11 0
        -23 7 -26 15 -6 15 11 45 26 45 4 0 13 -7 20 -15z m70 -62 c0 -8 -13 -13 -36
        -13 l-37 0 6 -37 c4 -21 9 -53 13 -70 9 -47 -12 -42 -23 5 l-10 37 -9 -34
        c-14 -48 -40 -56 -30 -10 4 19 10 51 13 72 6 37 6 37 -31 37 -23 0 -36 5 -36
        13 0 9 23 13 90 13 67 0 90 -4 90 -13z" />
        </g>
        </svg>
        </div>
        
        <div class="wafy-widget-wrapper" id="wafy-widget-wrapper">
        <div class="wafy-header-wrapper">
            <p class="wafy-heading">Accessibility Menu (Alt + W)</p>
            <svg class="wafy-close-widget wafy-icon" id="wafy-close-widget" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
        </div>

        <div class="wafy-menu-wrapper">

            <div class="wafy-profile-wrapper" id="wafy-profile-wrapper">
                <div class="wafy-menu-heading">Choose your accessibility profile</div>
                <div class="wafy-menu">
                    <div class="wafy-menu-card" id="wafy-vision-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"/></svg>
                        <div class="wafy-menu-title">Vision Impaired Profile</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-blind-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm-8.4 32c-36.4 0-69.6 20.5-85.9 53.1L35.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L128 231.6v43.2c0 17 6.7 33.3 18.7 45.3L224 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V390.6c0-12.7-5.1-24.9-14.1-33.9L224 306.7V213.3l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8L268.8 166.4C250.7 142.2 222.2 128 192 128H167.6zM128.3 346.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zM450.8 505.1c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3c-5 3.8-10.5 6.4-16.2 7.9L450.8 505.1z"/></svg>
                        <div class="wafy-menu-title">Blind Profile</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-dyslexic-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>
                        <div class="wafy-menu-title">Dyslexic Profile</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-cognitive-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM256 144c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM240 248c0-30.9 25.1-56 56-56s56 25.1 56 56V350.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9L240 306.7V248z"/></svg>
                        <div class="wafy-menu-title">Cognitive Impaired Profile</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-adhd-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM176.4 240c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm192-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 336H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                        <div class="wafy-menu-title">ADHD Profile</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-motor-profile">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM204.5 121.3c-5.4-2.5-11.7-1.9-16.4 1.7l-40.9 30.7c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l40.9-30.7c23.7-17.8 55.3-21 82.1-8.4l90.4 42.5c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4L415.4 422.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288H306.7c8.6 19.6 13.3 41.2 13.3 64c0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c11.1 0 22 1.1 32.4 3.3l54.2-54.2-42.1-19.8zM160 448c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96z"/></svg>
                        <div class="wafy-menu-title">Motor Impaired Profile</div>
                    </div>
                </div>
            </div>

            <hr>

            <div class="wafy-voice-wrapper" id="wafy-voice-wrapper">
                <div class="wafy-menu-heading">Enable voice interaction</div>
                <div class="wafy-menu">
                    <div class="wafy-menu-card" id="wafy-reader">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
                        </svg>
                        <div class="wafy-menu-title">Screen Reader</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-voice">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                        </svg>
                        <div class="wafy-menu-title">Voice Navigation</div>
                    </div>
                </div>
            </div>

            <hr>

            <div class="wafy-color-wrapper" id="wafy-color-wrapper">
                <div class="wafy-menu-heading">Adjust colors</div>
                <div class="wafy-menu">
                    <div class="wafy-menu-card" id="wafy-dark-contrast">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                        </svg>
                        <div class="wafy-menu-title">Dark Contrast</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-high-contrast">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
                        </svg>
                        <div class="wafy-menu-title">High Contrast</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-low-contrast">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M505.2 324.8l-47.73-68.78l47.75-68.81c7.359-10.62 8.797-24.12 3.844-36.06c-4.969-11.94-15.52-20.44-28.22-22.72l-82.39-14.88l-14.89-82.41c-2.281-12.72-10.76-23.25-22.69-28.22c-11.97-4.936-25.42-3.498-36.12 3.844L256 54.49L187.2 6.709C176.5-.6016 163.1-2.039 151.1 2.896c-11.92 4.971-20.4 15.5-22.7 28.19l-14.89 82.44L31.15 128.4C18.42 130.7 7.854 139.2 2.9 151.2C-2.051 163.1-.5996 176.6 6.775 187.2l47.73 68.78l-47.75 68.81c-7.359 10.62-8.795 24.12-3.844 36.06c4.969 11.94 15.52 20.44 28.22 22.72l82.39 14.88l14.89 82.41c2.297 12.72 10.78 23.25 22.7 28.22c11.95 4.906 25.44 3.531 36.09-3.844L256 457.5l68.83 47.78C331.3 509.7 338.8 512 346.3 512c4.906 0 9.859-.9687 14.56-2.906c11.92-4.969 20.4-15.5 22.7-28.19l14.89-82.44l82.37-14.88c12.73-2.281 23.3-10.78 28.25-22.75C514.1 348.9 512.6 335.4 505.2 324.8zM456.8 339.2l-99.61 18l-18 99.63L256 399.1L172.8 456.8l-18-99.63l-99.61-18L112.9 255.1L55.23 172.8l99.61-18l18-99.63L256 112.9l83.15-57.75l18.02 99.66l99.61 18L399.1 255.1L456.8 339.2zM256 143.1c-61.85 0-111.1 50.14-111.1 111.1c0 61.85 50.15 111.1 111.1 111.1s111.1-50.14 111.1-111.1C367.1 194.1 317.8 143.1 256 143.1zM256 319.1c-35.28 0-63.99-28.71-63.99-63.99S220.7 192 256 192s63.99 28.71 63.99 63.1S291.3 319.1 256 319.1z" />
                        </svg>
                        <div class="wafy-menu-title">Low Contrast</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-monochrome">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                        </svg>
                        <div class="wafy-menu-title">Monochrome</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-high-saturation">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z" />
                        </svg>
                        <div class="wafy-menu-title">High Saturation</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-low-saturation">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M118.6 9.4C106.1-3.1 85.9-3.1 73.4 9.4s-12.5 32.8 0 45.3L154.7 136 62.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L180.1 481.4c37.5 37.5 98.3 37.5 135.8 0L506.3 290.9c28.1-28.1 28.1-73.7 0-101.8L354.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L200 90.7 118.6 9.4zM200 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L245.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L461.1 234.3c3.1 3.1 3.1 8.2 0 11.3L418.7 288H99.5c1.4-5.4 4.2-10.4 8.4-14.6L200 181.3z" />
                        </svg>
                        <div class="wafy-menu-title">Low Saturation</div>
                    </div>
                </div>
            </div>

            <hr>

            <div class="wafy-alignment-wrapper" id="wafy-alignment-wrapper">
                <div class="wafy-menu-heading">Adjust alignments</div>
                <div class="wafy-menu">
                    <div class="wafy-menu-card" id="wafy-font-size">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
                        </svg>
                        <div class="wafy-menu-title">Increase Font Size</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-dyslexia">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
                        </svg>
                        <div class="wafy-menu-title">Dyslexia Friendly</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-left-align">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <div class="wafy-menu-title">Left Align</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-right-align">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <div class="wafy-menu-title">Right Align</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-center-align">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z" />
                        </svg>
                        <div class="wafy-menu-title">Center Align</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-justify-align">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
                        </svg>
                        <div class="wafy-menu-title">Justify Align</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-line-height">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M32 32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64l0 320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H192l0-320h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H160 32zm470.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V352H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H512V160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z" />
                        </svg>
                        <div class="wafy-menu-title">Increase Line Height</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-text-spacing">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                        </svg>
                        <div class="wafy-menu-title">Increase Text Spacing</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-highlight-links">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                        </svg>
                        <div class="wafy-menu-title">Highlight Links</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-highlight-headings">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z" />
                        </svg>
                        <div class="wafy-menu-title">Highlight Headings</div>
                    </div>
                </div>
            </div>

            <hr>

            <div class="wafy-useful-wrapper" id="wafy-useful-wrapper">
                <div class="wafy-menu-heading">Useful Adjustements</div>
                <div class="wafy-menu">
                    <div class="wafy-menu-card" id="wafy-animations">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                        </svg>
                        <div class="wafy-menu-title">Pause Animations</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-images">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                        </svg>
                        <div class="wafy-menu-title">Hide Images</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-white-cursor">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M208 288C199.2 288 192 295.2 192 304v96C192 408.8 199.2 416 208 416s16-7.164 16-16v-96C224 295.2 216.8 288 208 288zM272 288C263.2 288 256 295.2 256 304v96c0 8.836 7.162 16 15.1 16S288 408.8 288 400l-.0013-96C287.1 295.2 280.8 288 272 288zM376.9 201.2c-13.74-17.12-34.8-27.45-56.92-27.45h-13.72c-3.713 0-7.412 .291-11.07 .8652C282.7 165.1 267.4 160 251.4 160h-11.44V72c0-39.7-32.31-72-72.01-72c-39.7 0-71.98 32.3-71.98 72v168.5C84.85 235.1 75.19 235.4 69.83 235.4c-44.35 0-69.83 37.23-69.83 69.85c0 14.99 4.821 29.51 13.99 41.69l78.14 104.2C120.7 489.3 166.2 512 213.7 512h109.7c6.309 0 12.83-.957 18.14-2.645c28.59-5.447 53.87-19.41 73.17-40.44C436.1 446.3 448 416.2 448 384.2V274.3C448 234.6 416.3 202.3 376.9 201.2zM400 384.2c0 19.62-7.219 38.06-20.44 52.06c-12.53 13.66-29.03 22.67-49.69 26.56C327.4 463.6 325.3 464 323.4 464H213.7c-32.56 0-63.65-15.55-83.18-41.59L52.36 318.2C49.52 314.4 48.02 309.8 48.02 305.2c0-16.32 14.5-21.75 21.72-21.75c4.454 0 12.01 1.55 17.34 8.703l28.12 37.5c3.093 4.105 7.865 6.419 12.8 6.419c11.94 0 16.01-10.7 16.01-16.01V72c0-13.23 10.78-24 23.1-24c13.22 0 24 10.77 24 24v130.7c0 6.938 5.451 16.01 16.03 16.01C219.5 218.7 220.1 208 237.7 208h13.72c21.5 0 18.56 19.21 34.7 19.21c8.063 0 9.805-5.487 20.15-5.487h13.72c26.96 0 17.37 27.43 40.77 27.43l14.07-.0037c13.88 0 25.16 11.28 25.16 25.14V384.2zM336 288C327.2 288 320 295.2 320 304v96c0 8.836 7.164 16 16 16s16-7.164 16-16v-96C352 295.2 344.8 288 336 288z" />
                        </svg>
                        <div class="wafy-menu-title">Big White Cursor</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-black-cursor">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v32 64c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z" />
                        </svg>
                        <div class="wafy-menu-title">Big Black Cursor</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-keyboard-navigation">
                    <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/></svg>
                        <div class="wafy-menu-title">Keyboard Navigation</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-highlight-hover">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" />
                        </svg>
                        <div class="wafy-menu-title">Highlight Hover</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-reading-mask">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                        <div class="wafy-menu-title">Reading Mask</div>
                    </div>
                    <div class="wafy-menu-card" id="wafy-reading-guide">
                        <svg class="wafy-menu-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                        <div class="wafy-menu-title">Reading Guide</div>
                    </div>
                </div>
            </div>

            <hr>

            <button class="wafy-reset-menu" id="wafy-reset">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                </svg>
                <div>Reset To Default</div>
            </button>

            <div class="wafy-widget-footer" id="wafy-widget-footer">
                <a href="https://webaccessify.com" target="_blank">Web Accessify's Accessibility Solution
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </a>
            </div>
        </div>
    </div> 
    </div>
        `
    );

    // Accessibility btn Settings Configs //
    wafy_btn_wrapper = document.getElementById('wafy-btn-wrapper');
    wafy_btn = document.getElementById('wafy-btn');
    wafy_widget_wrapper = document.getElementById('wafy-widget-wrapper');
    wafy_close_widget = document.getElementById('wafy-close-widget');

    // Setting root variables
    document.documentElement.style.setProperty('--wafy-primary-color', wafy_config_data.widget.widget_primary_color);
    document.documentElement.style.setProperty('--wafy-secondary-color', wafy_config_data.widget.widget_secondary_color);
    document.documentElement.style.setProperty('--wafy-tertiary-color', wafy_config_data.widget.widget_headings_color);

    // Setting root variables
    // wafy_root.style.setProperty('wafy-primary-color',wafy_config_data.btn.color)

    // Setting location of the btn
    if (wafy_config_data.btn.btn_location == 'bottomLeft') {
        wafy_btn_wrapper.style.bottom = '10px';
        wafy_btn_wrapper.style.left = '10px';
    } else if (wafy_config_data.btn.btn_location == 'topLeft') {
        wafy_btn_wrapper.style.top = '10px';
        wafy_btn_wrapper.style.left = '10px';
    } else if (wafy_config_data.btn.btn_location == 'topRight') {
        wafy_btn_wrapper.style.top = '10px';
        wafy_btn_wrapper.style.right = '10px';
    } else {
        wafy_btn_wrapper.style.bottom = '10px';
        wafy_btn_wrapper.style.right = '10px';
    }

    // Setting size of the btn
    if (wafy_config_data.btn.btn_size == 'medium') {
        wafy_btn.style.width = 'var(--wafy-btn-size-medium)'
    } else if (wafy_config_data.btn.btn_size == 'small') {
        wafy_btn.style.width = 'var(--wafy-btn-size-small)'
    } else {
        wafy_btn.style.width = 'var(--wafy-btn-size-large)'
    }

    // Setting color of the btn
    wafy_btn.style.color = wafy_config_data.btn.btn_color;

    // Setting color of the widget
    wafy_widget_wrapper.style.backgroundColor = wafy_config_data.widget.widget_primary_color;

    // Setting location of the widget
    if (wafy_config_data.btn.btn_location == 'bottomLeft' || wafy_config_data.btn.btn_location == 'topLeft') {
        wafy_widget_wrapper.style.left = '0px'
    } else {
        wafy_widget_wrapper.style.right = '0px';
    }

    // show widget
    wafy_btn.addEventListener('click', () => {
        if (wafy_widget_wrapper.classList.contains('wafy-widget-hide')) {
            wafy_widget_wrapper.classList.remove('wafy-widget-hide')
        }
        wafy_widget_wrapper.classList.add('wafy-widget-show')
    });

    // close widget
    wafy_close_widget.addEventListener('click', () => {
        if (wafy_widget_wrapper.classList.contains('wafy-widget-show')) {
            wafy_widget_wrapper.classList.remove('wafy-widget-show')
        }
        wafy_widget_wrapper.classList.add('wafy-widget-hide')
    })
    // close widget if user clicks outside the widget
    document.documentElement.addEventListener('click', (event) => {
        if (!event.target.closest('.wafy-app') && window.getComputedStyle(event.target).getPropertyValue('opacity') == '1') {
            if (wafy_widget_wrapper.classList.contains('wafy-widget-show')) {
                wafy_widget_wrapper.classList.remove('wafy-widget-show')
            }
            wafy_widget_wrapper.classList.add('wafy-widget-hide')
        }
    })

    // ######################################## //

    // ####### Widget Interaction ######## //

    // Menu Wrappers
    const wafy_profile_wrapper = document.getElementById('wafy-profile-wrapper');
    const wafy_voice_wrapper = document.getElementById('wafy-voice-wrapper');
    const wafy_color_wrapper = document.getElementById('wafy-color-wrapper');
    const wafy_alignment_wrapper = document.getElementById('wafy-alignment-wrapper');
    const wafy_useful_wrapper = document.getElementById('wafy-useful-wrapper');

    // ### Menu Items Wrappers ### //

    // Profile Menu features
    const wafy_vision_profile = document.getElementById('wafy-vision-profile');
    const wafy_blind_profile = document.getElementById('wafy-blind-profile');
    const wafy_dyslexic_profile = document.getElementById('wafy-dyslexic-profile');
    const wafy_cognitive_profile = document.getElementById('wafy-cognitive-profile');
    const wafy_adhd_profile = document.getElementById('wafy-adhd-profile');
    const wafy_motor_profile = document.getElementById('wafy-motor-profile');

    // Voice Interaction features
    const wafy_reader = document.getElementById('wafy-reader');
    const wafy_voice = document.getElementById('wafy-voice');

    // Color Adjustments features
    const wafy_dark_contrast = document.getElementById('wafy-dark-contrast');
    const wafy_high_contrast = document.getElementById('wafy-high-contrast');
    const wafy_low_contrast = document.getElementById('wafy-low-contrast');
    const wafy_monochrome = document.getElementById('wafy-monochrome');
    const wafy_high_saturation = document.getElementById('wafy-high-saturation');
    const wafy_low_saturation = document.getElementById('wafy-low-saturation');
    const wafy_text_color = document.getElementById('wafy-text-color');
    const wafy_background_color = document.getElementById('wafy-background-color');

    // Alignment features
    const wafy_font_size = document.getElementById('wafy-font-size');
    const wafy_dyslexia = document.getElementById('wafy-dyslexia');
    const wafy_left_align = document.getElementById('wafy-left-align');
    const wafy_right_align = document.getElementById('wafy-right-align');
    const wafy_center_align = document.getElementById('wafy-center-align');
    const wafy_justify_align = document.getElementById('wafy-justify-align');
    const wafy_line_height = document.getElementById('wafy-line-height');
    const wafy_text_spacing = document.getElementById('wafy-text-spacing');
    const wafy_highlight_links = document.getElementById('wafy-highlight-links');
    const wafy_highlight_headings = document.getElementById('wafy-highlight-headings');

    // Other Useful Adjustment features
    const wafy_animations = document.getElementById('wafy-animations');
    const wafy_images = document.getElementById('wafy-images');
    const wafy_white_cursor = document.getElementById('wafy-white-cursor');
    const wafy_black_cursor = document.getElementById('wafy-black-cursor');
    const wafy_keyboard_nav = document.getElementById('wafy-keyboard-navigation');
    const wafy_highlight_hover = document.getElementById('wafy-highlight-hover');
    const wafy_reading_mask = document.getElementById('wafy-reading-mask');
    const wafy_reading_guide = document.getElementById('wafy-reading-guide');

    // Reset to Default Button
    const wafy_reset = document.getElementById('wafy-reset');

    wafy_reset.addEventListener('click', () => {
        // first deactivating any active profile
        if (wafy_isSetVision == true) {
            wafy_vision_profile.click();
        } else if (wafy_isSetBlind == true) {
            wafy_blind_profile.click();
        } else if (wafy_isSetDyslexic == true) {
            wafy_dyslexic_profile.click();
        } else if (wafy_isSetCognitive == true) {
            wafy_cognitive_profile.click();
        } else if (wafy_isSetAdhd == true) {
            wafy_adhd_profile.click();
        } else if (wafy_isSetMotor == true) {
            wafy_motor_profile.click();
        }

        // Deactivating voice features
        if (wafy_isSetVoice) {
            wafy_voice.click()
        }
        if (wafy_isSetReader) {
            wafy_reader.click()
        }

        // Deactivating color features
        if (wafy_isSetDarkContrast) {
            wafy_dark_contrast.click()
        }
        if (wafy_isSetHighContrast) {
            wafy_high_contrast.click()
        }
        if (wafy_isSetLowContrast) {
            wafy_low_contrast.click()
        }
        if (wafy_isSetMonochrome) {
            wafy_monochrome.click()
        }
        if (wafy_isSetHighSaturation) {
            wafy_high_saturation.click()
        }
        if (wafy_isSetLowSaturation) {
            wafy_low_saturation.click()
        }
        if (wafy_isSetTextColor) {
            wafy_text_color.click()
        }
        if (wafy_isSetBgColor) {
            wafy_background_color.click()
        }

        // Deactivating content alignments
        if (wafy_isSetFontSize) {
            wafy_font_size.click()
        }
        if (wafy_isSetDyslexia) {
            wafy_dyslexia.click()
        }
        if (wafy_isSetLeftAlign) {
            wafy_left_align.click()
        }
        if (wafy_isSetRightAlign) {
            wafy_right_align.click()
        }
        if (wafy_isSetCenterAlign) {
            wafy_center_align.click()
        }
        if (wafy_isSetJustifyAlign) {
            wafy_justify_align.click()
        }
        if (wafy_isSetLineHeight) {
            wafy_line_height.click()
        }
        if (wafy_isSetTextSpacing) {
            wafy_text_spacing.click()
        }
        if (wafy_isSetHighlightLinks) {
            wafy_highlight_links.click()
        }
        if (wafy_isSetHighlightHeadings) {
            wafy_highlight_headings.click()
        }

        // Deactivating other features
        if (wafy_isSetAnimations) {
            wafy_animations.click()
        }
        if (wafy_isSetImages) {
            wafy_images.click()
        }
        if (wafy_isSetWhiteCursor) {
            wafy_white_cursor.click()
        }
        if (wafy_isSetBlackCursor) {
            wafy_black_cursor.click()
        }
        if (wafy_isSetKeyboardNav) {
            wafy_keyboard_nav.click()
        }
        if (wafy_isSetHighlightHover) {
            wafy_highlight_hover.click()
        }
        if (wafy_isSetReadingMask) {
            wafy_reading_mask.click()
        }
        if (wafy_isSetReadingGuide) {
            wafy_reading_guide.click()
        }
    })

    // Widget Footer
    const wafy_widget_footer = document.getElementById('wafy-widget_footer');


    // ################ Adding Event Listeners to the Features ################### //

    // ####### Profile Menu Items ####### //

    // Vision Profile
    wafy_vision_profile.addEventListener('click', () => {

        if (wafy_isSetVision == false) {
            wafy_isSetVision = true;
            wafy_vision_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetBlind == true) {
                wafy_blind_profile.click();
            } else if (wafy_isSetDyslexic == true) {
                wafy_dyslexic_profile.click();
            } else if (wafy_isSetCognitive == true) {
                wafy_cognitive_profile.click();
            } else if (wafy_isSetAdhd == true) {
                wafy_adhd_profile.click();
            } else if (wafy_isSetMotor == true) {
                wafy_motor_profile.click();
            }

            // #### activating features for vision profile #### //
            if (!wafy_isSetHighSaturation) {
                wafy_high_saturation.click()
            }
            if (!wafy_isSetWhiteCursor) {
                wafy_white_cursor.click()
            }
        }
        else {
            wafy_isSetVision = false;
            wafy_vision_profile.classList.remove('wafy-active-feature');

            // deactivating features for vision profile
            if (wafy_isSetHighSaturation) {
                wafy_high_saturation.click()
            }
            if (wafy_isSetWhiteCursor) {
                wafy_white_cursor.click()
            }
        }

    });

    // Blind Profile
    wafy_blind_profile.addEventListener('click', () => {

        if (wafy_isSetBlind == false) {
            wafy_isSetBlind = true;
            wafy_blind_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetVision == true) {
                wafy_vision_profile.click();
            } else if (wafy_isSetDyslexic == true) {
                wafy_dyslexic_profile.click();
            } else if (wafy_isSetCognitive == true) {
                wafy_cognitive_profile.click();
            } else if (wafy_isSetAdhd == true) {
                wafy_adhd_profile.click();
            } else if (wafy_isSetMotor == true) {
                wafy_motor_profile.click();
            }

            // #### activating features for blind profile #### //            
            if (!wafy_isSetReader) {
                wafy_reader.click()
            }
            if (!wafy_isSetVoice) {
                wafy_voice.click()
            }
        }
        else {
            wafy_isSetBlind = false;
            wafy_blind_profile.classList.remove('wafy-active-feature');

            // deactivating features for blind profile
            if (wafy_isSetReader) {
                wafy_reader.click()
            }
            if (wafy_isSetVoice) {
                wafy_voice.click()
            }
        }

    });

    // Dyslexic Profile
    wafy_dyslexic_profile.addEventListener('click', () => {

        if (wafy_isSetDyslexic == false) {
            wafy_isSetDyslexic = true;
            wafy_dyslexic_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetVision == true) {
                wafy_vision_profile.click();
            } else if (wafy_isSetBlind == true) {
                wafy_blind_profile.click();
            } else if (wafy_isSetCognitive == true) {
                wafy_cognitive_profile.click();
            } else if (wafy_isSetAdhd == true) {
                wafy_adhd_profile.click();
            } else if (wafy_isSetMotor == true) {
                wafy_motor_profile.click();
            }

            // #### activating features for dyslexic profile #### //
            if (!wafy_isSetDyslexia) {
                wafy_dyslexia.click()
            }
            if (!wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }
        else {
            wafy_isSetDyslexic = false;
            wafy_dyslexic_profile.classList.remove('wafy-active-feature');

            // deactivating features for dyslexic profile
            if (wafy_isSetDyslexia) {
                wafy_dyslexia.click()
            }
            if (wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }

    });

    // Cognitive Profile
    wafy_cognitive_profile.addEventListener('click', () => {

        if (wafy_isSetCognitive == false) {
            wafy_isSetCognitive = true;
            wafy_cognitive_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetVision == true) {
                wafy_vision_profile.click();
            } else if (wafy_isSetBlind == true) {
                wafy_blind_profile.click();
            } else if (wafy_isSetDyslexic == true) {
                wafy_dyslexic_profile.click();
            } else if (wafy_isSetAdhd == true) {
                wafy_adhd_profile.click();
            } else if (wafy_isSetMotor == true) {
                wafy_motor_profile.click();
            }

            // #### activating features cognitive profile #### //
            if (!wafy_isSetReadingGuide) {
                wafy_reading_guide.click()
            }
            if (!wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }
        else {
            wafy_isSetCognitive = false;
            wafy_cognitive_profile.classList.remove('wafy-active-feature');

            // deactivating features for cognitive profile
            if (wafy_isSetReadingGuide) {
                wafy_reading_guide.click()
            }
            if (wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }

    });

    // ADHD Profile
    wafy_adhd_profile.addEventListener('click', () => {

        if (wafy_isSetAdhd == false) {
            wafy_isSetAdhd = true;
            wafy_adhd_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetVision == true) {
                wafy_vision_profile.click();
            } else if (wafy_isSetBlind == true) {
                wafy_blind_profile.click();
            } else if (wafy_isSetDyslexic == true) {
                wafy_dyslexic_profile.click();
            } else if (wafy_isSetCognitive == true) {
                wafy_cognitive_profile.click();
            } else if (wafy_isSetMotor == true) {
                wafy_motor_profile.click();
            }

            // #### activating features for adhd profile #### //
            if (!wafy_isSetHighSaturation) {
                wafy_high_saturation.click()
            }
            if (!wafy_isSetReadingMask) {
                wafy_reading_mask.click()
            }
            if (!wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }
        else {
            wafy_isSetAdhd = false;
            wafy_adhd_profile.classList.remove('wafy-active-feature');

            // deactivating features for adhd profile
            if (wafy_isSetHighSaturation) {
                wafy_high_saturation.click()
            }
            if (wafy_isSetReadingMask) {
                wafy_reading_mask.click()
            }
            if (wafy_isSetAnimations) {
                wafy_animations.click()
            }
        }

    });

    // Motor Profile
    wafy_motor_profile.addEventListener('click', () => {

        if (wafy_isSetMotor == false) {
            wafy_isSetMotor = true;
            wafy_motor_profile.classList.add('wafy-active-feature');

            // deactivating other profile if activated
            if (wafy_isSetVision == true) {
                wafy_vision_profile.click();
            } else if (wafy_isSetBlind == true) {
                wafy_blind_profile.click();
            } else if (wafy_isSetDyslexic == true) {
                wafy_dyslexic_profile.click();
            } else if (wafy_isSetCognitive == true) {
                wafy_cognitive_profile.click();
            } else if (wafy_isSetAdhd == true) {
                wafy_adhd_profile.click();
            }

            // #### activating features for dyslexic profile #### //
            if (!wafy_isSetKeyboardNav) {
                wafy_keyboard_nav.click()
            }
            if (!wafy_isSetAnimations) {
                wafy_animations.click()
            }
            if (!wafy_isSetWhiteCursor) {
                wafy_white_cursor.click()
            }
        }
        else {
            wafy_isSetMotor = false;
            wafy_motor_profile.classList.remove('wafy-active-feature');

            // deactivating features for dyslexic profile
            if (wafy_isSetKeyboardNav) {
                wafy_keyboard_nav.click()
            }
            if (wafy_isSetAnimations) {
                wafy_animations.click()
            }
            if (wafy_isSetWhiteCursor) {
                wafy_white_cursor.click()
            }
        }

    });


    // ####### Voice Menu Items ####### //

    // screen reader feature

    function Wafy_SpeechSynth(event) {

        let element = event.target;
        var text = element.innerText;

        // styling the element
        if (!element.closest('.wafy-app')) {
            element.classList.add('wafy-reader-highlight')
        }


        if (element.tagName == 'IMG') {
            text = "Image! " + element.getAttribute('alt');
        }
        else if (element.tagName == 'INPUT') {
            text = "Input! " + (element.getAttribute('placeholder') || element.getAttribute('name'));
        }
        else if (element.tagName == 'TEXTAREA') {
            text = "INPUT! " + (element.getAttribute('placeholder') || element.getAttribute('name'));
        }
        else if (element.tagName == 'A') {
            text = "Link! " + element.innerText;
        }
        else if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'H5' || element.tagName === 'H6') {
            text = "Heading! " + element.innerText;
        }

        // Cancel speaking if already speaking
        if (window.speechSynthesis.speaking) {
            // Speech synthesis is currently in progress, so stop or cancel it
            window.speechSynthesis.cancel();
        }

        // styling the element

        let utterance = new SpeechSynthesisUtterance(text);

        // Set the voice to Microsoft Zira
        let voices = window.speechSynthesis.getVoices();
        // Find the voice with a name that matches "Microsoft Zira"
        let ziraVoice = voices.find((voice) => /Microsoft Zira/.test(voice.name));
        utterance.voice = ziraVoice;

        window.speechSynthesis.speak(utterance);

        // Callback function for when speech synthesis ends
        utterance.onend = function (event) {
            console.log("Speech synthesis ended.");
            element.classList.remove('wafy-reader-highlight')
        };

        // Callback function for when speech synthesis is cancelled
        utterance.onerror = function (event) {
            console.error("Speech synthesis error:", event.error);
            element.classList.remove('wafy-reader-highlight')
        };
    }
    wafy_reader.addEventListener('click', () => {
        if ('speechSynthesis' in window) {
            // Speech Synthesis API is available
            if (wafy_isSetReader == false) {
                wafy_isSetReader = true;
                wafy_reader.classList.add('wafy-active-feature')

                // activating screen reader
                document.documentElement.addEventListener('click', Wafy_SpeechSynth)

            }
            else {
                wafy_isSetReader = false;
                wafy_reader.classList.remove('wafy-active-feature')

                // deactivating screen reader

                let speechDisable = new SpeechSynthesisUtterance("Screen reader is disabled.");
                window.speechSynthesis.speak(speechDisable);

                document.removeEventListener('click', Wafy_SpeechSynth)
            }

        } else {
            // Speech Synthesis API is not available
            alert('Sorry, screen reader feature is not supported in your browser.');
        }
    });

    // voice navigation feature
    wafy_voice.addEventListener('click', async () => {

        if (wafy_isSetVoice == false) {
            wafy_isSetVoice = true;
            wafy_voice.classList.add('wafy-active-feature')

            // activating voice navigation
            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

            // inserting interim speech div
            document.body.insertAdjacentHTML('beforeend', '<div id="wafy-interim">This is Interim Speech</div>')

            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                // Say Greetings to the user in voice if screen reader is enabled
                let utterance = new SpeechSynthesisUtterance("Greatings! How may I assist you?.");
                speechSynthesis.speak(utterance);

                recognition.continuous = true;
                recognition.interimResults = true;
                // recognition.maxSilence = 1200; // 20 mins

                // Get the default microphone input stream
                // const constraints = { audio: true };
                const constraints = { audio: { deviceId: { exact: 'default' } } };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);

                // Pass the microphone input stream to the recognition object
                const audioContext = new AudioContext();
                const mediaStreamSource = new MediaStreamAudioSourceNode(audioContext, { mediaStream: stream });
                recognition.mediaStreamSource = mediaStreamSource;

                recognition.start();


                // Result of the recognition
                recognition.addEventListener("result", recognitionResult);
                function recognitionResult(event) {
                    let command_final_transcript = "";
                    let command_interim_transcript = "";

                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            command_final_transcript = event.results[i][0].transcript;
                            // Opening / Clicking links
                            if (command_final_transcript.toLocaleLowerCase().includes("go to")) {
                                const anchors = document.querySelectorAll("A, BUTTON");
                                for (let i = 0; i < anchors.length; i++) {
                                    if (anchors[i].innerText.toLowerCase().to == command_final_transcript.toLocaleLowerCase().replace("go to ", "") || anchors[i].innerText.toLowerCase() == command_final_transcript.toLocaleLowerCase().replace(" go to ", "")) {
                                        anchors[i].click();
                                        break;
                                    }
                                }
                            } else if (command_final_transcript.toLocaleLowerCase().includes("open")) {
                                const anchors = document.querySelectorAll("A, BUTTON");
                                for (let i = 0; i < anchors.length; i++) {
                                    if (anchors[i].innerText.toLowerCase() == command_final_transcript.toLocaleLowerCase().replace("open ", "") || anchors[i].innerText.toLowerCase() == command_final_transcript.toLocaleLowerCase().replace(" open ", "")) {
                                        anchors[i].click();
                                        break;
                                    }
                                }
                            } else if (command_final_transcript.toLocaleLowerCase().includes("scroll up") || command_final_transcript.toLocaleLowerCase().includes("page up")) {
                                window.scrollBy(0, 700);
                            } else if (command_final_transcript.toLocaleLowerCase().includes("scroll down") || command_final_transcript.toLocaleLowerCase().includes("page down")) {
                                window.scrollBy(0, -700);
                            } else if (command_final_transcript.toLocaleLowerCase().includes("zoom in") || command_final_transcript.toLocaleLowerCase().includes("zoomin")) {
                                document.body.style.transform = 'scale(2)';
                            } else if (command_final_transcript.toLocaleLowerCase().includes("zoom out") || command_final_transcript.toLocaleLowerCase().includes("zoomout")) {
                                document.body.style.transform = 'scale(1)';
                            } else if (command_final_transcript.toLocaleLowerCase().includes("reload the page") || command_final_transcript.toLocaleLowerCase().includes("reload this page")) {
                                location.reload(true);
                            } else if (command_final_transcript.toLocaleLowerCase().includes("go back") || command_final_transcript.toLocaleLowerCase().includes("go to previous page")) {
                                history.back();
                            } else if (command_final_transcript.toLocaleLowerCase().includes("go to next page") || command_final_transcript.toLocaleLowerCase().includes("open next page")) {
                                console.log("go forward to the next page.")
                                history.forward();
                            } else if (command_final_transcript.toLocaleLowerCase().includes("how are you")) {
                                let utterance = new SpeechSynthesisUtterance("Hi, I am feeling great! How may I assist you?");
                                speechSynthesis.speak(utterance);
                            }

                            // Accessibility Widget recognition script starts
                            else if (command_final_transcript.toLocaleLowerCase().includes("open accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("open accessibility widget")) {
                                if (wafy_widget_wrapper.classList.contains('wafy-widget-hide')) {
                                    wafy_widget_wrapper.classList.remove('wafy-widget-hide')
                                }
                                wafy_widget_wrapper.classList.add('wafy-widget-show')
                            } else if (command_final_transcript.toLocaleLowerCase().includes("close accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("hide accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("remove accessibility menu")) {
                                if (wafy_widget_wrapper.classList.contains('wafy-widget-show')) {
                                    wafy_widget_wrapper.classList.remove('wafy-widget-show')
                                }
                                wafy_widget_wrapper.classList.add('wafy-widget-hide')
                            }
                            // Accessibility Widget recognition script ends
                            else if (command_final_transcript.toLocaleLowerCase().includes("stop listen") || command_final_transcript.toLocaleLowerCase().includes("stop listening")) {
                                recognition.stop();

                            } else {
                                let utterance = new SpeechSynthesisUtterance("I am sorry I didn't got it this time.");
                                speechSynthesis.speak(utterance);
                            }

                            //Interacting with the elements

                            // else if (command_final_transcript.toLocaleLowerCase().includes("home") || command_final_transcript.toLocaleLowerCase().includes("click home")) {
                            //     const element = document.getElementById("home");
                            //     element.click();
                            // }
                            // else if (command_final_transcript.toLocaleLowerCase().includes("services") || command_final_transcript.toLocaleLowerCase().includes("click services")) {
                            //     const element = document.getElementById("service");
                            //     element.click();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("pricing") || command_final_transcript.toLocaleLowerCase().includes("click pricing")) {
                            //     const element = document.getElementById("price");
                            //     element.click();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("contact") || command_final_transcript.toLocaleLowerCase().includes("click contact")) {
                            //     const element = document.getElementById("cont");
                            //     element.click();
                            // }



                            // form filling
                            // else if (command_final_transcript.toLocaleLowerCase().includes("name") || command_final_transcript.toLocaleLowerCase().includes("click name")) {
                            //     const element = document.getElementById("name");
                            //     element.focus();

                            // } else if (command_final_transcript.toLocaleLowerCase().includes("email") || command_final_transcript.toLocaleLowerCase().includes("click email")) {
                            //     const element = document.getElementById("email");
                            //     element.focus();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("phone") || command_final_transcript.toLocaleLowerCase().includes("click phone")) {
                            //     const element = document.getElementById("phone");
                            //     element.focus();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("subject") || command_final_transcript.toLocaleLowerCase().includes("click subject")) {
                            //     const element = document.getElementById("subject");
                            //     element.focus();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("message") || command_final_transcript.toLocaleLowerCase().includes("click message")) {
                            //     const element = document.getElementById("message");
                            //     element.focus();
                            // } else if (command_final_transcript.toLocaleLowerCase().includes("submit")) {
                            //     const element = document.getElementById("submit-message");
                            //     element.click();
                            // }

                        } else {
                            command_interim_transcript += event.results[i][0].transcript;
                        }
                    }

                    // Now storing the results in variables
                    // document.querySelector("#final").innerHTML = command_final_transcript;
                    let interim_div = document.querySelector("#wafy-interim");
                    interim_div.style.display = "block";
                    interim_div.innerHTML = command_interim_transcript;
                }
            } else {
                alert('Sorry! Your browser does not support voice navigation feature.');
            }
        }
        else {
            wafy_isSetVoice = false;
            wafy_voice.classList.remove('wafy-active-feature')

            // deactivating voice navigation

            // removing interim div
            recognition.stop()
            recognition.removeEventListener('result', recognitionResult)
            document.getElementById('wafy-interim').remove();
        }
    });



    // ####### Color Menu Items ####### //    

    // dark contrast feature
    wafy_dark_contrast.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetDarkContrast == false) {

            // checking if high or low  contrast is enabled
            if (wafy_isSetHighContrast == true) {
                wafy_high_contrast.click();
            }
            if (wafy_isSetLowContrast == true) {
                wafy_low_contrast.click();
            }
            wafy_isSetDarkContrast = true;
            wafy_dark_contrast.classList.add('wafy-active-feature')

            // activating dark contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add('wafy-dark-contrast-set');
                }
            }
        }
        else {
            wafy_isSetDarkContrast = false;
            wafy_dark_contrast.classList.remove('wafy-active-feature')

            // deactivating dark contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                wafy_all_elems[i].classList.remove('wafy-dark-contrast-set');
            }
        }
    });

    // high contrast feature
    wafy_high_contrast.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetHighContrast == false) {

            // checking if dark or low  contrast is enabled
            if (wafy_isSetDarkContrast == true) {
                wafy_dark_contrast.click();
            }
            if (wafy_isSetLowContrast == true) {
                wafy_low_contrast.click();
            }
            wafy_isSetHighContrast = true;
            wafy_high_contrast.classList.add('wafy-active-feature')

            // activating high contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add('wafy-high-contrast-set');
                }
            }
        }
        else {
            wafy_isSetHighContrast = false;
            wafy_high_contrast.classList.remove('wafy-active-feature')

            // deactivating high contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                wafy_all_elems[i].classList.remove('wafy-high-contrast-set');
            }
        }
    });

    // low contrast feature
    wafy_low_contrast.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetLowContrast == false) {

            // checking if dark or high  contrast is enabled
            if (wafy_isSetDarkContrast == true) {
                wafy_dark_contrast.click();
            }
            if (wafy_isSetHighContrast == true) {
                wafy_high_contrast.click();
            }
            wafy_isSetLowContrast = true;
            wafy_low_contrast.classList.add('wafy-active-feature')

            // activating dark contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add('wafy-low-contrast-set');
                }
            }
        }
        else {
            wafy_isSetLowContrast = false;
            wafy_low_contrast.classList.remove('wafy-active-feature')

            // deactivating dark contrast
            for (let i = 0; i < wafy_all_elems.length; i++) {
                wafy_all_elems[i].classList.remove('wafy-low-contrast-set');
            }
        }
    });

    // monochrome feature
    wafy_monochrome.addEventListener('click', () => {

        if (wafy_isSetMonochrome == false) {

            // checking if high and low saturation are enabled            
            if (wafy_isSetHighSaturation == true) {
                wafy_high_saturation.click();
            }
            if (wafy_isSetLowSaturation == true) {
                wafy_low_saturation.click();
            }

            wafy_isSetMonochrome = true;
            wafy_monochrome.classList.add('wafy-active-feature')

            // activating monochrome
            document.getElementsByTagName('html')[0].style.setProperty("filter", "saturate(0)", "important")
        }
        else {
            wafy_isSetMonochrome = false;
            wafy_monochrome.classList.remove('wafy-active-feature')

            // deactivating monochrome
            document.body.classList.remove('wafy-monochrome');
            document.getElementsByTagName('html')[0].style.removeProperty("filter");

        }
    });

    // high saturation feature
    wafy_high_saturation.addEventListener('click', () => {

        if (wafy_isSetHighSaturation == false) {

            // checking if monochrome and low saturation are enabled            
            if (wafy_isSetMonochrome == true) {
                wafy_monochrome.click();
            }
            if (wafy_isSetLowSaturation == true) {
                wafy_low_saturation.click();
            }

            wafy_isSetHighSaturation = true;
            wafy_high_saturation.classList.add('wafy-active-feature')

            // activating high saturation
            document.getElementsByTagName('html')[0].style.setProperty("filter", "saturate(3)", "important")
        }
        else {
            wafy_isSetHighSaturation = false;
            wafy_high_saturation.classList.remove('wafy-active-feature')

            // deactivating high saturation
            document.getElementsByTagName('html')[0].style.removeProperty("filter")
        }
    });

    // low saturation feature
    wafy_low_saturation.addEventListener('click', () => {

        if (wafy_isSetLowSaturation == false) {

            // checking if monochrome and high saturation are enabled            
            if (wafy_isSetMonochrome == true) {
                wafy_monochrome.click();
            }
            if (wafy_isSetHighSaturation == true) {
                wafy_high_saturation.click();
            }

            wafy_isSetLowSaturation = true;
            wafy_low_saturation.classList.add('wafy-active-feature')

            // activating low saturation
            document.getElementsByTagName('html')[0].style.setProperty("filter", "saturate(0.5)", "important")
        }
        else {
            wafy_isSetLowSaturation = false;
            wafy_low_saturation.classList.remove('wafy-active-feature')

            // deactivating low saturation
            document.getElementsByTagName('html')[0].style.removeProperty("filter")
        }
    });

    // text color feature
    wafy_text_color.addEventListener('click', () => {

        if (wafy_isSetTextColor == false) {
            wafy_isSetTextColor = true;
            wafy_text_color.classList.add('wafy-active-feature')

            // activating text color
        }
        else {
            wafy_isSetTextColor = false;
            wafy_text_color.classList.remove('wafy-active-feature')

            // deactivating text color
        }
    });

    // background color feature
    wafy_background_color.addEventListener('click', () => {

        if (wafy_isSetBgColor == false) {
            wafy_isSetBgColor = true;
            wafy_background_color.classList.add('wafy-active-feature')

            // activating background color
        }
        else {
            wafy_isSetBgColor = false;
            wafy_background_color.classList.remove('wafy-active-feature')

            // deactivating background color
        }
    });


    // ####### Alignments Items ####### //

    // font-size feature
    wafy_font_size.addEventListener('click', () => {

        if (wafy_isSetFontSize == false) {
            wafy_isSetFontSize = true;
            wafy_font_size.classList.add('wafy-active-feature')

            // activating bigger font size
            document.body.style.setProperty("zoom", "1.4", "important");
        }
        else {
            wafy_isSetFontSize = false;
            wafy_font_size.classList.remove('wafy-active-feature')

            // deactivating bigger font size
            document.body.style.removeProperty("zoom")
        }
    });

    // dyslexia font feature
    wafy_dyslexia.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetDyslexia == false) {
            wafy_isSetDyslexia = true;
            wafy_dyslexia.classList.add('wafy-active-feature')

            // activating dyslexic font
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-dyslexic-font");
                }
            }

        }
        else {
            wafy_isSetDyslexia = false;
            wafy_dyslexia.classList.remove('wafy-active-feature')

            // deactivating dyslexic font
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-dyslexic-font");
                }
            }
        }
    });

    // left align feature
    wafy_left_align.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetLeftAlign == false) {

            // checking if right, center or justify is enabled            
            if (wafy_isSetRightAlign == true) {
                wafy_right_align.click();
            }
            if (wafy_isSetCenterAlign == true) {
                wafy_center_align.click();
            }
            if (wafy_isSetJustifyAlign == true) {
                wafy_justify_align.click();
            }

            wafy_isSetLeftAlign = true;
            wafy_left_align.classList.add('wafy-active-feature')

            // activating left align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-align-left-set");
                }
            }
        }
        else {
            wafy_isSetLeftAlign = false;
            wafy_left_align.classList.remove('wafy-active-feature')

            // deactivating left align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-align-left-set");
                }
            }
        }
    });

    // right align feature
    wafy_right_align.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetRightAlign == false) {

            // checking if left, center or justify is enabled            
            if (wafy_isSetLeftAlign == true) {
                wafy_left_align.click();
            }
            if (wafy_isSetCenterAlign == true) {
                wafy_center_align.click();
            }
            if (wafy_isSetJustifyAlign == true) {
                wafy_justify_align.click();
            }

            wafy_isSetRightAlign = true;
            wafy_right_align.classList.add('wafy-active-feature')

            // activating right align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-align-right-set");
                }
            }
        }
        else {
            wafy_isSetRightAlign = false;
            wafy_right_align.classList.remove('wafy-active-feature')

            // deactivating right align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-align-right-set");
                }
            }
        }
    });

    // center align feature
    wafy_center_align.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetCenterAlign == false) {

            // checking if left, right or justify is enabled            
            if (wafy_isSetLeftAlign == true) {
                wafy_left_align.click();
            }
            if (wafy_isSetRightAlign == true) {
                wafy_right_align.click();
            }
            if (wafy_isSetJustifyAlign == true) {
                wafy_justify_align.click();
            }

            wafy_isSetCenterAlign = true;
            wafy_center_align.classList.add('wafy-active-feature')

            // activating center align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-align-center-set");
                }
            }
        }
        else {
            wafy_isSetCenterAlign = false;
            wafy_center_align.classList.remove('wafy-active-feature')

            // deactivating center align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-align-center-set");
                }
            }
        }
    });

    // justify align feature
    wafy_justify_align.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetJustifyAlign == false) {

            // checking if left, right or center is enabled            
            if (wafy_isSetLeftAlign == true) {
                wafy_left_align.click();
            }
            if (wafy_isSetRightAlign == true) {
                wafy_right_align.click();
            }
            if (wafy_isSetCenterAlign == true) {
                wafy_center_align.click();
            }

            wafy_isSetJustifyAlign = true;
            wafy_justify_align.classList.add('wafy-active-feature')

            // activating justify align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-align-justify-set");
                }
            }
        }
        else {
            wafy_isSetJustifyAlign = false;
            wafy_justify_align.classList.remove('wafy-active-feature')

            // deactivating justify align
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-align-justify-set");
                }
            }
        }
    });

    // line height feature
    wafy_line_height.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetLineHeight == false) {
            wafy_isSetLineHeight = true;
            wafy_line_height.classList.add('wafy-active-feature')

            // activating line height
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-line-height-set");
                }
            }
        }
        else {
            wafy_isSetLineHeight = false;
            wafy_line_height.classList.remove('wafy-active-feature')

            // deactivating line height
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-line-height-set");
                }
            }
        }
    });

    // text spacing feature
    wafy_text_spacing.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetTextSpacing == false) {
            wafy_isSetTextSpacing = true;
            wafy_text_spacing.classList.add('wafy-active-feature')

            // activating text spacing
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.add("wafy-text-spacing-set");
                }
            }
        }
        else {
            wafy_isSetTextSpacing = false;
            wafy_text_spacing.classList.remove('wafy-active-feature')

            // deactivating text spacing
            for (let i = 0; i < wafy_all_elems.length; i++) {
                if (!wafy_all_elems[i].closest('.wafy-app')) {
                    wafy_all_elems[i].classList.remove("wafy-text-spacing-set");
                }
            }
        }
    });

    // highlight links feature
    wafy_highlight_links.addEventListener('click', () => {

        var wafy_links = document.querySelectorAll('a');

        if (wafy_isSetHighlightLinks == false) {
            wafy_isSetHighlightLinks = true;
            wafy_highlight_links.classList.add('wafy-active-feature')

            // activating highlight links
            for (let i = 0; i < wafy_links.length; i++) {
                if (!wafy_links[i].closest('.wafy-app')) {
                    wafy_links[i].classList.add("wafy-highlight-links-set");
                }
            }
        }
        else {
            wafy_isSetHighlightLinks = false;
            wafy_highlight_links.classList.remove('wafy-active-feature')

            // deactivating highlight links
            for (let i = 0; i < wafy_links.length; i++) {
                if (!wafy_links[i].closest('.wafy-app')) {
                    wafy_links[i].classList.remove("wafy-highlight-links-set");
                }
            }
        }
    });

    // highlight heading feature
    wafy_highlight_headings.addEventListener('click', () => {

        var wafy_headings = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

        if (wafy_isSetHighlightHeadings == false) {
            wafy_isSetHighlightHeadings = true;
            wafy_highlight_headings.classList.add('wafy-active-feature')

            // activating highlight headings
            for (let i = 0; i < wafy_headings.length; i++) {
                if (!wafy_headings[i].closest('.wafy-app')) {
                    wafy_headings[i].classList.add("wafy-highlight-headings-set");
                }
            }
        }
        else {
            wafy_isSetHighlightHeadings = false;
            wafy_highlight_headings.classList.remove('wafy-active-feature')

            // deactivating highlight headings
            for (let i = 0; i < wafy_headings.length; i++) {
                if (!wafy_headings[i].closest('.wafy-app')) {
                    wafy_headings[i].classList.remove("wafy-highlight-headings-set");
                }
            }
        }
    });


    // ####### Useful Adjustments Items ####### //

    // pause animations feature
    wafy_animations.addEventListener('click', () => {

        // getting all the current elements
        var wafy_all_elems = document.querySelectorAll('*')

        if (wafy_isSetAnimations == false) {
            wafy_isSetAnimations = true;
            wafy_animations.classList.add('wafy-active-feature')

            // activating pause animations
            for (var i = 0; i < wafy_all_elems.length; i++) {
                var element = wafy_all_elems[i];
                var style = window.getComputedStyle(element);
                var animation = style.getPropertyValue('animation');
                if (animation !== 'none') {
                    element.style.animationPlayState = 'paused';
                }
            }
        }
        else {
            wafy_isSetAnimations = false;
            wafy_animations.classList.remove('wafy-active-feature')

            // deactivating pause animations
            for (var i = 0; i < wafy_all_elems.length; i++) {
                var element = wafy_all_elems[i];
                var style = window.getComputedStyle(element);
                var animation = style.getPropertyValue('animation');
                if (animation !== 'none') {
                    element.style.animationPlayState = 'running';
                }
            }
        }
    });

    // hide images feature
    wafy_images.addEventListener('click', () => {

        // getting all the current elements
        var wafy_img_elems = document.getElementsByTagName("img");

        if (wafy_isSetImages == false) {
            wafy_isSetImages = true;
            wafy_images.classList.add('wafy-active-feature')

            // activating hide images
            for (var i = 0; i < wafy_img_elems.length; i++) {
                wafy_img_elems[i].classList.add("wafy-hide-img"); // hide images
            }
        }
        else {
            wafy_isSetImages = false;
            wafy_images.classList.remove('wafy-active-feature')

            // deactivating hide images
            for (var i = 0; i < wafy_img_elems.length; i++) {
                wafy_img_elems[i].classList.remove("wafy-hide-img"); // show images
            }
        }
    });

    // big white cursor feature
    wafy_white_cursor.addEventListener('click', () => {

        // links
        var wafy_links = document.querySelectorAll('a,button,img,input,svg, textarea')

        if (wafy_isSetWhiteCursor == false) {

            // checking if black cursor is enabled            
            if (wafy_isSetBlackCursor == true) {
                wafy_black_cursor.click();
            }

            wafy_isSetWhiteCursor = true;
            wafy_white_cursor.classList.add('wafy-active-feature')

            // activating big white cursor
            document.documentElement.classList.add("wafy-white-cursor")

            for (var i = 0; i < wafy_links.length; i++) {
                wafy_links[i].classList.add("wafy-wh-hand-cursor"); // white hand cursor
            }
        }
        else {
            wafy_isSetWhiteCursor = false;
            wafy_white_cursor.classList.remove('wafy-active-feature')

            // deactivating big white cursor
            document.documentElement.classList.remove("wafy-white-cursor")

            for (var i = 0; i < wafy_links.length; i++) {
                wafy_links[i].classList.remove("wafy-wh-hand-cursor");
            }
        }
    });

    // big black cursor feature
    wafy_black_cursor.addEventListener('click', () => {

        // links
        var wafy_links = document.querySelectorAll('a,button,img,input,svg, textarea')

        if (wafy_isSetBlackCursor == false) {

            // checking if black cursor is enabled            
            if (wafy_isSetWhiteCursor == true) {
                wafy_white_cursor.click();
            }
            wafy_isSetBlackCursor = true;
            wafy_black_cursor.classList.add('wafy-active-feature')

            // activating big black cursor
            document.documentElement.classList.add("wafy-black-cursor")

            for (var i = 0; i < wafy_links.length; i++) {
                wafy_links[i].classList.add("wafy-bl-hand-cursor"); // black hand cursor
            }
        }
        else {
            wafy_isSetBlackCursor = false;
            wafy_black_cursor.classList.remove('wafy-active-feature')

            // deactivating big black cursor
            document.documentElement.classList.remove("wafy-black-cursor")

            for (var i = 0; i < wafy_links.length; i++) {
                wafy_links[i].classList.remove("wafy-bl-hand-cursor");
            }
        }
    });

    // keyboard navigation feature
    wafy_keyboard_nav.addEventListener('click', () => {
        if (wafy_isSetKeyboardNav == false) {

            wafy_isSetKeyboardNav = true;
            wafy_keyboard_nav.classList.add('wafy-active-feature')

            // activating keyboard navigation

            // Add keyboard event listeners to focusable elements
            var focusableElements = document.querySelectorAll('a[href], button, textarea, input, select');
            var currentIndex = 0;

            focusableElements.forEach(function (element, index) {
                element.addEventListener('keydown', function (e) {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        element.click();
                    } else if (e.keyCode === 38 || e.keyCode === 37) {
                        e.preventDefault();
                        currentIndex = index === 0 ? focusableElements.length - 1 : index - 1;
                        focusableElements[currentIndex].focus();
                    } else if (e.keyCode === 40 || e.keyCode === 39) {
                        e.preventDefault();
                        currentIndex = index === focusableElements.length - 1 ? 0 : index + 1;
                        focusableElements[currentIndex].focus();
                    }
                });
            });
            focusableElements[0].focus();
        }
        else {
            wafy_isSetKeyboardNav = false;
            wafy_keyboard_nav.classList.remove('wafy-active-feature')

            // deactivating keyboard navigation
            focusableElements = {}
        }
    });
    document.documentElement.addEventListener('keydown', event => {

        // shortcut open accessibility menuy
        if (event.altKey && (event.key === "w" || event.key === "W")) {

            // Prevent the default behavior of the "Alt + W" key combination
            event.preventDefault();

            // Trigger a click event on the button element
            if (wafy_widget_wrapper.classList.contains('wafy-widget-hide')) {
                wafy_widget_wrapper.classList.remove('wafy-widget-hide')
                wafy_widget_wrapper.classList.add('wafy-widget-show')
            } else {
                wafy_widget_wrapper.classList.remove('wafy-widget-show')
                wafy_widget_wrapper.classList.add('wafy-widget-hide')
            }
        }
    });

    // highlight hover feature
    wafy_highlight_hover.addEventListener('click', () => {

        if (wafy_isSetHighlightHover == false) {
            wafy_isSetHighlightHover = true;
            wafy_highlight_hover.classList.add('wafy-active-feature')

            // activating highlight hover
            document.documentElement.classList.add('wafy-hover-focus')
        }
        else {
            wafy_isSetHighlightHover = false;
            wafy_highlight_hover.classList.remove('wafy-active-feature')

            // deactivating highlight hover
            document.documentElement.classList.remove('wafy-hover-focus')
        }
    });

    // reading mask feature
    wafy_reading_mask.addEventListener('click', () => {

        if (wafy_isSetReadingMask == false) {
            wafy_isSetReadingMask = true;
            wafy_reading_mask.classList.add('wafy-active-feature')

            // activating reading mask

            // creating reading mask div
            document.body.insertAdjacentHTML('beforeend', '<div class="wafy-reading-mask"></div>')
            const wafy_readingMask = document.querySelector('.wafy-reading-mask');

            // Creating mask element inside reading mask div
            const mask = document.createElement('div');
            mask.classList.add('wafy-mask');
            wafy_readingMask.appendChild(mask);

            // Listen for mousemove events
            document.documentElement.addEventListener('mousemove', function (e) {
                // Calculate the dimensions of the mask
                const maskWidth = window.innerWidth;
                const maskHeight = 110;

                // Calculate the position of the mask / mouse pos in the mask
                const maskTop = e.clientY - (maskHeight / 2);

                // Update the mask element with the new dimensions and position
                mask.style.width = maskWidth + 'px';
                mask.style.height = maskHeight + 'px';
                mask.style.top = maskTop + 'px';

                // Show the reading mask
                wafy_readingMask.classList.add('active');
            });

            // Listen for mouseleave events to hide the reading mask
            document.documentElement.addEventListener('mouseleave', function () {
                wafy_readingMask.classList.remove('active');
            });
        }
        else {
            wafy_isSetReadingMask = false;
            wafy_reading_mask.classList.remove('wafy-active-feature')

            // deactivating reading mask

            // get mask element and remove it
            const wafy_readingMask = document.querySelector('.wafy-reading-mask');
            wafy_readingMask.remove();
        }
    });

    // reading guide feature
    wafy_reading_guide.addEventListener('click', () => {

        if (wafy_isSetReadingGuide == false) {
            wafy_isSetReadingGuide = true;
            wafy_reading_guide.classList.add('wafy-active-feature')

            // activating reading guide

            // Creating reading guide line div
            document.body.insertAdjacentHTML('beforeend', '<div id="wafy-reading-guide-line"></div>')

            const readingGuide = document.getElementById("wafy-reading-guide-line");

            document.documentElement.addEventListener("mousemove", (e) => {
                const y = e.clientY;
                const x = e.clientX;
                readingGuide.style.top = `${y - 7}px`;
                readingGuide.style.left = `${x - 275}px`;
            });
        }
        else {
            wafy_isSetReadingGuide = false;
            wafy_reading_guide.classList.remove('wafy-active-feature')

            // deactivating reading guide
            const readingGuide = document.getElementById("wafy-reading-guide-line");
            readingGuide.remove()
        }
    });
}