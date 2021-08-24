(function(e){function t(t){for(var s,a,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0f618d6e":"23f91f6d","chunk-71542a8a":"df0c33c0","chunk-eb8ab9ae":"31c0fb19"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-0f618d6e":1,"chunk-71542a8a":1,"chunk-eb8ab9ae":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-0f618d6e":"97b6fd69","chunk-71542a8a":"0aba983e","chunk-eb8ab9ae":"37d0b268"}[e]+".css",r=o.p+s,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===s||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-project/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fc2":function(e,t,n){},"1edc":function(e,t,n){},"267e":function(e,t,n){"use strict";var s=n("e9c9"),a=n("3cdc"),r={columns:[{dataIndex:"title",key:"title",slots:{title:"customTitle"}},{dataIndex:"description",key:"description",slots:{title:"customDes"}},{dataIndex:"date",key:"date",slots:{title:"customDate"},scopedSlots:{customRender:"date"}},{dataIndex:"status",key:"status",slots:{title:"customStatus"},scopedSlots:{customRender:"status"}},{key:"action",slots:{title:"customAction"},scopedSlots:{customRender:"action"}}],rows:[{key:1,title:"How to learn ReactJs?",description:"ReactJs is a library of Javascript.",status:"new",date:"2021/08/22 23:05"},{key:2,title:"Street workout everyday",description:"Eat healthy food and do exercises everyday is good for you!",status:"cancel",date:"2021/08/22 23:10"},{key:3,title:"VueJs for beginners",description:"VueJs is one of awesome frameworks with developers.",status:"post",date:"2021/08/22 23:56"}],statusOptions:[{value:s["a"].NEW,label:"listNews.new"},{value:s["a"].CANCEL,label:"listNews.cancel"},{value:s["a"].POST,label:"listNews.post"}],menu:[{index:1,link:a["a"].HOME,icon:"home",name:"sidebar.homepage"},{index:2,link:a["a"].NEWS_LIST,icon:"appstore",name:"sidebar.newsList"},{index:3,link:a["a"].CREATE_NEWS,icon:"plus",name:"sidebar.createNews"},{index:4,link:a["a"].PAGE_404,icon:"question",name:"sidebar.page404"}],user:{username:"iist",password:"1234"}};t["a"]=r},"354d":function(e,t,n){"use strict";n("da1d")},"3cdc":function(e,t,n){"use strict";var s={HOME:"/dashboard",NEWS_LIST:"/news",CREATE_NEWS:"/news/create",EDIT_NEWS:"/news/edit/:id",PAGE_404:"*",LOGIN:"/login"};t["a"]=s},"3dfc":function(e,t,n){e.exports=n.p+"img/404.9736f557.png"},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},5532:function(e,t,n){"use strict";n("0fc2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isLoggedIn?n("div",{staticClass:"wrapper"},[n("Header"),n("a-spin",{attrs:{spinning:e.spinning}},[n("div",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("Sidebar")],1),n("div",{staticClass:"content"},[n("router-view")],1)])])],1):n("div",{staticClass:"auth-wrapper"},[n("router-view")],1)])},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("a-page-header",{attrs:{title:e.$t("vueProject"),"back-icon":"false"}},[n("template",{slot:"extra"},e._l(e.languages,(function(t){return n("a-button",{key:t.language,class:{active:e.chosenLanguage===t.language},on:{click:function(n){return e.changeLocale(t.language)}}},[n("flag",{attrs:{iso:t.flag,squared:!1}})],1)})),1)],2)],1)},i=[],o=n("d3a4"),u={name:"Header",data:function(){return{languages:[{flag:"us",language:"en"},{flag:"vn",language:"vi"}],chosenLanguage:o["a"].locale}},methods:{changeLocale:function(e){var t=this;o["a"].locale!==e&&(this.$store.dispatch("setSpinning",!0),setTimeout((function(){t.$store.dispatch("setSpinning",!1),o["a"].locale=e,t.chosenLanguage=e,t.$store.dispatch("setLanguage",e)}),500))}}},l=u,d=(n("ae17"),n("2877")),f=Object(d["a"])(l,c,i,!1,null,null,null),m=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("h4",[e._v(e._s(e.$t("sidebar.title")))]),n("ul",e._l(e.data,(function(t){return n("li",{key:t.index},[n("router-link",{attrs:{to:t.link,exact:""}},[n("a-icon",{attrs:{type:t.icon}}),n("span",[e._v(e._s(e.$t(t.name)))])],1)],1)})),0),n("a-button",{on:{click:e.logOut}},[e._v("Logout")])],1)},h=[],p=n("1da1"),g=(n("96cf"),n("267e")),j=n("3cdc"),v={name:"Sidebar",data:function(){return{data:g["a"].menu}},methods:{logOut:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logOut");case 2:e.$router.push(j["a"].LOGIN);case 3:case"end":return t.stop()}}),t)})))()}}},w=v,k=(n("5532"),Object(d["a"])(w,b,h,!1,null,"94fc6b78",null)),y=k.exports,E={name:"App",components:{Header:m,Sidebar:y},computed:{spinning:function(){return this.$store.state.spinning},isLoggedIn:function(){return console.log(this.$store.getters.isAuthenticated),this.$store.getters.isAuthenticated}}},T=E,N=(n("5c0b"),Object(d["a"])(T,a,r,!1,null,null,null)),_=N.exports,x=(n("a434"),n("d81d"),n("2f62"));s["a"].use(x["a"]);var O=new x["a"].Store({state:{news:g["a"].rows,spinning:!1,language:"en",user:null},mutations:{createNews:function(e,t){e.news.unshift(t)},deleteNews:function(e,t){e.news.splice(t,1)},setSpinning:function(e,t){e.spinning=t},setLanguage:function(e,t){e.language=t},saveUser:function(e,t){e.user=t},logOut:function(e){e.user=null}},getters:{indexLastItem:function(e){return Math.max.apply(null,e.news.map((function(e){return e.key})))},isAuthenticated:function(e){return!!e.user},userInfo:function(e){return e.user}},actions:{createNews:function(e,t){var n=e.commit;n("createNews",t)},deleteNews:function(e,t){var n=e.commit;n("deleteNews",t)},setSpinning:function(e,t){var n=e.commit;n("setSpinning",t)},setLanguage:function(e,t){var n=e.commit;n("setLanguage",t)},saveUser:function(e,t){return Object(p["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=e.commit,s("saveUser",t.username);case 2:case"end":return n.stop()}}),n)})))()},logOut:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,s=null,n("logOut",s);case 3:case"end":return t.stop()}}),t)})))()}}}),C=O,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v(" "+e._s(e.$t("home"))+" ")])},A=[],P={name:"Home"},z=P,I=(n("a1ee"),Object(d["a"])(z,L,A,!1,null,"62c9e389",null)),D=I.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-404"},[s("img",{attrs:{src:n("3dfc"),alt:"404"}})])}],H={name:"Page404"},R=H,q=(n("354d"),Object(d["a"])(R,$,M,!1,null,"1c6e3d2a",null)),U=q.exports;s["a"].use(S["a"]);var W=[{path:j["a"].HOME,name:"Home",component:D,meta:{requiresAuth:!0}},{path:j["a"].NEWS_LIST,name:"News list",component:function(){return n.e("chunk-71542a8a").then(n.bind(null,"21d8"))},meta:{requiresAuth:!0}},{path:j["a"].CREATE_NEWS,name:"Create news",component:function(){return n.e("chunk-0f618d6e").then(n.bind(null,"7b54"))},meta:{requiresAuth:!0}},{path:j["a"].EDIT_NEWS,name:"Edit news",component:function(){return n.e("chunk-0f618d6e").then(n.bind(null,"7b54"))},meta:{requiresAuth:!0}},{path:j["a"].PAGE_404,name:"Page 404",component:U,meta:{requiresAuth:!0}},{path:j["a"].LOGIN,name:"Login",component:function(){return n.e("chunk-eb8ab9ae").then(n.bind(null,"83c9"))},meta:{guest:!0}}],B=new S["a"]({mode:"history",routes:W});B.beforeEach((function(e,t,n){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(C.getters.isAuthenticated)return void n();n(j["a"].LOGIN)}else n()}));var G=B,J=n("f23d"),V=(n("202f"),n("d61f"));s["a"].config.productionTip=!1,s["a"].use(J["a"]),s["a"].use(V["a"]),new s["a"]({store:C,router:G,i18n:o["a"],render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a1ee:function(e,t,n){"use strict";n("1edc")},ae17:function(e,t,n){"use strict";n("bba7")},bba7:function(e,t,n){},d3a4:function(e,t,n){"use strict";var s=n("2b0e"),a=n("a925"),r={vueProject:"Vue Project",sidebar:{title:"Menu",homepage:"Homepage",newsList:"List of news",createNews:"Create news",page404:"Page 404"},home:"Welcome to my Vue Project!",listNews:{action:"Action",createBtn:"Create news",list:"List of news",title:"Title",description:"Description",date:"Date",status:"Status",actionBtn:"Action",edit:"Edit",delete:"Delete",new:"New",cancel:"Cancelled",post:"Posted",deleteItem:"Delete item",deleteContent:"Are you sure to delete this item?"},button:{yes:"Yes",no:"No",create:"Create",cancel:"Cancel",edit:"Update"},createNews:{title:"Create news",editTitle:"Edit news",titleText:"Title",description:"Description",status:"Status",cancelText:"Are you sure to cancel your action?",noTitle:"Title must not blank!",noDes:"Description must not blank!",successAdd:"A news is created successfully!",successEdit:"News is edited successfully!"},login:{title:"Access to system",username:"Username",password:"Password",noUser:"Username must not blank!",noPass:"Password must not blank!",submit:"Login",wrong:"Username or password is wrong!"}},c=r,i={vueProject:"Dự án Vue",sidebar:{title:"Mục lục",homepage:"Trang chủ",newsList:"Danh sách tin tức",createNews:"Tạo tin tức",page404:"Trang 404"},home:"Chào mừng đến với dự án Vue của mình!",listNews:{action:"Thanh tác vụ",createBtn:"Tạo tin tức",list:"Danh sách tin tức",title:"Tiêu đề",description:"Mô tả",date:"Ngày tạo",status:"Trạng thái",actionBtn:"Hành động",edit:"Chỉnh sửa",delete:"Xóa",new:"Tạo mới",cancel:"Hủy đăng tin",post:"Đã đăng tin",deleteItem:"Xóa tin tức",deleteContent:"Bạn có chắc muốn xóa tin tức này?"},button:{yes:"Đồng ý",no:"Hủy bỏ",create:"Tạo mới",cancel:"Hủy bỏ",edit:"Cập nhật"},createNews:{title:"Tạo tin tức mới",editTitle:"Chỉnh sửa tin tức",titleText:"Tiêu đề",description:"Mô tả",status:"Trạng thái",cancelText:"Bạn có chắc muốn hủy hành động?",noTitle:"Tiêu đề không được để trống!",noDes:"Mô tả không được để trống!",successAdd:"Tạo mới 1 tin tức thành công!",successEdit:"Cập nhật 1 tin tức thành công!"},login:{title:"Truy cập hệ thống",username:"Tên đăng nhập",password:"Mật khẩu",noUser:"Tên đăng nhập không được để trống!",noPass:"Mật khẩu không được để trống!",submit:"Đăng nhập",wrong:"Tên đăng nhập hoặc mật khẩu không đúng!"}},o=i;s["a"].use(a["a"]);var u={en:c,vi:o},l=new a["a"]({locale:"en",fallbackLocale:"en",messages:u});t["a"]=l},da1d:function(e,t,n){},e9c9:function(e,t,n){"use strict";var s={NEW:"new",CANCEL:"cancel",POST:"post"};t["a"]=s}});
//# sourceMappingURL=app.5e9cba2a.js.map