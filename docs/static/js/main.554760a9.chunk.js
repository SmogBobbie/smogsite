(this["webpackJsonpsmog-site"]=this["webpackJsonpsmog-site"]||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a,c,r,l,o=n(0),i=n.n(o),s=n(73),u=n.n(s),m=(n(86),n(87),n(17)),f=n(2),p=n(5),d=n(6),v=n(21),h=n(8),j=n(7),E=n(80),b=Object(E.a)({space:"hnbfrxxvl2gq",accessToken:"z7wi5Nu3oN-SznSjlUeuZiVHPbFTtXoGsPe2ZXy2j4U"}),y=(n(176),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.project.fields,t=e.vimeoUrl.split("/"),n=t[t.length-1];return i.a.createElement("div",{className:"Project"},i.a.createElement("h1",{className:"Project__Title"},e.title),i.a.createElement("div",{class:"Project__Video"},i.a.createElement("iframe",{src:"https://player.vimeo.com/video/".concat(n,"?title=0&byline=0&portrait=0"),width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})),i.a.createElement("div",{class:"Project__Credits"},i.a.createElement("div",{class:"Project__Credits__Column Project__Credits__Label"},i.a.createElement("span",null,"Credits")),i.a.createElement("div",{class:"Project__Credits__Column Project__Credits__List"},i.a.createElement("ul",null,e.credits.map((function(e){return i.a.createElement("li",{key:e.sys.id},e.fields.roll," - ",e.fields.firstName," ",e.fields.lastName)}))))))}}]),n}(o.Component)),_=(n(177),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={projects:a||[],currentProject:0},c.prevProject=c.prevProject.bind(Object(v.a)(c)),c.nextProject=c.nextProject.bind(Object(v.a)(c)),c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;void 0===a&&b.getEntries({content_type:"project"}).then((function(t){t.items.sort((function(e,t){return e.fields.order-t.fields.order})),e.setState({projects:t.items}),a=t.items}))}},{key:"prevProject",value:function(){var e=this.state.currentProject,t=Math.max(e-1,0);this.setState({currentProject:t})}},{key:"nextProject",value:function(){var e=this.state.currentProject,t=Math.min(e+1,this.state.projects.length-1);this.setState({currentProject:t})}},{key:"render",value:function(){var e=this.state,t=e.projects,n=e.currentProject,a=(o.Fragment,n>0&&this.prevProject,t.length>1&&t[n],n<t.length-1&&this.nextProject,i.a.createElement(o.Fragment,null,t.map((function(e,t){return i.a.createElement(y,{project:e,key:t})}))));return i.a.createElement("section",{className:"Work"},a)}}]),n}(o.Component)),O=(n(178),function(){return i.a.createElement("small",{className:"Copyright"},"\xa9 Smog Cinema Group")}),g=(n(179),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={fields:c||[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;void 0===c&&(console.log("fetching"),b.getEntries({content_type:"contact"}).then((function(t){e.setState({fields:t.items}),c=t.items})))}},{key:"render",value:function(){var e=this.state.fields;return console.log(e),i.a.createElement("div",{className:"Contact"},i.a.createElement("div",{className:"Contact__Column Contact__Label"},i.a.createElement("span",null,"Contact")),i.a.createElement("address",{className:"Contact__Column Contact__Info"},i.a.createElement("ul",null,e.map((function(e){return i.a.createElement("li",{key:e.fields.type},i.a.createElement("a",{href:e.fields.url},e.fields.display))})))))}}]),n}(o.Component)),k=(n(180),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={content:r||null},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;void 0===r&&b.getEntry("79QIeJG8JfPFbjEm79utjt").then((function(t){e.setState({content:t.fields.content.content}),r=t.fields.content.content}))}},{key:"render",value:function(){var e=this.state.content;return i.a.createElement("section",{className:"About"},i.a.createElement("div",{className:"About__Text"},e&&e.map((function(e,t){return i.a.createElement("p",{key:t,className:"About__Paragraph"},e.content[0].value)}))),i.a.createElement(g,null))}}]),n}(o.Component)),C=(n(181),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={items:l||[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getEntries({content_type:"feedImage"}).then((function(t){e.setState({items:t.items}),l=t.items}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"Feed"},this.state.items.map((function(e){return i.a.createElement("div",{key:e.sys.id,className:"Feed__Image"},i.a.createElement("img",{src:"https:".concat(e.fields.image.fields.file.url)}))})))}}]),n}(o.Component)),N=(n(182),n(78)),P=n.n(N),w=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("h1",{className:"Home__Text"},"Smog is a film company based in New York."),i.a.createElement("div",{className:"Home__Video--Wrap"},i.a.createElement("video",{className:"Home__Video",autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},i.a.createElement("source",{src:P.a,type:"video/mp4"}))))}}]),n}(o.Component);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var M=i.a.createElement("g",null,i.a.createElement("path",{d:"M-0.2,134.6c0-4.2,2.6-6.8,6.1-6.8c6.1,0,11.5,6.3,21.1,12.4c19.9,12.4,38.5,16.9,62.4,16.9c24.9,0,38.5-9.6,38.5-22.1 c0-14.3-16.2-21.6-48.3-32.4c-22.1-7.5-39-12.2-48.6-18.5C17.4,75,10.9,64.4,10.9,50.6c0-24.4,21.8-42.2,54.7-42.2 c15.7,0,25.3,3.1,29.1,3.1s5.4-1.4,7-4.7c1.4-3.1,3.3-4.7,6.1-4.7c4.2,0,8.2,3.3,13.4,9.4l18.8,21.8c4.5,5.2,7.3,8.9,7.3,12.9 c0,3.8-3.1,6.6-6.8,6.6c-5.4,0-11.3-5.4-21.4-11.5c-12.4-7.5-23.9-11.5-35.7-11.5c-16,0-24.6,5.4-24.6,13.1 c0,12.2,19.5,14.1,52.8,23.9c41.3,12.2,60.5,29.1,60.5,60.5c0,31-25.6,53-71.1,53c-28.2,0-46-5.9-52.8-5.9 c-4.7,0-6.1,11.5-14.1,11.5c-4.9,0-7.7-4-12-10.8L4.5,146.8C1.2,141.6-0.2,137.4-0.2,134.6z"}),i.a.createElement("path",{d:"M216.2,40.2c0.7-2.6,1.4-4.9,1.4-7.3c0-5.6-12.7-5.6-12.7-14.8c0-4.5,3.8-7,10.8-7h44.1c6.1,0,9.2,2.8,9.2,8.2 c0,8-11,8.7-11,16c0,1.9,0.5,4.2,1.6,6.8l22.8,52.3c1.9,4.2,3.8,10.3,5.9,18.3c1.9-7.3,4-13.8,6.8-19.5l23.9-50.7 c1.6-3.5,2.8-6.6,2.8-9.2c0-5.6-12-5.9-12-14.1c0-5.4,3.8-8.2,11-8.2h41.1c7.3,0,11,2.6,11,8c0,3.1-2.1,6.3-4,7.5 c-5.4,3.1-8.9,4.2-8.9,9.9c0,1.4,0.5,3.1,0.9,5.4l23.9,105.8c1.2,5.6,3.8,9.2,8.9,11.7c4.5,2.3,8.4,3.1,8.4,9.6 c0,4.9-4.7,8.9-10.8,8.9h-49.5c-5.9,0-9.4-3.3-9.4-8.4c0-9.2,11.3-10.3,11.3-15c0-1.4-0.2-3.5-0.9-6.8l-11.7-54.2 c-0.7-3.3-1.4-8.7-1.6-16.4c-1.2,5.2-3.1,9.9-5.2,14.5l-35.2,76c-2.8,5.9-4.5,9.4-8.4,9.4c-4.2,0-6.3-3.5-9.4-10.6l-32.6-75.1 c-2.3-5.4-3.8-10.3-4.5-15c-0.5,6.3-1.4,11.5-2.3,15.3l-14.5,56.8c-0.9,3.5-1.4,5.9-1.4,6.8c0,5.9,10.6,5.9,10.6,14.3 c0,5.2-3.8,8.4-10.1,8.4h-35.9c-5.4,0-9.6-3.5-9.6-8.2c0-5.9,2.8-8.2,8.9-10.6c4.5-1.9,6.6-2.3,8.2-8.9L216.2,40.2z"}),i.a.createElement("path",{d:"M416.1,49.6c16.7-25.6,45.8-41.3,75.8-41.3c24.4,0,48.1,9.9,64.8,26.8c17.8,17.8,27,40.1,27,66.2 c0,48.3-34.3,79.5-90.8,79.5c-58.9,0-92.5-29.3-92.5-77.9C400.4,83.9,405.5,65.8,416.1,49.6z M492.4,158c25.3,0,42-20.6,42-57.5 c0-42.7-19-71.3-42-71.3c-12,0-21.8,7.3-30,21.4c-7.3,12.7-12.2,30.3-12.2,48.8C450.1,135.5,467.7,158,492.4,158z"}),i.a.createElement("path",{d:"M629.9,163.4c-26.3-14.5-40.6-38.5-40.6-68.3c0-23.9,9.4-45.3,27.2-61.2c17.8-16.2,43.4-25.6,71.8-25.6 c12.2,0,22.3,2.3,30.3,2.3c7.5,0,7.5-8,14.3-8c4.9,0,6.3,5.9,10.6,16l6.6,15.7c4.2,10.3,6.8,16.9,6.8,19.9c0,3.8-2.6,6.3-5.4,6.3 c-4.7,0-8.7-5.6-16.4-12.4c-14.1-12.4-27.7-18.8-43.4-18.8c-30,0-52.8,25.1-52.8,60.5c0,39.4,22.1,63.6,58,63.6 c14.1,0,19.9-3.8,19.9-13.1V120c0-5.6-1.2-8.2-5.2-10.3c-5.2-2.6-10.6-3.1-10.6-9.6c0-6.8,4.2-9.6,13.4-9.6h44.3 c9.2,0,13.4,2.6,13.4,9.4c0,6.8-5.6,7.3-10.8,9.9c-3.8,1.9-4.9,4.9-4.9,10.3v27.2c0,5.9,1.2,8.4,5.2,10.6 c5.4,2.8,11.3,3.1,11.3,10.1c0,7-4.7,10.1-14.1,10.1h-44.6C680.8,178,653.6,176.6,629.9,163.4z"})),L=function(e){var t=e.svgRef,n=e.title,a=S(e,["svgRef","title"]);return i.a.createElement("svg",x({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 773 186",style:{enableBackground:"new 0 0 773 186"},xmlSpace:"preserve",ref:t},a),n?i.a.createElement("title",null,n):null,M)},z=i.a.forwardRef((function(e,t){return i.a.createElement(L,x({svgRef:t},e))})),F=(n.p,n(183),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.logoClass,t=this.props.fill||"#fff";return i.a.createElement("span",{className:"Logo"},i.a.createElement(m.b,{to:"/"},i.a.createElement(z,{style:{fill:t},className:e})))}}]),n}(o.Component)),I=(n(188),"#697841"),H="#6c00ff",V="#ffb600",T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.location.pathname,t=V;return e.includes("/work")?t=H:e.includes("/info")&&(t=I),i.a.createElement("nav",{className:"Nav ".concat("/"===e&&"Nav--Home")},i.a.createElement(F,{logoClass:"Nav__Logo",fill:t}),i.a.createElement("ul",{className:"Nav__Links"},[{name:"Work",url:"/work"},{name:"Feed",url:"/feed"},{name:"Info",url:"/info"}].map((function(t){return i.a.createElement("li",{key:t.name,className:"Nav__Links__Link"},i.a.createElement(m.b,{className:e.includes(t.url)&&"active",to:t.url},t.name))}))))}}]),n}(o.Component),W=Object(f.f)(T);n(189);var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m.a,{basename:"/"},i.a.createElement(W,null),i.a.createElement(f.c,null,i.a.createElement(f.a,{path:"/work"},i.a.createElement(_,null)),i.a.createElement(f.a,{path:"/info"},i.a.createElement(k,null)),i.a.createElement(f.a,{path:"/feed"},i.a.createElement(C,null)),i.a.createElement(f.a,{path:"/"},i.a.createElement(w,null)))),i.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t){},78:function(e,t,n){e.exports=n.p+"static/media/SMOG_LOOP_16-9.dee44d2c.mp4"},81:function(e,t,n){e.exports=n(190)},86:function(e,t,n){},87:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[81,1,2]]]);
//# sourceMappingURL=main.554760a9.chunk.js.map