import e from"jquery";import t from"lodash";import{Scene as i,PerspectiveCamera as r,WebGLRenderer as s,PCFSoftShadowMap as a,Raycaster as n,Vector2 as o,AmbientLight as c,SpotLight as d,Geometry as l,Vector3 as u,MeshLambertMaterial as m,Mesh as f,Face3 as h}from"three";import y from"three-orbitcontrols";import b from"earcut";var v=function(e,t,i,r,s,a,n,o,c,d){"boolean"!=typeof n&&(c=o,o=n,n=!1);var l,u="function"==typeof i?i.options:i;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),r&&(u._scopeId=r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):t&&(l=n?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),l)if(u.functional){var m=u.render;u.render=function(e,t){return l.call(t),m(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return i},p=v({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"badge badge-pill mr-2",class:e.bootstrapColorClass},[i("a",{staticClass:"text-decoration-none",class:e.bootstrapTextClass,attrs:{href:"#"},on:{click:function(t){return e.$emit("click")}}},[e._t("default"),e._v(" "),i("i",{staticClass:"fas ml-1",class:[e.expanded?"fa-chevron-up":"fa-chevron-down"]})],2)])},staticRenderFns:[]},void 0,{name:"ExpandableBadge",props:{expanded:Boolean,color:{type:String,default:"danger"},outline:{type:Boolean,default:!0}},computed:{bootstrapColorClass:function(){return this.outline&&!this.expanded?["bg-white","border","border-"+this.color]:["border","border-"+this.color,"badge-"+this.color]},bootstrapTextClass:function(){return this.outline&&!this.expanded?"text-"+this.color:"text-white"}}},void 0,!1,void 0,void 0,void 0),g=v({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("div",{staticClass:"text-secondary"},[i("small",[i("i",{class:e.getIconStyle(e.cityobject)}),e._v(" "+e._s(e.cityobject.type))])]),e._v(" "),e.editable?i("div",{staticClass:"col-auto p-0"},[i("button",{staticClass:"btn btn-sm",class:[e.edit_mode?"btn-warning":"btn-outline-warning"],on:{click:function(t){e.edit_mode=!e.edit_mode}}},[i("i",{staticClass:"fas fa-pen mr-1"}),e._v(" "+e._s(e.edit_mode?"Close edit":"Edit"))])]):e._e()]),e._v(" "),i("h5",{staticClass:"card-title text-truncate"},[e._v("\n    "+e._s(e.cityobject_id)+"\n  ")]),e._v(" "),i("div",[i("small",{directives:[{name:"show",rawName:"v-show",value:"parents"in e.cityobject,expression:"'parents' in cityobject"}]},[e._v("\n      Parents:\n      "),e._l(e.cityobject.parents,function(t){return i("a",{key:t,attrs:{href:"#"+t,title:t}},[i("i",{staticClass:"text-danger",class:e.getIconStyle(e.getObject(t),!1)})])})],2),e._v(" "),i("small",{directives:[{name:"show",rawName:"v-show",value:"children"in e.cityobject,expression:"'children' in cityobject"}]},[e._v("\n      Children:\n      "),e._l(e.cityobject.children,function(t){return i("a",{key:t,attrs:{href:"#"+t,title:t}},[i("i",{staticClass:"text-success",class:e.getIconStyle(e.getObject(t),!1)})])})],2)]),e._v(" "),i("div",{staticClass:"d-flex mt-2"},[e.hasAttributes?i("expandable-badge",{attrs:{color:"info",expanded:!e.edit_mode&&e.is_mode(1)},on:{click:function(t){return e.toggle_mode(1)}}},[e._v("\n        "+e._s(e.attributesCount)+" Attributes\n    ")]):e._e(),e._v(" "),e.hasGeometries?i("expandable-badge",{attrs:{color:"danger",expanded:!e.edit_mode&&e.is_mode(2)},on:{click:function(t){return e.toggle_mode(2)}}},[e._v("\n        "+e._s(this.cityobject.geometry.length)+" Geometries\n    ")]):e._e()],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded||e.edit_mode,expression:"expanded || edit_mode"}]},[i("hr"),e._v(" "),i("table",{directives:[{name:"show",rawName:"v-show",value:0==e.edit_mode&&e.is_mode(1),expression:"edit_mode == false && is_mode(1)"}],staticClass:"table table-striped table-borderless overflow-auto"},[i("tbody",e._l(e.cityobject.attributes,function(t,r){return i("tr",{key:r},[i("th",{staticClass:"py-1",attrs:{scope:"row"}},[i("small",{staticClass:"font-weight-bold"},[e._v(e._s(r))])]),e._v(" "),i("td",{staticClass:"py-1"},[i("small",[e._v(e._s(t))])])])}),0)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.edit_mode&&e.is_mode(2),expression:"edit_mode == false && is_mode(2)"}]},[i("ul",e._l(e.cityobject.geometry,function(t,r){return i("li",{key:r},[e._v(e._s(t.type))])}),0)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.edit_mode,expression:"edit_mode"}]},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonString,expression:"jsonString"}],staticClass:"form-control",attrs:{id:"json_data"},domProps:{value:e.jsonString},on:{input:function(t){t.target.composing||(e.jsonString=t.target.value)}}}),e._v(" "),i("div",{staticClass:"d-flex justify-content-end mt-2"},[i("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:e.saveChanges}},[i("i",{staticClass:"fas fa-save mr-1"}),e._v(" Save")])])])])])},staticRenderFns:[]},void 0,{name:"CityObjectInfo",components:{ExpandableBadge:p},props:{cityobject:Object,cityobject_id:String,selected:{type:Boolean,default:!1},editable:{type:Boolean,default:!1}},data:function(){return{edit_mode:!1,expanded:0}},computed:{attributesCount:function(){return Object.keys(this.cityobject.attributes).length},hasAttributes:function(){return"attributes"in this.cityobject&&this.attributesCount>0},hasGeometries:function(){return this.cityobject.geometry},iconType:function(){return this.getIconStyle(this.cityobject)},jsonString:{get:function(){return JSON.stringify(this.cityobject,void 0,4)}}},methods:{toggle_mode:function(e){this.expanded==e?this.expanded=0:this.expanded=e},is_mode:function(e){return this.expanded==e},select_this:function(){this.$parent.$emit("object_clicked",this.cityobject_id)},getObject:function(e){return this.$parent.citymodel?this.$parent.citymodel.CityObjects[e]:{}},getIconStyle:function(e,t){void 0===t&&(t=!0);var i={Building:["fas","fa-building","text-danger","mr-1"],BuildingPart:["far","fa-building","text-danger","mr-1"],BuildingInstallation:["fas","fa-city","text-danger","mr-1"],Bridge:["fas","fa-archway","text-dark","mr-1"],BridgePart:["fas","fa-archway","text-secondary","mr-1"],BridgeInstallation:["fas","fa-archway","text-primary","mr-1"],BridgeConstructionElement:["fas","fa-archway","text-warning","mr-1"],CityObjectGroup:["fas","fa-cubes","text-dark","mr-1"],CityFurniture:["fas","fa-store-alt","text-danger","mr-1"],GenericCityObject:["fas","fa-cube","text-danger","mr-1"],LandUse:["fas","fa-chart-area","text-success","mr-1"],PlantCover:["fas","fa-leaf","text-success","mr-1"],Railway:["fas","fa-train","text-primary","mr-1"],Road:["fas","fa-road","text-dark","mr-1"],SolitaryVegetationObject:["fas","fa-tree","text-success","mr-1"],TINRelief:["fas","fa-mountain","text-success","mr-1"],TransportSquare:["fas","fa-circle-notch","text-dark","mr-1"],Tunnel:["fas","fa-dot-circle","text-dark","mr-1"],TunnelPart:["fas","fa-dot-circle","text-dark","mr-1"],TunnelInstallation:["fas","fa-dot-circle","text-warning","mr-1"],WaterBody:["fas","fa-water","text-primary","mr-1"]};if(e.type in i){var r=i[e.type];return t||r.splice(2,1),r}return["fas","fa-question","text-secondary","mr-1"]},saveChanges:function(){var t=e.escapeSelector(this.cityobject_id),i=e("#"+t+" #json_data").val(),r=JSON.parse(i);this.$emit("input",r)}}},void 0,!1,void 0,void 0,void 0),_=v({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card mb-2",class:{"border-primary":this.selected},attrs:{id:this.cityobject_id}},[t("div",{staticClass:"card-body"},[t("CityObjectInfo",{attrs:{cityobject:this.cityobject,cityobject_id:this.cityobject_id,editable:"true"}})],1)])},staticRenderFns:[]},void 0,{name:"CityObjectCard",components:{CityObjectInfo:g},props:{cityobject:Object,cityobject_id:String,selected:{type:Boolean,default:!1},expanded:{type:Number,default:0}},data:function(){return{edit_mode:!1}},computed:{attributesCount:function(){return Object.keys(this.cityobject.attributes).length},hasAttributes:function(){return"attributes"in this.cityobject&&this.attributesCount>0},hasGeometries:function(){return this.cityobject.geometry},iconType:function(){return this.getIconStyle(this.cityobject)},jsonString:{get:function(){return JSON.stringify(this.cityobject,void 0,4)}}},methods:{toggle_mode:function(e){this.expanded==e?this.expanded=0:this.expanded=e},is_mode:function(e){return this.expanded==e},select_this:function(){this.$parent.$emit("object_clicked",this.cityobject_id)},getObject:function(e){return this.$parent.citymodel?this.$parent.citymodel.CityObjects[e]:{}},getIconStyle:function(e,t){void 0===t&&(t=!0);var i={Building:["fas","fa-building","text-danger","mr-1"],BuildingPart:["far","fa-building","text-danger","mr-1"],BuildingInstallation:["fas","fa-city","text-danger","mr-1"],Bridge:["fas","fa-archway","text-dark","mr-1"],BridgePart:["fas","fa-archway","text-secondary","mr-1"],BridgeInstallation:["fas","fa-archway","text-primary","mr-1"],BridgeConstructionElement:["fas","fa-archway","text-warning","mr-1"],CityObjectGroup:["fas","fa-cubes","text-dark","mr-1"],CityFurniture:["fas","fa-store-alt","text-danger","mr-1"],GenericCityObject:["fas","fa-cube","text-danger","mr-1"],LandUse:["fas","fa-chart-area","text-success","mr-1"],PlantCover:["fas","fa-leaf","text-success","mr-1"],Railway:["fas","fa-train","text-primary","mr-1"],Road:["fas","fa-road","text-dark","mr-1"],SolitaryVegetationObject:["fas","fa-tree","text-success","mr-1"],TINRelief:["fas","fa-mountain","text-success","mr-1"],TransportSquare:["fas","fa-circle-notch","text-dark","mr-1"],Tunnel:["fas","fa-dot-circle","text-dark","mr-1"],TunnelPart:["fas","fa-dot-circle","text-dark","mr-1"],TunnelInstallation:["fas","fa-dot-circle","text-warning","mr-1"],WaterBody:["fas","fa-water","text-primary","mr-1"]};if(e.type in i){var r=i[e.type];return t||r.splice(2,1),r}return["fas","fa-question","text-secondary","mr-1"]},saveChanges:function(){var t=e.escapeSelector(this.cityobject_id),i=e("#"+t+" #json_data").val(),r=JSON.parse(i);this.$emit("input",r)}}},void 0,!1,void 0,void 0,void 0),x=v({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{attrs:{id:e.cityobject_id}},[i("div",[e.isFolder?i("a",{staticClass:"mr-1",attrs:{href:"#"},on:{click:e.toggle}},[i("i",{staticClass:"far text-dark text-decoration-none",class:[e.isOpen?"fa-minus-square":"fa-plus-square"]})]):i("span",{staticClass:"mr-1"},[i("i",{staticClass:"far fa-square text-secondary"})]),e._v(" "),i("a",{attrs:{href:"#",id:"objicon",title:e.item.type}},[i("i",{class:e.iconType})]),e._v(" "),i("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"#"},on:{click:e.select_this}},[i("span",{class:{"text-primary":e.selected}},[e._v(e._s(e.cityobject_id))])]),e._v(" "),e._l(e.singleGeometries,function(t,r){return i("a",{key:r,staticClass:"badge badge-primary mr-1",attrs:{href:"#",title:t.type}},[i("i",{staticClass:"mr-1",class:e.getGeometryIcon(t.type)}),i("small",[e._v(e._s(t.lod))])])}),e._v(" "),e._l(e.geometryInstances,function(e,t){return i("span",{key:t,staticClass:"badge badge-secondary mr-1"},[i("i",{staticClass:"fas fa-external-link-alt"})])})],2),e._v(" "),e.isFolder?i("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"list-unstyled ml-4 mb-0"},e._l(e.item.children,function(t){return i("CityObjectsTreeItem",{key:t,staticClass:"item",attrs:{item:e.getObject(t),cityobject_id:t,selected_objid:e.selected_objid}})}),1):e._e()])},staticRenderFns:[]},void 0,{name:"CityObjectsTreeItem",props:{item:Object,cityobject_id:String,selected_objid:String},data:function(){return{isOpen:!1}},created:function(){var e=this;this.$on("object_clicked",function(t){e.$parent.$emit("object_clicked",t)})},computed:{selected:function(){return this.cityobject_id==this.selected_objid},singleGeometries:function(){return t.pickBy(this.item.geometry,function(e){return e.lod})},geometryInstances:function(){return t.pickBy(this.item.geometry,function(e){return"GeometryInstance"==e.type})},isFolder:function(){return this.item.children&&this.item.children.length},iconType:function(){return this.getIconStyle(this.item)}},methods:{select_this:function(){this.$parent.$emit("object_clicked",this.cityobject_id)},toggle:function(){this.isFolder&&(this.isOpen=!this.isOpen)},makeFolder:function(){this.isFolder||(this.$emit("make-folder",this.item),this.isOpen=!0)},getObject:function(e){return this.$parent.citymodel.CityObjects[e]},getGeometryIcon:function(e){var t={MultiSurface:["fas","fa-map"],Solid:["fas","fa-cube"],MultiSolid:["fas","fa-cubes"]};return e in t?t[e]:["fas","fa-question"]},getIconStyle:function(e,t){void 0===t&&(t=!0);var i={Building:["fas","fa-building","text-danger","mr-1"],BuildingPart:["far","fa-building","text-danger","mr-1"],BuildingInstallation:["fas","fa-city","text-danger","mr-1"],Bridge:["fas","fa-archway","text-dark","mr-1"],BridgePart:["fas","fa-archway","text-secondary","mr-1"],BridgeInstallation:["fas","fa-archway","text-primary","mr-1"],BridgeConstructionElement:["fas","fa-archway","text-warning","mr-1"],CityObjectGroup:["fas","fa-cubes","text-dark","mr-1"],CityFurniture:["fas","fa-store-alt","text-danger","mr-1"],GenericCityObject:["fas","fa-cube","text-danger","mr-1"],LandUse:["fas","fa-chart-area","text-success","mr-1"],PlantCover:["fas","fa-leaf","text-success","mr-1"],Railway:["fas","fa-train","text-primary","mr-1"],Road:["fas","fa-road","text-dark","mr-1"],SolitaryVegetationObject:["fas","fa-tree","text-success","mr-1"],TINRelief:["fas","fa-mountain","text-success","mr-1"],TransportSquare:["fas","fa-circle-notch","text-dark","mr-1"],Tunnel:["fas","fa-dot-circle","text-dark","mr-1"],TunnelPart:["fas","fa-dot-circle","text-dark","mr-1"],TunnelInstallation:["fas","fa-dot-circle","text-warning","mr-1"],WaterBody:["fas","fa-water","text-primary","mr-1"]};if(e.type in i){var r=i[e.type];return t||r.splice(2,1),r}return["fas","fa-question","text-secondary","mr-1"]}}},void 0,!1,void 0,void 0,void 0),j=v({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"list-unstyled overflow-auto px-3"},e._l(e.cityobjects,function(t,r){return i("CityObjectsTreeItem",{directives:[{name:"show",rawName:"v-show",value:e.matches(r,t),expression:"matches(coid, cityobject)"}],key:r,attrs:{item:t,cityobject_id:r,selected_objid:e.selected_objid}})}),1)},staticRenderFns:[]},void 0,{name:"CityObjectsTree",components:{CityObjectsTreeItem:x},props:["cityobjects","selected_objid","matches"],computed:{citymodel:function(){return this.$parent.citymodel}},created:function(){var e=this;this.$on("object_clicked",function(t){e.$parent.$emit("object_clicked",t)})}},void 0,!1,void 0,void 0,void 0),C=v({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"col-12 px-0 h-100",attrs:{id:"viewer"}})},staticRenderFns:[]},void 0,{name:"ThreeJsViewer",props:{citymodel:Object,selected_objid:String,object_colors:Object,background_color:{type:Number,default:14282492}},data:function(){return{camera_init:!1}},beforeCreate:function(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.raycaster=null,this.mouse=null,this.geoms={},this.meshes=[],this.mesh_index={}},mounted:async function(){var t=this;this.$parent.$emit("rendering",!0),setTimeout(async function(){t.initScene(),Object.keys(t.citymodel).length>0&&await t.loadCityObjects(t.citymodel),t.renderer.render(t.scene,t.camera);var i=t;e("#viewer").dblclick(function(e){0==e.button&&i.handleClick()}),t.$parent.$emit("rendering",!1)},25)},watch:{background_color:function(e){this.renderer.setClearColor(e),this.renderer.render(this.scene,this.camera)},object_colors:{handler:function(e){for(var t=0;t<this.meshes.length;t++)this.meshes[t].material.color.setHex(e[this.citymodel.CityObjects[this.meshes[t].name].type]);this.renderer.render(this.scene,this.camera)},deep:!0},citymodel:{handler:async function(e){var t=this;this.$parent.$emit("rendering",!0),setTimeout(async function(){t.clearScene(),Object.keys(e).length>0&&await t.loadCityObjects(e),t.renderer.render(t.scene,t.camera),t.$parent.$emit("rendering",!1)},25)},deep:!0},selected_objid:function(e,t){if(null!=t){var i=this.citymodel.CityObjects[t].type;this.mesh_index[t].material.color.setHex(this.object_colors[i])}null!=e&&this.mesh_index[e].material.color.setHex(14525696),this.renderer.render(this.scene,this.camera)}},methods:{handleClick:function(){var e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(event.clientX-e.left)/this.renderer.domElement.clientWidth*2-1,this.mouse.y=-(event.clientY-e.top)/this.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.meshes);if(0!=t.length){var i=t[0].object.name;this.$parent.$emit("object_clicked",i)}else this.$parent.$emit("object_clicked",null)},initScene:function(){this.scene=new i;var t=e("#viewer").width()/e("#viewer").height();this.camera=new r(60,t,.001,1e3),this.camera.up.set(0,0,1),this.renderer=new s({antialias:!0}),document.getElementById("viewer").appendChild(this.renderer.domElement),this.renderer.setSize(e("#viewer").width(),e("#viewer").height()),this.renderer.setClearColor(this.background_color),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=a;var l=this;this.raycaster=new n,this.mouse=new o;var u=new c(16777215,.7);this.scene.add(u);var m=new d(14540253);m.position.set(84616,-1,447422),m.target=this.scene,m.castShadow=!0,m.intensity=.4,m.position.normalize(),this.scene.add(m),this.controls=new y(this.camera,this.renderer.domElement),this.controls.addEventListener("change",function(){l.renderer.render(l.scene,l.camera)})},clearScene:function(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);var e=new c(16777215,.7);this.scene.add(e);var t=new d(14540253);t.position.set(84616,-1,447422),t.target=this.scene,t.castShadow=!0,t.intensity=.4,t.position.normalize(),this.scene.add(t)},loadCityObjects:async function(e){var t,i=new l;for(t=0;t<e.vertices.length;t++){var r=new u(e.vertices[t][0],e.vertices[t][1],e.vertices[t][2]);i.vertices.push(r)}for(i.normalize(),t=0;t<e.vertices.length;t++)e.vertices[t][0]=i.vertices[t].x,e.vertices[t][1]=i.vertices[t].y,e.vertices[t][2]=i.vertices[t].z;var s=this.getStats(e.vertices),a=s[3],n=s[4],o=s[5];this.camera_init||(this.camera.position.set(0,0,2),this.camera.lookAt(a,n,o),this.controls.target.set(a,n,o),this.controls.screenSpacePanning=!0,this.camera_init=!0);var c={};for(var d in e.CityObjects){var h=await this.parseObject(d,e);for(t in h)c[h[t]]=d;var y=e.CityObjects[d].type,b=new m;b.color.setHex(this.object_colors[y]);var v=d,p=new f(this.geoms[v],b);p.name=d,p.castShadow=!0,p.receiveShadow=!0,this.scene.add(p),this.meshes.push(p),this.mesh_index[v]=p}},parseObject:async function(e,t){if(null!=t.CityObjects[e].children)return t.CityObjects[e].children;var i=new l,r=t.CityObjects[e].geometry[0].type,s=[];"Solid"==r?s=t.CityObjects[e].geometry[0].boundaries[0]:"MultiSurface"==r||"CompositeSurface"==r?s=t.CityObjects[e].geometry[0].boundaries:"MultiSolid"!=r&&"CompositeSolid"!=r||(s=t.CityObjects[e].geometry[0].boundaries);var a,n,o=0,c=[],d=[];for(a=0;a<s.length;a++){for(n=0;n<s[a][0].length;n++){var m=s[a][0][n];if(c.includes(m)){var f=c.indexOf(m);d.push(f)}else{var y=new u(t.vertices[m][0],t.vertices[m][1],t.vertices[m][2]);i.vertices.push(y),c.push(m),d.push(o),o+=1}}if(3==d.length)i.faces.push(new h(d[0],d[1],d[2]));else if(d.length>3){var v=[];for(n=0;n<d.length;n++)v.push({x:t.vertices[c[d[n]]][0],y:t.vertices[c[d[n]]][1],z:t.vertices[c[d[n]]][2]});var p=await this.get_normal_newell(v),g=[];for(n=0;n<v.length;n++){var _=await this.to_2d(v[n],p);g.push(_.x),g.push(_.y)}var x=await b(g,null,2);for(n=0;n<x.length;n+=3)i.faces.push(new h(d[x[n]],d[x[n+1]],d[x[n+2]]))}d=[]}i.computeFaceNormals();var j=e;return this.geoms[j]=i,""},getStats:function(e){var t=Number.MAX_VALUE,i=Number.MAX_VALUE,r=Number.MAX_VALUE,s=0,a=0,n=0,o=0;for(var c in e)s+=e[c][0],e[c][0]<t&&(t=e[c][0]),a+=e[c][1],e[c][1]<i&&(i=e[c][1]),e[c][2]<r&&(r=e[c][2]),n+=e[c][2],o+=1;return[t,i,r,s/o,a/o,n/o]},get_normal_newell:function(e){for(var t=[0,0,0],i=0;i<e.length;i++){var r=i+1;r==e.length&&(r=0),t[0]=t[0]+(e[i].y-e[r].y)*(e[i].z+e[r].z),t[1]=t[1]+(e[i].z-e[r].z)*(e[i].x+e[r].x),t[2]=t[2]+(e[i].x-e[r].x)*(e[i].y+e[r].y)}return new u(t[0],t[1],t[2]).normalize()},to_2d:function(e,t){e=new u(e.x,e.y,e.z);var i=new u(1.1,1.1,1.1);i.distanceTo(t)<.01&&i.add(new u(1,2,3));var r=i.dot(t),s=t.clone();s.multiplyScalar(r),i.sub(s),i.normalize();var a=t.clone();return a.cross(i),{x:e.dot(i),y:e.dot(a)}}}},void 0,!1,void 0,void 0,void 0),w=Object.freeze({__proto__:null,CityObjectCard:_,CityObjectInfo:g,CityObjectsTree:j,CityObjectsTreeItem:x,ThreeJsViewer:C});var O={install:function e(t){e.installed||(e.installed=!0,Object.keys(w).forEach(function(e){t.component(e,w[e])}))}},k=null;"undefined"!=typeof window?k=window.Vue:"undefined"!=typeof global&&(k=global.Vue),k&&k.use(O);export default O;export{_ as CityObjectCard,g as CityObjectInfo,j as CityObjectsTree,x as CityObjectsTreeItem,C as ThreeJsViewer};
