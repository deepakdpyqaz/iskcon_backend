(function(t){function a(a){for(var r,n,s=a[0],l=a[1],d=a[2],u=0,f=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(a);while(f.length)f.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(r=!1)}r&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var r={},o={app:0},i=[];function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)n.d(e,r,function(a){return t[a]}.bind(null,r));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var c=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0893":function(t,a,e){"use strict";e("3163")},1158:function(t,a,e){"use strict";e("3e52")},"2e11":function(t,a,e){t.exports=e.p+"static/img/logo.6104ab75.webp"},3163:function(t,a,e){},"31b9":function(t,a,e){"use strict";e("6ef2")},"3e52":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("0cdd");var r=e("2b0e"),o=e("5f5b");e("ab8b"),e("2dd8");r["default"].use(o["a"]);var i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"fadded"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("img",{attrs:{src:e("2e11"),width:"80px",id:"logo",alt:"logo"}})]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[r("h4",[t._v("Home")])]),r("b-nav-item",{attrs:{to:"/about"}},[r("h4",[t._v("About")])]),r("b-nav-item",{attrs:{href:"#"}},[r("h4",[t._v("Contact")])]),r("b-nav-item",{attrs:{href:"#"}},[r("h4",[t._v("Donate")])]),r("b-nav-item",{attrs:{href:"#"}},[r("h4",[t._v("FAQ's")])]),t.authenticated?r("b-nav-item",{attrs:{to:t.myaccount}},[r("h4",[t._v("My account")])]):t._e(),r("h4",[r("b-nav-item-dropdown",{attrs:{text:"User",right:""}},[t.authenticated?r("b-dropdown-item",{on:{click:t.logout}},[t._v("Logout")]):r("div",[r("b-dropdown-item",{on:{click:function(a){t.link="candidate",t.login_visibility=!t.login_visibility}}},[t._v("Candidate login")]),r("b-dropdown-item",{on:{click:function(a){t.link="manager",t.login_visibility=!t.login_visibility}}},[t._v("Admin login")])],1)],1)],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-md-2",attrs:{size:"md",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-md-0",attrs:{size:"md",variant:"primary",type:"submit"}},[t._v("Search")])],1)],1)],1)],1)],1),r("transition",{attrs:{name:"fade"}},[r("Login",{directives:[{name:"show",rawName:"v-show",value:t.login_visibility,expression:"login_visibility"}],attrs:{link:t.link},on:{loggedin:t.logged_in,login_cancel:function(a){t.login_visibility=!t.login_visibility}}})],1),r("router-view")],1)},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"form_container"},[e("h3",[t._v("Welcome")]),e("b-form",{on:{submit:t.login}},[e("b-form-group",{attrs:{id:"username-group",label:"Username:","label-for":"username"}},[e("b-form-input",{attrs:{id:"username",placeholder:"Enter username(phone)",required:""},model:{value:t.formdata.username,callback:function(a){t.$set(t.formdata,"username",a)},expression:"formdata.username"}})],1),e("b-form-group",{attrs:{id:"password-group",label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Enter password",required:""},model:{value:t.formdata.password,callback:function(a){t.$set(t.formdata,"password",a)},expression:"formdata.password"}})],1),e("b-form-group",{staticClass:"button"},[e("b-button",{staticClass:"mr-3 px-3",attrs:{pill:"",variant:"secondary"},on:{click:function(a){return t.$emit("login_cancel")}}},[t._v("Cancel")]),e("b-button",{staticClass:"ml-3 px-3",attrs:{pill:"",variant:"success",type:"submit"},on:{click:function(a){return t.$emit("login_cancel")}}},[t._v("Login")])],1)],1)],1)])},l=[],d=(e("9911"),e("bc3a")),c=e.n(d),u=e("2106"),f=e.n(u),m=e("2b27"),p=e.n(m);r["default"].use(p.a),r["default"].use(f.a,c.a);var b={name:"Login",data:function(){return{BASE_URL:"/",formdata:{username:null,password:null}}},props:["link"],methods:{login:function(t){t.preventDefault();var a=this;c.a.post(this.BASE_URL+this.$props.link+"/login",{phone:this.formdata.username,password:this.formdata.password},{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((function(t){if(t.data.Error)window.alert(t.data.Error);else{var e=t.data.authtoken;a.$cookies.set("authtoken",e,2592e3),a.$emit("loggedin")}}))}}},v=b,h=(e("0893"),e("2877")),y=Object(h["a"])(v,s,l,!1,null,"74055994",null),g=y.exports;r["default"].use(p.a),r["default"].use(f.a,c.a);var _={name:"App",components:{Login:g},data:function(){return{BASE_URL:"/",myaccount:"",authenticated:!1,login_visibility:!1,link:"candidate"}},methods:{logout:function(){if(this.$cookies.isKey("authtoken")){this.authenticated=!1,this.myaccount="";var t=this.$cookies.get("authtoken");this.$cookies.remove("authtoken");var a=this;c.a.get(this.BASE_URL+"logout",{params:{authtoken:t}}).then((function(t){t.data.Error&&a.$router.push("/"),a.$router.push("/")}))}},logged_in:function(){if(this.$cookies.isKey("authtoken")){var t=this.$cookies.get("authtoken"),a=this;c.a.get(this.BASE_URL+"checksession",{params:{authtoken:t}}).then((function(t){t.data.Error?(a.myaccount="",a.authenticated=!1):(a.authenticated=!0,"candidate"==t.data.user&&(a.myaccount="/candidate",a.$router.push("/candidate")))}))}}},mounted:function(){if(this.$cookies.isKey("authtoken")){var t=this.$cookies.get("authtoken"),a=this;c.a.get(this.BASE_URL+"checksession",{params:{authtoken:t}}).then((function(t){t.data.Error?(a.myaccount="",a.authenticated=!1):(a.authenticated=!0,"candidate"==t.data.user&&(a.myaccount="/candidate",a.$router.push("/candidate")))}))}}},k=_,w=(e("bbe4"),Object(h["a"])(k,i,n,!1,null,"373714c0",null)),x=w.exports,$=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home"}},[e("b-container",{attrs:{id:"main",fluid:""}},[e("b-row",{staticClass:"text-container",attrs:{"align-v":"stretch"}},[e("b-col",{staticClass:"text",attrs:{md:"6"}},[e("div",{staticClass:"heading"},[t._v(" Spirituality for modern age")]),e("div",{staticClass:"info"},[e("b",[t._v(" Starts from")]),t._v(" 27 Feb, 2021 "),e("br"),t._v(" Every Saturday from 7:30 PM to 8:45 PM "),e("br"),t._v(" 7 days seminar by HG Amogh Lila Prabhu ")])]),e("transition",{attrs:{appear:"",name:"slide-fade"}},[e("b-col",{staticClass:"actions",attrs:{md:"6"}},[e("router-link",{attrs:{to:"/register"}},[e("div",{staticClass:"register"},[t._v(" Register ")])]),e("div",{staticClass:"aboutus"},[t._v("Know More")])],1)],1)],1)],1)],1)},S=[],E={name:"Home"},A=E,L=(e("5cc6"),Object(h["a"])(A,C,S,!1,null,"5d9c78d3",null)),R=L.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"about"}},[e("transition",{attrs:{name:"slide-fade",appear:""}},[e("Aboutspeaker")],1)],1)},M=[],U=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("b-container",{attrs:{fluid:""}},[r("b-row",{attrs:{id:"aboutspeaker","align-v":"center"}},[r("b-col",{staticClass:"img text-center my-3",attrs:{md:"4"}},[r("img",{attrs:{src:e("ad2f"),alt:""}})]),r("b-col",{staticClass:"text my-3",attrs:{md:"6"}},[r("div",{staticClass:"text-container"},[r("h1",[t._v("About Speaker")]),r("div",{staticClass:"points"},[r("h3",[t._v("Speaker: HG Amogh Lila Das")]),r("ul",[r("li",[t._v("Motivational Speaker")]),r("li",[t._v("Spiritual Mentor")]),r("li",[t._v("Social reformer")]),r("li",[t._v("Guest faculty in IIMs & IITs")]),r("li",[t._v("Guest faculty at BadaBusiness.com")])])])]),r("router-link",{attrs:{to:"/register"}},[r("div",{staticClass:"register"},[t._v(" Register")])])],1)],1)],1)],1)},O=[],j={name:"Aboutspeaker"},P=j,D=(e("e6a8"),Object(h["a"])(P,U,O,!1,null,"2e298f56",null)),q=D.exports,F={name:"About",components:{Aboutspeaker:q},data:function(){return{show:!0}}},T=F,G=(e("e76e"),Object(h["a"])(T,B,M,!1,null,null,null)),H=G.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"register"}},[e("div",{staticClass:"form_container"},[t._m(0),e("h5",[t._v("Every Saturday from 7:30 PM to 8:45 PM")]),e("div",[e("b-form",{on:{submit:t.register}},[e("b-form-group",{attrs:{id:"name-group",label:"Name:","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",placeholder:"Enter your name..",required:"",readonly:t.verified},model:{value:t.formdata.name,callback:function(a){t.$set(t.formdata,"name",a)},expression:"formdata.name"}})],1),e("b-form-group",{attrs:{label:"Gender:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{readonly:t.verified,"aria-describedby":r,name:"Gender",value:"M"},model:{value:t.formdata.gender,callback:function(a){t.$set(t.formdata,"gender",a)},expression:"formdata.gender"}},[t._v("Male")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{readonly:t.verified,"aria-describedby":r,name:"Gender",value:"F"},model:{value:t.formdata.gender,callback:function(a){t.$set(t.formdata,"gender",a)},expression:"formdata.gender"}},[t._v("Female")])]}}])}),e("b-form-group",{attrs:{id:"email-group",label:"Your Email:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter your email..",required:"",readonly:t.verified},model:{value:t.formdata.email,callback:function(a){t.$set(t.formdata,"email",a)},expression:"formdata.email"}})],1),e("b-form-group",{attrs:{id:"phone-group",label:"Phone:",type:"tel","label-for":"phone"}},[e("b-form-input",{attrs:{id:"phone",placeholder:"Contact(whatsapp)..",required:"",readonly:t.verified},model:{value:t.formdata.phone,callback:function(a){t.$set(t.formdata,"phone",a)},expression:"formdata.phone"}})],1),e("b-form-group",[e("label",{attrs:{for:"dob"}},[t._v("Date of birth:")]),e("b-form-datepicker",{staticClass:"mb-2",attrs:{readonly:t.verified,id:"dob"},model:{value:t.formdata.dob,callback:function(a){t.$set(t.formdata,"dob",a)},expression:"formdata.dob"}})],1),e("b-form-group",{attrs:{label:"Occupation:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{readonly:t.verified,"aria-describedby":r,name:"occupation",value:"S"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Student")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{readonly:t.verified,"aria-describedby":r,name:"occupation",value:"E"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Employee")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{readonly:t.verified,"aria-describedby":r,name:"occupation",value:"B"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Business")])]}}])}),e("b-form-group",{attrs:{label:"Maritial Status:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{readonly:t.verified,"aria-describedby":r,name:"married",value:"M"},model:{value:t.formdata.married,callback:function(a){t.$set(t.formdata,"married",a)},expression:"formdata.married"}},[t._v("Married")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{readonly:t.verified,"aria-describedby":r,name:"married",value:"U"},model:{value:t.formdata.married,callback:function(a){t.$set(t.formdata,"married",a)},expression:"formdata.married"}},[t._v("Unmarried")])]}}])}),e("b-form-group",{attrs:{label:"Are you already connected to Iskcon anywhere:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{readonly:t.verified,"aria-describedby":r,name:"connected",value:"Y"},model:{value:t.formdata.connected,callback:function(a){t.$set(t.formdata,"connected",a)},expression:"formdata.connected"}},[t._v("Yes")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{readonly:t.verified,"aria-describedby":r,name:"connected",value:"N"},model:{value:t.formdata.connected,callback:function(a){t.$set(t.formdata,"connected",a)},expression:"formdata.connected"}},[t._v("No")])]}}])}),e("b-form-group",{attrs:{id:"country-group",label:"Country:","label-for":"country"}},[e("b-form-input",{attrs:{id:"country",placeholder:"Country..",required:"",readonly:t.verified},model:{value:t.formdata.country,callback:function(a){t.$set(t.formdata,"country",a)},expression:"formdata.country"}})],1),e("b-form-group",{attrs:{id:"city-group",label:"City:","label-for":"city"}},[e("b-form-input",{attrs:{id:"city",placeholder:"City..",required:"",readonly:t.verified},model:{value:t.formdata.city,callback:function(a){t.$set(t.formdata,"city",a)},expression:"formdata.city"}})],1),e("b-form-group",{attrs:{label:"\nHow you came to know about these sessions? (FB, YouTube, WhatsApp or other.)*"}},[e("b-form-input",{attrs:{list:"recommend",readonly:t.verified,required:""},model:{value:t.formdata.source,callback:function(a){t.$set(t.formdata,"source",a)},expression:"formdata.source"}}),e("datalist",{attrs:{id:"recommend"}},[e("option",[t._v("Youtube")]),e("option",[t._v("whatsapp")]),e("option",[t._v("Facebook")]),e("option",[t._v("Instagram")]),e("option",[t._v("Twitter")]),e("option",[t._v("Friends")])])],1),e("b-form-group",{attrs:{label:"Any other specific information or remark:\n"}},[e("b-form-textarea",{attrs:{id:"anyinfo",placeholder:"Enter something...",rows:"3","max-rows":"6",readonly:t.verified},model:{value:t.formdata.info,callback:function(a){t.$set(t.formdata,"info",a)},expression:"formdata.info"}})],1),t.verified?e("b-form-group",{attrs:{id:"otp-group",label:"OTP:","label-for":"otp"}},[e("b-form-input",{attrs:{id:"otp",placeholder:"Enter otp sent at your mail.."},model:{value:t.formdata.otp,callback:function(a){t.$set(t.formdata,"otp",a)},expression:"formdata.otp"}})],1):t._e(),e("b-button",{attrs:{type:"submit",pill:"",block:"",variant:"success"}},[t._v("Register")])],1)],1)])])},N=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v("Register for 7 days "),e("b",{staticClass:"text-success"},[t._v("FREE")]),t._v(" online seminar")])}];r["default"].use(p.a),r["default"].use(f.a,c.a);var Y={name:"Register",data:function(){return{verified:!1,BASE_URL:"/",formdata:{name:null,gender:null,email:null,phone:null,dob:null,occupation:null,married:null,connected:null,country:null,city:null,source:null,info:null,otp:null,authtoken:null}}},methods:{register:function(t){if(t.preventDefault(),this.verified){var a=this;c.a.post(this.BASE_URL+"candidate/register",this.formdata,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((function(t){t.data.Error?window.alert(t.data.Error):(window.alert("Registration successfull"),a.$router.push("/"))}))}else{var e=this;c.a.post(this.BASE_URL+"candidate/verify",this.formdata,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((function(t){t.data.Error?window.alert(t.data.Error):(e.verified=!0,e.formdata.authtoken=t.data.authtoken)}))}}}},K=Y,z=(e("b38d"),Object(h["a"])(K,I,N,!1,null,"6a10b923",null)),V=z.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("b-row",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"sidebar_btn"},[e("b-col",[e("span",{staticClass:"sidebar_btn_text"},[t._v("Click to expand")]),e("svg",{staticClass:"bi bi-caret-right-fill sidebar_btn_icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])])],1),e("b-sidebar",{attrs:{id:"sidebar-1",title:"My actions","sidebar-class":"submenu-title"}},[e("div",{staticClass:"px-3 py-2 my-3"},[e("div",[e("b-nav",{staticClass:"w-100 submenu",attrs:{vertical:"",variant:"dark"}},[e("b-nav-item",{staticClass:"submenu-link border-top border-dark",attrs:{to:"/candidate/profile",active:""}},[t._v("Profile")]),e("b-nav-item",{staticClass:"submenu-link",attrs:{to:"/candidate"}},[t._v("Lectures")]),e("b-nav-item",{staticClass:"submenu-link"},[t._v("Livestream")]),e("b-nav-item",{staticClass:"submenu-link"},[t._v("Quiz")])],1)],1)])])],1),t.authenticated?e("router-view"):t._e()],1)},W=[];r["default"].use(p.a),r["default"].use(f.a,c.a);var J={name:"Candidate",data:function(){return{authenticated:!1,BASE_URL:"/"}},mounted:function(){var t=this;if(this.$cookies.isKey("authtoken")){var a=this.$cookies.get("authtoken"),e=this;c.a.get(this.BASE_URL+"checksession",{params:{authtoken:a}}).then((function(a){a.data.Error?t.$router.push("/"):("candidate"!=a.data.user&&t.$router.push("/"),e.authenticated=!0)}))}}},Q=J,Z=(e("1158"),Object(h["a"])(Q,X,W,!1,null,null,null)),tt=Z.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{on:{contextmenu:function(a){return t.prevent(a)}}},[e("transition",{attrs:{appear:"",name:"fade"}},[e("b-container",[e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticClass:"video_container",attrs:{"align-h":"center"}},[e("video",{attrs:{src:t.main_video,preload:"metadata",id:"main_video",controls:"",controlslist:"nodownload"}})])],1)],1)],1),e("b-container",{staticClass:"prev_video_container",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("h2",{staticClass:"main_title"},[t._v("Previous Videos")])])],1),t._l(t.videos,(function(a){return e("b-row",{key:a.title,staticClass:"prev_video_card_container border-bottom border-dark my-2"},[e("b-col",{attrs:{md:"12"}},[e("h4",{staticClass:"text-center border-secondary py-2",staticStyle:{"text-decoration":"underline"}},[t._v(t._s(a.title))])]),t._l(a.videos,(function(a){return e("b-col",{key:a.title,staticClass:"prev_video_card",attrs:{md:"3","align-h":"center"},on:{click:function(a){return t.play_vid(a)}}},[e("video",{staticClass:"prev_video",attrs:{src:t._f("genUrl")(a.video),preload:"metadata"}}),e("div",{staticClass:"prev_video_desc"},[e("h4",[t._v(t._s(a.title))])])])}))],2)}))],2)],1)},et=[];e("a15b"),e("ac1f"),e("1276");r["default"].use(p.a),r["default"].use(f.a,c.a);var rt={name:"Lecture",filters:{genUrl:function(t){var a=t.split("/");return a.shift(),"/"+a.join("/")}},data:function(){return{BASE_URL:"/",main_video:"",videos:[]}},methods:{play_vid:function(t){this.main_video=t.target.getAttribute("src")},prevent:function(t){return t.preventDefault(),!1}},mounted:function(){var t=this;c.a.get(this.BASE_URL+"candidate/lectures",{params:{authtoken:this.$cookies.get("authtoken")}}).then((function(a){if(a.data.Error)window.alert(a.data.Error),console.log(a.data),t.$router.push("/");else if(t.videos=a.data.data,0!=a.data.data.length){var e=a.data.data[0].videos[0].video;e=e.substring(1),t.main_video=t.BASE_URL+e}}))}},ot=rt,it=(e("dd2c"),Object(h["a"])(ot,at,et,!1,null,"535e9878",null)),nt=it.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-3",attrs:{id:"profile"}},[e("div",{staticClass:"form_container"},[e("h2",{staticClass:"text-center profile-title"},[t._v("Welcome "),e("b",[t._v(" "+t._s(t.formdata.name)+" ")])]),e("h3",{staticClass:"text-center profile-title"},[t._v("Level: "),e("b",[t._v(t._s(t.formdata.level))])]),e("b-container",{staticClass:"my-3 py-3"},[e("b-form",{on:{submit:t.register,reset:t.reset}},[e("b-form-group",{attrs:{id:"name-group",label:"Name:","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",placeholder:"Enter your name..",required:""},model:{value:t.formdata.name,callback:function(a){t.$set(t.formdata,"name",a)},expression:"formdata.name"}})],1),e("b-form-group",{attrs:{id:"password-group",label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",placeholder:"Enter your password..",required:""},model:{value:t.formdata.password,callback:function(a){t.$set(t.formdata,"password",a)},expression:"formdata.password"}})],1),e("b-form-group",{attrs:{label:"Gender:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{"aria-describedby":r,name:"Gender",value:"M"},model:{value:t.formdata.gender,callback:function(a){t.$set(t.formdata,"gender",a)},expression:"formdata.gender"}},[t._v("Male")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{"aria-describedby":r,name:"Gender",value:"F"},model:{value:t.formdata.gender,callback:function(a){t.$set(t.formdata,"gender",a)},expression:"formdata.gender"}},[t._v("Female")])]}}])}),e("b-form-group",{attrs:{id:"email-group",label:"Your Email:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter your email..",required:""},model:{value:t.formdata.email,callback:function(a){t.$set(t.formdata,"email",a)},expression:"formdata.email"}})],1),e("b-form-group",{attrs:{id:"phone-group",label:"Phone:",type:"tel","label-for":"phone"}},[e("b-form-input",{attrs:{id:"phone",placeholder:"Contact(whatsapp)..",required:""},model:{value:t.formdata.phone,callback:function(a){t.$set(t.formdata,"phone",a)},expression:"formdata.phone"}})],1),e("b-form-group",[e("label",{attrs:{for:"dob"}},[t._v("Date of birth:")]),e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"dob"},model:{value:t.formdata.dob,callback:function(a){t.$set(t.formdata,"dob",a)},expression:"formdata.dob"}})],1),e("b-form-group",{attrs:{label:"Occupation:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{"aria-describedby":r,name:"occupation",value:"S"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Student")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{"aria-describedby":r,name:"occupation",value:"E"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Employee")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{"aria-describedby":r,name:"occupation",value:"B"},model:{value:t.formdata.occupation,callback:function(a){t.$set(t.formdata,"occupation",a)},expression:"formdata.occupation"}},[t._v("Business")])]}}])}),e("b-form-group",{attrs:{label:"Maritial Status:"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.ariaDescribedby;return[e("b-form-radio",{staticStyle:{float:"left"},attrs:{"aria-describedby":r,name:"married",value:"M"},model:{value:t.formdata.married,callback:function(a){t.$set(t.formdata,"married",a)},expression:"formdata.married"}},[t._v("Married")]),e("b-form-radio",{staticStyle:{float:"left","margin-left":"30px"},attrs:{"aria-describedby":r,name:"married",value:"U"},model:{value:t.formdata.married,callback:function(a){t.$set(t.formdata,"married",a)},expression:"formdata.married"}},[t._v("Unmarried")])]}}])}),e("b-form-group",{attrs:{id:"country-group",label:"Country:","label-for":"country"}},[e("b-form-input",{attrs:{id:"country",placeholder:"Country..",required:""},model:{value:t.formdata.country,callback:function(a){t.$set(t.formdata,"country",a)},expression:"formdata.country"}})],1),e("b-form-group",{attrs:{id:"city-group",label:"City:","label-for":"city"}},[e("b-form-input",{attrs:{id:"city",placeholder:"City..",required:""},model:{value:t.formdata.city,callback:function(a){t.$set(t.formdata,"city",a)},expression:"formdata.city"}})],1),e("b-row",[e("b-col",[e("b-button",{attrs:{type:"reset",pill:"",block:"",variant:"secondary"}},[t._v("Cancel")])],1),e("b-col",[e("b-button",{attrs:{type:"submit",pill:"",block:"",variant:"success"}},[t._v("Save")])],1)],1)],1)],1)],1)])},lt=[];r["default"].use(p.a),r["default"].use(f.a,c.a);var dt={name:"Profile",data:function(){return{BASE_URL:"/",formdata:{name:null,password:null,gender:null,email:null,phone:null,dob:null,occupation:null,married:null,country:null,city:null,level:null}}},methods:{register:function(t){t.preventDefault();var a=this,e=this.formdata;e["authtoken"]=this.$cookies.get("authtoken"),c.a.post(this.BASE_URL+"candidate/profile",e,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((function(t){t.data.Error?(window.alert(t.data.Error),a.$router.push("/")):(window.alert("updated sucessfully"),a.formdata=t.data.candidate)}))},reset:function(t){t.preventDefault(),this.$router.push("/candidate")}},mounted:function(){var t=this;c.a.get(this.BASE_URL+"candidate/profile",{params:{authtoken:this.$cookies.get("authtoken")}}).then((function(a){a.data.Error&&t.$router.push("/"),t.formdata=a.data.candidate}))}},ct=dt,ut=(e("31b9"),Object(h["a"])(ct,st,lt,!1,null,"10dffe58",null)),ft=ut.exports;r["default"].use($["a"]);var mt=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:H},{path:"/register",name:"Register",component:V},{path:"/candidate",name:"Candidate",component:tt,children:[{path:"/",name:"Lecture",component:nt},{path:"profile",name:"candidate_profile",component:ft}]}],pt=new $["a"]({mode:"history",base:"/",routes:mt}),bt=pt;r["default"].config.productionTip=!1,r["default"].use(p.a),r["default"].use(f.a,c.a),new r["default"]({router:bt,axios:c.a,VueAxios:f.a,VueCookies:p.a,render:function(t){return t(x)}}).$mount("#app")},"5cc6":function(t,a,e){"use strict";e("fa7b")},"6ef2":function(t,a,e){},"797c":function(t,a,e){},"7ab4":function(t,a,e){},"91aa":function(t,a,e){},ad2f:function(t,a,e){t.exports=e.p+"static/img/speaker.522407c8.jpg"},b38d:function(t,a,e){"use strict";e("797c")},bbe4:function(t,a,e){"use strict";e("7ab4")},d1a5:function(t,a,e){},dd2c:function(t,a,e){"use strict";e("f8f1")},e6a8:function(t,a,e){"use strict";e("d1a5")},e76e:function(t,a,e){"use strict";e("91aa")},f8f1:function(t,a,e){},fa7b:function(t,a,e){}});
//# sourceMappingURL=app.a2d53f28.js.map