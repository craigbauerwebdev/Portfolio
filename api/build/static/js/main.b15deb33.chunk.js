(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),i=a(2),o=a(3),s=a(5),u=a(4),m=a(6),d=a(8),p=a(12),h=a(15),E=a.n(h),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.data;return console.log(e),l.a.createElement("div",{id:"examples",className:"inner center"},e.map(function(e,t){if("publish"===e.status||"draft"===e.status){var a="/"+e.slug;return l.a.createElement(d.b,{key:t,to:"".concat("/build").concat(a)},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"inner",style:{backgroundImage:"url("+e.code_thumb+")",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement("div",{className:"project-title center"},e.title.rendered))))}return!1}),l.a.createElement("div",{style:{clear:"left"}}))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.data;return console.log(e),l.a.createElement("div",{id:"examples",className:"inner center"},e.map(function(e,t){if("publish"===e.status){var a="/"+e.slug;return l.a.createElement(d.b,{key:t,to:"".concat("/build").concat(a)},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"inner",style:{backgroundImage:"url("+e.thumbnail+")",backgroundSize:"cover",backgroundPosition:"top"}},l.a.createElement("div",{className:"project-title center"},e.title.rendered))))}return!1}),l.a.createElement("div",{style:{clear:"left"}}))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handlePopup",value:function(e){console.log("popup"),window.open(e,"github","height=600,width=960,toolbar=0,menubar=0,location=0")}},{key:"handleDownload",value:function(e){console.log(e,"download file here")}},{key:"render",value:function(){var e=this,t=this.props,a=t.url,n=t.label,r=t.type;return"popup"===r?l.a.createElement("div",{onClick:function(){e.handlePopup(a)}},l.a.createElement("button",null,n)):"download"===r?l.a.createElement("div",{onClick:function(){e.handleDownload(a)}}," ",l.a.createElement("button",null,n)):l.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("button",null,n))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.single,r=e.type,c="code"===r?a.code_thumb:a.thumbnail,i="code"===r?"View On GITHUB":"View Site";return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"single-code inner group"},l.a.createElement("h1",{className:"project-title mobile"},a.title.rendered),l.a.createElement("img",{className:"project-thumb left",alt:a.slug,src:c}),l.a.createElement("div",{className:"project-meta left"},l.a.createElement("h1",{className:"project-title desktop"},a.title.rendered),l.a.createElement("div",{className:"project-desc",dangerouslySetInnerHTML:{__html:a.excerpt.rendered}}),l.a.createElement("div",{className:"tech-used"},l.a.createElement("b",null,l.a.createElement("p",{className:"title"},"Technologies Used")),l.a.createElement("p",null,a.technologies_used)),a.view_btn&&l.a.createElement(v,{url:a.url,label:i,type:"popup"}),!a.view_btn&&l.a.createElement("p",{className:"red"},"This project is no longer live"))),l.a.createElement("div",{className:"related-projects"},l.a.createElement("h2",{className:"more-projects"},"More Projects"),"code"===r&&l.a.createElement(b,{data:t}),"web"===r&&l.a.createElement(g,{data:t})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={navDescription:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleNavDescription",value:function(e){this.setState({navDescription:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"nav-icons center"},l.a.createElement(d.b,{onMouseEnter:function(){e.handleNavDescription("Home")},onMouseLeave:function(){e.handleNavDescription("")},to:"".concat("/build","/"),title:"Home"},l.a.createElement("i",{className:"large material-icons"},"person")),l.a.createElement(d.b,{onMouseEnter:function(){e.handleNavDescription("Resume")},onMouseLeave:function(){e.handleNavDescription("")},to:"".concat("/build","/resume"),title:"Resume"},l.a.createElement("i",{className:"large material-icons"},"list_alt")),l.a.createElement(d.b,{onMouseEnter:function(){e.handleNavDescription("Web Examples")},onMouseLeave:function(){e.handleNavDescription("")},to:"".concat("/build","/websites"),title:"websites"},l.a.createElement("i",{className:"large material-icons"},"important_devices")),l.a.createElement(d.b,{onMouseEnter:function(){e.handleNavDescription("Code Examples")},onMouseLeave:function(){e.handleNavDescription("")},to:"".concat("/build","/code"),title:"code"},l.a.createElement("i",{className:"large material-icons"},"code")),l.a.createElement(d.b,{onMouseEnter:function(){e.handleNavDescription("Contact me")},onMouseLeave:function(){e.handleNavDescription("")},to:"".concat("/build","/contact"),title:"contact"},l.a.createElement("i",{className:"large material-icons"},"mail_outline"))),l.a.createElement("div",{id:"nav-description"},this.state.navDescription))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.theme,r=t.height,c=t.github,i=t.linkedin,o={height:r||"24px",margin:"0 10px 0 10px"};return e="dark"===a?l.a.createElement(n.Fragment,null,l.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{style:o,alt:"github-icon",src:"".concat("/build","/assets/github-dark.png")})),l.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{style:o,alt:"linkedin-icon",src:"".concat("/build","/assets/linkedin-dark.png")}))):l.a.createElement(n.Fragment,null,l.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{style:o,alt:"github-icon",src:"".concat("/build","/assets/github.png")})),l.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{style:o,alt:"linkedin-icon",src:"".concat("/build","/assets/linkedin.png")}))),l.a.createElement("div",{className:"social-icons"},e)}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.settings;return l.a.createElement("div",{className:"footer"},l.a.createElement("footer",null,l.a.createElement(w,{showButtons:!1}),l.a.createElement(j,{github:e.gitHub_url,linkedin:e.linkedin_url,theme:"light",height:"24px"}),l.a.createElement("p",{className:"v-space-30"},"\xa9 Craig Bauer 2019")))}}]),t}(n.Component),O=a(39),N=a(36),k=(a(73),N.initializeApp({apiKey:"AIzaSyAaKAfomMpPJI5fXwcOahclcM4xQ1rqNAg",authDomain:"portfolio-auth-ed069.firebaseapp.com",databaseURL:"https://portfolio-auth-ed069.firebaseio.com",projectId:"portfolio-auth-ed069",storageBucket:"portfolio-auth-ed069.appspot.com",messagingSenderId:"273180357901",appId:"1:273180357901:web:58e26bc07103cb9b422c44",measurementId:"G-HLYY9C7WVD"})),S=l.a.createContext(),C=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(O.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)(function(){k.auth().onAuthStateChanged(i)},[]),l.a.createElement(S.Provider,{value:{currentUser:c}},t)},D=function(e){var t=Object(n.useContext)(S).currentUser;return l.a.createElement("div",{className:"header"},l.a.createElement("header",{className:"header"},l.a.createElement(d.b,{to:"".concat("/build","/")},l.a.createElement("img",{alt:"CBD Logo",height:"100",src:"".concat("/build","/assets/CB-logo.png")})),l.a.createElement(d.b,{to:"/login"},l.a.createElement("div",{className:"settings-icon"},l.a.createElement("i",{className:"large material-icons"},"settings"),t&&l.a.createElement("span",{className:"welcome"},"Signed In"))),l.a.createElement(w,{showButtons:!0})))},I=a(23),M=a.n(I),P=a(37),x=Object(p.g)(function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(P.a)(M.a.mark(function e(a){var n,l,r;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,l=n.email,r=n.password,e.prev=2,console.log("loggin in"),e.next=6,k.auth().signInWithEmailAndPassword(l.value,r.value);case 6:t.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(S).currentUser?l.a.createElement(p.a,{to:"/dashboard"}):(console.log("no current user"),l.a.createElement("div",{className:"login-page"},l.a.createElement("h1",null,"Log"),l.a.createElement("form",{onSubmit:a},l.a.createElement("label",null,"Email",l.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Log In"))))}),A=a(38),_=function(e){var t=e.component,a=Object(A.a)(e,["component"]),r=Object(n.useContext)(S).currentUser;return console.log("AUTH: ",r),console.log(!!r),l.a.createElement(p.b,Object.assign({},a,{render:function(e){return r?l.a.createElement(t,Object.assign({},e,a)):l.a.createElement(p.a,{to:"/login"})}}))},L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.settings;return l.a.createElement("div",{id:"about-wrap",className:"inner"},l.a.createElement("div",{className:"bio-pic"}),l.a.createElement("h1",null,e.bio_intro),l.a.createElement("h2",null,"I'm a Frontend Web Developer"),l.a.createElement("img",{src:"assets/mern.png",className:"mern-stack",alt:"mern stack",width:"100%"}),l.a.createElement("div",{className:"bio"},l.a.createElement("p",null,e.bio)))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"info-wrap",className:"center"},l.a.createElement("h1",null,"Craig Bauer"),l.a.createElement("h3",null,"Suffern, NY 10901"),l.a.createElement("h3",null,"craigbauer23@gmail.com"),l.a.createElement("h3",null,"(347) 742-2411"))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,t)),l.a.createElement("p",null,a))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Skills"),l.a.createElement("div",{className:"group"},l.a.createElement("ul",{className:"col"},l.a.createElement("li",null,"HTML 5"),l.a.createElement("li",null,"CSS3/ Animation"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"JavaScript ES6")),l.a.createElement("ul",{className:"col"},l.a.createElement("li",null,"AJAX/JSON"),l.a.createElement("li",null,"PHP"),l.a.createElement("li",null,"WordPress"),l.a.createElement("li",null,"WP Rest API")),l.a.createElement("ul",{className:"col"},l.a.createElement("li",null,"React JS"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"Node JS/ Express"),l.a.createElement("li",null,"jQuery")),l.a.createElement("ul",{className:"col"},l.a.createElement("li",null,"GIT/ GIT Hub"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"Foundation"),l.a.createElement("li",null,"Shopify")),l.a.createElement("ul",{className:"col"},l.a.createElement("li",null,"PhotoShop"),l.a.createElement("li",null,"Illustrator"),l.a.createElement("li",null,"InDesign"),l.a.createElement("li",null,"Typography"))))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{id:"resume-wrap",className:"inner max-960"},l.a.createElement("div",{className:"button-wrap"},l.a.createElement(v,{url:"http://craigbauer.nyc/resume/CraigBauerResume.pdf",label:"Download PDF Resume"})),l.a.createElement(T,null),l.a.createElement("hr",null),l.a.createElement(F,{title:"Summary",body:"Web Developer with over 10 years of experience in website design and implementation, desktop/ mobile web application development, and the completion of hundreds of complex web applications."}),l.a.createElement("br",null),l.a.createElement(W,null),l.a.createElement("br",null),l.a.createElement("h2",null,"Professional Experience"),l.a.createElement("h3",null,"Townsquare Media"),l.a.createElement("p",{className:"job-description group"},l.a.createElement("i",{className:"left"},"Front End Web Developer"),l.a.createElement("i",{className:"right"},"September 2015 \u2013 March 2020")),l.a.createElement("ul",null,l.a.createElement("li",null,"Operated as part of a team of engineers to develop projects using React JS, JavaScript ES 6, Node JS, Express, WordPress and Web Pack in an agile environment for a large web platform consisting of desktop, and mobile that powered 600+ well optimized media web sites."),l.a.createElement("li",null,"Developed a custom Google AMP platform that supports thousands of blog posts across over 600 sites in React JS and Node JS."),l.a.createElement("li",null,"Developed and supported interactive and technically sophisticated HTML 5 rich media ads using JavaScript, AJAX, YouTube API, Facebook Live API, RSS, custom APIs and many other 3rd party APIs."),l.a.createElement("li",null,"Created embed codes and launch files for launching ads with custom options and creatives in Google Ad Manager and Native Apps which were user friendly with great speed and scalability."),l.a.createElement("li",null,"Created interactive Dashboards and internal tools in React JS and PHP for managing and displaying Parse databases and JSON data."),l.a.createElement("li",null,"Developed dozens of WordPress plugins to customize the WordPress dashboard and Rest data.")),l.a.createElement("br",null),l.a.createElement("h3",null,"Averett Free Ginsberg"),l.a.createElement("p",{className:"job-description group"},l.a.createElement("i",{className:"left"},"Interactive Web Developer"),l.a.createElement("i",{className:"right"},"March 2014 \u2013 September 2015")),l.a.createElement("ul",null,l.a.createElement("li",null,"Created web content for a large client base, including web applications, games, and front-end development to ensure a polished and functional final product."),l.a.createElement("li",null,"Coordinated with a team of 4 web developers, delegating tasks to ensure the timely and accurate completion of large projects."),l.a.createElement("li",null,"Promoted mobile OS compatibility by developing web content and applications within mobile applications, ensuring a seamless migration to desktop operating systems."),l.a.createElement("li",null,"Utilized HTML5, jQuery, and CSS3 to design interactive and animated media banners and ads."),l.a.createElement("li",null,"Adjusted website components to ensure optimal performance and functionality, establishing cross-browser compatibility and reducing image sizes and http requests to reduce loading times."),l.a.createElement("li",null,"Develop and manage web content using WordPress, JavaScript, jQuery, jQuery Mobile, PHP, HTML5, CSS3, Bootstrap, Angular JS, Mezzanine, Sass and GIT.")),l.a.createElement("br",null),l.a.createElement("div",{className:"job-description group"},l.a.createElement("h3",{className:"freelance-title"},"Freelance Front-End Web Developer/Designer"),l.a.createElement("i",{className:"right"},"January 2006 \u2013 March 2014")),l.a.createElement("ul",null,l.a.createElement("li",null,"Managed multiple freelance web development projects for many clients. Selected projects include:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Spotzot"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed a WordPress website with back-end access to ensure future development and design changes for company employees."),l.a.createElement("li",null,"Designed a custom WordPress theme based on custom templates, fields, and post types."),l.a.createElement("li",null,"Developed JavaScript and jQuery components to enable interaction with the site content."),l.a.createElement("li",null,"Optimized company search engine rankings, increasing visibility and company initiatives."))),l.a.createElement("li",null,l.a.createElement("b",null,"Aaron Max Designs"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed business websites on platforms like WordPress with integrated graphics, utilizing the Adobe Creative Suite and web standards to provide striking graphics and functionality."),l.a.createElement("li",null,"Utilized Adobe Illustrator to vector hand-drawn logos and graphics."),l.a.createElement("li",null,"Provided ongoing support and maintenance for the websites, troubleshooting any issues to ensure optimal operational performance."))),l.a.createElement("li",null,l.a.createElement("b",null,"Others:")," Coney Island Saucery (2019), Finesse (2015), Hot Sauce Willie\u2019s (2013 \u2013 2015), Chelsea Guitars (2014), Takashi NYC (2013), Mud Village (2012), Mountain Cat Guitars(2011)")))),l.a.createElement("h2",null,"Education"),l.a.createElement("h3",null,"Coursework in Communications Design and Web Development, 2011 \u2013 2013"),l.a.createElement("ul",null,l.a.createElement("li",null,"New York City College of Technology",l.a.createElement("ul",null,l.a.createElement("li",null,"Relevant Coursework: Computer Science, Responsive Web Design, Communication Design etc.")))),l.a.createElement("h3",null,"Associate of Applied Science in Web Development, 2011"),l.a.createElement("ul",null,l.a.createElement("li",null,"Kingsborough Community College")))}}]),t}(n.Component),J=a(16),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(J.a)({},n,l))},a.submitForm=function(e){e.preventDefault();var t=a.validateEmail(a.state.email);if(console.log("Valid Email: ",t),console.log(a.state.name,a.state.email,a.state.message),!a.state.updating)if(a.setState({updating:!0}),a.state.name&&t&&a.state.message)console.log("VALID!",t),t&&console.log("email is not valid"),a.setState({showLoader:!0}),E.a.post("http://localhost:9000/sendFormAPI",{name:a.state.name,email:a.state.email,message:a.state.message,updating:!0}).then(function(e){a.setState({resMessage:e.data,showForm:!1,showMessage:!0,updating:null,showLoader:null})});else{var n="The following issues were found with your submission:";n+="\r\n \r\n",a.state.name||(n+="- Missing Name",n+="\r\n"),t||(n+="- Missing or Invalid Email",n+="\r\n"),a.state.message||(n+="- Missing Message"),n+="\r\n \r\n",n+="Please check your fields and try again.",n+="\r\n",alert(n),a.setState({updating:null})}},a.handleFormReset=function(){console.log("reset form"),a.setState({name:null,email:null,message:null,showForm:!0,showMessage:!1})},a.state={showForm:!0,showMessage:!1,updating:null,showLoader:null,showSuccess:null,showError:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},{key:"render",value:function(){var e=this.props.settings,t="mailto:"+e.main_email;return l.a.createElement("div",{id:"contact-wrap",className:"inner"},l.a.createElement("h1",null,"Contact Me"),l.a.createElement("div",{className:"profile-card group"},l.a.createElement("div",{className:"contact-pic"}),l.a.createElement("div",null,l.a.createElement("h2",null,"Craig Bauer"),l.a.createElement("p",null,l.a.createElement("b",null,"JavaScript Developer")),l.a.createElement("p",null,"(347) 742-2411"),l.a.createElement("p",null,l.a.createElement("a",{href:t},e.main_email)),l.a.createElement(j,{github:e.gitHub_url,linkedin:e.linkedin_url,theme:"dark",height:"24px"}))),this.state.showForm&&l.a.createElement(n.Fragment,null,l.a.createElement("p",null,"or fill out the form below:"),l.a.createElement("form",{id:"contact-form"},l.a.createElement("i",null,"All fields are required"),l.a.createElement("input",{onChange:this.handleInputChange,id:"name",name:"name",type:"text",placeholder:"Your name*",required:!0}),l.a.createElement("input",{onChange:this.handleInputChange,id:"email",name:"email",type:"email",placeholder:"Your email*",required:!0}),l.a.createElement("textarea",{onChange:this.handleInputChange,id:"message",name:"message",placeholder:"Enter your message here*",rows:"3",required:!0}),l.a.createElement("div",{className:"group"},l.a.createElement("button",{className:"left",type:"submit",onClick:this.submitForm},"Submit Your Message"),this.state.showLoader&&l.a.createElement("div",{className:"loader-wrap left"},l.a.createElement("div",{className:"loader"}))))),this.state.showMessage&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"success-message success"},this.state.resMessage),l.a.createElement("div",{onClick:this.handleFormReset},l.a.createElement(v,{label:"Send Another Message"}))))}}]),t}(n.Component),R=a(24),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).submitUpdate=function(e){e.preventDefault(),a.state.updating||(a.setState({updating:!0,showLoader:!0,showSuccess:null,showError:null}),E.a.put("http://localhost:9000/profileSettings",Object(R.a)({},a.state)).then(function(e){console.log(e.data),a.setState({showLoader:null,showSuccess:!0,updating:null})},function(e){console.log(e),a.setState({showError:!0,updating:null})}))},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(J.a)({},n,l))},a.state={updating:null,showLoader:null,showSuccess:null,showError:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.settings;this.setState(Object(R.a)({},e))}},{key:"render",value:function(){var e=this.state,t=e.main_email,a=e.bio,n=e.bio_intro,r=e.bio_pic,c=e.bio_tagline,i=e.gitHub_url,o=e.linkedin_url;return l.a.createElement("div",{id:"add-new-web-example",className:"add-new-web-example inner"},l.a.createElement("h2",null,"Update Settings"),l.a.createElement("form",null,l.a.createElement("label",null,"Main Email"),l.a.createElement("input",{onChange:this.handleInputChange,name:"main_email",placeholder:"Main Email",value:t||""}),l.a.createElement("label",null,"Bio Intro"),l.a.createElement("input",{onChange:this.handleInputChange,name:"bio_intro",placeholder:"Bio Intro",value:n||""}),l.a.createElement("label",null,"Bio Tagline"),l.a.createElement("input",{onChange:this.handleInputChange,name:"bio_tagline",placeholder:"Bio Tagline",value:c||""}),l.a.createElement("label",null,"Bio Image"),l.a.createElement("input",{onChange:this.handleInputChange,name:"bio_pic",placeholder:"Bio Pic",value:r||""}),l.a.createElement("label",null,"Github URL"),l.a.createElement("input",{onChange:this.handleInputChange,name:"gitHub_url",placeholder:"GitHUB URL",value:i||""}),l.a.createElement("label",null,"Bio Image"),l.a.createElement("input",{onChange:this.handleInputChange,name:"linkedin_url",placeholder:"LinkenIn URL",value:o||""}),l.a.createElement("label",null,"Bio"),l.a.createElement("textarea",{onChange:this.handleInputChange,name:"bio",placeholder:"Bio",value:a||"",required:!0}),this.state.showSuccess&&l.a.createElement("div",{className:"success"},"Updated Successfully"),this.state.showError&&l.a.createElement("div",{classname:"error"},"There was an error plaease try again"),l.a.createElement("div",{className:"group"},l.a.createElement("button",{className:"left clearfix",onClick:this.submitUpdate},"Update Settings"),this.state.showLoader&&l.a.createElement("div",{className:"loader-wrap left"},l.a.createElement("div",{className:"loader"})))))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.settings;return l.a.createElement("div",{id:"dashboard-page",className:"dashboard-page inner"},l.a.createElement("button",{style:{float:"right"},onClick:function(){return k.auth().signOut()}},"Sign Out"),l.a.createElement("h1",null,"Settings"),l.a.createElement(U,{settings:e}))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={codeExamples:null,webExamples:null,settings:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"callSiteOptions",value:function(){var e=this;E.a.get("http://localhost:9000/profileSettings").then(function(t){var a=t.data;e.setState({settings:a})})}},{key:"callMyWorkAPI",value:function(){var e=this;E.a.get("http://localhost:9000/myworkAPI").then(function(t){var a=t.data;e.setState({webExamples:a})})}},{key:"callCodeAPI",value:function(){var e=this;E.a.get("http://localhost:9000/codeExamplesAPI").then(function(t){var a=t.data;e.setState({codeExamples:a})})}},{key:"componentDidMount",value:function(){this.callMyWorkAPI(),this.callCodeAPI(),this.callSiteOptions()}},{key:"render",value:function(){var e=this.state,t=e.codeExamples,a=e.webExamples,n=e.settings;return t&&a&&n?l.a.createElement("div",{className:"App"},l.a.createElement(C,null,l.a.createElement(d.a,null,l.a.createElement(D,null),l.a.createElement("p",null,this.state.testAPI),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"".concat("/build","/")},l.a.createElement(L,{settings:n[0]})),l.a.createElement(p.b,{path:"".concat("/build","/resume")},l.a.createElement(B,null)),l.a.createElement(p.b,{path:"".concat("/build","/websites")},l.a.createElement("div",{className:"page-title"},l.a.createElement("h1",null,"Web Sites")),l.a.createElement(g,{data:this.state.webExamples})),l.a.createElement(p.b,{path:"".concat("/build","/code")},l.a.createElement("div",{className:"page-title"},l.a.createElement("h1",null,"Code Examples")),l.a.createElement(b,{data:this.state.codeExamples})),l.a.createElement(p.b,{path:"".concat("/build","/contact")},l.a.createElement(H,{settings:n[0]})),l.a.createElement(_,{exact:!0,path:"/dashboard",settings:n[0],component:z}),l.a.createElement(p.b,{exact:!0,path:"/login"},l.a.createElement(x,null)),t.map(function(e,a){if("publish"===e.status){var n="/"+e.slug;return l.a.createElement(p.b,{key:a,path:"".concat("/build").concat(n)},l.a.createElement(f,{single:e,type:"code",index:a,data:t}))}return!1}),a.map(function(e,t){if("publish"===e.status){var n="/"+e.slug;return l.a.createElement(p.b,{key:t,path:"".concat("/build").concat(n)},l.a.createElement(f,{single:e,type:"web",index:t,data:a}))}return!1}),l.a.createElement(p.b,null,l.a.createElement("h1",null,"404 Page Not Found"))),l.a.createElement(y,{settings:n[0]})))):l.a.createElement("div",{className:"loading-screen"},l.a.createElement("div",{className:"loader-wrap center"},l.a.createElement("div",{className:"loader"}),l.a.createElement("p",null,"Just a second")))}}]),t}(n.Component);c.a.render(l.a.createElement(G,null),document.getElementById("dashboard"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b15deb33.chunk.js.map