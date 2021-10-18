(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=(n(0),n(102));const a={title:"Introduction",slug:"/"},o={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is Neutralinojs?",source:"@site/docs/getting-started/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/getting-started/introduction.md",version:"current",sidebar:"docs",next:{title:"Your First Neutralinojs App",permalink:"/docs/getting-started/your-first-neutralinojs-app"}},l=[{value:"What is Neutralinojs?",id:"what-is-neutralinojs",children:[]},{value:"Why Neutralinojs?",id:"why-neutralinojs",children:[]},{value:"Highlighted features",id:"highlighted-features",children:[]},{value:"Supported platforms and CPU architectures",id:"supported-platforms-and-cpu-architectures",children:[]}],s={toc:l};function u({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-neutralinojs"},"What is Neutralinojs?"),Object(i.b)("p",null,"Neutralinojs is a lightweight and portable application development framework.\nIt lets you develop cross-platform applications using JavaScript, HTML and CSS. Neutralinojs applications\nwill work on Linux, Windows, macOS, and Web."),Object(i.b)("h2",{id:"why-neutralinojs"},"Why Neutralinojs?"),Object(i.b)("p",null,"In Electron and NWjs, you have to install Node.js and hundreds of dependency libraries. Embedded Chromium and Node\nmake simple apps bloaty. Neutralinojs offers a lightweight and portable SDK which is an alternative for Electron and\nNW.js. Neutralinojs doesn't bundle Chromium and uses the existing web browser library in the operating\nsystem (Eg: gtk-webkit2 on Linux). Neutralinojs implements a WebSocket connection for native operations and embeds a\nstatic web server to serve the web content. Also, it offers a built-in\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralino.js"},"JavaScript client library")," for developers."),Object(i.b)("p",null,"See comparisons: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Elanis/web-to-desktop-framework-comparison"},"Neutralinojs vs Electron vs NW.JS vs Tauri vs NodeGui vs Flutter vs .Net MAUI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/evaluation"},"Neutralinojs vs Electron vs NW.js (2018)"))),Object(i.b)("h2",{id:"highlighted-features"},"Highlighted features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fully portable development kit."),Object(i.b)("li",{parentName:"ul"},"No compilation required for developers."),Object(i.b)("li",{parentName:"ul"},"No additional dependencies required for users."),Object(i.b)("li",{parentName:"ul"},"Native functions support: Read files, run system commands, etc."),Object(i.b)("li",{parentName:"ul"},"Less resource intensive compared to chromium-node-based frameworks."),Object(i.b)("li",{parentName:"ul"},"Cross-platform: Neutralinojs apps work on Linux, Windows, macOS, and Web.")),Object(i.b)("h2",{id:"supported-platforms-and-cpu-architectures"},"Supported platforms and CPU architectures"),Object(i.b)("p",null,"neu CLI provides you pre-built binaries for the following platforms and CPU architectures. We will\nadd binaries for missing CPU architectures soon. However, you can build Neutralinojs binaries from the source\non almost all desktop operating systems out there."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux: x64, ia32, and armhf."),Object(i.b)("li",{parentName:"ul"},"macOS: x64 and arm64 (powered by Rosetta)."),Object(i.b)("li",{parentName:"ul"},"Windows: x64."),Object(i.b)("li",{parentName:"ul"},"BSD: Possible to build from the source via ",Object(i.b)("inlineCode",{parentName:"li"},"build_freebsd.sh")),Object(i.b)("li",{parentName:"ul"},"Web: Deploy your application into a cloud service with a x64 Linux instance.")))}u.isMDXComponent=!0}}]);