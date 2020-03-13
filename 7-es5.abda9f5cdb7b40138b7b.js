function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7hUn":function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),r=n("3Pt+"),o=n("6NWb"),c=n("dZIy"),a=n("EDFS"),s=n("tyNb"),u=n("Sy1n"),d=n("z3RD"),l=n("SiX8"),g=n("N11/"),b=n("QIP1"),f=n("7Efn"),p=n("1w6q"),h=n("fXoL"),y=n("oW1M"),v=n("aEDk"),m=n("H+bZ");function k(t,e){if(1&t){var n=h.Ub();h.Tb(0,"div",10),h.Tb(1,"input",11),h.bc("ngModelChange",(function(t){return h.sc(n),e.$implicit.selected=t})),h.Sb(),h.Tb(2,"label",12),h.Ac(3),h.Sb(),h.Sb()}if(2&t){var i=e.$implicit;h.Bb(1),h.jc("id",i.id)("ngModel",i.selected),h.Bb(1),h.jc("for",i.id),h.Bb(1),h.Bc(i.name)}}var j,P=((j=function(){function t(e,n,i){_classCallCheck(this,t),this.modal=e,this.filterBy=n,this.api=i}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,e=!0,n=!1,i=void 0;try{for(var r,o=function(){var e=r.value,n=t.song.categories.find((function(t){return n.category.id===e.id}));e.selected=n&&e.id===n.category.id},c=this.categories[Symbol.iterator]();!(e=(r=c.next()).done);e=!0)o()}catch(a){n=!0,i=a}finally{try{e||null==c.return||c.return()}finally{if(n)throw i}}}},{key:"save",value:function(){var t=this,e=!0,n=!1,i=void 0;try{for(var r,o=function(){var e=r.value,n=t.song.categories.find((function(t){return t.category.id===e.id}));e.selected&&!n?t.api.songCategory.create({song:t.song.id,category:e.id}).subscribe((function(n){n.category=e,t.song.categories.push(n)})):!e.selected&&n&&t.api.songCategory.delete(n.id).subscribe((function(){t.song.categories.splice(t.song.categories.indexOf(n),1)}))},c=this.categories[Symbol.iterator]();!(e=(r=c.next()).done);e=!0)o()}catch(a){n=!0,i=a}finally{try{e||null==c.return||c.return()}finally{if(n)throw i}}this.modal.hide()}},{key:"categoriesFiltered",get:function(){return this.filterBy.transform(this.categories,["name"],this.search)}}]),t}()).\u0275fac=function(t){return new(t||j)(h.Ob(y.a),h.Ob(v.a),h.Ob(m.a))},j.\u0275cmp=h.Ib({type:j,selectors:[["app-song-modal"]],decls:17,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button",1,"close",3,"click"],[1,"modal-body"],[1,"form-group"],["type","text","name","search","autocomplete","off","placeholder","Search",1,"form-control","mb-3",3,"ngModel","ngModelChange"],["class","custom-control custom-checkbox mb-2",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-default","text-dark",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"custom-control","custom-checkbox","mb-2"],["type","checkbox",1,"custom-control-input",3,"id","ngModel","ngModelChange"],[1,"custom-control-label",3,"for"]],template:function(t,e){1&t&&(h.Tb(0,"div",0),h.Tb(1,"h5",1),h.Ac(2),h.Sb(),h.Tb(3,"button",2),h.bc("click",(function(){return e.modal.hide()})),h.Tb(4,"span"),h.Ac(5,"\xd7"),h.Sb(),h.Sb(),h.Sb(),h.Tb(6,"div",3),h.Tb(7,"p"),h.Ac(8,"Select song playlist:"),h.Sb(),h.Tb(9,"div",4),h.Tb(10,"input",5),h.bc("ngModelChange",(function(t){return e.search=t})),h.Sb(),h.Sb(),h.yc(11,k,4,4,"div",6),h.Sb(),h.Tb(12,"div",7),h.Tb(13,"button",8),h.bc("click",(function(){return e.modal.hide()})),h.Ac(14,"Cancel"),h.Sb(),h.Tb(15,"button",9),h.bc("click",(function(){return e.save()})),h.Ac(16,"Save"),h.Sb(),h.Sb()),2&t&&(h.Bb(2),h.Bc(e.song.name),h.Bb(8),h.jc("ngModel",e.search),h.Bb(1),h.jc("ngForOf",e.categoriesFiltered))},directives:[r.b,r.j,r.l,i.l,r.a],styles:[""]}),j),S={prefix:"fas",iconName:"star",icon:[576,512,[],"f005","M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"]},C=n("esdX"),x=n("VMLO"),O=n("ZVzF"),M=n("tube"),_=n("kfsu"),w=n("sGxO"),B=n("CDkz"),T=n("ViGd"),U=n("yAdw"),D=n("lGQG"),A=n("jhN1"),I=n("P3Ni"),F=["player"];function L(t,e){if(1&t&&h.Pb(0,"div",22),2&t){var n=h.dc(2);h.xc("background-image","url("+n.party.image+")",h.Hb)}}function N(t,e){if(1&t&&(h.Tb(0,"span"),h.Ac(1),h.Sb()),2&t){var n=h.dc(2);h.Bb(1),h.Cc(" \u2022 ",n.partySongCount," Songs")}}function z(t,e){if(1&t&&(h.Tb(0,"span"),h.Ac(1),h.Sb()),2&t){var n=h.dc(2);h.Bb(1),h.Cc(" \u2022 ",n.partyUserCount," Members")}}function $(t,e){if(1&t&&(h.Tb(0,"span"),h.Ac(1),h.Sb()),2&t){var n=h.dc(2);h.Bb(1),h.Cc(" \u2022 ",n.djs.length," DJs")}}function H(t,e){if(1&t){var n=h.Ub();h.Tb(0,"button",32),h.bc("click",(function(){h.sc(n);var t=h.dc(4);return t.toggleConnectDj(t.getDj(t.djUser.dj))})),h.Ac(1," Disconnect from "),h.Tb(2,"b"),h.Ac(3),h.Sb(),h.Sb()}if(2&t){var i=h.dc(4);h.Bb(3),h.Bc(i.getPartyUser(i.getDj(i.djUser.dj).user).user.username)}}function W(t,e){1&t&&h.Pb(0,"div",33)}function q(t,e){if(1&t){var n=h.Ub();h.Tb(0,"button",32),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(4).toggleConnectDj(t)})),h.Ac(1),h.Sb()}if(2&t){var i=e.$implicit,r=h.dc(4);h.Fb("active",r.djUser&&r.djUser.dj===i.id),h.Bb(1),h.Cc(" ",r.getPartyUser(i.user).user.account.name," ")}}function J(t,e){if(1&t&&(h.Tb(0,"div",27),h.yc(1,H,4,1,"button",28),h.yc(2,W,1,0,"div",29),h.Tb(3,"h6",30),h.Ac(4,"Current party DJs"),h.Sb(),h.yc(5,q,2,3,"button",31),h.Sb()),2&t){var n=h.dc(3);h.Bb(1),h.jc("ngIf",n.djUser),h.Bb(1),h.jc("ngIf",n.djUser),h.Bb(3),h.jc("ngForOf",n.djs)}}function V(t,e){1&t&&(h.Tb(0,"div",23),h.Tb(1,"button",24),h.Ac(2," Connect to DJ "),h.Pb(3,"span",25),h.Sb(),h.yc(4,J,6,3,"div",26),h.Sb())}function G(t,e){if(1&t&&(h.Tb(0,"span"),h.Ac(1),h.ec(2,"number"),h.Sb()),2&t){var n=h.dc(2);h.Bb(1),h.Bc(h.fc(2,1,n.party.likes))}}function E(t,e){if(1&t){var n=h.Ub();h.Tb(0,"button",14),h.bc("click",(function(){return h.sc(n),h.dc(2).joinParty()})),h.Pb(1,"fa-icon",15),h.Ac(2," Join Party "),h.Sb()}if(2&t){var i=h.dc(2);h.Bb(1),h.jc("fixedWidth",!0)("icon",i.faJoin)}}function Y(t,e){if(1&t){var n=h.Ub();h.Tb(0,"button",14),h.bc("click",(function(){return h.sc(n),h.dc(2).leaveParty()})),h.Pb(1,"fa-icon",15),h.Ac(2," Leave Party "),h.Sb()}if(2&t){var i=h.dc(2);h.Bb(1),h.jc("fixedWidth",!0)("icon",i.faLeave)}}function X(t,e){if(1&t&&(h.Tb(0,"a",34),h.Pb(1,"fa-icon",15),h.Ac(2," Settings "),h.Sb()),2&t){var n=h.dc(2);h.Bb(1),h.jc("fixedWidth",!0)("icon",n.faSettings)}}var K=function(t){return["/user",t]};function R(t,e){if(1&t){var n=h.Ub();h.Tb(0,"div",6),h.Tb(1,"div",7),h.yc(2,L,1,2,"div",8),h.Tb(3,"div"),h.Tb(4,"h1",9),h.Ac(5),h.Sb(),h.Tb(6,"p",10),h.Ac(7),h.Sb(),h.Tb(8,"p",11),h.Tb(9,"a",12),h.Ac(10),h.Sb(),h.yc(11,N,2,1,"span",13),h.yc(12,z,2,1,"span",13),h.yc(13,$,2,1,"span",13),h.Ac(14),h.ec(15,"date"),h.Sb(),h.Tb(16,"button",14),h.bc("click",(function(){return h.sc(n),h.dc().play()})),h.Pb(17,"fa-icon",15),h.Ac(18," Play "),h.Sb(),h.Tb(19,"button",16),h.bc("click",(function(){return h.sc(n),h.dc().toggleDj()})),h.Pb(20,"fa-icon",15),h.Ac(21),h.Sb(),h.yc(22,V,5,0,"div",17),h.Tb(23,"button",18),h.bc("click",(function(){return h.sc(n),h.dc().toggleLikeParty()})),h.Pb(24,"fa-icon",15),h.yc(25,G,3,3,"span",13),h.Sb(),h.Tb(26,"button",19),h.Pb(27,"fa-icon",15),h.Ac(28," Key "),h.Sb(),h.yc(29,E,3,2,"button",20),h.yc(30,Y,3,2,"button",20),h.yc(31,X,3,2,"a",21),h.Sb(),h.Sb(),h.Sb()}if(2&t){var i=h.dc();h.xc("background-image",i.partyCover,h.Hb),h.Bb(2),h.jc("ngIf",i.party.image),h.Bb(3),h.Bc(i.party.name),h.Bb(2),h.Bc(i.party.description),h.Bb(2),h.jc("routerLink",h.kc(34,K,i.party.user.username)),h.Bb(1),h.Bc(i.party.user.account.name),h.Bb(1),h.jc("ngIf",i.partySongCount),h.Bb(1),h.jc("ngIf",i.partyUserCount),h.Bb(1),h.jc("ngIf",i.djs),h.Bb(1),h.Cc(" \u2022 ",h.fc(15,32,i.party.date)," "),h.Bb(3),h.jc("fixedWidth",!0)("icon",i.faPlay),h.Bb(2),h.Fb("btn-warning",i.isPartyDj())("btn-light",!i.isPartyDj()),h.Bb(1),h.jc("fixedWidth",!0)("icon",i.faDj),h.Bb(1),h.Cc(" ",i.isPartyDj()?"Stop DJ":"Start DJ"," "),h.Bb(1),h.jc("ngIf",i.djs&&i.djs.length&&!(1===i.djs.length&&i.isPartyDj())),h.Bb(2),h.Fb("text-danger",i.party.like),h.jc("fixedWidth",!0)("icon",i.faLike),h.Bb(1),h.jc("ngIf",i.party.likes),h.Bb(1),h.jc("popover",i.party.id),h.Bb(1),h.jc("fixedWidth",!0)("icon",i.faKey),h.Bb(2),h.jc("ngIf",!1===i.isPartyMember()),h.Bb(1),h.jc("ngIf",!0===i.isPartyMember()),h.Bb(1),h.jc("ngIf",i.auth.isUser(i.party.user))}}function Z(t,e){if(1&t&&(h.Tb(0,"span",46),h.Ac(1),h.ec(2,"number"),h.Sb()),2&t){var n=h.dc().$implicit;h.Bb(1),h.Bc(h.fc(2,1,n.likes))}}var Q=function(t){return{playlist:t}};function tt(t,e){if(1&t){var n=h.Ub();h.Tb(0,"div",38),h.Tb(1,"div",39),h.Tb(2,"button",40),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(2).toggleLikeCategory(t)})),h.Pb(3,"fa-icon",15),h.yc(4,Z,3,3,"span",41),h.Sb(),h.Sb(),h.Tb(5,"a",42),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(2).deselectCategory(t)})),h.Pb(6,"div",43),h.Tb(7,"div",44),h.Tb(8,"div"),h.Ac(9),h.Sb(),h.Tb(10,"small",45),h.Ac(11),h.Sb(),h.Sb(),h.Sb(),h.Sb()}if(2&t){var i=e.$implicit,r=h.dc(2);h.Bb(3),h.Fb("text-warning",i.like),h.jc("fixedWidth",!0)("icon",r.faLikeCategory),h.Bb(1),h.jc("ngIf",i.likes),h.Bb(1),h.jc("queryParams",h.kc(10,Q,i.id)),h.Bb(1),h.xc("background-image","url("+(i.image||"assets/category.jpg")+")",h.Hb),h.Bb(3),h.Bc(i.name),h.Bb(2),h.Cc("",r.getCategorySongCount(i)," Songs")}}function et(t,e){if(1&t&&(h.Tb(0,"div",35),h.Tb(1,"div",36),h.yc(2,tt,12,12,"div",37),h.Sb(),h.Sb()),2&t){var n=h.dc();h.Bb(2),h.jc("ngForOf",n.party.categories)}}function nt(t,e){if(1&t&&(h.Tb(0,"a",56),h.Pb(1,"fa-icon",57),h.Ac(2),h.Sb()),2&t){var n=e.$implicit,i=h.dc(3);h.jc("queryParams",h.kc(4,Q,n.category.id)),h.Bb(1),h.jc("fixedWidth",!0)("icon",i.faCategory),h.Bb(1),h.Cc(" ",n.category.name," ")}}function it(t,e){if(1&t&&(h.Tb(0,"span",46),h.Ac(1),h.ec(2,"number"),h.Sb()),2&t){var n=h.dc().$implicit;h.Bb(1),h.Bc(h.fc(2,1,n.likes))}}var rt=function(t){return{song:t}};function ot(t,e){if(1&t){var n=h.Ub();h.Tb(0,"div",49),h.Tb(1,"div",50),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(2).play(t)})),h.Sb(),h.Tb(2,"div",51),h.Tb(3,"span",52),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(2).play(t)})),h.Ac(4),h.Sb(),h.Tb(5,"small"),h.Tb(6,"a",12),h.Ac(7),h.Sb(),h.yc(8,nt,3,6,"a",53),h.Sb(),h.Sb(),h.Tb(9,"div",54),h.bc("click",(function(){h.sc(n);var t=e.$implicit;return h.dc(2).toggleLikeSong(t)})),h.Pb(10,"fa-icon",15),h.yc(11,it,3,3,"span",41),h.Sb(),h.Tb(12,"div",55),h.bc("onShown",(function(){return e.$implicit.popover=!0}))("onHidden",(function(){return e.$implicit.popover=!1})),h.Pb(13,"fa-icon",15),h.Sb(),h.Sb()}if(2&t){var i=e.$implicit,r=h.dc(2),o=h.qc(6);h.Fb("active",r.isPlaying(i)),h.Bb(1),h.xc("background-image","url("+r.getSongImage(i)+")",h.Hb),h.Bb(3),h.Bc(i.name),h.Bb(2),h.jc("routerLink",h.kc(23,K,i.user.username)),h.Bb(1),h.Bc(i.user.account.name),h.Bb(1),h.jc("ngForOf",i.categories),h.Bb(1),h.Fb("highlight",i.like)("show-on-hover",!i.likes),h.Bb(1),h.Fb("text-danger",i.like),h.jc("fixedWidth",!0)("icon",r.faLike),h.Bb(1),h.jc("ngIf",i.likes),h.Bb(1),h.jc("popover",o)("outsideClick",!0)("popoverContext",h.kc(25,rt,i))("isOpen",i.popover),h.Bb(1),h.jc("fixedWidth",!0)("icon",r.faOptions)}}function ct(t,e){if(1&t&&(h.Tb(0,"div",47),h.yc(1,ot,14,27,"div",48),h.Sb()),2&t){var n=h.dc();h.Bb(1),h.jc("ngForOf",n.songsFilter)}}function at(t,e){if(1&t){var n=h.Ub();h.Tb(0,"a",59),h.bc("click",(function(){h.sc(n);var t=h.dc().song;return h.dc().editSong(t)})),h.Ac(1,"Playlist"),h.Sb()}}function st(t,e){if(1&t){var n=h.Ub();h.Tb(0,"a",62),h.bc("click",(function(){h.sc(n);var t=h.dc().song;return h.dc().deleteSong(t)})),h.Ac(1," Delete "),h.Sb()}}function ut(t,e){if(1&t){var n=h.Ub();h.Tb(0,"div",58),h.bc("click",(function(){return e.song.popover=!1})),h.Tb(1,"a",59),h.bc("click",(function(){h.sc(n);var t=e.song;return h.dc().play(t)})),h.Ac(2,"Play"),h.Sb(),h.yc(3,at,2,0,"a",60),h.yc(4,st,2,0,"a",61),h.Sb()}if(2&t){var i=e.song,r=h.dc();h.Bb(3),h.jc("ngIf",r.hasSongPermission(i)),h.Bb(1),h.jc("ngIf",r.hasSongPermission(i))}}var dt,lt,gt=[{path:"",component:(dt=function(){function t(e,n,i,r,o,c,a,s){_classCallCheck(this,t),this.auth=e,this.api=n,this.route=i,this.router=r,this.formBuilder=o,this.modalService=c,this.title=a,this.likeService=s,this.faPlay=B.faPlay,this.faDj=M.faHeadphones,this.faLike=_.faHeart,this.faLikeCategory=S,this.faKey=w.faLock,this.faJoin=U.faUserPlus,this.faLeave=T.faSignOutAlt,this.faSettings=C.faCog,this.faOptions=x.faEllipsisV,this.faCategory=O.faFolder,this.djs=[],this.djUsers=[],this.isPlaying=b.a.isPlaying,this.getSongImage=p.a.getSongImage}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.songForm=this.formBuilder.group({source:[""]}),this.auth.user.subscribe((function(e){t.user=e})),this.route.paramMap.subscribe((function(e){e.has("id")&&(t.channel&&f.a.unsubscribe(t.channel),t.cacheParty=new d.a("party-".concat(e.get("id"))),t.cacheSongs=new d.a("songs-".concat(e.get("id"))),t.party=t.cacheParty.data,t.songs=t.cacheSongs.data,t.partyId!==e.get("id")&&(t.party&&t.party.id!==e.get("id")&&(t.party=null,t.songs=null,t.partyUsers=null,t.partySongCount=null),t.partyId=e.get("id"),t.loadParty(!0)))})),this.route.queryParamMap.subscribe((function(){t.updateTitle()}))}},{key:"ngOnDestroy",value:function(){f.a.unsubscribe(this.channel)}},{key:"loadParty",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.api.party.retrieve(this.partyId).subscribe((function(n){t.party=n,t.cacheParty.data=n,t.updateTitle(),e&&(t.loadSongs(),t.loadUsers(),t.loadDjs(),t.loadDjUsers(),t.setupChannel())}))}},{key:"updateTitle",value:function(){if(this.party){var t="".concat(this.party.name);this.categorySelected&&(t="".concat(this.categorySelected.name," - ").concat(t)),this.title.setTitle("".concat(t).concat(u.a.TITLE_SUFFIX))}}},{key:"loadSongs",value:function(){var t=this;this.api.song.list({party:this.party.id}).subscribe((function(e){t.songs=e.results,t.cacheSongs.data=e.results,t.partySongCount=e.count;var n=!0,i=!1,r=void 0;try{for(var o,c=t.songs[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)o.value.party=t.party}catch(a){i=!0,r=a}finally{try{n||null==c.return||c.return()}finally{if(i)throw r}}}))}},{key:"loadUsers",value:function(){var t=this;this.api.partyUser.list({party:this.party.id}).subscribe((function(e){t.partyUsers=e.results,t.partyUserCount=e.count}))}},{key:"loadDjs",value:function(){var t=this;this.api.dj.list({party:this.party.id}).subscribe((function(e){t.djs=e.results,t.setupDj()}))}},{key:"loadDjUsers",value:function(){var t=this;this.api.djUser.list({party:this.party.id}).subscribe((function(e){t.djUsers=e.results,t.setupDj()}))}},{key:"setupChannel",value:function(){var t=this;this.channel=f.a.subscribe("party-".concat(this.partyId));for(var e=0,n=["song-create","song-delete","song-update"];e<n.length;e++){var i=n[e];this.channel.bind(i,(function(){t.loadSongs()}))}for(var r=0,o=["party-update","partycategory-create","partycategory-delete","partycategory-update","songcategory-create","songcategory-delete","songcategory-update"];r<o.length;r++){var c=o[r];this.channel.bind(c,(function(){t.loadParty()}))}for(var a=0,s=["partyuser-create","partyuser-delete"];a<s.length;a++){var u=s[a];this.channel.bind(u,(function(){t.loadUsers()}))}this.channel.bind("party-delete",(function(){alert('Party "'.concat(t.party.name,'" has been deleted!')),t.router.navigateByUrl("/")}));for(var d=function(){var e=p[g];t.channel.bind(e,(function(n){if(!t.auth.isAuth()||t.user.username!==n.user){var i;switch(n.kind){case l.a.PARTY:i=t.party;break;case l.a.CATEGORY:i=t.party.categories.find((function(t){return t.id===Number(n.like)}));break;case l.a.SONG:i=t.songs.find((function(t){return t.id===Number(n.like)}))}"like-create"===e?i.likes++:i.likes--}}))},g=0,p=["like-create","like-delete"];g<p.length;g++)d();this.channel.bind("dj-create",(function(e){t.djs.push(e)})),this.channel.bind("dj-update",(function(e){t.djs[t.djs.findIndex((function(t){return t.id===e.id}))]=e,t.djUser&&t.djUser.dj===e.id&&b.a.updateDj(e,t.songs.find((function(t){return t.id===e.song})))})),this.channel.bind("dj-delete",(function(e){t.djs.splice(t.djs.findIndex((function(t){return t.id===e.id})),1),t.dj&&t.dj.id===e.id&&b.a.stopDj()})),this.channel.bind("djuser-create",(function(e){t.djUsers.push(e),t.setupDj()})),this.channel.bind("djuser-update",(function(e){t.djUsers[t.djUsers.findIndex((function(t){return t.id===e.id}))]=e,t.setupDj()})),this.channel.bind("djuser-delete",(function(e){t.djUsers.splice(t.djUsers.findIndex((function(t){return t.id===e.id})),1),t.user&&t.djUser&&t.djUser.user===t.user.id&&b.a.stopDj()}))}},{key:"setupDj",value:function(){if(this.djs&&this.djs.length&&this.djUser){var t=this.getDj(this.djUser.dj);b.a.updateDj(t,this.songs.find((function(e){return e.id===t.song})))}}},{key:"play",value:function(t){if(b.a.stop(),this.songsFilter.length){t||(t=this.songsFilter[0]);var e=!0,n=!1,i=void 0;try{for(var r,o=this.songsFilter[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var c=r.value;b.a.queue(c)}}catch(a){n=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}b.a.play(t),this.isPartyDj()&&this.api.dj.update(this.dj.id,{song:t.id}).subscribe()}}},{key:"toggleLikeSong",value:function(t){var e=this;this.auth.isAuth()?(this.loading=!0,t.like?this.likeService.unlike(t.like).subscribe((function(){e.loading=!1,t.like=0,t.likes--})):this.likeService.likeSong(t.id).subscribe((function(n){e.loading=!1,t.like=n.id,t.likes++}))):alert("Sign in to make your opinion count.")}},{key:"toggleLikeParty",value:function(){var t=this;this.auth.isAuth()?(this.loading=!0,this.party.like?this.likeService.unlike(this.party.like).subscribe((function(){t.loading=!1,t.party.like=0,t.party.likes--})):this.likeService.likeParty(this.party.id).subscribe((function(e){t.loading=!1,t.party.like=e.id,t.party.likes++}))):alert("Sign in to make your opinion count.")}},{key:"toggleLikeCategory",value:function(t){var e=this;this.auth.isAuth()?(this.loading=!0,t.like?this.likeService.unlike(t.like).subscribe((function(){e.loading=!1,t.like=0,t.likes--})):this.likeService.likeCategory(t.id).subscribe((function(n){e.loading=!1,t.like=n.id,t.likes++}))):alert("Sign in to make your opinion count.")}},{key:"deselectCategory",value:function(t){this.categorySelected===t&&this.router.navigate(["."],{relativeTo:this.route,queryParams:{playlist:null}})}},{key:"getCategorySongCount",value:function(t){return this.songs?this.songs.filter((function(e){return e.categories.some((function(e){return e.category.id===t.id}))})).length:0}},{key:"isPartyMember",value:function(){if(!this.auth.isUser(this.party.user)&&this.partyUsers){var t=[],e=!0,n=!1,i=void 0;try{for(var r,o=this.partyUsers[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var c=r.value;t.push(c.user)}}catch(a){n=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}return this.auth.isAnyUser(t)}}},{key:"isPartyDj",value:function(){var t=this;return this.user&&this.djs&&this.djs.some((function(e){return e.user===t.user.id}))}},{key:"joinParty",value:function(){var t=this;this.api.partyUser.create({party:this.party.id}).subscribe((function(){t.loadUsers(),g.a.add(t.party)}))}},{key:"leaveParty",value:function(){var t=this,e=this.partyUsers.find((function(e){return e.user.id===t.user.id}));this.api.partyUser.delete(e.id).subscribe((function(){t.loadUsers(),g.a.remove(t.party.id)}))}},{key:"deleteSong",value:function(t){var e=this;this.hasSongPermission(t)||alert("You do not have permission to delete this song."),confirm("Are you sure you want to delete this song?")&&this.api.song.delete(t.id).subscribe((function(){e.songs.splice(e.songs.indexOf(t),1)}))}},{key:"addSong",value:function(){var t=this;if(!1===this.isPartyMember())return this.songForm.reset(),alert("You need to be a member of this party to add songs.");this.loading||(this.loading=!0,this.api.song.create(Object.assign({party:this.party.id},this.songForm.value)).subscribe((function(e){t.loading=!1,e.party=t.party,e.categories=[],t.songs.push(e),t.songForm.reset(),t.categorySelected&&t.api.songCategory.create({song:e.id,category:t.categorySelected.id}).subscribe((function(n){n.category=t.categorySelected,t.songs.find((function(t){return t.id===e.id})).categories.push(n)}))})))}},{key:"editSong",value:function(t){this.hasSongPermission(t)||alert("You do not have permission to edit this song."),this.songModal=this.modalService.show(P,{initialState:{song:t,categories:this.party.categories}})}},{key:"hasSongPermission",value:function(t){return!(!1===this.isPartyMember()||!this.auth.isUser(t.user)&&!this.auth.isUser(this.party.user))}},{key:"getAddSongPlaceholder",value:function(){return this.categorySelected?'Add new song to "'.concat(this.categorySelected.name,'" (YouTube)'):"Add new song (YouTube)"}},{key:"getPartyUser",value:function(t){return this.partyUsers.find((function(e){return e.user.id===t}))}},{key:"getDj",value:function(t){if(this.djs)return this.djs.find((function(e){return e.id===t}))}},{key:"toggleDj",value:function(){var t=this;!1!==this.isPartyMember()?this.isPartyDj()?this.api.dj.delete(this.djs.find((function(e){return e.user===t.user.id})).id).subscribe():(this.api.dj.create({party:this.party.id}).subscribe(),this.djUser&&this.toggleConnectDj(this.getDj(this.djUser.dj))):alert("Only party members can be DJs!")}},{key:"toggleConnectDj",value:function(t){this.user&&this.user.id===t.user?alert("You can not connect to yourself!"):this.djUser?this.api.djUser.delete(this.djUser.id).subscribe():(this.api.djUser.create({dj:t.id}).subscribe(),this.isPartyDj()&&this.toggleDj())}},{key:"songsFilter",get:function(){var t=this;return this.categorySelected?this.songs.filter((function(e){return e.categories.some((function(e){return e.category.id===t.categorySelected.id}))})):this.songs}},{key:"categorySelected",get:function(){var t=Number(this.route.snapshot.queryParams.playlist);return this.party&&t?this.party.categories.find((function(e){return e.id===t})):null}},{key:"partyCover",get:function(){return"url(".concat(this.party.cover||"assets/party-cover.jpg",")")}},{key:"dj",get:function(){var t=this;return this.djs.find((function(e){return t.auth.isAuth()&&e.user===t.user.id}))}},{key:"djUser",get:function(){var t=this;return this.djUsers.find((function(e){return t.user&&e.user===t.user.id}))}}]),t}(),dt.\u0275fac=function(t){return new(t||dt)(h.Ob(D.a),h.Ob(m.a),h.Ob(s.a),h.Ob(s.c),h.Ob(r.c),h.Ob(y.b),h.Ob(A.c),h.Ob(I.a))},dt.\u0275cmp=h.Ib({type:dt,selectors:[["app-party"]],viewQuery:function(t,e){var n;1&t&&h.Dc(F,!0),2&t&&h.pc(n=h.cc())&&(e.player=n.first)},decls:7,vars:5,consts:[["class","party",3,"background-image",4,"ngIf"],["class","category-wrapper py-3",4,"ngIf"],[1,"input-group",3,"formGroup","ngSubmit"],["type","text","formControlName","source",1,"form-control","p-4","rounded-0",3,"placeholder"],["class","songs",4,"ngIf"],["songOptions",""],[1,"party"],[1,"container"],["class","cover d-none d-md-block",3,"background-image",4,"ngIf"],[1,"font-weight-bold"],[1,"text-pre"],[1,"mb-2"],[1,"text-light",3,"routerLink"],[4,"ngIf"],[1,"btn","btn-light","btn-sm","mr-2","mt-2",3,"click"],[3,"fixedWidth","icon"],[1,"btn","btn-sm","mr-2","mt-2",3,"click"],["class","btn-group","dropdown","",4,"ngIf"],["title","Like",1,"btn","btn-light","btn-sm","mr-2","mt-2",3,"click"],["containerClass","px-3 mw-100 font-weight-bold text-monospace","triggers","click",1,"btn","btn-light","btn-sm","mr-2","mt-2",3,"popover"],["class","btn btn-light btn-sm mr-2 mt-2",3,"click",4,"ngIf"],["class","btn btn-light btn-sm mr-2 mt-2","routerLink","settings",4,"ngIf"],[1,"cover","d-none","d-md-block"],["dropdown","",1,"btn-group"],["dropdownToggle","",1,"btn","btn-light","btn-sm","mr-2","mt-2","dropdown-toggle"],[1,"caret"],["class","dropdown-menu",4,"dropdownMenu"],[1,"dropdown-menu"],["class","dropdown-item",3,"click",4,"ngIf"],["class","dropdown-divider",4,"ngIf"],[1,"dropdown-header"],["class","dropdown-item",3,"active","click",4,"ngFor","ngForOf"],[1,"dropdown-item",3,"click"],[1,"dropdown-divider"],["routerLink","settings",1,"btn","btn-light","btn-sm","mr-2","mt-2"],[1,"category-wrapper","py-3"],[1,"category-list","pl-4"],["class","category mr-3",4,"ngFor","ngForOf"],[1,"category","mr-3"],[1,"like"],[1,"btn","btn-sm","btn-dark","m-2",3,"click"],["class","ml-1",4,"ngIf"],["routerLink","./","routerLinkActive","bg-primary",1,"card","m-0",3,"queryParams","click"],[1,"card-body","card-body-image"],[1,"card-body"],[1,"text-white-50"],[1,"ml-1"],[1,"songs"],["class","song d-flex align-items-center pl-4",3,"active",4,"ngFor","ngForOf"],[1,"song","d-flex","align-items-center","pl-4"],[1,"cover","mr-3","rounded","action",3,"click"],[1,"info","d-flex","flex-column","text-truncate"],[1,"text-truncate","action",3,"click"],["class","text-light ml-2","routerLink","./",3,"queryParams",4,"ngFor","ngForOf"],[1,"icon","action",3,"click"],["placement","left",1,"icon","action",3,"popover","outsideClick","popoverContext","isOpen","onShown","onHidden"],["routerLink","./",1,"text-light","ml-2",3,"queryParams"],[1,"text-secondary",3,"fixedWidth","icon"],[1,"list-group","list-group-flush",3,"click"],[1,"list-group-item","list-group-item-action","border-0",3,"click"],["class","list-group-item list-group-item-action border-0",3,"click",4,"ngIf"],["class","list-group-item list-group-item-action border-0 text-danger",3,"click",4,"ngIf"],[1,"list-group-item","list-group-item-action","border-0","text-danger",3,"click"]],template:function(t,e){1&t&&(h.yc(0,R,32,36,"div",0),h.yc(1,et,3,1,"div",1),h.Tb(2,"form",2),h.bc("ngSubmit",(function(){return e.addSong()})),h.Pb(3,"input",3),h.Sb(),h.yc(4,ct,2,1,"div",4),h.yc(5,ut,5,2,"ng-template",null,5,h.zc)),2&t&&(h.jc("ngIf",e.party),h.Bb(1),h.jc("ngIf",e.party&&e.party.categories.length),h.Bb(1),h.jc("formGroup",e.songForm),h.Bb(1),h.jc("placeholder",e.getAddSongPlaceholder()),h.Bb(1),h.jc("ngIf",e.songs))},directives:[i.m,r.r,r.k,r.e,r.b,r.j,r.d,s.f,o.a,a.a,c.a,c.d,c.b,i.l,s.e],pipes:[i.e,i.f],styles:[".card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background:rgba(0,0,0,.25)}.party[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-color:#17a2b8;box-shadow:inset 0 0 0 1000px rgba(0,0,0,.5);place-items:flex-end;min-height:450px;padding-bottom:30px}.party[_ngcontent-%COMP%], .party[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.party[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{flex-basis:128px;min-width:128px;height:128px;margin-top:10px;margin-right:30px;background-size:cover;background-position:50%;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);border-radius:.2rem}.category-wrapper[_ngcontent-%COMP%]{overflow:auto}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:160px;flex-basis:160px}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]{margin-bottom:-30px;z-index:1;display:inline-block;width:auto;text-align:right}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:-280px!important;padding:2px 6px}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{overflow:hidden;width:100%}.category-wrapper[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body-image[_ngcontent-%COMP%]{background-position:50%;background-size:cover;height:160px;max-height:160px}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:15px}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.1)}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{opacity:.5}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]:hover.show-on-hover{opacity:1}.songs[_ngcontent-%COMP%]   .song.active[_ngcontent-%COMP%]{background:#222228}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-align:center;flex-basis:60px;max-width:60px;opacity:.25}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .icon.highlight[_ngcontent-%COMP%]{opacity:.75}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .icon.action[_ngcontent-%COMP%]:hover{opacity:1!important}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{flex-basis:48px;max-width:48px;height:48px;background-size:cover;background-position:50%;background-color:#17a2b8}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{opacity:.4}.songs[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%]   .show-on-hover[_ngcontent-%COMP%]{opacity:0}"]}),dt),data:{title:""}}],bt=((lt=function t(){_classCallCheck(this,t)}).\u0275mod=h.Mb({type:lt}),lt.\u0275inj=h.Lb({factory:function(t){return new(t||lt)},imports:[[s.g.forChild(gt)],s.g]}),lt);n.d(e,"PartyModule",(function(){return pt}));var ft,pt=((ft=function t(){_classCallCheck(this,t)}).\u0275mod=h.Mb({type:ft}),ft.\u0275inj=h.Lb({factory:function(t){return new(t||ft)},imports:[[i.c,bt,o.b,a.b,r.n,c.c.forRoot()]]}),ft)},VMLO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[],r="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z";e.definition={prefix:"fas",iconName:"ellipsis-v",icon:[192,512,i,"f142",r]},e.faEllipsisV=e.definition,e.prefix="fas",e.iconName="ellipsis-v",e.width=192,e.height=512,e.ligatures=i,e.unicode="f142",e.svgPathData=r},ZVzF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[],r="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z";e.definition={prefix:"fas",iconName:"folder",icon:[512,512,i,"f07b",r]},e.faFolder=e.definition,e.prefix="fas",e.iconName="folder",e.width=512,e.height=512,e.ligatures=i,e.unicode="f07b",e.svgPathData=r},kfsu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[],r="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z";e.definition={prefix:"fas",iconName:"heart",icon:[512,512,i,"f004",r]},e.faHeart=e.definition,e.prefix="fas",e.iconName="heart",e.width=512,e.height=512,e.ligatures=i,e.unicode="f004",e.svgPathData=r},sGxO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[],r="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z";e.definition={prefix:"fas",iconName:"lock",icon:[448,512,i,"f023",r]},e.faLock=e.definition,e.prefix="fas",e.iconName="lock",e.width=448,e.height=512,e.ligatures=i,e.unicode="f023",e.svgPathData=r},tube:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[],r="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z";e.definition={prefix:"fas",iconName:"headphones",icon:[512,512,i,"f025",r]},e.faHeadphones=e.definition,e.prefix="fas",e.iconName="headphones",e.width=512,e.height=512,e.ligatures=i,e.unicode="f025",e.svgPathData=r}}]);