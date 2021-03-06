import React from 'react';

function Skills() {

    return (
        <div className='card'>
            <h1 className='retro-header'>Skills</h1>
            {/* List of Skills as SVG icons */}
            <section className="skills">
                <div className="skills-icons html-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--dashicons" width="56" height="56"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                        <path fill="currentColor"
                            d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zm3 0v-4H5.6v-1h3.7v1H8v4H7zm3 0v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zm9 0h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3l-.6 1.2l-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3l-2.3-2.3l.6-1.2l3.5 3.5l-3.5 3.5l-.6-1.2z">
                        </path>
                    </svg>
                </div>
                <div className="skills-icons css-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--ph" width="54" height="54" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M52 192c0 8.8 6.3 16 14 16a12.9 12.9 0 0 0 8.6-3.4a7.9 7.9 0 0 1 11.3.6a8 8 0 0 1-.5 11.3A29.3 29.3 0 0 1 66 224c-16.5 0-30-14.4-30-32s13.5-32 30-32a29.3 29.3 0 0 1 19.4 7.5a8 8 0 0 1 .5 11.3a7.9 7.9 0 0 1-11.3.6A12.9 12.9 0 0 0 66 176c-7.7 0-14 7.2-14 16ZM216 88v40a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8.1 8.1 0 0 1 5.7 2.3l55.9 56A7.8 7.8 0 0 1 216 88Zm-27.3-8L160 51.3V80ZM152 204c0 13.1-9.4 21-25 21a33.4 33.4 0 0 1-20.1-6.8a7.6 7.6 0 0 1-2.9-6.2a8 8 0 0 1 8-8a8.3 8.3 0 0 1 5.1 1.8h-.1a18.4 18.4 0 0 0 10 3.2c9 0 9-3 9-5s0-.9-1.2-1.6s-5.8-2.2-9.2-3.1C117 197 104 193.5 104 180s9.5-21 23-21a33.4 33.4 0 0 1 20.1 6.8a7.6 7.6 0 0 1 2.9 6.2a8 8 0 0 1-8 8a8.3 8.3 0 0 1-5.1-1.8h.1a18.4 18.4 0 0 0-10-3.2c-4.6 0-7 1.7-7 5v.2c1.1 1.3 6.6 2.8 9.7 3.6C138 186 152 189.7 152 204Zm-15.1-25.9Zm-19.8 27.8ZM216 204c0 13.1-9.4 21-25 21a33.4 33.4 0 0 1-20.1-6.8a7.6 7.6 0 0 1-2.9-6.2a8 8 0 0 1 8-8a8.3 8.3 0 0 1 5.1 1.8h-.1a18.4 18.4 0 0 0 10 3.2c9 0 9-3 9-5s0-.9-1.2-1.6s-5.8-2.2-9.2-3.1C181 197 168 193.5 168 180s9.5-21 23-21a33.4 33.4 0 0 1 20.1 6.8a7.6 7.6 0 0 1 2.9 6.2a8 8 0 0 1-8 8a8.3 8.3 0 0 1-5.1-1.8h.1a18.4 18.4 0 0 0-10-3.2c-4.7 0-7 1.7-7 5v.2c1.1 1.3 6.6 2.8 9.7 3.6C202 186 216 189.7 216 204Zm-15.1-25.9Zm-19.8 27.8Z">
                        </path>
                    </svg>
                </div>
                <div className="skills-icons boot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--mdi" width="47" height="47" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91Z">
                        </path>
                    </svg>
                </div>
                <div className="skills-icons js-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--teenyicons" width="46" height="46"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                        <path fill="none" stroke="currentColor"
                            d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z">
                        </path>
                    </svg>
                </div>

                <div className="skills-icons sql-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--carbon" width="60" height="60"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M24 21V9h-2v14h8v-2h-6zM18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm-4 12V11h4v10zm-6 2H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z">
                        </path>
                    </svg>
                </div>
                <div className="skills-icons handlebars-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--simple-icons" width="53" height="53"
                        preserveAspectRatio="xMidYMid meet" viewBox="-3 0 28 24">
                        <path fill="currentColor"
                            d="M9.1 4.948a3.45 3.45 0 0 0-.398.014C6.32 5.15 5.373 6.375 4.802 6.9c-.572.525-1.656 1.763-2.376 1.545c-.721-.217-.924-1.107-.67-1.381s.454-.225.613 0c.097.18.145.383.14.587a1.36 1.36 0 0 0 .438-.665a.792.792 0 0 0-.443-1.017c-1.3-.659-2.139.514-2.26.787c-.122.273-.336.707-.2 1.695c.135.989.612 1.902 2.104 2.261a6.31 6.31 0 0 0 4.238-.495l4.41-1.84a5.408 5.408 0 0 1 .556-.101v9.864c0 .506.316.913.708.913c.391 0 .707-.407.707-.913V8.29a5.408 5.408 0 0 1 .437.088l4.41 1.84a6.31 6.31 0 0 0 4.238.494c1.492-.36 1.969-1.272 2.105-2.26c.135-.989-.08-1.423-.2-1.696c-.122-.273-.962-1.446-2.261-.787a.792.792 0 0 0-.443 1.017c.076.26.229.492.437.665a1.19 1.19 0 0 1 .141-.587c.159-.225.359-.274.613 0s.051 1.164-.67 1.382c-.72.217-1.804-1.02-2.376-1.546c-.571-.525-1.518-1.75-3.9-1.938A3.45 3.45 0 0 0 12 6.653a3.45 3.45 0 0 0-2.9-1.705zm12.39 2.703v.004l.006.002c-.002-.002-.004-.004-.006-.004zm-18.98 0c-.002.002-.004.004-.006.004l.006-.001V7.65z">
                        </path>
                    </svg>
                </div>

                <div className="skills-icons npm-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--mdi" width="96" height="96" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M4 10v4h2v-3h1v3h1v-4H4m5 0v5h2v-1h2v-4H9m3 1v2h-1v-2h1m2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6M3 9h18v6h-9v1H8v-1H3V9Z">
                        </path>
                    </svg>
                </div>

                <div className="skills-icons node-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="img" className="iconify iconify--fa6-brands" width="66" height="66"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512">
                        <path fill="currentColor"
                            d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 
                        16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3c0 5.2 4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2c1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1
                        3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1c1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path>
                    </svg>
                </div>
                <div className="skills-icons react-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--ri" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884c.864-.498.983-2.225.414-4.484c-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364c.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567c0 1.533-1.74 2.803-4.405 3.567c.67 2.69.441 4.832-.886 5.598c-1.328.767-3.298-.105-5.292-2.03c-1.994 1.925-3.964 2.797-5.292 2.03c-1.327-.766-1.557-2.908-.886-5.598c-2.665-.764-4.405-2.034-4.405-3.567c0-1.533 1.74-2.803 4.405-3.567c-.67-2.69-.441-4.832.886-5.598c1.328-.767 3.298.105 5.292 2.03c1.994-1.925 3.964-2.797 5.292-2.03c1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484c-.863-.499-2.419.261-4.09 1.884a22.049 22.049 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484c.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175a21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484c.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28a25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28a25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667a27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304c.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97a20.42 20.42 0 0 0-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6a22.002 22.002 0 0 1-1.01-2.6c-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445a20.808 20.808 0 0 0-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6c.41.892.749 1.766 1.01 2.6c2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76a1.88 1.88 0 0 1 0 3.76z"></path></svg>
                </div>
                <div className="skills-icons mongo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--teenyicons" width="45" height="45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5.5l.369-.338a.5.5 0 0 0-.738 0L7.5.5Zm0 13l-.393.309a.5.5 0 0 0 .786 0L7.5 13.5ZM4.623 9.838l-.393.31l.393-.31Zm.246-6.467L4.5 3.032l.369.337Zm5.262 0l.369-.338l-.369.337Zm.246 6.467l.393.31l-.393-.31ZM8 15V.5H7V15h1Zm-.107-1.809L5.016 9.53l-.786.618l2.877 3.662l.786-.618ZM5.237 3.708L7.87.838L7.13.162L4.5 3.032l.736.676ZM7.131.838l2.632 2.87l.737-.675L7.869.163L7.13.837Zm2.853 8.691l-2.877 3.662l.786.618l2.877-3.662l-.786-.618Zm-.221-5.82a4.5 4.5 0 0 1 .22 5.82l.787.618a5.5 5.5 0 0 0-.27-7.114l-.737.675Zm-4.747 5.82a4.5 4.5 0 0 1 .221-5.82L4.5 3.032a5.5 5.5 0 0 0-.27 7.114l.786-.618Z"></path></svg>
                </div>

                {/* Resume Link */}
                <div className='resume-link'>
                    <a href='Jonathan-Prill-Resume.pdf' download={'Jonathan Prill Resume'}>Download Resume</a>
                </div>
            </section>

        </div>
    )
}
export default Skills;