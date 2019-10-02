(window["webpackJsonpgoogle-books-search"]=window["webpackJsonpgoogle-books-search"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(80),a(11)),l=a(9),i=a(14),m=a(15),u=a(16),h=a(39),p=a(30),d=a(139),b=a(142),f=a(149),E=a(144),v=a(143),g=a(4),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(d.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"h4",className:this.props.classes.brand},"Google Books Search"),r.a.createElement(f.a,{value:e,onChange:this.handleChange,indicatorColor:"secondary",textColor:"secondary",centered:!0},r.a.createElement(E.a,{label:"Search",to:"/",component:h.b}),r.a.createElement(E.a,{label:"Saved",to:"/saved",component:h.b}))))}}]),t}(n.Component),y=Object(g.a)({brand:{marginRight:"20px"}})(k);var j=Object(g.a)({appBar:{top:"auto",bottom:0}})((function(e){return r.a.createElement(d.a,{className:e.classes.appBar,position:"fixed"},r.a.createElement(v.a,{variant:"subtitle1"},"React Google Books Search"))})),O=a(145),x=a(108);var B=Object(g.a)({banner:{minHeight:"30vh",textShadow:"1px 1px #000000",color:"#ffffff"},paper:{margin:20,padding:20,background:"url('./images/books-bg.jpg')"}})((function(e){return r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:e.classes.paper},r.a.createElement(O.a,{container:!0,className:e.classes.banner,alignItems:"flex-end"},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"h2",align:"center"},"Google Books Search"),r.a.createElement(v.a,{variant:"h5",align:"center"},"Search for and Save Books of Interest"))))))})),w=a(148),S=a(146),C=a(68),N=a.n(C);var D=Object(g.a)({searchbox:{margin:20,padding:20}})((function(e){return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:e.classes.searchbox},r.a.createElement(v.a,{variant:"h6"},"Book Search"),r.a.createElement("form",null,r.a.createElement(O.a,null,r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w.a,{fullWidth:!0,onChange:e.handleInputChange,name:"title",label:"Book Title",margin:"normal"}))),r.a.createElement(O.a,{container:!0,justify:"flex-end"},r.a.createElement(S.a,{type:"submit",color:"secondary",variant:"contained",onClick:e.handleFormSubmit},r.a.createElement(N.a,null),"Search"))))))})),I=a(40),A=a.n(I),F={search:function(e){return A.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return A.a.get("/api/books")},deleteBook:function(e){return A.a.delete("/api/books/"+e)},saveBook:function(e){return A.a.post("/api/books",e)}},G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:a.props.title,author:a.props.author,summary:a.props.summary,image:a.props.image,link:a.props.link},a.handleSave=function(e){e.preventDefault();var t={title:a.state.title,author:a.state.author,summary:a.state.summary,image:a.state.image,link:a.state.link};a.saveBook(t)},a.saveBook=function(e){console.log(e),F.saveBook(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:this.props.classes.searchedbooks},r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,md:8},r.a.createElement(v.a,{variant:"h6"},r.a.createElement("strong",null,this.props.title)),r.a.createElement(v.a,{variant:"h6"},this.props.author)),r.a.createElement(O.a,{item:!0,xs:12,md:4},r.a.createElement(O.a,{container:!0,justify:"flex-end"},r.a.createElement(S.a,{className:this.props.classes.buttons,color:"secondary",variant:"contained",href:this.props.link},"View"),r.a.createElement(S.a,{className:this.props.classes.buttons,color:"secondary",variant:"contained",onClick:this.handleSave,key:this.props.key},"Save"))),r.a.createElement(O.a,{item:!0,xs:12,md:4},r.a.createElement("img",{alt:"",src:this.props.image})),r.a.createElement(O.a,{item:!0,xs:12,md:8},r.a.createElement(v.a,{variant:"body1"},this.props.summary||"No Description Available."))))))}}]),t}(n.Component),R=Object(g.a)({searchedbooks:{margin:20,padding:20},buttons:{margin:10}})(G),W=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return r.a.createElement(O.a,null,r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:this.props.classes.results},r.a.createElement(v.a,{variant:"h6"},"Results"),this.props.searchData.map((function(e){return r.a.createElement(R,{title:e.volumeInfo.title,author:e.volumeInfo.authors.join(", "),image:e.volumeInfo.imageLinks.thumbnail,summary:e.volumeInfo.description,link:e.selfLink,key:e.id})})))))}}]),t}(n.Component),_=Object(g.a)({results:{margin:20,padding:20,marginBottom:50}})(W),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",results:[]},a.searchBooks=function(e){F.search(e).then((function(e){console.log(e.data.items),a.setState({results:e.data.items})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target.value;a.setState({search:t})},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.search)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks("Harry Potter")}},{key:"render",value:function(){return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12,sm:10,md:8},r.a.createElement(B,null),r.a.createElement(D,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleSave:this.handleSave}),r.a.createElement(_,{searchData:this.state.results})))}}]),t}(n.Component),J=a(151),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id},a.handleDelete=function(e){e.preventDefault(),a.deleteBook(a.state.id)},a.deleteBook=function(e){console.log(e),F.deleteBook(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return console.log(this.props.id),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:this.props.classes.savedbooks},r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,md:8},r.a.createElement(v.a,{variant:"h6"},r.a.createElement("strong",null,this.props.title)),r.a.createElement(v.a,{variant:"h6"},this.props.author)),r.a.createElement(O.a,{item:!0,xs:12,md:4},r.a.createElement(O.a,{container:!0,justify:"flex-end"},r.a.createElement(S.a,{className:this.props.classes.buttons,color:"secondary",variant:"contained",href:this.props.link},"View"),r.a.createElement(S.a,{className:this.props.classes.buttons,color:"secondary",variant:"contained",onClick:this.handleDelete,id:this.props.id},r.a.createElement(J.a,null)))),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,md:4},r.a.createElement("img",{alt:"",src:this.props.image})),r.a.createElement(O.a,{item:!0,xs:12,md:8},r.a.createElement(v.a,{variant:"body1"},this.props.summary)))))))}}]),t}(n.Component),M=Object(g.a)({savedbooks:{margin:20,padding:20},buttons:{margin:10}})(L),V=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return console.log(this.props.data),r.a.createElement(O.a,null,r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(x.a,{className:this.props.classes.results},r.a.createElement(v.a,{variant:"h6"},"Your Saved Books"),this.props.data.map((function(e){return console.log(e._id),r.a.createElement(M,{title:e.title,author:e.author,image:e.image,summary:e.summary||"No Description Available.",key:e._id,id:e._id,link:e.link})})))))}}]),t}(n.Component),q=Object(g.a)({results:{margin:20,padding:20,marginBottom:50}})(V),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a.loadBooks=function(){F.getBooks().then((function(e){console.log(e.data),e.data&&a.setState({results:e.data})})).catch((function(e){return console.log(e)}))},a.deleteBook=function(e){F.deleteBook(e).then((function(e){return a.loadBooks()})).catch((function(e){return console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12,md:8},r.a.createElement(B,null),r.a.createElement(q,{reload:this.loadBooks,data:this.state.results})))}}]),t}(n.Component),T=a(48),Y=a(147),$=a(69),z=a(150),K=(a(106),Object($.a)({palette:{primary:T.a,secondary:Y.a}})),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(z.a,{theme:K},r.a.createElement(y,null),r.a.createElement(p.a,{exact:!0,path:"/",component:H}),r.a.createElement(p.a,{exact:!0,path:"/saved",component:P}),r.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){e.exports=a(107)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.22c622ce.chunk.js.map