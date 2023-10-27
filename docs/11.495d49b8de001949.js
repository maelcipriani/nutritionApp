"use strict";(self.webpackChunknutritionAppFrontend=self.webpackChunknutritionAppFrontend||[]).push([[11],{11:(Et,M,a)=>{a.r(M),a.d(M,{MenusComponent:()=>Dt});var t=a(5879),m=a(6814),D=a(7417);function Z(e,l){if(1&e&&(t.TgZ(0,"div",2)(1,"span",3),t._uU(2,"Petit-d\xe9jeuners"),t.qZA(),t._UZ(3,"app-recipes-list",4),t.qZA()),2&e){const i=t.oxw();t.xp6(3),t.Q6J("recipes",i.menu.breakfasts)}}function E(e,l){if(1&e&&(t.TgZ(0,"div",2)(1,"span",3),t._uU(2,"Repas"),t.qZA(),t._UZ(3,"app-recipes-list",4),t.qZA()),2&e){const i=t.oxw();t.xp6(3),t.Q6J("recipes",i.menu.meals)}}function N(e,l){if(1&e&&(t.TgZ(0,"div",2)(1,"span",3),t._uU(2,"Collations"),t.qZA(),t._UZ(3,"app-recipes-list",4),t.qZA()),2&e){const i=t.oxw();t.xp6(3),t.Q6J("recipes",i.menu.collations)}}let U=(()=>{class e{constructor(){this.openShoppingListDialog=new t.vpe}static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu-details"]],inputs:{menu:"menu"},outputs:{openShoppingListDialog:"openShoppingListDialog"},standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"flex","flex-col","gap-6"],["class","flex flex-col gap-2",4,"ngIf"],[1,"flex","flex-col","gap-2"],[1,"text-xl","font-semibold"],[3,"recipes"]],template:function(c,d){1&c&&(t.TgZ(0,"div",0),t.YNc(1,Z,4,1,"div",1),t.YNc(2,E,4,1,"div",1),t.YNc(3,N,4,1,"div",1),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngIf",null==d.menu||null==d.menu.breakfasts?null:d.menu.breakfasts.length),t.xp6(1),t.Q6J("ngIf",null==d.menu||null==d.menu.meals?null:d.menu.meals.length),t.xp6(1),t.Q6J("ngIf",null==d.menu||null==d.menu.collations?null:d.menu.collations.length))},dependencies:[m.ez,m.O5,D.h]})}return e})();var s=a(95);class B extends s.cw{get breakfastsCount(){return this.controls.breakfastsCount}get mealsCount(){return this.controls.mealsCount}get collationsCount(){return this.controls.collationsCount}constructor(){super({breakfastsCount:new s.NI(null),mealsCount:new s.NI(null),collationsCount:new s.NI(null)})}toMenuCreation(){return{breakfasts_count:this.breakfastsCount.value??void 0,meals_count:this.mealsCount.value??void 0,collations_count:this.collationsCount.value??void 0}}}var b=a(9397),v=a(9157),F=a(2032),_=a(2296);let R=(()=>{class e{transform(i){if(!i||0===i.length)return null;let c=0,d=0,n=0,o=0;return i.forEach(h=>{c+=Number(h.totalCalories),d+=Number(h.totalProteins),n+=Number(h.totalLipids),o+=Number(h.totalCarbohydrates)}),[`${c.toFixed(2)} kcal`,`Proteins: ${d.toFixed(2)}g `,`Lipids: ${n.toFixed(2)}g`,`Carbohydrates: ${o.toFixed(2)}g`]}static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275pipe=t.Yjl({name:"nutritionSummary",type:e,pure:!0,standalone:!0})}return e})();function Q(e,l){if(1&e&&(t.TgZ(0,"span",15),t._uU(1),t.qZA()),2&e){const i=l.$implicit;t.xp6(1),t.Oqu(i)}}function j(e,l){if(1&e&&(t.TgZ(0,"span",15),t._uU(1),t.qZA()),2&e){const i=l.$implicit;t.xp6(1),t.Oqu(i)}}function J(e,l){if(1&e&&(t.TgZ(0,"span",15),t._uU(1),t.qZA()),2&e){const i=l.$implicit;t.xp6(1),t.Oqu(i)}}let P=(()=>{class e{constructor(){this.openShoppingListDialog=new t.vpe}emitOpenShoppingListDialog(i){this.openShoppingListDialog.emit(i)}static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu-card"]],inputs:{menu:"menu"},outputs:{openShoppingListDialog:"openShoppingListDialog"},standalone:!0,features:[t.jDz],decls:42,vars:19,consts:[[1,"rounded-xl","flex","items-stretch"],[1,"flex","flex-col","p-6","gap-8"],[1,"flex","flex-col"],[1,"text-lg","font-semibold"],[1,"text-sm","mb-2","font-medium"],["mat-raised-button","","color","primary",3,"click"],[1,"fa-solid","fa-clipboard-list"],[1,"flex","gap-1","items-center","text-md","font-medium"],[1,"fa-solid","fa-mug-saucer"],[1,"fa-solid","fa-burger"],[1,"fa-solid","fa-apple-whole"],[1,"flex","flex-col","flex-1","p-6","gap-8","border-l-2","border-gray-300","items-center"],[1,"flex","items-center","gap-1","font-semibold","text-xl"],[1,"flex","gap-1","flex-col","items-center"],["class","text-md font-medium",4,"ngFor","ngForOf"],[1,"text-md","font-medium"]],template:function(c,d){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"span",4),t._uU(7,"Ma\xebl Cipriani"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return d.emitOpenShoppingListDialog(d.menu.id)}),t._UZ(9,"i",6),t._uU(10," Liste de courses "),t.qZA()(),t.TgZ(11,"div",2)(12,"div",7),t._UZ(13,"i",8),t._uU(14),t.qZA(),t.TgZ(15,"div",7),t._UZ(16,"i",9),t._uU(17),t.qZA(),t.TgZ(18,"div",7),t._UZ(19,"i",10),t._uU(20),t.qZA()()(),t.TgZ(21,"div",11)(22,"div",12),t._UZ(23,"i",8),t._uU(24),t.qZA(),t.TgZ(25,"div",13),t.YNc(26,Q,2,1,"span",14),t.ALo(27,"nutritionSummary"),t.qZA()(),t.TgZ(28,"div",11)(29,"div",12),t._UZ(30,"i",9),t._uU(31),t.qZA(),t.TgZ(32,"div",13),t.YNc(33,j,2,1,"span",14),t.ALo(34,"nutritionSummary"),t.qZA()(),t.TgZ(35,"div",11)(36,"div",12),t._UZ(37,"i",10),t._uU(38),t.qZA(),t.TgZ(39,"div",13),t.YNc(40,J,2,1,"span",14),t.ALo(41,"nutritionSummary"),t.qZA()()()),2&c&&(t.xp6(4),t.hij("Cr\xe9\xe9 le ",t.xi3(5,10,d.menu.createdAt,"dd/MM/YYY"),""),t.xp6(10),t.hij(" ",d.menu.breakfasts.length," Petit(s) d\xe9jeuner(s) "),t.xp6(3),t.hij("",d.menu.meals.length," Repas "),t.xp6(3),t.hij(" ",d.menu.collations.length," Collation(s) "),t.xp6(4),t.hij(" ",d.menu.breakfasts.length,""),t.xp6(2),t.Q6J("ngForOf",t.lcZ(27,13,d.menu.breakfasts)),t.xp6(5),t.hij(" ",d.menu.meals.length,""),t.xp6(2),t.Q6J("ngForOf",t.lcZ(34,15,d.menu.meals)),t.xp6(5),t.hij(" ",d.menu.collations.length,""),t.xp6(2),t.Q6J("ngForOf",t.lcZ(41,17,d.menu.collations)))},dependencies:[m.ez,m.sg,m.uU,_.ot,_.lW,R]})}return e})();function Y(e,l){if(1&e){const i=t.EpF();t.TgZ(0,"div",2)(1,"app-menu-card",3),t.NdJ("openShoppingListDialog",function(d){t.CHM(i);const n=t.oxw();return t.KtG(n.emitOpenShoppingListDialog(d))}),t.qZA()()}if(2&e){const i=l.$implicit;t.xp6(1),t.Q6J("menu",i)}}let q=(()=>{class e{constructor(){this.openShoppingListDialog=new t.vpe}emitOpenShoppingListDialog(i){this.openShoppingListDialog.emit(i)}static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-menus-list"]],inputs:{menus:"menus"},outputs:{openShoppingListDialog:"openShoppingListDialog"},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"flex","flex-col","gap-3"],["class","rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out",4,"ngFor","ngForOf"],[1,"rounded","overflow-hidden","shadow-lg","bg-white","hover:shadow-xl","transition-shadow","duration-300","ease-in-out"],[3,"menu","openShoppingListDialog"]],template:function(c,d){1&c&&(t.TgZ(0,"div",0),t.YNc(1,Y,2,1,"div",1),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngForOf",d.menus))},dependencies:[m.ez,m.sg,P]})}return e})();var g=a(7700),p=(a(2495),a(2831),a(3680)),C=(a(7394),a(3019),a(8645),a(7131));let W=(()=>{class e{static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[p.BQ,p.BQ]})}return e})();a(7849),a(8337),a(6028),a(9773);let Ct=(()=>{class e{static#t=this.\u0275fac=function(c){return new(c||e)};static#i=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[C.Q8,m.ez,p.BQ,p.si,p.us,W]})}return e})();var At=a(6452),w=a(9796);class y{constructor(l,i){this.shoppingList=l,this.totalPrice=i}static fromJson(l){return new y(l.shopping_list.map(i=>w.F.fromJson(i)),l.total_price)}}function It(e,l){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.TgZ(3,"span",8),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",9)(7,"span",10),t._uU(8),t.qZA(),t.TgZ(9,"span",11),t._uU(10),t.ALo(11,"currency"),t.qZA()()()),2&e){const i=l.$implicit,c=t.oxw();t.xp6(2),t.Q6J("src",i.item.image,t.LSH),t.xp6(2),t.Oqu(t.lcZ(5,5,i.item.name)),t.xp6(4),t.AsE("",i.quantity,"",i.item.type===c.ItemType.WEIGHT?"g":"p.",""),t.xp6(2),t.Oqu(t.xi3(11,7,i.totalPrice,"EUR"))}}let zt=(()=>{class e{constructor(i){this.data=i,this.shoppingList=(0,t.tdS)(null),this.ItemType=At.q,console.log(i),this.shoppingList.set(i)}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(g.WI))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list-dialog"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:[["mat-dialog-title",""],[1,"flex","flex-col","items-end","gap-4"],["class","flex justify-between w-full rounded-xl shadow-xl p-6",4,"ngFor","ngForOf"],[1,"text-2xl","font-bold","text-black","mt-8"],["mat-button","","mat-dialog-close",""],[1,"flex","justify-between","w-full","rounded-xl","shadow-xl","p-6"],[1,"flex","gap-4","items-center"],["alt","",1,"rounded-full","w-20","aspect-square","object-cover",3,"src"],[1,"text-xl","text-black","font-semibold"],[1,"flex","gap-2","items-center"],[1,"text-xl","font-semibold"],[1,"text-black","pl-2","border-l-2","text-xl","font-semibold"]],template:function(c,d){1&c&&(t.TgZ(0,"h1",0),t._uU(1,"Liste de courses"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"div",1),t.YNc(4,It,12,10,"div",2),t.TgZ(5,"span",3),t._uU(6),t.ALo(7,"currency"),t.qZA()()(),t.TgZ(8,"mat-dialog-actions")(9,"button",4),t._uU(10,"Fermer"),t.qZA()()),2&c&&(t.xp6(4),t.Q6J("ngForOf",d.shoppingList().shoppingList),t.xp6(2),t.hij("Total : ",t.xi3(7,2,d.shoppingList().totalPrice,"EUR"),""))},dependencies:[m.ez,m.sg,m.rS,m.H9,g.Is,g.ZT,g.uh,g.xY,g.H8,_.ot,_.lW,Ct]})}return e})();var Tt=a(553);class x{constructor(l,i,c,d,n){this.id=l,this.breakfasts=i,this.meals=c,this.collations=d,this.createdAt=n}static fromJson(l){return new x(l.id,l.breakfasts.map(i=>w.p.fromJson(i)),l.meals.map(i=>w.p.fromJson(i)),l.collations.map(i=>w.p.fromJson(i)),new Date(l.created_at))}toJson(){return{id:this.id,breakfasts:this.breakfasts.map(l=>l.toJson()),meals:this.meals.map(l=>l.toJson()),collations:this.collations.map(l=>l.toJson())}}}var L=a(7398),St=a(9862);let Ot=(()=>{class e{constructor(i){this.http=i,this.resourceUrl=`${Tt.N.API_URL}/menus/`}getMenus(){return this.http.get(this.resourceUrl).pipe((0,L.U)(i=>i.map(c=>x.fromJson(c))))}createMenu(i){return this.http.post(this.resourceUrl,i).pipe((0,L.U)(c=>x.fromJson(c)))}generateShoppingList(i){return this.http.get(`${this.resourceUrl}generate_shopping_list/${i}/`).pipe((0,L.U)(d=>y.fromJson(d)))}static#t=this.\u0275fac=function(c){return new(c||e)(t.LFG(St.eN))};static#i=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Dt=(()=>{class e{constructor(i,c){this.menuService=i,this.dialog=c,this.lastMenus=(0,t.tdS)([]),this.menu=(0,t.tdS)(null),this.menuCreationForm=new B}ngOnInit(){this.getMenus()}getMenus(){this.menuService.getMenus().pipe((0,b.b)(i=>this.lastMenus.set(i))).subscribe()}generateMenu(){this.menuService.createMenu(this.menuCreationForm.toMenuCreation()).pipe((0,b.b)(i=>console.log(i)),(0,b.b)(i=>this.menu.set(i)),(0,b.b)(()=>this.getMenus())).subscribe()}openShoppingListDialog(i){this.menuService.generateShoppingList(i).pipe((0,b.b)(c=>this.dialog.open(zt,{width:"800px",data:c}))).subscribe()}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(Ot),t.Y36(g.uw))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-menus"]],standalone:!0,features:[t.jDz],decls:20,vars:6,consts:[[1,"flex","gap-3","items-center",3,"formGroup"],["matInput","","type","number","placeholder","0",3,"formControl"],["mat-raised-button","","color","primary",3,"click"],[3,"menu"],[1,"flex","flex-col","gap-4","mt-8"],[1,"text-xl","font-bold"],[3,"menus","openShoppingListDialog"]],template:function(c,d){1&c&&(t.TgZ(0,"form",0)(1,"mat-form-field")(2,"mat-label"),t._uU(3,"Petit-d\xe9jeuners"),t.qZA(),t._UZ(4,"input",1),t.qZA(),t.TgZ(5,"mat-form-field")(6,"mat-label"),t._uU(7,"Repas"),t.qZA(),t._UZ(8,"input",1),t.qZA(),t.TgZ(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Collations"),t.qZA(),t._UZ(12,"input",1),t.qZA(),t.TgZ(13,"button",2),t.NdJ("click",function(){return d.generateMenu()}),t._uU(14,"G\xe9n\xe9rer le Menu"),t.qZA()(),t._UZ(15,"app-menu-details",3),t.TgZ(16,"div",4)(17,"span",5),t._uU(18,"Les derniers menus g\xe9n\xe9r\xe9s"),t.qZA(),t.TgZ(19,"app-menus-list",6),t.NdJ("openShoppingListDialog",function(o){return d.openShoppingListDialog(o)}),t.qZA()()),2&c&&(t.Q6J("formGroup",d.menuCreationForm),t.xp6(4),t.Q6J("formControl",d.menuCreationForm.breakfastsCount),t.xp6(4),t.Q6J("formControl",d.menuCreationForm.mealsCount),t.xp6(4),t.Q6J("formControl",d.menuCreationForm.collationsCount),t.xp6(3),t.Q6J("menu",d.menu()),t.xp6(4),t.Q6J("menus",d.lastMenus()))},dependencies:[U,s.UX,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.oH,s.sg,g.Is,v.lN,v.KE,v.hX,F.c,F.Nt,_.ot,_.lW,q]})}return e})()}}]);