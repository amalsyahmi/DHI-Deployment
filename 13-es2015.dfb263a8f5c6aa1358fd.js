(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{m6Yz:function(t,e,i){"use strict";i.r(e),i.d(e,"ArticleManagementPageModule",(function(){return N}));var n=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),l=i("UTcu"),c=i("fNvp"),s=i("mrSG"),b=i("dfks"),d=i("Buy9"),g=i("fXoL"),h=i("QY0l");let p=(()=>{class t{constructor(t,e,i){this.modalController=t,this.articleService=e,this.toastController=i}ngOnInit(){}dismissModal(){this.modalController.dismiss()}editArticle(){this.articleService.editArticle(this.article).subscribe(()=>Object(s.a)(this,void 0,void 0,(function*(){this.dismissModal(),(yield this.toastController.create({header:`Edit ${this.article.title} success!`,color:"success",duration:2e3})).present()})),()=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:`Fail to edit ${this.article.title}!`,color:"danger",duration:2e3})).present()})))}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(a.R),g.Mb(h.a),g.Mb(a.Y))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-edit-article"]],inputs:{article:"article"},decls:41,vars:6,consts:[["color","tertiary"],["slot","end"],["shape","round","fill","clear",3,"click"],["name","close"],["name","pencil","slot","start"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["name","apps","slot","start"],["name","calendar","slot","start"],["name","link","slot","start"],["name","chatbubble-ellipses","slot","start"],["rows","8",3,"ngModel","ngModelChange"],["lines","none",1,"ion-margin-top"],["slot","end","size","default",3,"click"],["name","save","slot","start"]],template:function(t,e){1&t&&(g.Rb(0,"ion-header"),g.Rb(1,"ion-toolbar",0),g.Rb(2,"ion-title"),g.zc(3),g.Qb(),g.Rb(4,"ion-buttons",1),g.Rb(5,"ion-button",2),g.Zb("click",(function(){return e.dismissModal()})),g.Nb(6,"ion-icon",3),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(7,"ion-content"),g.Rb(8,"ion-grid"),g.Rb(9,"ion-row"),g.Rb(10,"ion-col"),g.Rb(11,"ion-item"),g.Nb(12,"ion-icon",4),g.Rb(13,"ion-label",5),g.zc(14,"Title"),g.Qb(),g.Rb(15,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.title=t})),g.Qb(),g.Qb(),g.Rb(16,"ion-item"),g.Nb(17,"ion-icon",7),g.Rb(18,"ion-label",5),g.zc(19,"Category"),g.Qb(),g.Rb(20,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.category=t})),g.Qb(),g.Qb(),g.Rb(21,"ion-item"),g.Nb(22,"ion-icon",8),g.Rb(23,"ion-label",5),g.zc(24,"Year"),g.Qb(),g.Rb(25,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.year=t})),g.Qb(),g.Qb(),g.Rb(26,"ion-item"),g.Nb(27,"ion-icon",9),g.Rb(28,"ion-label",5),g.zc(29,"Link"),g.Qb(),g.Rb(30,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.link=t})),g.Qb(),g.Qb(),g.Rb(31,"ion-item"),g.Nb(32,"ion-icon",10),g.Rb(33,"ion-label",5),g.zc(34,"Abstract"),g.Qb(),g.Rb(35,"ion-textarea",11),g.Zb("ngModelChange",(function(t){return e.article.abstract=t})),g.Qb(),g.Qb(),g.Rb(36,"ion-item",12),g.Rb(37,"ion-button",13),g.Zb("click",(function(){return e.editArticle()})),g.Nb(38,"ion-icon",14),g.Rb(39,"ion-label"),g.zc(40,"Save"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(3),g.Bc("Edit ",e.article.title,""),g.Ab(12),g.ic("ngModel",e.article.title),g.Ab(5),g.ic("ngModel",e.article.category),g.Ab(5),g.ic("ngModel",e.article.year),g.Ab(5),g.ic("ngModel",e.article.link),g.Ab(5),g.ic("ngModel",e.article.abstract))},directives:[a.q,a.N,a.M,a.f,a.e,a.r,a.n,a.p,a.C,a.m,a.t,a.u,a.s,a.X,o.e,o.h,a.L],styles:[""]}),t})(),u=(()=>{class t{constructor(t,e,i){this.modalController=t,this.articleService=e,this.toastController=i,this.article={_id:"",title:"",category:"",year:"",link:"",abstract:"",doi:""}}ngOnInit(){}dismissModal(){this.modalController.dismiss()}createArticle(){this.articleService.createArticle(this.article).subscribe(()=>Object(s.a)(this,void 0,void 0,(function*(){this.dismissModal(),(yield this.toastController.create({header:`Add article ${this.article.title} success!`,color:"success",duration:2e3})).present()})),()=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:`Fail to add article ${this.article.title}!`,color:"danger",duration:2e3})).present()})))}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(a.R),g.Mb(h.a),g.Mb(a.Y))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-create-article"]],decls:41,vars:5,consts:[["color","tertiary"],["slot","end"],["shape","round","fill","clear",3,"click"],["name","close"],["name","pencil","slot","start"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["name","apps","slot","start"],["name","calendar","slot","start"],["name","link","slot","start"],["name","chatbubble-ellipses","slot","start"],["rows","8",3,"ngModel","ngModelChange"],["lines","none",1,"ion-margin-top"],["slot","end","size","default",3,"click"],["name","save","slot","start"]],template:function(t,e){1&t&&(g.Rb(0,"ion-header"),g.Rb(1,"ion-toolbar",0),g.Rb(2,"ion-title"),g.zc(3,"Add new article"),g.Qb(),g.Rb(4,"ion-buttons",1),g.Rb(5,"ion-button",2),g.Zb("click",(function(){return e.dismissModal()})),g.Nb(6,"ion-icon",3),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(7,"ion-content"),g.Rb(8,"ion-grid"),g.Rb(9,"ion-row"),g.Rb(10,"ion-col"),g.Rb(11,"ion-item"),g.Nb(12,"ion-icon",4),g.Rb(13,"ion-label",5),g.zc(14,"Title"),g.Qb(),g.Rb(15,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.title=t})),g.Qb(),g.Qb(),g.Rb(16,"ion-item"),g.Nb(17,"ion-icon",7),g.Rb(18,"ion-label",5),g.zc(19,"Category"),g.Qb(),g.Rb(20,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.category=t})),g.Qb(),g.Qb(),g.Rb(21,"ion-item"),g.Nb(22,"ion-icon",8),g.Rb(23,"ion-label",5),g.zc(24,"Year"),g.Qb(),g.Rb(25,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.year=t})),g.Qb(),g.Qb(),g.Rb(26,"ion-item"),g.Nb(27,"ion-icon",9),g.Rb(28,"ion-label",5),g.zc(29,"Link"),g.Qb(),g.Rb(30,"ion-input",6),g.Zb("ngModelChange",(function(t){return e.article.link=t})),g.Qb(),g.Qb(),g.Rb(31,"ion-item"),g.Nb(32,"ion-icon",10),g.Rb(33,"ion-label",5),g.zc(34,"Abstract"),g.Qb(),g.Rb(35,"ion-textarea",11),g.Zb("ngModelChange",(function(t){return e.article.abstract=t})),g.Qb(),g.Qb(),g.Rb(36,"ion-item",12),g.Rb(37,"ion-button",13),g.Zb("click",(function(){return e.createArticle()})),g.Nb(38,"ion-icon",14),g.Rb(39,"ion-label"),g.zc(40,"Add"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(15),g.ic("ngModel",e.article.title),g.Ab(5),g.ic("ngModel",e.article.category),g.Ab(5),g.ic("ngModel",e.article.year),g.Ab(5),g.ic("ngModel",e.article.link),g.Ab(5),g.ic("ngModel",e.article.abstract))},directives:[a.q,a.N,a.M,a.f,a.e,a.r,a.n,a.p,a.C,a.m,a.t,a.u,a.s,a.X,o.e,o.h,a.L],styles:[""]}),t})();var m=i("KJTt"),f=i("2MiI"),R=i("lDzL"),Q=i("LmEr");function y(t,e){if(1&t){const t=g.Sb();g.Rb(0,"ion-item",43),g.Nb(1,"ion-text",44),g.Rb(2,"ion-buttons",14),g.Rb(3,"ion-button",45),g.Zb("click",(function(){g.qc(t);const i=e.$implicit;return g.bc().editArticle(i)})),g.Nb(4,"ion-icon",46),g.Rb(5,"ion-label"),g.zc(6,"Edit"),g.Qb(),g.Qb(),g.Rb(7,"ion-button",47),g.Zb("click",(function(){g.qc(t);const i=e.$implicit;return g.bc().deleteArticle(i)})),g.Nb(8,"ion-icon",48),g.Rb(9,"ion-label"),g.zc(10,"Delete"),g.Qb(),g.Qb(),g.Qb(),g.Qb()}if(2&t){const t=e.$implicit;g.Ab(1),g.ic("innerHtml",t.title,g.rc)}}function v(t,e){if(1&t&&g.Nb(0,"span",54),2&t){const t=g.bc().value;g.ic("innerHTML",t,g.rc)}}function A(t,e){if(1&t){const t=g.Sb();g.Rb(0,"span",55),g.Zb("click",(function(){g.qc(t);const e=g.bc().row;return g.bc(2).navigateToArticle(e.link)})),g.Qb()}if(2&t){const t=g.bc().value;g.ic("innerHTML",t,g.rc)}}function M(t,e){if(1&t){const t=g.Sb();g.Rb(0,"span"),g.Rb(1,"ion-list"),g.Rb(2,"ion-item"),g.Rb(3,"ion-button",56),g.Zb("click",(function(){g.qc(t);const e=g.bc().row;return g.bc(2).openAbstract(e)})),g.Nb(4,"ion-icon",57),g.Qb(),g.Rb(5,"ion-button",56),g.Zb("click",(function(){g.qc(t);const e=g.bc().row;return g.bc(2).navigateToAnnotation(e._id)})),g.Nb(6,"ion-icon",58),g.Qb(),g.Qb(),g.Rb(7,"ion-chip",59),g.Rb(8,"ion-label"),g.Rb(9,"small"),g.zc(10),g.Qb(),g.Qb(),g.Qb(),g.Rb(11,"ion-chip",60),g.Rb(12,"ion-label"),g.Rb(13,"small"),g.zc(14),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()}if(2&t){const t=g.bc().row;g.Ab(10),g.Bc("",t.pending," Pending"),g.Ab(4),g.Bc("",t.approved," Approved annotation")}}function C(t,e){if(1&t&&(g.xc(0,v,1,1,"span",51),g.xc(1,A,1,1,"span",52),g.xc(2,M,15,2,"span",53)),2&t){const t=g.bc().$implicit;g.ic("ngIf","Actions"!==t.name&&"Title"!==t.name),g.Ab(1),g.ic("ngIf","Actions"!==t.name&&"Title"===t.name),g.Ab(1),g.ic("ngIf","Actions"===t.name)}}function w(t,e){1&t&&(g.Rb(0,"ngx-datatable-column",49),g.xc(1,C,3,3,"ng-template",50),g.Qb()),2&t&&g.ic("name",e.$implicit.name)("width",200)}const z=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,a,r){this.pagePositionService=t,this.articleService=e,this.modalController=i,this.alertController=n,this.toastController=o,this.loadingController=a,this.router=r,this.pageAtTop=!0,this.page=new b.a,this.rows=new Array,this.searchText="",this.selected=[],this.testInfo=[],this.columns=[{name:"Title"},{name:"Category"},{name:"Year"},{name:"Actions"}],this.page.limit=10}ngOnInit(){this.innerWidth=window.innerWidth}onResize(t){this.innerWidth=window.innerWidth}onScroll(t){this.pageAtTop=this.pagePositionService.isPageAtTop(t)}highlightFilter(t,e){let i=t;try{if(t&&e&&void 0!==typeof t&&void 0!==typeof e&&(t=t.toString().trim(),(e=e.toString().trim()).length>0)){let i=(e=e.replace(",","")).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");i=i.split(" ").filter(t=>t.length>0).join("|");let n=new RegExp(i,"gi");t=t.replace(n,t=>`<b>${t}</b>`)}}catch(n){return console.error(n),i}return t}setPage(t){this.presentLoading(),this.page.offset=t.offset,this.articleService.getArticleList(this.page).subscribe(t=>{this.stopLoading(),this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:this.highlightFilter(t.title,this.searchText),category:t.category,year:t.year,abstract:t.abstract,link:t.link,pending:this.getAnnotationCount(t.annotations_data,"pending"),approved:this.getAnnotationCount(t.annotations_data,"approved")}))},()=>{this.stopLoading()})}search(t){this.presentLoading();const e=t?t.target.value:this.searchText;this.page.offset=0,"title"===this.page.searchBy?(this.page.textSearch=!1,this.page.title=e,this.page.category="",this.page.year="",this.page.abstract=""):"category"===this.page.searchBy?(this.page.textSearch=!1,this.page.title="",this.page.category=e,this.page.year="",this.page.abstract=""):"year"===this.page.searchBy?(this.page.textSearch=!1,this.page.title="",this.page.category="",this.page.year=e,this.page.abstract=""):"abstract"===this.page.searchBy?(this.page.textSearch=!1,this.page.title="",this.page.category="",this.page.year="",this.page.abstract=e):"text"===this.page.searchBy&&(this.page.textSearch=!0,this.page.title=e,this.page.category="",this.page.year="",this.page.abstract=""),this.articleService.getArticleList(this.page).subscribe(t=>{this.stopLoading(),this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:this.highlightFilter(t.title,this.searchText),category:t.category,year:t.year,abstract:t.abstract,link:t.link,pending:this.getAnnotationCount(t.annotations_data,"pending"),approved:this.getAnnotationCount(t.annotations_data,"approved")}))},()=>{this.stopLoading()})}getAnnotationCount(t,e){const i=t.length>0?t.find(t=>t._id==e):null;return null==i?0:i.total}presentLoading(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:"Searching articles..."});yield t.present()}))}stopLoading(){return Object(s.a)(this,void 0,void 0,(function*(){this.loadingController.dismiss()}))}onSort(t){this.page.orderBy=t.column.name.toLowerCase(),this.page.isAscending="asc"===t.newValue,this.articleService.getArticleList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:this.highlightFilter(t.title,this.searchText),category:t.category,year:t.year,abstract:t.abstract,link:t.link,pending:this.getAnnotationCount(t.annotations_data,"pending"),approved:this.getAnnotationCount(t.annotations_data,"approved")}))})}onSelect({}){}openAbstract(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({cssClass:"custom-lg-modal",component:d.a,componentProps:{article:t,searchKey:this.searchText}});return yield e.present()}))}navigateToArticle(t){window.open(t)}navigateToAnnotation(t){this.router.navigate(["/article-management/annotation/"+t])}openCreateArticleModal(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({cssClass:"custom-lg-modal",component:u});yield t.present(),yield t.onWillDismiss().then(()=>{this.ngOnInit()})}))}editArticle(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({cssClass:"custom-lg-modal",component:p,componentProps:{article:t}});yield e.present(),yield e.onWillDismiss().then(()=>{this.ngOnInit()})}))}deleteArticle(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Permenantly delete "+t.title,message:"Are you sure you want to delete this article? This action cannot be undone.",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.articleService.deleteArticle(t).subscribe(()=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:`Delete ${t.title} success!`,color:"success",duration:2e3})).present(),this.ngOnInit()})),()=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:`Fail to delete ${t.title}!`,color:"danger",duration:2e3})).present(),this.ngOnInit()})))}}]});yield e.present()}))}changeResultPerPage(t){this.page.limit=t.detail.value,this.search(!1)}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(m.a),g.Mb(h.a),g.Mb(a.R),g.Mb(a.a),g.Mb(a.Y),g.Mb(a.Q),g.Mb(r.g))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-article-management"]],hostBindings:function(t,e){1&t&&g.Zb("resize",(function(t){return e.onResize(t)}),!1,g.pc)},decls:95,vars:21,consts:[[3,"pageAtTop"],[3,"fullscreen","scrollEvents","ionScroll"],["id","container"],["id","navi"],[1,"circle-1"],["id","infoi"],[1,"ion-no-padding","page-height","ion-margin"],["size","1"],["size","10","size-lg","6"],[1,"home-title"],[1,"home-subtitle"],["size","0","size-md","1"],["size","12","size-md","10"],["lines","none","color","none"],["slot","end"],["color","primary","fill","solid",3,"click"],["name","newspaper","slot","start"],["size","10","size-md","9"],["showCancelButton","never","animated","","placeholder","Enter your search",3,"ngModel","keyup.enter","ngModelChange"],["size","2","size-md","2"],["color","primary","fill","solid",2,"margin-top","10px",3,"click"],["name","search-outline"],[3,"ngModel","ngModelChange"],[2,"margin-left","7vw","margin-right","7vw"],["slot","start","mode","md","item-left","","value","text"],["slot","start","mode","md","item-left","","value","title"],["slot","start","mode","md","item-left","","value","category"],["slot","start","mode","md","item-left","","value","year"],["slot","start","mode","md","item-left","","value","abstract"],["lines","none","color","light",4,"ngFor","ngForOf"],[2,"margin","5px 5px"],["size","5","size-md","7"],["lines","none"],[2,"font-size","12px","color","grey"],["size","7","size-md","3"],["interface","popover","value","10",2,"font-size","12px","color","grey",3,"ionChange"],["value","10"],["value","25"],["value","50"],["value","100"],["rowHeight","auto",1,"material",2,"margin-bottom","20vh",3,"rows","columnMode","headerHeight","footerHeight","externalPaging","count","offset","limit","scrollbarH","selected","selectionType","externalSorting","page","select","sort"],[3,"name","width",4,"ngFor","ngForOf"],[3,"innerWidth"],["lines","none","color","light"],[3,"innerHtml"],["color","warning","fill","solid",3,"click"],["name","pencil","slot","start"],["color","danger","fill","solid",3,"click"],["name","trash","slot","start"],[3,"name","width"],["ngx-datatable-cell-template",""],[3,"innerHTML",4,"ngIf"],["class","article-title","src","#",3,"innerHTML","click",4,"ngIf"],[4,"ngIf"],[3,"innerHTML"],["src","#",1,"article-title",3,"innerHTML","click"],["shape","round","fill","clear",3,"click"],["name","information-circle","color","tertiary"],["name","bookmarks","color","tertiary"],["disabled","true","outline","true","color","warning"],["disabled","true","outline","true","color","success"]],template:function(t,e){1&t&&(g.Rb(0,"ion-header"),g.Nb(1,"app-header",0),g.Qb(),g.Rb(2,"ion-content",1),g.Zb("ionScroll",(function(t){return e.onScroll(t)})),g.Rb(3,"div",2),g.Rb(4,"div",3),g.Nb(5,"span",4),g.Qb(),g.Rb(6,"div",5),g.Rb(7,"ion-grid",6),g.Rb(8,"ion-row"),g.Nb(9,"ion-col",7),g.Rb(10,"ion-col",8),g.Rb(11,"h1",9),g.zc(12,"Article Management"),g.Qb(),g.Rb(13,"p",10),g.zc(14,"Add new article, annotations and more."),g.Qb(),g.Qb(),g.Qb(),g.Rb(15,"ion-row"),g.Nb(16,"ion-col",11),g.Rb(17,"ion-col",12),g.Rb(18,"ion-item",13),g.Rb(19,"ion-buttons",14),g.Rb(20,"ion-button",15),g.Zb("click",(function(){return e.openCreateArticleModal()})),g.Nb(21,"ion-icon",16),g.Rb(22,"ion-label"),g.zc(23,"Add Article"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Nb(24,"ion-col",11),g.Qb(),g.Rb(25,"ion-row"),g.Nb(26,"ion-col",11),g.Rb(27,"ion-col",17),g.Rb(28,"ion-searchbar",18),g.Zb("keyup.enter",(function(t){return e.search(t)}))("ngModelChange",(function(t){return e.searchText=t})),g.Qb(),g.Qb(),g.Rb(29,"ion-col",19),g.Rb(30,"ion-button",20),g.Zb("click",(function(){return e.search(!1)})),g.Nb(31,"ion-icon",21),g.Qb(),g.Qb(),g.Qb(),g.Rb(32,"ion-radio-group",22),g.Zb("ngModelChange",(function(t){return e.page.searchBy=t})),g.Rb(33,"ion-grid",23),g.Rb(34,"ion-row"),g.Rb(35,"ion-col"),g.Rb(36,"ion-item",13),g.Rb(37,"ion-label"),g.zc(38,"Search by:"),g.Qb(),g.Qb(),g.Qb(),g.Rb(39,"ion-col"),g.Rb(40,"ion-item",13),g.Rb(41,"ion-label"),g.zc(42,"Text"),g.Qb(),g.Nb(43,"ion-radio",24),g.Qb(),g.Qb(),g.Rb(44,"ion-col"),g.Rb(45,"ion-item",13),g.Rb(46,"ion-label"),g.zc(47,"Title"),g.Qb(),g.Nb(48,"ion-radio",25),g.Qb(),g.Qb(),g.Rb(49,"ion-col"),g.Rb(50,"ion-item",13),g.Rb(51,"ion-label"),g.zc(52,"Category"),g.Qb(),g.Nb(53,"ion-radio",26),g.Qb(),g.Qb(),g.Rb(54,"ion-col"),g.Rb(55,"ion-item",13),g.Rb(56,"ion-label"),g.zc(57,"Year"),g.Qb(),g.Nb(58,"ion-radio",27),g.Qb(),g.Qb(),g.Rb(59,"ion-col"),g.Rb(60,"ion-item",13),g.Rb(61,"ion-label"),g.zc(62,"Abstract"),g.Qb(),g.Nb(63,"ion-radio",28),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(64,"ion-row"),g.Nb(65,"ion-col",11),g.Rb(66,"ion-col",12),g.xc(67,y,11,1,"ion-item",29),g.Qb(),g.Nb(68,"ion-col",11),g.Qb(),g.Rb(69,"ion-row",30),g.Nb(70,"ion-col",11),g.Rb(71,"ion-col",31),g.Rb(72,"ion-item",32),g.Rb(73,"ion-label",33),g.zc(74),g.Qb(),g.Qb(),g.Qb(),g.Rb(75,"ion-col",34),g.Rb(76,"ion-item",32),g.Rb(77,"ion-label",33),g.zc(78,"Results per Page"),g.Qb(),g.Rb(79,"ion-select",35),g.Zb("ionChange",(function(t){return e.changeResultPerPage(t)})),g.Rb(80,"ion-select-option",36),g.zc(81,"10"),g.Qb(),g.Rb(82,"ion-select-option",37),g.zc(83,"25"),g.Qb(),g.Rb(84,"ion-select-option",38),g.zc(85,"50"),g.Qb(),g.Rb(86,"ion-select-option",39),g.zc(87,"100"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(88,"ion-row"),g.Nb(89,"ion-col",11),g.Rb(90,"ion-col",12),g.Rb(91,"ngx-datatable",40),g.Zb("page",(function(t){return e.setPage(t)}))("select",(function(t){return e.onSelect(t)}))("sort",(function(t){return e.onSort(t)})),g.xc(92,w,2,2,"ngx-datatable-column",41),g.Qb(),g.Qb(),g.Nb(93,"ion-col",11),g.Qb(),g.Qb(),g.Nb(94,"app-footer",42),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(1),g.ic("pageAtTop",e.pageAtTop),g.Ab(1),g.ic("fullscreen",!0)("scrollEvents",!0),g.Ab(26),g.ic("ngModel",e.searchText),g.Ab(4),g.ic("ngModel",e.page.searchBy),g.Ab(35),g.ic("ngForOf",e.selected),g.Ab(7),g.Bc("",e.page.totalArticles," total"),g.Ab(17),g.ic("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("externalPaging",!0)("count",e.page.totalArticles)("offset",e.page.offset)("limit",e.page.limit)("scrollbarH",!0)("selected",e.selected)("selectionType","single")("externalSorting",!0),g.Ab(1),g.ic("ngForOf",e.columns),g.Ab(2),g.ic("innerWidth",e.innerWidth))},directives:[a.q,f.a,a.n,a.p,a.C,a.m,a.t,a.f,a.e,a.r,a.u,a.D,a.X,o.e,o.h,a.A,a.W,a.z,a.U,n.k,a.E,a.F,R.c,Q.a,a.K,R.b,R.a,n.l,a.v,a.l],styles:[".circle-1[_ngcontent-%COMP%]{right:-434px;top:-554px;height:868px;width:868px}.circle-1[_ngcontent-%COMP%], .circle-2[_ngcontent-%COMP%]{position:absolute;background-color:#bbb;border-radius:50%;display:inline-block;background:#6078ea;background:linear-gradient(201deg,#6078ea,#17ead9)}.circle-2[_ngcontent-%COMP%]{left:-200px;top:1200px;height:500px;width:500px}#container[_ngcontent-%COMP%]{position:relative}#infoi[_ngcontent-%COMP%], #navi[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}#infoi[_ngcontent-%COMP%]{z-index:1}.page-height[_ngcontent-%COMP%]{min-height:100vh}.article-title[_ngcontent-%COMP%]{cursor:pointer}.article-title[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),t})()},{path:"annotation/:article-id",canActivate:[l.a,c.a],data:{dataManagerOnly:!0},loadChildren:()=>Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"SmNP")).then(t=>t.DataAnnotationPageModule)}];let x=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(z)],r.i]}),t})();var k=i("iWjc");let N=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[n.c,o.a,a.O,x,R.d,k.a]]}),t})()}}]);