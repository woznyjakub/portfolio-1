(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(138),A={colors:{green:"#36c096",red:"#d82028",lightgrey:"#f5f5f7",white:"#fff",black:"#000",transparent:"transparent",semiTransparentGrey:"#222222bb"},font:function(e,a,t){return"font-family: "+e+", sans-serif;\n        "+(a?"font-weight: "+a:"")+";\n        "+(t?"font-style: "+t:"")+";"},breakpoints:[{keyword:"landscape",value:480},{keyword:"tablet",value:768},{keyword:"desktop-small",value:900},{keyword:"desktop-large",value:1200},{keyword:"super-large",value:1650}],media:function(e,a){return void 0===a&&(a="min"),A.breakpoints.map(function(t,n){if(e===t.keyword)return"@media ("+a+"-width: "+(A.breakpoints[n].value-("min"===a?0:1))+"px)"})}},r=(t(146),t(147)),d=t.n(r);function s(){var e=d()(["\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Sorts+Mill+Goudy&subset=latin-ext');\n\n    .padding-responsive-top {\n        padding-top: 1rem;\n    }\n    "," {\n        .padding-responsive-top {\n            padding-top: 2rem;\n        }\n    }\n    "," {\n        .padding-responsive-top {\n            padding-top: 3rem;\n        }\n    }\n"]);return s=function(){return e},e}var l=Object(i.b)(s(),function(e){return e.theme.media("tablet")},function(e){return e.theme.media("desktop-large")}),o=i.c.div.withConfig({displayName:"main-container__StyledMainContainer",componentId:"sc-1ujywqd-0"})(["overflow-x:hidden;"]),p=function(e){var a=e.children;return c.a.createElement(o,null,a)},m=t(155),u=t(4),g=t.n(u),f=t(156),b=t.n(f),h=t(140);function w(e){var a=e.description,t=e.lang,n=e.meta,i=e.keywords,A=e.title;return c.a.createElement(h.StaticQuery,{query:E,render:function(e){var r=a||e.site.siteMetadata.description;return c.a.createElement(b.a,{htmlAttributes:{lang:t},title:A,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:A},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:m})}w.defaultProps={lang:"en",meta:[],keywords:[]},w.propTypes={description:g.a.string,lang:g.a.string,meta:g.a.array,keywords:g.a.arrayOf(g.a.string),title:g.a.string.isRequired};var y=w,E="1025518380",S=(i.c.span.withConfig({displayName:"rectangle__StyledRectangle",componentId:"sc-14n1s1y-0"})(["position:absolute;--size:0px;width:var(--size);height:var(--size);transform:translate(-50%,-50%) rotate(45deg);"]),i.c.div.withConfig({displayName:"container__StyledContainer",componentId:"sc-4wclnt-0"})(["max-width:1280px;margin:0 auto;padding:1rem 0.5rem;","{padding-top:4rem;padding-bottom:4rem;}","{padding-top:5rem;padding-bottom:6rem;}"],function(e){return e.theme.media("landscape")},function(e){return e.theme.media("desktop-large")})),x=function(e){var a=e.children,t=e.className;return c.a.createElement(S,{className:t},a)},N=i.c.h2.withConfig({displayName:"heading__StyledHeading",componentId:"sc-8yk8px-0"})(["font-family:'sorts mill goudy',sans-serif;text-align:center;font-size:2em;margin-bottom:0;","{font-size:2.75em;}"],function(e){return e.theme.media("desktop-large")}),C=function(e){var a=e.children,t=e.className;return c.a.createElement(N,{className:t},a)},v=i.c.h3.withConfig({displayName:"caption__StyledCaption",componentId:"kb7nq7-0"})([""," font-size:13px;text-align:center;padding:0.5rem 0;"],function(e){return e.theme.font("montserrat","600")}),k=function(e){var a=e.children,t=e.className;return c.a.createElement(v,{className:t},a)},I=i.c.p.withConfig({displayName:"paragraph__StyledParagraph",componentId:"sc-1voba80-0"})([""," line-height:2em;font-size:14px;max-width:800px;margin:0 auto;padding-right:0.5rem;padding-left:0.5rem;hyphens:auto;","{font-size:15px;}","{font-size:inherit;}"],function(e){return e.theme.font("montserrat")},function(e){return e.theme.media("landscape")},function(e){return e.theme.media("desktop-large")}),Q=function(e){var a=e.children,t=e.className;return c.a.createElement(I,{className:t},a)},R=t(165),B=t.n(R),j=i.c.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1fda1n8-0"})(["background:url(",") 100% 0% / 125% no-repeat;background-color:",";font-family:'Sorts Mill Goudy',serif;","{background-size:contain;}"],B.a,function(e){return e.theme.colors.lightgrey},function(e){return e.theme.media("landscape")}),Y=Object(i.c)(x).withConfig({displayName:"header__StyledContainer",componentId:"sc-1fda1n8-1"})(["display:grid;place-items:end start;min-height:80vh;max-width:1500px;","{padding:4rem;min-height:90vh;}"],function(e){return e.theme.media("desktop-small")}),L=i.c.div.withConfig({displayName:"header__StyledWrapper",componentId:"sc-1fda1n8-2"})(["padding:4rem 0.5rem;font-size:1.5em;","{padding:2rem 1rem;}","{font-size:2.25em;}","{font-size:2.75em;padding:4rem 2rem;}"],function(e){return e.theme.media("landscape")},function(e){return e.theme.media("tablet")},function(e){return e.theme.media("super-large")}),U=i.c.h1.withConfig({displayName:"header__StyledHeading",componentId:"sc-1fda1n8-3"})(["line-height:1em;font-family:inherit;font-size:",";"],function(e){return e.fontSize}),z=function(){return c.a.createElement(j,null,c.a.createElement(Y,null,c.a.createElement(L,null,c.a.createElement(U,{fontSize:"1.75em"},"Jakub Woźny"),c.a.createElement(U,{as:"h2",fontSize:"1.45em"},"Front end developer"),c.a.createElement(U,{as:"h3",fontSize:"1.25em",textAlign:"right"},"Portfolio"))))},X=t(166),G=t(145),K=t.n(G),W=function(){return c.a.createElement(h.StaticQuery,{query:"1759679612",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.html.childImageSharp.fluid}),c.a.createElement(k,null,"HTML")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.css.childImageSharp.fluid}),c.a.createElement(k,null,"CSS")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.js.childImageSharp.fluid}),c.a.createElement(k,null,"JavaScript")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.sass.childImageSharp.fluid}),c.a.createElement(k,null,"Sass")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.react.childImageSharp.fluid}),c.a.createElement(k,null,"React")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.styled.childImageSharp.fluid}),c.a.createElement(k,null,"Styled Components")))},data:X})},H=t(167),F=function(){return c.a.createElement(h.StaticQuery,{query:"4113752434",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.gatsby.childImageSharp.fluid}),c.a.createElement(k,null,"GatsbyJS")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.webpack.childImageSharp.fluid}),c.a.createElement(k,null,"Webpack")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.git.childImageSharp.fluid}),c.a.createElement(k,null,"Git")),c.a.createElement("div",null,c.a.createElement(K.a,{fluid:e.linux.childImageSharp.fluid}),c.a.createElement(k,null,"Linux")))},data:H})},Z=i.c.section.withConfig({displayName:"skills__StyledSection",componentId:"sc-1b0m3hn-0"})(["padding:40vh 1.5rem 4rem 1rem;--slant:3deg;transform:skewY(var(--slant));margin-top:-50px;background-color:",";overflow:hidden;","{padding-top:30vh;padding-bottom:6rem;}","{padding-top:20vh;}","{padding-bottom:8rem;}"],function(e){return e.theme.colors.green},function(e){return e.theme.media("tablet")},function(e){return e.theme.media("desktop-small")},function(e){return e.theme.media("super-large")}),T=Object(i.c)(x).withConfig({displayName:"skills__StyledContainer",componentId:"sc-1b0m3hn-1"})(["transform:skewY(calc(var(--slant) * -1));background-color:",";box-shadow:16px 16px 0 0 ",";","{width:80%;}"],function(e){return e.theme.colors.lightgrey},function(e){return e.theme.colors.semiTransparentGrey},function(e){return e.theme.media("desktop-large")}),P=i.c.div.withConfig({displayName:"skills__StyledImagesWrapper",componentId:"sc-1b0m3hn-2"})(["display:flex;flex-wrap:wrap;justify-content:space-around;max-width:",";margin:0 auto;> div{flex-basis:",";max-width:96px;}","{max-width:initial;padding-left:1rem;padding-right:1rem;justify-content:",";> div{flex-basis:",";",";}}","{justify-content:center;> div{margin:0 0.5rem;}}","{> div{margin:0 1rem;}}"],function(e){var a=e.childAmount;return a%2==0&&a%3!=0?"450px":"350px"},function(e){var a=e.childAmount;return a%2==0&&a%3!=0?"20%":"26%"},function(e){return e.theme.media("tablet")},function(e){var a=e.childAmount;return a%2==0&&a%3!=0?"center":"space-between"},function(e){var a=e.childAmount;return a%2==0&&a%3!=0?"21%":"13%"},function(e){var a=e.childAmount;return a%2==0&&a%3!=0?"margin: 0 0.5rem;":null},function(e){return e.theme.media("desktop-small")},function(e){return e.theme.media("desktop-large")}),M=function(){return c.a.createElement(Z,null,c.a.createElement(T,null,c.a.createElement(C,null,"Technologies and utilities I use:"),c.a.createElement(P,{childAmount:"6",className:"padding-responsive-top"},c.a.createElement(W,null)),c.a.createElement(Q,null,"Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted."),c.a.createElement(P,{childAmount:"4",className:"padding-responsive-top"},c.a.createElement(F,null)),c.a.createElement(Q,null,"Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted.")))};a.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{title:"Home",keywords:["gatsby","application","react"]}),c.a.createElement(i.a,{theme:A},c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(p,null,c.a.createElement(z,null),c.a.createElement(M,null),c.a.createElement("div",{style:{height:"130vh"}})))))}},140:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return u}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return m});var n=t(0),c=t.n(n),i=t(4),A=t.n(i),r=t(139),d=t.n(r);t.d(a,"Link",function(){return d.a}),t.d(a,"withPrefix",function(){return r.withPrefix}),t.d(a,"navigate",function(){return r.navigate}),t.d(a,"push",function(){return r.push}),t.d(a,"replace",function(){return r.replace}),t.d(a,"navigateTo",function(){return r.navigateTo});var s=t(144),l=t.n(s);t.d(a,"PageRenderer",function(){return l.a});var o=t(49);t.d(a,"parsePath",function(){return o.a});var p=c.a.createContext({}),m=function(e){return c.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},144:function(e,a,t){var n;e.exports=(n=t(164))&&n.default||n},146:function(e,a,t){},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jakub Woźny - Portfolio",description:" Jakub Woźny front-end developer - portfolio",author:"Jakub Woźny"}}}}},164:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),c=t.n(n),i=t(4),A=t.n(i),r=t(68),d=t(2),s=function(e){var a=e.location,t=d.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},a.default=s},165:function(e,a,t){e.exports=t.p+"static/blocks-ea7e8f8dc5984a8d2185881059c5835e.jpg"},166:function(e){e.exports={data:{html:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADmUlEQVQ4y4WU709TVxjHL5r4YnuxP8nM2i1pe6lYo6+2yZwR2grsB9siL0ayV8Qsxo3EAS9M6mz0hXaZSzewDow/5guZRMj4IZSiHSKT6cYKLefc5+vznHMvNM2S3eTLfc7p5XPO89OhpOvIQ+m4g7bILmN/1b2bUs0t/FuGNcuqsmqseVaWdZiSsT3yLdrdXWxbhs8yBtqi1k41R6g9NomOA0BnC5BuBpIxq1Sz3es6CHtQLOE424wm34jJKYHdi7QLA0u6mj9SLI9FvCax+a1w/G2Fk/ZA/p/TdVC+ctK1bqYP9CIVAS4PeLRSVlScISrNGUHei/xenCX9pEgvz58lHNuv5VB8lBDomcD9gBwRN9C6z6M7Ix7sQ8SSBWHn4TVNFZ9Seegs8MFbcnuNLnPTIwamU+5u3pxEJ8elNaQwes3C1JaPs5jKsxpQtfby8iqW1iq0cfEcQ8NaQsSMIut1uV2LiVkqrhlIGPuRghtp7WF6umzs6QsvMT66BAW9c93xW+K6JEvZW7rvCTBjFqm4EiDVAc99O4zhGw9QWyEsXF7HzTtT+PqbPF9SmzDQ3evAsTDRDvCqAGelNBjowQKtk0rhs88vYnKuhCfDG3j+oIb5x8v4+JMMNiubNsi/FkAWGLj9UEqlytkSIPkuI4jcyuoLXLs6jqmhFyYbhV8eYmnpzyA5wL0bwQ0JKWa0x9Yd/lNrBIo7emvLxvEfwtP7//Ketx264DeqByYNsCIuz9e77Nks/+9D/g0bXJ4SYDZIinf0TcK9Av2+WMLczAzGxsYwMDCATOYC8vk8JiYmkM1msfDoUWMMle0a9wcBHkanKRul3tlLmLxL313JIRwKoaenB319fejv70c0GkWI98LhMEYLBQNUt4e5bML1ZXPc8ZLuHpNpPkG9u1dj4hZyP/1MX/Z+gaHBQXyfy+H6yAh6Tp3CoUQCn3Z3oyOVxHz5D8L9m/BaQ1r6mhll1htB6yXwIfdk6z4Nbr2qjRFVPcKm1qhygYtqvFnhhCyUSvSX1Pdvt4ne369sP7tHnfqG5uFwWoYD5c5rVNY1VpeB51zRjVp7Rvh7jdtwQ1P+kkI6Cp6lgz6ryQmGoz++zph4puNSAsqXZpEvsZXXFlVmTvK3vB78j5noG9Y+wh8VDVh0Mi6z0UrsTn8OtsfK2242wIJJLVPbut916DVpdOlNaSfWOqsidSalIdmkjoMmATgRaQpgfIjzCmlfNyqVjCMkAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/14dd836cb87c034bd63d6bf6471c04f5/c46ac/html.png",srcSet:"/static/14dd836cb87c034bd63d6bf6471c04f5/9d592/html.png 32w,\n/static/14dd836cb87c034bd63d6bf6471c04f5/ae14b/html.png 64w,\n/static/14dd836cb87c034bd63d6bf6471c04f5/c46ac/html.png 128w,\n/static/14dd836cb87c034bd63d6bf6471c04f5/ea569/html.png 192w,\n/static/14dd836cb87c034bd63d6bf6471c04f5/1577d/html.png 256w",sizes:"(max-width: 128px) 100vw, 128px"}}},css:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADiklEQVQ4y2VUS29TRxR2QGLRLvgZlD4gudeGqD+BHUKCZdi4rEsbtQ2LILWblgURXbSi3RDEq42SNiGV0pRUXSBlwUPYTmwnju2bGNsxSa7zcnK5c8/Xc2auHzIjfbpn5s58853HnAhlrYgMWopFkO49InawPnCUstHzlLFHGVnGIcNj5Bj3GRcp13dM9iJtH2lxhF9tIGGHdvQcZawknChQigE5G8hYBmLL2uoZmIusC5FIi6MnVCZkMWNnrOso8sEiH8rYig/5jIBBPCex+esj87GPAu9ZE2LrRgepkWwmZ66j/Amo+kNAXtFHI0nUWNDAAX/3UyRrqrFE9eVvCekPlFyK6lkhvdl0v6nsHJyzwMKJgNw/AphBxJAJoT0CAqUy61RKfAcsfiTqFUpa6SVNFhROH9UxK/JNCyd8bD00ZIEnx5s02K/x3DN2uVKD8/qAGs73QPpDhbyOaZ6W+t4XdefhSMxiigkJW4/IKCIoFSCdLulZ+m4dz/914EO15e78TVg8yWejfqhyQAhHzSTms8tELULgp59nMPPkJbwqYeXRLv57msKtH//iu5QOA7mT7PZJTlaLcFwIs8hFhTAICY2TysdXX99DcqmItZkGNl56yK2W8cWXozhoNIwP7hTIECqpDOZKCOEhZ0sICcblVuSqNRdT4y+Q+sXV4fxnLgHHeRNGlUf9cVMhISsc1q4Qep2EnQplqB1C5dkeuxi0M63eGoX1qW7CfSHMdbosCnUMqSP474zA7GkrbLqcEsL78pwkKdSVlImJCUxPT2PuyRxmZ2cxPz+PsbExKN/rVuiHr2ZSCC9iVZeNJgw2H2q+ZPIVBgcHOWYOhoaGMDw8jJGREcTjcbjuhtHpTnaXTTxCud5jOtMFXdiKNh/oy2vrZVwb+oYV/Y67o3dw9ernbP+GK1c+QyG/rPcEW39KlhVWdGGXuLCPN5/eBaz1y9NTcMeD0GXadPfwZmMbW/zd3jnA7p6n5+GzBLZnRKGPcr8QXo50PmhuDjdQ4eZQu6WgXEWHRfapwi+XEYRQZZ5XSf9TdUUbv/qonAKfva25Fu2edlM0Sm+ixH0wH5X25VPaEigGhVB6TVrYCu95LdVh3X63JzYNTWpf4k153UgFRT7INaZRYHvNrPOeUsvNLrKw0dosuc+4v/Lpe7x5gDHOSDB2GfuMFGOSEaflfp0ALPT2UNbuaXL9Dys4iavht6BeAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/04bf915ca1f768b5c7ce853338dc8910/c46ac/css.png",srcSet:"/static/04bf915ca1f768b5c7ce853338dc8910/9d592/css.png 32w,\n/static/04bf915ca1f768b5c7ce853338dc8910/ae14b/css.png 64w,\n/static/04bf915ca1f768b5c7ce853338dc8910/c46ac/css.png 128w,\n/static/04bf915ca1f768b5c7ce853338dc8910/ea569/css.png 192w,\n/static/04bf915ca1f768b5c7ce853338dc8910/1577d/css.png 256w",sizes:"(max-width: 128px) 100vw, 128px"}}},js:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACCUlEQVQ4y+1TSUtbURR+SQzWRDNpSszwXgKK0roUQeiiq3ZTQURQcNUfUCjd2Yq4cQBFKNqNq6bixp0apLtiodCFOycUx6itGhWhqdapn/ecl/cyaXTRjdDFxx3Ovd893znflU7WZPxLSP8J7xHh8WpAHzORuZ+6vhNhfFmFtsfrFXX9S8x/ryTP5pSsEWBXYdCcLmNHYZxFRSym4O+22E+czZnhn3UZR4sBNNdbUPesAAfzfiYe++jGk5p8lIXy0NJgxcJXL8431cdyEp5uyDhc8MPlMEKSJL4w/dnDc0JZMI/H508fqFnelTAYMKGo0AD8VNDf4WSSvnYncBFC+H0xZr6U4jwq394UjVD2mWC1GFjW6FAJE1ZVmjEupGNf1PMwyI3KqmGqDSj90/Ukoa3IwDWkvcYXFl324wozJkcecvbxVMmpZPGEDQixOZXQbjMgNuvH5Zbo7A8FwwPFqK3O14m/RzxMmiWZbSE6Sf6iA2QNqqFN1JCypfXSNy9wHAJOQmh/Y2fCttd2lp6WYTxBEvnkhs9jwocuFyLDbr4Q8JqYjOQajRKGel2YnyrFyyYrx3veOW4gFIadCLt1KRp6qatHQQx2OrNij8rNiE77uGnXS95T2Kzdbx0shYpOtaNH6WdQjOzT+srGme7NiNpm+jCtKSJTMipJYIgHtP+aFjtQcbYh6/Erlegy8kILUtAAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/f920ef71785591d0a685c200ccbb2357/c46ac/js.png",srcSet:"/static/f920ef71785591d0a685c200ccbb2357/9d592/js.png 32w,\n/static/f920ef71785591d0a685c200ccbb2357/ae14b/js.png 64w,\n/static/f920ef71785591d0a685c200ccbb2357/c46ac/js.png 128w,\n/static/f920ef71785591d0a685c200ccbb2357/ea569/js.png 192w",sizes:"(max-width: 128px) 100vw, 128px"}}},sass:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACrUlEQVQ4y5WVPWgUQRTHd29znknhFUKUU4gn1kEERQTBKAgS0MIuSgp3E1FRURAhhTHaKKQwKsJOzuAHKEIKUSNYKdqk2rugAY2FQUMEBQtBVCzO39ud2ZtwGz8GHu/tvP/838fMvXMca0VBmGhfxXY1ULmqr1rQIp7sJ358fuhkrihQCaBB5gL2nEUWWDclDVQzwGySiZB6VrYFfF3sHUZOIN0Ey9mkJomsqLmGrToguwb4K4Q/CDRHFTPoL/je4CvrytxFyJRnMsS++Kp/rI6eRY5A2pFWErdCPYPwrq7MyyxZZ9jO4empvtE6/etvbku4VLfhNP6JJECYTQioDXkP6QdkhY6eg2RJfLu+yusM5cbnwfboJPKGMLKJ+ajUgjizlTqb1owMS7TgJYTj+tu1WrYQPHPoFmRKWbe+tpr0bwfg/dgV9t4ReNgicclwHbpobj0lBlyljBc6sqf1VjI+C+gU/l5ktT7oY3cTpB35Ca7TPD3snASS3qxCPpPBed1s+7J6AN+UQGAKU30VeQH7kKO1QNXxFfWZwsIe+aqEkKm6rTNcjtzgwGOyH0WG8e1G3iL3pCUEu4x+AGYI+zr2VXzl+D1Zza+w+ZqIl7B/kckG5AmYCfQ5ZAvk3yEogzvD/izYEnoZe9vxX0kHAhH24hxBP0KOAXjIN/0K5ddyH9mjMfMEG+HwU0gvmB+FLr3XkA3wMan7dpyIgxyqYk9iz+F/jr0N+5OUht6JCC5v3XwbHJul5E4+vnFARlQrmx+JvCYeCL4apIJNyHrsInpj0xs12ZlBAUHX9MExubHx+LZ9NeT8YUmLomROeuYX0phYoRs/E7I7CeAO4F0GEMm7CuLZqHXy1kxGQlY7oJy/Lpkq8bQWAt9cWOj889IZyuRokVLSv4HgP0is9RsU4A00H0RcpAAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/7151c930609142acd6a0a82751e1c983/c46ac/sass.png",srcSet:"/static/7151c930609142acd6a0a82751e1c983/9d592/sass.png 32w,\n/static/7151c930609142acd6a0a82751e1c983/ae14b/sass.png 64w,\n/static/7151c930609142acd6a0a82751e1c983/c46ac/sass.png 128w,\n/static/7151c930609142acd6a0a82751e1c983/ea569/sass.png 192w",sizes:"(max-width: 128px) 100vw, 128px"}}},react:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpElEQVQ4y3VUW2xUVRSdCCGGdtqhr6HtODOdx7333NtpgWqjiRpQCY8SoCAQokBiNIrGVyoSEVuKmgApVoEisQ3vFtCQQBA0BIt88U9C/FA/jP4ZTUwMsbRzlmufOTNOm3iTlTlzzt7r7L323ifkeV5IKRWSj+sHQvbjuoJYQbxPHCGGiN3ESqKyzM74CIdwlZPNsr9ziF3EL77vIwiCaZA9nv1K9BIPWrJZRdKZZPLdEUcljr6f95R/X3meYFLWsqfsRbS9S+TKSUsh89cn/jCGSk2QIB8kHtJ+OqU9n3uEn0lr2ZMzsQkK0f5FtE+TjIu5xA//kbkSnU6sf05nnnxK+8k4AiLzxBId37BFe0GgjQ1trQQ/EeFQmbAfmzRpYCJpSejGV9/V9X2DqOs/hOYXXkds23bU7T2M+t0DaHxtp1xSiNzzJmz6A0WyWuJ3ksGk4vP2TEbX7fkUKpNGri6C6qNfInziKnINNfCTCchFKpuxkXp58SXHn8R8IdwsYfNgiqJr5Tq6tSmK+g8GEN+4FYwUVSOXET7+NaI9e5B49nnIZa2NUSjX1SKNFMxGuU0IB80fn9VkZNnOR3W0p98QCKqOXwG1RGLtJlR//hXCJ78x+/Pf7kO28zEplPgWCYeF8KLRz3Un3VybFp1aurqNceXoDSTXbCTJNVSMjSP1zApUnrmOzOOLkVq2ymjqti+QrKZsccaF8JIvhE52yln0sK7Z9wXcBYukgqg4N45k1zrMufkjZt/+Damnl6Pi/PdwFnbAbWtHLW2djk5N37wlvCWEx2zKk+w5pJZ2GdFrDowgfOpb89uyfLWJqPajIVSevY55g6ep8UHaroT4lKU8KoQvm5RlEiiwNK8YzTt4wugU+WwUVcOXUH3sIiJDF9D0Sg8ih8YMkdjOKMobQpgi7tm2YSu0mulo2LWfrZFFW00VIofPmWhz0VpwUlDf+0mpwpRG27aZINxiL562UyKzysZO6ug7e3XzS29JE0OqHt3xISPuRfOLb6LhvX1amt80Nn1sdOfLJyUhM2luUmpSOQ6kQE3bd8j4mdbgJUh0b2Zf7tROxyNSiIJtIbq/ifTMl2aNafAC6X2S6iDOx4GTIWkZfRlVEI9pOTM2tLXV3TDtxSkueLCOhvds+jJaIgEnSOUNZC17PLNp/kNsmkYmXywWKyd1pDeJ0oNqCmajsY+IkF0hVJHMdd2SfiXi8lu4v5DoI74jfra4SfQTHf/jE/oXy7wHD5fbNiAAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/5f9e1c5de55edde91095aa79a65a5d44/c46ac/react.png",srcSet:"/static/5f9e1c5de55edde91095aa79a65a5d44/9d592/react.png 32w,\n/static/5f9e1c5de55edde91095aa79a65a5d44/ae14b/react.png 64w,\n/static/5f9e1c5de55edde91095aa79a65a5d44/c46ac/react.png 128w,\n/static/5f9e1c5de55edde91095aa79a65a5d44/ea569/react.png 192w,\n/static/5f9e1c5de55edde91095aa79a65a5d44/b4f79/react.png 206w",sizes:"(max-width: 128px) 100vw, 128px"}}},styled:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIE/9oADAMBAAIQAxAAAAEqo1wDBQJf/8QAGRAAAQUAAAAAAAAAAAAAAAAAAQACEBEg/9oACAEBAAEFAptOIz//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAVEAEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAQAGPwIQ/wD/xAAaEAEBAAIDAAAAAAAAAAAAAAABEQAQIEFx/9oACAEBAAE/IdgkTvFxExa2Tzh//9oADAMBAAIAAwAAABBY537/xAAWEQADAAAAAAAAAAAAAAAAAAABESD/2gAIAQMBAT8QLj//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QXEMjP//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQICFBUf/aAAgBAQABPxCGhK1KKma8iLaHkwS7ot1hs//Z",aspectRatio:1,src:"/static/e7ed28091a760be9f0ff0b41431c632b/7f319/styled.jpg",srcSet:"/static/e7ed28091a760be9f0ff0b41431c632b/9d95a/styled.jpg 32w,\n/static/e7ed28091a760be9f0ff0b41431c632b/724dc/styled.jpg 64w,\n/static/e7ed28091a760be9f0ff0b41431c632b/7f319/styled.jpg 128w,\n/static/e7ed28091a760be9f0ff0b41431c632b/5e0af/styled.jpg 192w,\n/static/e7ed28091a760be9f0ff0b41431c632b/3f4a5/styled.jpg 256w,\n/static/e7ed28091a760be9f0ff0b41431c632b/2db12/styled.jpg 342w",sizes:"(max-width: 128px) 100vw, 128px"}}}}}},167:function(e){e.exports={data:{gatsby:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4a9773549091c227cd2eb82ccd9c5e3a/c46ac/gatsby.png",srcSet:"/static/4a9773549091c227cd2eb82ccd9c5e3a/9d592/gatsby.png 32w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/ae14b/gatsby.png 64w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/c46ac/gatsby.png 128w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/ea569/gatsby.png 192w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/1577d/gatsby.png 256w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/901c9/gatsby.png 384w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/695e0/gatsby.png 512w",sizes:"(max-width: 128px) 100vw, 128px"}}},webpack:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAESUlEQVQ4y3WVe0xbdRTHyyA+Eo1DNjHrAxZn/MOo/+gfamLM/vAP41RgCGLQ+R4JOhTG2q483WDgura8ykOi2Sb7ZxF1WaaxUNptHYOSIQH6gJZSGCrqWKqM0Xvb4/fc0gIxu8lNz733nM/5ne/vd05lMlwnJgXZCZfApszoFdlOlq1dRo/4mMEtFBo8whuwX4i/R0yKwSPGbRl84gFC3EdmAKjeeSuJ7WZ/5B6Ay41eIvz+iIDGjgXJNiFpegKMGNN0DLwBKibpx8NbNoDzkXWqZYaIIccnwr3HJ8ONnb8TNfsAnRT+Aqi0NUgp7N84upoEWFIsGLAEyC08C2cbg4we3Fhd1x9EXwWp4vQi7TXPEZkY6BKpdVYCuxCTnZDHu8YyTolc3tm2IFHTNJEBMLbbfHTV4BbzFBpbSfpBa432SmhPR4B+4ISmqVhS87wkgxNglQSrG1zBcsXdKFODjNPm6yjLG/F1ztKHj1Rdzn2wxGJXVg6RqmaEtn/e595e1v8B/HORzCHBJoW/AWyAbHug+73xXXLg5QXo9BpA77xoHn9l64FfLIrDDlJVDpJCPSDKD1kFlc5BDE8rsYztqna82RWkfMRkI7YNjGDLTHRbHNj/9U2U6hKWCr+/vuuu/T+9lHHY/rOSAborpABMobaGFdpLElCltTkfKrO+LSs8l2Z0i8McC8YcdN0aBw40z3Cp0aXsHn9xelm/W6W1F8s19ly5emBQWTVMyuoRgu2Xa2wfKbX2vB2HrK4nG5zlZj+Ncay0wtloagLYyhvijdzIOeMvTC/rW82oHWWAA9Bsudqmw22E/TLefaesgAxVI/R4/dDH0HKUY+8EXMrp8e8D8KZSPRDlclU11wC2lQP2qgLPysph1lTYobnIwKI7A2el3f0TwPdQcghBHHhbFSv1nEJj16tqf2U9Vxgoh55PHBv+BCWPtAT+D+xrw6FtxtnK+ta/F8fj38wvrklA1g8rPANgLcMZmIGdl1c6aWeV461WHwXaFySgvyWwDnRKLeUSjpq8kaefahjOT8WxUVZcpcy6CQb2oOTqzKPjpKp2UtpnlrFM3aX9R0ZXnsGZLNZPhkNghKRdLjIvcoPX4aS/i18dPqyyLnAseLjcWojVLqBTziu1Fw2QQsT5PFAx9M/r7TN0weiJ8sraEJuDI2ds8kXSZEcu34pPjZOnlmMtxa3HmnYG6Hyp7UbBtlLr7vs/tTxfcDaY1z1H3U3waVrr6ZPLsdbDxtwngZr8omxffYgb+25keR8Z57mP9RPhqAl93Y72Qv8e7J6nLNa4OSB9i6wNh2XAKjBgUjePL+/6TDRNiQ/A6Ricb7Ou3K/QqFfvCn/Z8dv6FILPKYB2bphUSZuGIpqby07ZMKkfxfPprkWpJXvhV/dNSFqVBfZzmya3Oza2eHJLl35C4KGayIQPyRsyZ+FW4y+gCL/F8fcoOxnPW9bsRPx/79KcjLL/PzkAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/9dbff13cba103364c7a3998d017624a2/c46ac/webpack.png",srcSet:"/static/9dbff13cba103364c7a3998d017624a2/9d592/webpack.png 32w,\n/static/9dbff13cba103364c7a3998d017624a2/ae14b/webpack.png 64w,\n/static/9dbff13cba103364c7a3998d017624a2/c46ac/webpack.png 128w,\n/static/9dbff13cba103364c7a3998d017624a2/ea569/webpack.png 192w",sizes:"(max-width: 128px) 100vw, 128px"}}},git:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACoElEQVQ4y21VPW8TQRC1CEg0SYlokC1AlEgUs/kgFaRA2ouTAKGhQwoN/wEFChokGioo4S8gIZr8ASRHSDQg+fgwOCgY8WGROPjs473d2b2z45NWO7c7++7Nm9m5SqX0pNYUdmKO6DyN0UgTaWG/yrVmYo7qnhsTn9RK3GxaCWCnANTYWZnLv9Znc7y3MGq6F0GbiYyCAYBfVdszU/vmn2sXc+z1cXCPwLBb8B9hSsBw3oUZmMGe0g+chP1Y7Y3O6nz+HQN+WRugDL85ganDSZUuXqY09GmAvO6tL+awXyqTG1h7Ct8u/AY7DtQQVJlKBA36KTMzA2aNXbKx8pfhwulRSee7bi8RH76VCBqYRrDUg20r2D/YmWNizYuoaSKXXOjWDAjaLpjWxkFnWBoRLDF0HMJxwOwC6BbWj2PtGOw71HR3lQmSLIaviaKGYCbKzCiYDBW0/3NtgesPsHYBkmwp09uwX+HcHuZhuz6nJSU1Ct745r/SD8zCYLn8WJtnqWzi8On964vQzTwrFf9G28tyoPK859davmilBCgB1AHC8R78zjAKhPamdLPmvlASK/1Pyy6yLkOusq68FmX9pAQo92Gf+7w8m3/wkjzEuMKK4NpHrlnJMC4HHWvUYAzU2b+vLtDeBIuzKk3OmdkmmGNmZYD9pcrI9bFkGkCRHDgxHMxvsXdC6/S5B5UDrPdKzJaUWCibcH3A1IbwzX6HCbHmSSkJ6x1fDT3PzERmRQ0WVy9cnyobAEsBztTxF95XAHwe9nZJs0E6BubvMtuW9sE0dg/jwtebkDN0MgqaATybBEasynijLDm4RPmidZr1PTMTmQX9QwscbbCuUR4CjYlSzbICTEI0BbNDXXsSUys1HHqHuRvqLGQzrZuR3waf/48jWiZ65GevAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/6934871804ab8097832dbd3c64d4bbf0/c46ac/git.png",srcSet:"/static/6934871804ab8097832dbd3c64d4bbf0/9d592/git.png 32w,\n/static/6934871804ab8097832dbd3c64d4bbf0/ae14b/git.png 64w,\n/static/6934871804ab8097832dbd3c64d4bbf0/c46ac/git.png 128w,\n/static/6934871804ab8097832dbd3c64d4bbf0/ea569/git.png 192w",sizes:"(max-width: 128px) 100vw, 128px"}}},linux:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAbsAAAG7AEedTg1AAAEU0lEQVQ4y22Ua0wcVRTH7wCNhGIsttBE8ZFYwJZUbLsvqE2M8RGb2i9kLXxoalNDYxobP5hqRDQNolVLLMYGjbWFAmkwalu1wC502V0e3d3hUUAKCmnxWYwag5TymJn795w7u9gPTnJy79y59zf/87rC2QfBj0OXguZJ8XkKWbGjD01O3Zp0RI0FR2Rp0REzr9GeZvpWSpbKe/lMguHU7ZEXFTA+30HzUfco4LkCOIfJxoDCCcBN77zOo1OXEw4dXiGWGVp8opQl/lDp/g5wjfABy3AMwnB137Aefu0jubZ4v8xv6LPcIzAcMctwDdtg+nl1Aupgzn9uopJV0KJFm0waJY1y0659Mj87i+VLoSXLvDPD0jNC32KmSWfNwkmGoibh/rKbrIxGS1nMAimQD30+Infv2Ydtj+9A0RPP4N41GRAl5TKPgJ6Ywep4v+kZU9DSBCyFbFS5SR/J2F3pugxsvPArXtz/LKJVuWgu34Z1a++A2FMFrQfI6Takp1+5bLqG1NkpgqZz3Io50LRgsItO2+AeBNb7/8b7ZS7I6jRMvZ6F4vyVEE8fgBYFRMsici8hDoXBKomxlwPZFH+xgRQ7Z9RQmS04dh6hjouYuxpF19en0djYgLSsuyFOfg8RImibGYdKw20zzjNwkt3j2KlEUPzclMENZyfxwqFy8DNvAYGuHvQNXYZ353aINfcj+cI8RDtBfZbM7YVVRDnYomOUY7ig4sbKWCEDKQQbdh/EuaZ6BZz9ZwadwQAisQhqPz3BNQbx/LvQLrHrhhR+KXMjVLf9mGXgop0IqcrENUAxCfyJzY9txy8/TSng3M2bCIZDZEF0hELIXr0KYuOj0IK2QuGTUiO163oxx8BrzkG7/kiddHB2fX+gxPskfp+eVsAbc3MIEbAzHEaoK4gH78mCeGAzkvwE9IOBluhU83HOcrMKqC4NLpeCfsjDvkbMfpiKIy/vwvDYVSwtziNALvdEY/jqba/tcmYehB1HBpqiWwFbWWGp6lHdMNYPQL7TekKiNhk4vQrhV9Jw9IMapTIYG0Lv2WOYqEjHG0+loqLkPmS2/UXxAzSfZQiqTc2PAwxM5UbnS8ATWzKv1+cDtULikzTgsxQshCvw4/gEAl/WYeJILn4uX4GZKvpWIeTeU8chLsJM7mB1cnpFO+5U3eLSLa+L3N6qL5pvfvOx1dD4HAbqiqRxcjXOvLcVGYfqUXDwVQxVZiP6Vg5OHd0pDx9/CZu+iEpyeUnrZXWyTNza0KSy2kONnjMA87YQTNEmcVfLb3Klf16KMJRlfntdprfMSFV/pEx0ECyiYlenYC1SW7664hdrzSN891FvZgRhCB+ZH1ZSG9Vam8kgi95pXRrsZlLvLTB6ktvjdyL1opZY3EK3Md2RU4XjQJZOB+xyUKbxvIusx44ZJaHs/2DLI5lyPz+CdBc1Oqk/d3sAV0jpkuZXan8gUCtnczkBLdASMBrFvwCnzIJcYGDyAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/0ea8700d1f2628d3ca4020934d7a1b5a/c46ac/linux.png",srcSet:"/static/0ea8700d1f2628d3ca4020934d7a1b5a/9d592/linux.png 32w,\n/static/0ea8700d1f2628d3ca4020934d7a1b5a/ae14b/linux.png 64w,\n/static/0ea8700d1f2628d3ca4020934d7a1b5a/c46ac/linux.png 128w,\n/static/0ea8700d1f2628d3ca4020934d7a1b5a/ea569/linux.png 192w,\n/static/0ea8700d1f2628d3ca4020934d7a1b5a/1577d/linux.png 256w",sizes:"(max-width: 128px) 100vw, 128px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-450a03003c918401cdf2.js.map