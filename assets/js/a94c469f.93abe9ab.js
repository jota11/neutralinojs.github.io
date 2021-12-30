(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(109)),l={title:"Distribution Overview"},o={unversionedId:"distribution/overview",id:"distribution/overview",isDocsHomePage:!1,title:"Distribution Overview",description:"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based",source:"@site/docs/distribution/overview.md",slug:"/distribution/overview",permalink:"/docs/distribution/overview",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/distribution/overview.md",version:"current",sidebar:"docs",previous:{title:"Auto Updater",permalink:"/docs/how-to/auto-updater"},next:{title:"Framework Developer Guide",permalink:"/docs/contributing/framework-developer-guide"}},c=[{value:"Application build results",id:"application-build-results",children:[]},{value:"Selecting files for packaging",id:"selecting-files-for-packaging",children:[]},{value:"Creating a portable application package",id:"creating-a-portable-application-package",children:[]},{value:"Creating application installers",id:"creating-application-installers",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based\nsmall setup files. You can select an option according to your application distribution preference."),Object(i.b)("h2",{id:"application-build-results"},"Application build results"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"neu build")," command generates the following files on any supported operating system into the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Filename"),Object(i.b)("th",{parentName:"tr",align:null},"OS"),Object(i.b)("th",{parentName:"tr",align:null},"CPU architecture"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-linux_x64")),Object(i.b)("td",{parentName:"tr",align:null},"Linux"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-macos_x64")),Object(i.b)("td",{parentName:"tr",align:null},"macOS"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-win_x64")),Object(i.b)("td",{parentName:"tr",align:null},"Windows"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"resources.neu")),Object(i.b)("td",{parentName:"tr",align:null},"all"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"all")),Object(i.b)("td",{parentName:"tr",align:null},"Application resource file")))),Object(i.b)("p",null,"Neutralinojs officially offers only ",Object(i.b)("inlineCode",{parentName:"p"},"x64")," pre-built binaries. If you need binaries for other CPU architectures,\nconsider building binaries from source with ",Object(i.b)("a",{parentName:"p",href:"../contributing/framework-developer-guide"},"this guide"),"."),Object(i.b)("h2",{id:"selecting-files-for-packaging"},"Selecting files for packaging"),Object(i.b)("p",null,"The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.\nTherefore, please check our\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries"},"security policy")," before you continue\nwith the distribution process."),Object(i.b)("p",null,"As the first step for packaging, you can pick two files for each targeted operating system: application binary and\nthe resource file. For example, if you need to make an application package for ",Object(i.b)("inlineCode",{parentName:"p"},"x64")," Linux computers, pick ",Object(i.b)("inlineCode",{parentName:"p"},"myapp-linux_x64"),"\nand the ",Object(i.b)("inlineCode",{parentName:"p"},"resources.neu")," file. The ",Object(i.b)("inlineCode",{parentName:"p"},"resources.neu")," contains all application resources, so, double click on the binary and check whether\nthe resource file is not corrupted."),Object(i.b)("h2",{id:"creating-a-portable-application-package"},"Creating a portable application package"),Object(i.b)("p",null,"The following guides are not documented yet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for macOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Windows"))),Object(i.b)("h2",{id:"creating-application-installers"},"Creating application installers"),Object(i.b)("p",null,"The following guides are not documented yet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for macOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Windows"))))}b.isMDXComponent=!0}}]);