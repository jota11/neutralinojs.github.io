(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return l})),o.d(n,"toc",(function(){return r})),o.d(n,"default",(function(){return d}));var i=o(3),t=(o(0),o(109));const a={title:"neutralino.config.json"},l={unversionedId:"configuration/neutralino.config.json",id:"configuration/neutralino.config.json",isDocsHomePage:!1,title:"neutralino.config.json",description:"neutralino.config.json file contains the application configuration details.\xa0Every Neutralinojs app requires",source:"@site/docs/configuration/neutralino.config.json.md",slug:"/configuration/neutralino.config.json",permalink:"/docs/configuration/neutralino.config.json",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/configuration/neutralino.config.json.md",version:"current",sidebar:"docs",previous:{title:"Internal CLI Arguments",permalink:"/docs/cli/internal-cli-arguments"},next:{title:"Project Structure",permalink:"/docs/configuration/project-structure"}},r=[{value:"Primary",id:"primary",children:[{value:"<code>applicationId: string</code>",id:"applicationid-string",children:[]},{value:"<code>defaultMode: string</code>",id:"defaultmode-string",children:[]}]},{value:"General",id:"general",children:[{value:"<code>port: number</code>",id:"port-number",children:[]},{value:"<code>enableServer: boolean</code>",id:"enableserver-boolean",children:[]},{value:"<code>enableNativeAPI: boolean</code>",id:"enablenativeapi-boolean",children:[]},{value:"<code>url: string</code>",id:"url-string",children:[]},{value:"<code>documentRoot: string</code>",id:"documentroot-string",children:[]},{value:"<code>exportAuthInfo: boolean</code>",id:"exportauthinfo-boolean",children:[]},{value:"<code>enableExtensions: boolean</code>",id:"enableextensions-boolean",children:[]},{value:"<code>extensions: object[]</code>",id:"extensions-object",children:[]},{value:"<code>nativeBlockList: string[]</code>",id:"nativeblocklist-string",children:[]},{value:"<code>nativeAllowList: string[]</code>",id:"nativeallowlist-string",children:[]},{value:"<code>globalVariables: object[]</code>",id:"globalvariables-object",children:[]},{value:"<code>logging.enabled: boolean</code>",id:"loggingenabled-boolean",children:[]},{value:"<code>logging.writeToLogFile: boolean</code>",id:"loggingwritetologfile-boolean",children:[]}]},{value:"Window mode",id:"window-mode",children:[{value:"<code>modes.window.title: string</code>",id:"modeswindowtitle-string",children:[]},{value:"<code>modes.window.width: number</code>",id:"modeswindowwidth-number",children:[]},{value:"<code>modes.window.height: number</code>",id:"modeswindowheight-number",children:[]},{value:"<code>modes.window.minWidth: number</code>",id:"modeswindowminwidth-number",children:[]},{value:"<code>modes.window.minHeight: number</code>",id:"modeswindowminheight-number",children:[]},{value:"<code>modes.window.maxWidth: number</code>",id:"modeswindowmaxwidth-number",children:[]},{value:"<code>modes.window.maxHeight: number</code>",id:"modeswindowmaxheight-number",children:[]},{value:"<code>modes.window.fullScreen: boolean</code>",id:"modeswindowfullscreen-boolean",children:[]},{value:"<code>modes.window.icon: string</code>",id:"modeswindowicon-string",children:[]},{value:"<code>modes.window.alwaysOnTop: boolean</code>",id:"modeswindowalwaysontop-boolean",children:[]},{value:"<code>modes.window.enableInspector: boolean</code>",id:"modeswindowenableinspector-boolean",children:[]},{value:"<code>modes.window.borderless: boolean</code>",id:"modeswindowborderless-boolean",children:[]},{value:"<code>modes.window.maximize: boolean</code>",id:"modeswindowmaximize-boolean",children:[]},{value:"<code>modes.window.resizable: boolean</code>",id:"modeswindowresizable-boolean",children:[]},{value:"<code>modes.window.hidden: boolean</code>",id:"modeswindowhidden-boolean",children:[]},{value:"<code>modes.window.exitProcessOnClose: boolean</code>",id:"modeswindowexitprocessonclose-boolean",children:[]}]},{value:"Chrome mode",id:"chrome-mode",children:[{value:"<code>modes.chrome.width: number</code>",id:"modeschromewidth-number",children:[]},{value:"<code>modes.chrome.height: number</code>",id:"modeschromeheight-number",children:[]},{value:"<code>modes.chrome.args: string</code>",id:"modeschromeargs-string",children:[]}]},{value:"CLI",id:"cli",children:[{value:"<code>cli.binaryName: string</code>",id:"clibinaryname-string",children:[]},{value:"<code>cli.resourcesPath: string</code>",id:"cliresourcespath-string",children:[]},{value:"<code>cli.extensionsPath: string</code>",id:"cliextensionspath-string",children:[]},{value:"<code>cli.clientLibrary: string</code>",id:"cliclientlibrary-string",children:[]},{value:"<code>cli.binaryVersion: string</code>",id:"clibinaryversion-string",children:[]},{value:"<code>cli.clientVersion: string</code>",id:"cliclientversion-string",children:[]},{value:"<code>cli.autoReloadExclude: string</code>",id:"cliautoreloadexclude-string",children:[]}]}],c={toc:r};function d({components:e,...n}){return Object(t.b)("wrapper",Object(i.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"neutralino.config.json")," file contains the application configuration details.\xa0Every Neutralinojs app requires\nthe following mandatory keys from the config file."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"applicationId")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"url")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"defaultMode"))),Object(t.b)("p",null,"Other configuration properties are optional and may have default values."),Object(t.b)("h2",{id:"primary"},"Primary"),Object(t.b)("p",null,"The following configuraion values cannot be overridden in different Neutralinojs modes."),Object(t.b)("h3",{id:"applicationid-string"},Object(t.b)("inlineCode",{parentName:"h3"},"applicationId: string")),Object(t.b)("p",null,"Unique string to identify your application. Eg: ",Object(t.b)("inlineCode",{parentName:"p"},"js.neutralino.sample")),Object(t.b)("h3",{id:"defaultmode-string"},Object(t.b)("inlineCode",{parentName:"h3"},"defaultMode: string")),Object(t.b)("p",null,"Mode of the application. Accepted values are ",Object(t.b)("inlineCode",{parentName:"p"},"window"),", ",Object(t.b)("inlineCode",{parentName:"p"},"browser"),", and ",Object(t.b)("inlineCode",{parentName:"p"},"cloud"),"."),Object(t.b)("h2",{id:"general"},"General"),Object(t.b)("p",null,"You can override the following configuration values from different modes. For example, you can use a specific\nURL in root-level and another URL in window-mode-level, as shown below."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "/"\n    "modes": {\n        "window": {\n            "url": "/#window-mode"\n        }\n    }\n}\n')),Object(t.b)("h3",{id:"port-number"},Object(t.b)("inlineCode",{parentName:"h3"},"port: number")),Object(t.b)("p",null,"The port of your application. If the value is ",Object(t.b)("inlineCode",{parentName:"p"},"0"),", Neutralinojs will use a random available port."),Object(t.b)("h3",{id:"enableserver-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"enableServer: boolean")),Object(t.b)("p",null,"Enables or disables the background server (Disables static file servering feature and native API messaging).\nIf you load a remote URL to the webview, you can set this option to ",Object(t.b)("inlineCode",{parentName:"p"},"true"),"."),Object(t.b)("h3",{id:"enablenativeapi-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"enableNativeAPI: boolean")),Object(t.b)("p",null,"Enables or disables the native API. If you don't use any native API functions, you can set this option to ",Object(t.b)("inlineCode",{parentName:"p"},"true"),"."),Object(t.b)("h3",{id:"url-string"},Object(t.b)("inlineCode",{parentName:"h3"},"url: string")),Object(t.b)("p",null,"The entry URL of the application. Neutralinojs will initially load this URL.\nThis property accepts both relative and absolute URLs. See following examples."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'"url": "/"\n')),Object(t.b)("p",null,"The above config loads ",Object(t.b)("inlineCode",{parentName:"p"},"http://localhost:<port>/")," URL initially (internally ",Object(t.b)("inlineCode",{parentName:"p"},"/index.html")," is loaded).\nYou can use remote urls too."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'"url": "http://example.com"\n')),Object(t.b)("h3",{id:"documentroot-string"},Object(t.b)("inlineCode",{parentName:"h3"},"documentRoot: string")),Object(t.b)("p",null,"Sets the document root for the static server. For example, if you need to use ",Object(t.b)("inlineCode",{parentName:"p"},"resources")," directory as\nthe document root, you can use setup ",Object(t.b)("inlineCode",{parentName:"p"},"documentRoot")," as follows."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/resources/",\n    "url": "/"\n}\n')),Object(t.b)("p",null,"Make sure to configure ",Object(t.b)("inlineCode",{parentName:"p"},"url")," properly with the document root. The following configuration is ",Object(t.b)("strong",{parentName:"p"},"wrong"),", it\ninstructs the static server to fetch resources from ",Object(t.b)("inlineCode",{parentName:"p"},"./resources/resources"),"."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/resources/",\n    "url": "/resources/"\n}\n')),Object(t.b)("p",null,"However, you can use a sub-directory in URL, as shown below."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/",\n    "url": "/resources/"\n}\n')),Object(t.b)("h3",{id:"exportauthinfo-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"exportAuthInfo: boolean")),Object(t.b)("p",null,"Exports authentication details to the ",Object(t.b)("inlineCode",{parentName:"p"},"${NL_PATH}/.tmp/auth_info.json")," file with the following JSON structure."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "port": "<port>",\n    "accessToken": "<access_token>"\n}\n')),Object(t.b)("p",null,"You can use the above authentication details to connect with Neutralinojs from external processes by using\nWebSocket as an IPC mechanism."),Object(t.b)("h3",{id:"enableextensions-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"enableExtensions: boolean")),Object(t.b)("p",null,"Enables/disables extensions.\nLearn more about this option ",Object(t.b)("a",{parentName:"p",href:"../how-to/extensions-overview#enable-the-extensions-feature"},"here")),Object(t.b)("h3",{id:"extensions-object"},Object(t.b)("inlineCode",{parentName:"h3"},"extensions: object[]")),Object(t.b)("p",null,"An array of extension definitions.\nLearn more about this option ",Object(t.b)("a",{parentName:"p",href:"../how-to/extensions-overview#defining-the-extensions"},"here")),Object(t.b)("h3",{id:"nativeblocklist-string"},Object(t.b)("inlineCode",{parentName:"h3"},"nativeBlockList: string[]")),Object(t.b)("p",null,"An array of native methods needs to be blocked from the frontend of the application. The wildcard character ",Object(t.b)("inlineCode",{parentName:"p"},"*")," is allowed\ninside entries."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "nativeBlockList": ["os.execCommand"],\n    "nativeBlockList": ["app.*"]\n}\n')),Object(t.b)("h3",{id:"nativeallowlist-string"},Object(t.b)("inlineCode",{parentName:"h3"},"nativeAllowList: string[]")),Object(t.b)("p",null,"An array of native methods needs to be allowed from the frontend of the application. The wildcard character ",Object(t.b)("inlineCode",{parentName:"p"},"*")," is allowed\ninside entries."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "nativeAllowList": ["os.getEnv"],\n    "nativeAllowList": ["storage.*"]\n}\n')),Object(t.b)("h3",{id:"globalvariables-object"},Object(t.b)("inlineCode",{parentName:"h3"},"globalVariables: object[]")),Object(t.b)("p",null,"A key-value-based JavaScript object of custom ",Object(t.b)("a",{parentName:"p",href:"../api/global-variables#custom-global-variables"},"global variables"),"."),Object(t.b)("h3",{id:"loggingenabled-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"logging.enabled: boolean")),Object(t.b)("p",null,"Enables or disables the logging feature."),Object(t.b)("h3",{id:"loggingwritetologfile-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"logging.writeToLogFile: boolean")),Object(t.b)("p",null,"Enables or disables log file. If this setting is ",Object(t.b)("inlineCode",{parentName:"p"},"false"),", the framework won't write log to ",Object(t.b)("inlineCode",{parentName:"p"},"neutralinojs.log"),",\nand it will write logs to standard streams."),Object(t.b)("h2",{id:"window-mode"},"Window mode"),Object(t.b)("p",null,"The following configuration values are used when the application runs with the window mode."),Object(t.b)("h3",{id:"modeswindowtitle-string"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.title: string")),Object(t.b)("p",null,"Title of the native window."),Object(t.b)("h3",{id:"modeswindowwidth-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.width: number")),Object(t.b)("p",null,"Width of the native window."),Object(t.b)("h3",{id:"modeswindowheight-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.height: number")),Object(t.b)("p",null,"Height of the native window."),Object(t.b)("h3",{id:"modeswindowminwidth-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.minWidth: number")),Object(t.b)("p",null,"Minimum width of the native window."),Object(t.b)("h3",{id:"modeswindowminheight-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.minHeight: number")),Object(t.b)("p",null,"Minimum height of the native window."),Object(t.b)("h3",{id:"modeswindowmaxwidth-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.maxWidth: number")),Object(t.b)("p",null,"Maximum width of the native window."),Object(t.b)("h3",{id:"modeswindowmaxheight-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.maxHeight: number")),Object(t.b)("p",null,"Maximum height of the native window."),Object(t.b)("h3",{id:"modeswindowfullscreen-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.fullScreen: boolean")),Object(t.b)("p",null,"Activates the full-screen mode."),Object(t.b)("h3",{id:"modeswindowicon-string"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.icon: string")),Object(t.b)("p",null,"Application icon's file name. You can directly point to an image file in the\nresources directory. We recommend you to choose a transparent PNG file."),Object(t.b)("h3",{id:"modeswindowalwaysontop-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.alwaysOnTop: boolean")),Object(t.b)("p",null,"Activates the top-most mode."),Object(t.b)("h3",{id:"modeswindowenableinspector-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.enableInspector: boolean")),Object(t.b)("p",null,"Automatically opens the developer tools window."),Object(t.b)("h3",{id:"modeswindowborderless-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.borderless: boolean")),Object(t.b)("p",null,"Activates the borderless mode."),Object(t.b)("h3",{id:"modeswindowmaximize-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.maximize: boolean")),Object(t.b)("p",null,"Launches the application maximized."),Object(t.b)("h3",{id:"modeswindowresizable-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.resizable: boolean")),Object(t.b)("p",null,"Make the window resizable or not. The default value is ",Object(t.b)("inlineCode",{parentName:"p"},"true"),"."),Object(t.b)("h3",{id:"modeswindowhidden-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.hidden: boolean")),Object(t.b)("p",null,"Make the window invisible. This setting can be used to develop background services."),Object(t.b)("h3",{id:"modeswindowexitprocessonclose-boolean"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.window.exitProcessOnClose: boolean")),Object(t.b)("p",null,"If this setting is ",Object(t.b)("inlineCode",{parentName:"p"},"true"),", the app process will exit when the user clicks on the close button. Otherwise,\nthe framework will dispatch the ",Object(t.b)("inlineCode",{parentName:"p"},"windowClose")," event."),Object(t.b)("h2",{id:"chrome-mode"},"Chrome mode"),Object(t.b)("p",null,"The following configuration values are used when the application starts with the chrome mode."),Object(t.b)("h3",{id:"modeschromewidth-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.chrome.width: number")),Object(t.b)("p",null,"Width of the chrome window."),Object(t.b)("h3",{id:"modeschromeheight-number"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.chrome.height: number")),Object(t.b)("p",null,"Height of the chrome window."),Object(t.b)("h3",{id:"modeschromeargs-string"},Object(t.b)("inlineCode",{parentName:"h3"},"modes.chrome.args: string")),Object(t.b)("p",null,"Additional command-line arguments for the Chrome process."),Object(t.b)("h2",{id:"cli"},"CLI"),Object(t.b)("p",null,"The following configuration values are used neu CLI."),Object(t.b)("h3",{id:"clibinaryname-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.binaryName: string")),Object(t.b)("p",null,"Binary file name of your application. If it is ",Object(t.b)("inlineCode",{parentName:"p"},"myapp"),", all binaries will use\n",Object(t.b)("inlineCode",{parentName:"p"},"myapp-<platform>_<arch>")," format."),Object(t.b)("h3",{id:"cliresourcespath-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.resourcesPath: string")),Object(t.b)("p",null,"Path of your application resources."),Object(t.b)("h3",{id:"cliextensionspath-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.extensionsPath: string")),Object(t.b)("p",null,"Path of your application extensions."),Object(t.b)("h3",{id:"cliclientlibrary-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.clientLibrary: string")),Object(t.b)("p",null,"Filename of the Neutralinojs JavaScript library."),Object(t.b)("h3",{id:"clibinaryversion-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.binaryVersion: string")),Object(t.b)("p",null,"Neutralinojs server version."),Object(t.b)("h3",{id:"cliclientversion-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.clientVersion: string")),Object(t.b)("p",null,"Neutralinojs client version."),Object(t.b)("h3",{id:"cliautoreloadexclude-string"},Object(t.b)("inlineCode",{parentName:"h3"},"cli.autoReloadExclude: string")),Object(t.b)("p",null,"A JavaScript regular expression to exclude files from the auto-reload file watcher. For example, the\nfollowing configuration will disable auto-reloading for SASS stylesheets (",Object(t.b)("inlineCode",{parentName:"p"},".scss"),")."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "autoReloadExclude": ".*\\\\.scss$"\n}\n')),Object(t.b)("p",null,"Use ",Object(t.b)("inlineCode",{parentName:"p"},"|")," character to set multiple regular expressions, as shown below."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "autoReloadExclude": ".*\\\\.scss$|.*\\\\.less$"\n}\n')))}d.isMDXComponent=!0},109:function(e,n,o){"use strict";o.d(n,"a",(function(){return s})),o.d(n,"b",(function(){return p}));var i=o(0),t=o.n(i);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,i,t=function(e,n){if(null==e)return{};var o,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),b=function(e){var n=t.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},s=function(e){var n=b(e.components);return t.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(o),m=i,p=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return o?t.a.createElement(p,r(r({ref:n},d),{},{components:o})):t.a.createElement(p,r({ref:n},d))}));function p(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,l=new Array(a);l[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<a;d++)l[d]=o[d];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);