"use strict";(self.webpackChunkpublicwebapp=self.webpackChunkpublicwebapp||[]).push([[901],{4901:function(e,t,s){s.r(t),s.d(t,{default:function(){return q}});var a=s(1413),n=s(4165),r=s(2982),i=s(5861),l=s(885),o=s(1134),c=s(5987),d=s(4695),u=s(3153),m=s(5107),f=s(7942),h=f.Ry().shape({name:f.Z_().required("Name is Required").min(3,"minimum 3 charcter is required").max(8,"maximum 8 charcter is allowed"),yearGroup:f.Z_().default(null),noOfStudents:f.Z_().default(null).nullable(),assignee:f.IX().of(f.Ry()),institute:f.Ry().required("Institute is required").nullable(),keyStage:f.IX().of(f.Ry()),examBoard:f.IX().of(f.Ry())}),x=s(2791),p=s(7686),g=s(4583),b=s(6871),j=s(184),v=["keyStage","institute","assignee"],S=function(e){var t=e.stages,s=e.boards,f=(0,x.useState)(""),S=(0,l.Z)(f,2),y=S[0],Z=S[1],w=(0,x.useState)([]),N=(0,l.Z)(w,2),I=N[0],C=N[1],k=(0,x.useState)(""),q=(0,l.Z)(k,2),E=q[0],R=q[1],D=(0,b.bx)().handleLoading,z=(0,o.cI)({mode:"onChange",resolver:(0,d.X)(h)}),B=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>2)){e.next=7;break}return e.next=3,(0,g.t)(t);case 3:return s=e.sent,a=s.map((function(e){return{label:e.name.toUpperCase(),value:e._id}})),C((0,r.Z)(a)),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"flex justify-center",children:[y.length>0&&(0,j.jsx)("div",{className:"bg-warning rounded p-2",children:y}),E.length>0&&(0,j.jsx)("div",{className:"bg-success p-2 rounded",children:E})]}),(0,j.jsx)(o.RV,(0,a.Z)((0,a.Z)({},z),{},{children:(0,j.jsxs)("form",{onSubmit:z.handleSubmit((function(e){R(""),Z(""),D(!0);sessionStorage.getItem("Access");var t=e.keyStage,s=e.institute,n=e.assignee,r=(0,c.Z)(e,v);(0,p.Qj)("class/",(0,a.Z)({keyStage:t.value,institute:s.value,assignee:n.value},r),{}).then((function(e){0===e.success?(D(!1),Z(e.message)):(R(e.message),z.reset(),D(!1))}))})),children:[(0,j.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[(0,j.jsx)(u.Z,{fieldname:"name",label:"Name",required:!0}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.q4,{fieldname:"keyStage",placeholder:"Key Stage",isSearchable:!1,options:t})}),(0,j.jsx)(u.Z,{fieldname:"yearGroup",label:"Year Group"}),(0,j.jsx)(u.Z,{type:"number",fieldname:"noOfStudents",label:"Number of Students"}),(0,j.jsx)(m.rS,{fieldname:"institute",placeholder:"Institute",loadOptions:B,instituteDefaultOptions:I,required:!0}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.q4,{fieldname:"examBoard",isSearchable:!1,placeholder:"Exam Board",options:s})}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.EG,{fieldname:"assignee",placeholder:"Assignee",loadOptions:G})})]}),(0,j.jsx)("div",{className:"flex justify-center mt-5",children:(0,j.jsx)("button",{type:"submit",className:"border border-primary px-5 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary",children:"Create Class"})})]})}))]})})},y=function(e){e.classId;var t=e.stages,s=e.boards,n=(0,o.cI)({mode:"onChange"});return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{children:(0,j.jsx)(o.RV,(0,a.Z)((0,a.Z)({},n),{},{children:(0,j.jsxs)("form",{onSubmit:n.handleSubmit((function(e){console.log(e)})),children:[(0,j.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[(0,j.jsx)(u.Z,{fieldname:"name",label:"Name",required:!0}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.q4,{fieldname:"keyStage",placeholder:"Key Stage",isSearchable:!1,options:t})}),(0,j.jsx)(u.Z,{fieldname:"yearGroup",label:"Year Group"}),(0,j.jsx)(u.Z,{type:"number",fieldname:"noOfStudents",label:"Number of Students"}),(0,j.jsx)(m.rS,{fieldname:"institute",placeholder:"Institute",required:!0}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.q4,{fieldname:"examBoard",placeholder:"Exam Board",isSearchable:!1,options:s})}),(0,j.jsx)("div",{className:"w-full mt-5",children:(0,j.jsx)(m.EG,{fieldname:"asiignee"})})]}),(0,j.jsx)("div",{className:"flex justify-center mt-5",children:(0,j.jsx)("button",{type:"submit",className:"border border-primary px-5 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary",children:"Update Class"})})]})}))})})},Z=s(5108),w=s(3839),N=s(6226),I=s(314),C=s(158),k=s(8806);function q(){var e=(0,x.useState)([]),t=(0,l.Z)(e,2),s=t[0],c=t[1],d=(0,x.useState)([]),u=(0,l.Z)(d,2),f=u[0],h=u[1],v=(0,x.useState)([]),q=(0,l.Z)(v,2),E=q[0],R=q[1],D=(0,x.useState)([]),z=(0,l.Z)(D,2),B=z[0],G=z[1],V=(0,x.useState)(),_=(0,l.Z)(V,2),F=_[0],O=_[1],T=(0,x.useState)(),A=(0,l.Z)(T,2),X=A[0],K=A[1],L=(0,x.useState)({}),P=(0,l.Z)(L,2),U=P[0],M=P[1],Y=(0,x.useState)(""),H=(0,l.Z)(Y,2),J=(H[0],H[1]),Q=(0,x.useState)(""),W=(0,l.Z)(Q,2),$=W[0],ee=W[1],te=(0,x.useState)("search"),se=(0,l.Z)(te,2),ae=se[0],ne=se[1],re=(0,x.useState)({limit:5,offset:1}),ie=(0,l.Z)(re,2),le=ie[0],oe=ie[1],ce=(0,x.useState)({order:1,sort_by:""}),de=(0,l.Z)(ce,2),ue=(de[0],de[1]),me=(0,b.bx)().handleLoading,fe=(0,o.cI)({mode:"onChange"}),he=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>2)){e.next=7;break}return e.next=3,(0,g.t)(t);case 3:return s=e.sent,a=s.map((function(e){return{label:e.name.toUpperCase(),value:e._id}})),c((0,r.Z)(a)),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,x.useEffect)((function(){var e=sessionStorage.getItem("Access");(0,p.dX)("class/board",e,{}).then((function(e){R(e.map((function(e){return{label:e,value:e}})))})),(0,p.dX)("class/stage",e,{}).then((function(e){G(e.map((function(e){return{label:e,value:e}})))}))}),[]),(0,x.useEffect)((function(){var e=sessionStorage.getItem("Access");(0,p.dX)("class/",e,{}).then((function(e){1===e.success&&(console.log(e,"res"),h(e.data),K(e.count),O(Math.ceil(parseInt(e.count)/5)))}))}),[]);return(0,j.jsxs)("div",{className:"container px-2 text-primary",children:[(0,j.jsx)("div",{className:"capitalize text-lg",children:"Classes"}),(0,j.jsx)(o.RV,(0,a.Z)((0,a.Z)({},fe),{},{children:(0,j.jsxs)("form",{onSubmit:fe.handleSubmit((function(e){console.log(e)})),children:[(0,j.jsxs)("div",{className:" mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",children:[(0,j.jsxs)("div",{className:"w-full pr-4",children:[(0,j.jsx)("label",{className:"capitalize",id:"InstituteSearchLabel","data-tooltip-content":"Search The Name, Territory, Level And Type Here.... ",children:"search"}),(0,j.jsx)("input",(0,a.Z)({type:"text",className:"border rounded primary-placeholder w-full p-4  focus:outline-none",placeholder:"Search..."},fe.register("query")))]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{className:"capitalize",children:"Institution"}),(0,j.jsx)(m.EG,{fieldname:"institution",placeholder:"Select Institution",loadOptions:he,defaultOptions:s})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"",children:"Exam Board"}),(0,j.jsx)(m.q4,{fieldname:"examBoard",placeholder:"Select Exam Boards",options:E})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"",children:"Key Stages"}),(0,j.jsx)(m.q4,{fieldname:"keyStage",placeholder:"Select Key Stages",options:B})]})]}),(0,j.jsxs)("div",{className:"flex flex-col space-y-4 md:flex-row md:justify-between  mt-5 md:mt-3",children:[(0,j.jsxs)("div",{className:"flex space-x-8",children:[(0,j.jsx)("button",{type:"submit",className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary ",children:"search"}),(0,j.jsx)("button",{id:"ClassSearchReset",className:"border border-primary w-32 text-center bg-primary text-white py-1  capitalize hover:bg-white hover:text-primary",onClick:function(e){e.preventDefault(),fe.reset()},children:"reset"})]}),(0,j.jsx)("div",{children:(0,j.jsx)("button",{className:"underline capitalize",onClick:function(e){e.preventDefault(),ne("new"),sessionStorage.setItem("Classaction","new")},children:"+ create class"})})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"conatiner py-1  mt-5",children:[f&&(0,j.jsx)(j.Fragment,{children:f.length>0&&(0,j.jsx)(Z.Z,{data:f,isFor:"Class",handleEdit:function(e){ee(e),ne("edit")},handleDelete:function(e){var t;M(e),null===(t=document.getElementById("DeleteClassModal"))||void 0===t||t.click()},handleSort:function(e){ue({sort_by:e.sort_by,order:e.order})},children:(0,j.jsx)(N.Z,{TotalData:X})})}),0===f.length&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"capitalize w-full  text-center text-3xl mt-10",children:"There is No Data To show"})})]}),0!==f.length&&(0,j.jsxs)("div",{className:"flex my-5 justify-between",children:[(0,j.jsx)(C.Z,{handlePageUp:function(e){var t=le.offset;t<parseInt(F)&&(fe.setValue("offset",t+1),sessionStorage.setItem("Classoffset",(t+1).toString()),oe((0,a.Z)((0,a.Z)({},le),{},{offset:t+1})))},handlePageDown:function(e){var t=fe.getValues("offset");t>1&&(fe.setValue("offset",t-1),sessionStorage.setItem("Classoffset",(t-1).toString()),oe((0,a.Z)((0,a.Z)({},le),{},{offset:t-1})))},handlePageJump:function(e){var t=parseInt(e);e.length>0&&t>=1&&t!==le.offset&&(fe.setValue("offset",t),oe((0,a.Z)((0,a.Z)({},le),{},{offset:t})),sessionStorage.setItem("Classoffset",e))},lastPage:F}),(0,j.jsx)(k.Z,{handleChange:function(e){sessionStorage.setItem("Classlimit",e),fe.setValue("limit",parseInt(e)),fe.setValue("offset",1),sessionStorage.setItem("Classoffset","1"),oe({offset:1,limit:parseInt(e)})},TotalData:X})]})]})]})})),(0,j.jsx)(I.Z,{id:"DeleteClassModal",handleConform:function(){me(!0);var e=sessionStorage.getItem("Access");(0,p.HG)("user/",e,U._id).then((function(e){me(!1),J(e.message)}))},modalText:"Are you sure , You want to delete  ".concat(U.name," ?"),isFor:"warning"}),"search"!==ae&&(0,j.jsx)(w.Z,{handleReturn:function(){ne("search"),sessionStorage.setItem("Classaction","search")}}),"new"===ae&&(0,j.jsx)(S,{stages:B,boards:E}),"edit"===ae&&(0,j.jsx)(y,{classId:$,stages:B,boards:E})]})}}}]);
//# sourceMappingURL=901.25f44db9.chunk.js.map