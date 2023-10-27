"use strict";(self.webpackChunknutritionAppFrontend=self.webpackChunknutritionAppFrontend||[]).push([[115],{9115:(h,a,s)=>{s.r(a),s.d(a,{LoginComponent:()=>f});var t=s(95),d=s(6814),e=s(5879),l=s(9397),m=s(553),p=s(9862),c=s(157);let g=(()=>{class n{constructor(r,o){this.http=r,this.router=o,this.tokenUrl=`${m.N.API_URL}/token/`}login(r,o){return this.http.post(this.tokenUrl,{username:r,password:o}).pipe((0,l.b)(u=>{localStorage.setItem("token",u.access),this.router.navigate(["/items"]).then()}))}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(p.eN),e.LFG(c.F0))};static#o=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),f=(()=>{class n{constructor(r,o){this.fb=r,this.authService=o,this.loginForm=this.fb.group({username:["",t.kI.required],password:["",t.kI.required]})}ngOnInit(){}login(){if(this.loginForm.invalid)return;const r=this.loginForm.get("username")?.value,o=this.loginForm.get("password")?.value;this.authService.login(r,o).subscribe()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(t.qu),e.Y36(g))};static#o=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:18,vars:2,consts:[[1,"min-h-screen","flex","items-center","justify-center","bg-gray-100","py-12","px-4","sm:px-6","lg:px-8"],[1,"max-w-md","w-full","space-y-8"],[1,"mt-6","text-center","text-3xl","font-extrabold","text-gray-900"],[1,"mt-8","space-y-6",3,"formGroup","ngSubmit"],[1,"rounded-md","shadow-sm","-space-y-px"],["for","username",1,"sr-only"],["id","username","name","username","type","text","required","","formControlName","username","placeholder","Username",1,"appearance-none","rounded-none","relative","block","w-full","px-3","py-2","border","border-gray-300","placeholder-gray-500","text-gray-900","rounded-t-md","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","focus:z-10","sm:text-sm"],["for","password",1,"sr-only"],["id","password","name","password","type","password","required","","formControlName","password","placeholder","Password",1,"appearance-none","rounded-none","relative","block","w-full","px-3","py-2","border","border-gray-300","placeholder-gray-500","text-gray-900","rounded-b-md","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","focus:z-10","sm:text-sm"],["type","submit",1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"disabled"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),e._uU(4,"Sign in to your account"),e.qZA()(),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return i.login()}),e.TgZ(6,"div",4)(7,"div")(8,"label",5),e._uU(9,"Username"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"div")(12,"label",7),e._uU(13,"Password"),e.qZA(),e._UZ(14,"input",8),e.qZA()(),e.TgZ(15,"div")(16,"button",9),e._uU(17," Sign in "),e.qZA()()()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",i.loginForm),e.xp6(11),e.Q6J("disabled",i.loginForm.invalid))},dependencies:[d.ez,t.UX,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.sg,t.u]})}return n})()}}]);