"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:10},a="Login - Access to the system",s={unversionedId:"basic-functional/login",id:"basic-functional/login",title:"Login - Access to the system",description:"The purpose of this page is to help you understand login concepts. As a result of reading this page, you should be able to log into iDempiere.",source:"@site/docs/basic-functional/login.md",sourceDirName:"basic-functional",slug:"/basic-functional/login",permalink:"/docs/basic-functional/login",draft:!1,editUrl:"https://github.com/idempiere/idempiere.github.io/tree/main/docs/basic-functional/login.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Vocabulary",permalink:"/docs/basic-functional/vocabulary"},next:{title:"System overview",permalink:"/docs/basic-functional/menue_overview"}},l={},c=[{value:"Login to the system - Authentication",id:"login-to-the-system---authentication",level:2},{value:"Client And Organizations",id:"client-and-organizations",level:3},{value:"Menu",id:"menu",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"login---access-to-the-system"},"Login - Access to the system"),(0,i.kt)("p",null,"The purpose of this page is to help you understand login concepts. As a result of reading this page, you should be able to log into iDempiere.\nNavigation in Idempiere is one of the great benefits that it offers since its interface is very\nfriendly, it allows configuration in multiple languages and when placing the mouse pointer\non each of its icons or buttons, it clearly shows the name and/or role it plays. To enter the\nsystem you may use any browser (Chrome, Firefox, Explorer ...) by entering the URL\nprovided. For optimum performance navigating the system with Google Chrome."),(0,i.kt)("h2",{id:"login-to-the-system---authentication"},"Login to the system - Authentication"),(0,i.kt)("p",null,"The first step of the login process focuses on authentication (who are you) and language preference."),(0,i.kt)("p",null,"You have to enter your User name and a Password. It must be correct including look at capital and small letters."),(0,i.kt)("p",null,"If you want to select a role you have to tick the box. In the following dialoge you can also specify an Organizational unit, Warehouse or a Date for your entries.\nTo enter Idempiere simply enter the URL assigned in any internet browser,\nthere you must enter User and Password provided by the administrator of the Idempiere\nsystem. Then select the desired system language from the drop down options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login for iDempiere",src:n(8676).Z,width:"383",height:"292"})),(0,i.kt)("p",null,"If you use the GardenWorld demonstration client you can use either\nthe User "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GardenAdmin with the password = GardenAdmin or"),(0,i.kt)("li",{parentName:"ul"},"GardenUser with the also the same word as password.")),(0,i.kt)("p",null,"The Role and in some circumstances the Tenant dictate how the system will behave once you are logged in. Chose the ",(0,i.kt)("a",{parentName:"p",href:"vocabulary#tenant"},"Tenant")," and ",(0,i.kt)("a",{parentName:"p",href:"vocabulary#role"},"Role"),". Let's review the authorization fields and how they impact your session."),(0,i.kt)("h3",{id:"client-and-organizations"},"Client And Organizations"),(0,i.kt)("p",null,"In Idempiere the client is the highest level of an independent business entity.\nEach Client will have one or more organizations depending on their need.\nEach client defines the accounting parameters (accounting schema, tree definition,\namong others).\nAn organization is an entity under which transactions are recorded on a daily basis"),(0,i.kt)("h2",{id:"menu"},"Menu"),(0,i.kt)("p",null,"In Idempiere, navigating the menu is very simple since it was created as an explorer and\nhas a tree structure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Menue for iDempiere",src:n(6100).Z,width:"1910",height:"804"})),(0,i.kt)("p",null,"To view all options and submenus , you must mark the expand tree option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Expand for iDempiere",src:n(4440).Z,width:"512",height:"28"})," "),(0,i.kt)("p",null,"Click on it again to shrink the menu to the basic structure."),(0,i.kt)("p",null,"The system provides a search engine which allows you to filter the options that are part of\nthe name typed for easy access."))}p.isMDXComponent=!0},4440:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAcCAYAAAFg9DelAAAACXBIWXMAABOIAAATiAGjigkoAAASA0lEQVR4nO3dBbCUVdgH8KNidycg1hjYhTUmttioWNiFHdiFY47tGIgdI3YHgmLMGOgoYju2YmBj5/f9zjdnv5dll7uXu7iL9/xn3tm7b7973/P08z8dPvnkk39Ck2DUqFHhl19+Ccsvv3yYYoopSusPO+ywcN5554W///47vPXWW2H06NFhscUWC9NPP32br9mhzWeYwPjnn39KDz948ODQpUuXcOONN4bTTjutLudv+h9gkkkmiZ+TTjppWG+99cLPP/8cdt555zH2ufnmm8MyyywTFl988fD666+XPr05W2yxRdh3333DTjvtFH788cdw9913j3Fs0/8AsMMOO8SH/PXXX8Off/4Z34YE321PMDRg0UUXDffff3/pB7z++uvjj1GODs0kA2DeeeeNr3268b/++itMNtlk8UGt++ijj8Kss84ax3/apy1o+jdgySWXjK8zOXDUUUeFPfbYI9x11111O3/T/wAeHjz8H3/8EV/lBG/FN998E8c42eBt+e2338Kcc84ZTj311DDDDDOEeeaZJ+673XbbhUsvvTTMNttsY5y/6X+AhBtuuCFsvfXW8SHTq29oeKAOHTrE8e57kg+EJqR9b7311ornbToZ0Cxgk8w+++xR5qyyyirh999/D5NPPvlYcscPTmbdc889YauttorfaashQ4bEfd9+++2w5557hjXXXDMcccQRcV295Fc9MNGMgGaFkWZUbrnllqXvjz32WHwRiCgiqG/fvmGOOeYY72u89NJLYdlll63XLY+B/AK0EUY/0euzGpZeeunw2WefxX2K+3lBiG/YdNNNowVE4jz00ENx3Q8//BBNt6WWWiq+ANtuu23Yf//9wxprrBGP6969e3j00UdLVpPPgw46KHTr1i0eu99++7V4/1kFVED6p/pR55prrij+v/vuu4qj2D/u2muvLRkXjrXvoYceGo2OoUOHhgUXXDDMN9988R8+9dRTj+HmNhpZArQRzHQe5iyzzBLFv5fGaKcW2ALHH398/Kf7Pi4p0SjkF6CNOP3008P8888fPvjgg/j9+++/jxY5r53bYrnjjjvC7rvv3tgbrYL8ArQRRvz7779fsupnnHHG6LMS90b9Tz/9FJZYYomos70MzYb8AtQByeeuhiT6y12/M888Mxx99NExusvY69mzZ3jwwQfDSSedFJ555pnwwAMPhB49epSMQthmm21ioOPcc88NvXr1Crfffnvp+jyPzTffPHTs2DHaLf3792/x3vIL0EYULfCWfPtyGyDtf+edd8ZotX/++eefH6Naffr0Cffee+8Y/3wYOHBg3G+qqaaKxxXhBTjggAPCq6++GmaeeeYW//mQX4A2QnROnJYdkMAr2HHHHUtRuWrG35FHHhlVBRvBPlTGIYccEj/TP6/oKoL1m2yySWn/4jZ/b7jhhnER+hQ3bgnZDcyoGV66r776KqogLzdXmf0jUgrUDnCDRVFriXY6J6nmhf34449Dv379oupKx7qOZbfddgvHHntsWGCBBcLee+8d1Z/oKhtLhnjkyJHhjTfeiLlAcRf2lnMbMKRlpShuRtYAGQ2GQbn99tvHNArh8uSTT46hMQ1gi1yYtMptt90Wj1l//fXDuuuuG4WFMpGzzz47Jgrffffdpgy3NCuyAMhoOAxYedLOnTtHbV9NUy+yyCLRAuAvsTak3PhLLJILL7ww+j2WRsB91+JzNRuyAMhoOAz4VVddtaZ9DbJUHKb0x8Bj7g8YMCB88cUXcVstsB/rQW0Vl2XYsGEV9xtXcKcY3eO7X3TRRfE718S6VBcwruNqQbHCZ6211orFJIpPHN9WtyYLgIz/BCpp35YGh2TdcsstF6accso4KM8555wYKzCY1VxcdtllMawuGivs/txzz8WyOom+tddeOzzxxBMxaqseo5jet17dBnfl8ccfj/tKEB533HGxtKBTp05RYK2zzjoxkjt8+PCx7tegZ+VIDVxxxRVRuBEwrpfKFOqBLAAyGoqkYQUCp5tuulKEO73g6W9avjUvvX2LtfOVoH7nqaeeiq0ogwYNCr17946RdcHEzz//PObcxB5c+/nnny/V+0wzzTSl+3rkkUdiDMPALkLtT9rXfShOXn311aNQkKrZZZddoiujQiClkcrvn1AhJM4666ww7bTThq5du0ZBxOU5+OCDY/EYYdAWZAGQ0VB40WlaVf00nkEhMV4OKS1BPtr0vvvui1WPymyl0BTeOUbtlSCihpji+StByswgtJRj7rnnHqvtgoBKMChho402ip+33HLLWOegqWHllVcurSMoLAnF5yy/z2Tes0YmJHIaMKNm0Db8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"},8676:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Login-6eb61ac833584010aeabd979d1143c48.png"},6100:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Menue-a801f5dc893d4fd4d94dbeb55c08f47a.png"}}]);