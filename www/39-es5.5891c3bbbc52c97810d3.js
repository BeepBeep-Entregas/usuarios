(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{PE0G:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("mrSG"),b=u("r28Q"),i=u("ZZ/e");class a{constructor(l,n,u,t,o){this.route=l,this.server=n,this.toastController=u,this.nav=t,this.loadingController=o,this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){this.loadData()}loadData(){return o.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Please wait...",duration:3e3});yield l.present(),this.server.pages().subscribe(n=>{this.data=n.data,l.dismiss()})}))}}class e{}var r=u("pMnS"),c=u("oBZk"),s=u("SVse"),p=u("iInd"),d=t.Bb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Zb(0,[(l()(),t.Db(0,0,null,null,0,"img",[["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Hb(1,"",n.component.data.how_img,""))}))}function h(l){return t.Zb(0,[(l()(),t.Db(0,0,null,null,8,"ion-content",[],null,null,null,c.qb,c.o)),t.Cb(1,49152,null,0,i.y,[t.j,t.p,t.F],null,null),(l()(),t.Db(2,0,null,0,6,"ion-card",[["mode","ios"]],null,null,null,c.nb,c.h)),t.Cb(3,49152,null,0,i.q,[t.j,t.p,t.F],{mode:[0,"mode"]},null),(l()(),t.sb(16777216,null,0,1,null,m)),t.Cb(5,16384,null,0,s.j,[t.Y,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.Db(6,0,null,0,2,"ion-card-content",[],null,null,null,c.jb,c.i)),t.Cb(7,49152,null,0,i.r,[t.j,t.p,t.F],null,null),(l()(),t.Db(8,0,null,0,0,"span",[["style","text-align: justify;"]],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){var u=n.component;l(n,3,0,"ios"),l(n,5,0,u.data.how_img)}),(function(l,n){l(n,8,0,n.component.data.how)}))}function f(l){return t.Zb(0,[(l()(),t.Db(0,0,null,null,11,"ion-header",[],null,null,null,c.vb,c.t)),t.Cb(1,49152,null,0,i.F,[t.j,t.p,t.F],null,null),(l()(),t.Db(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,c.dc,c.bb)),t.Cb(3,49152,null,0,i.Gb,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Db(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.ib,c.g)),t.Cb(5,49152,null,0,i.p,[t.j,t.p,t.F],null,null),(l()(),t.Db(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Pb(l,8).onClick(u)&&o),o}),c.eb,c.c)),t.Cb(7,49152,null,0,i.k,[t.j,t.p,t.F],null,null),t.Cb(8,16384,null,0,i.l,[[2,i.mb],i.Nb],null,null),(l()(),t.Db(9,0,null,0,2,"ion-title",[],null,null,null,c.cc,c.ab)),t.Cb(10,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Xb(11,0,[" "," "])),(l()(),t.sb(16777216,null,null,1,null,h)),t.Cb(13,16384,null,0,s.j,[t.Y,t.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,13,0,u.data)}),(function(l,n){l(n,11,0,n.component.text.how_title)}))}var g=t.zb("app-how",a,(function(l){return t.Zb(0,[(l()(),t.Db(0,0,null,null,1,"app-how",[],null,null,null,f,d)),t.Cb(1,114688,null,0,a,[p.a,b.a,i.Wb,i.Nb,i.Kb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),w=u("s7LF");u.d(n,"HowPageModuleNgFactory",(function(){return N}));var N=t.Ab(e,[],(function(l){return t.Mb([t.Nb(512,t.m,t.lb,[[8,[r.a,g]],[3,t.m],t.D]),t.Nb(4608,s.l,s.k,[t.z,[2,s.t]]),t.Nb(4608,w.n,w.n,[]),t.Nb(4608,i.c,i.c,[t.F,t.g]),t.Nb(4608,i.Mb,i.Mb,[i.c,t.m,t.w]),t.Nb(4608,i.Rb,i.Rb,[i.c,t.m,t.w]),t.Nb(1073742336,s.b,s.b,[]),t.Nb(1073742336,w.m,w.m,[]),t.Nb(1073742336,w.b,w.b,[]),t.Nb(1073742336,i.Ib,i.Ib,[]),t.Nb(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t.Nb(1073742336,e,e,[]),t.Nb(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);