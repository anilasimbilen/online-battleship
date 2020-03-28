(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},130:function(e,t){},139:function(e,t,a){"use strict";a.r(t);var E=a(0),n=a.n(E),r=a(29),s=a.n(r),i=(a(100),a(83)),o=a(30),l=a(31),c=a(36),u=a(37),m=a(84),d=a.n(m),h=a(66),g=a(55),f=a(48),p=a(49),v=a(92),y=a(25),b=a(38),C=a(16);function k(){var e=Object(f.a)(["\n    .box {\n        width: ","vh;\n        height: ","vh;\n        background-color: #d1cfcf;\n        border: solid 1px;\n    }\n    .hit {\n        background-color: red;\n    }\n    .miss {\n        background-color: white;\n    }\n    .cruiser {\n        background-color: ",";\n    }\n    .carrier {\n        background-color: ",";\n    }\n    .battleship {\n        background-color: ",";\n    }\n    .submarine {\n        background-color: ",";\n    }\n    .destroyer {\n        background-color: ",";\n    }\n    .sunk {\n        background-color: black;\n    }\n    .main {\n        display: flex;\n        flex-direction: column;\n        height: ","%;\n        justify-content: center;\n        margin-top: 3vh;\n    } \n    .building {\n        cursor: pointer;\n    }\n    ","\n    h3 {\n        font-size: 24px;\n    }\n    .bottom-btn-c {\n        display: flex;\n        flex-direction: row;\n        width: 50%;\n        align-items: center;\n        justify-content: space-around;\n    }\n"]);return k=function(){return e},e}var _=["Carrier, which has five consecutive holes","Battleship, which has four consecutive holes","Cruiser, which has three consecutive holes","Submarine, which has three consecutive holes","Destroyer, which has two consecutive holes"],w={name:"Carrier",color:"#007bff",length:5},I={name:"Battleship",color:"#ffc107",length:4},S={name:"Cruiser",color:"#28a745",length:3},O={name:"Submarine",color:"#17a2b8",length:3},D={name:"Destroyer",color:"#007bff",length:2},T=(Object.freeze({INITIAL_BOARD:[["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]]}).INITIAL_BOARD,[w,I,S,O,D]),N=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var E;return Object(o.a)(this,a),(E=t.call(this,e)).setStateTracker=function(e){E.setState(e)},E.getOnClick=function(e){if("building"!==E.props.game_state)return E.props.onBoxClick(e);var t,a,n=e.target.id.split("|").map((function(e){return Number(e)})),r=Object(g.a)(n,2);t=r[0],a=r[1];var s=E.state,i=s.selected,o={start:[t,a],direction:s.currentDirection};if(!E.getOnMouseEnter(t,a)){if(0===i)E.setState({carrier:o});else if(1===i)E.setState({battleship:o});else if(2===i)E.setState({cruiser:o});else if(3===i)E.setState({submarine:o});else{if(4!==i)return;E.setState({destroyer:o})}E.setState({totalCords:E.copy2dArray(E.state.renderingCords),selected:E.state.selected+1})}},E.updateCord=function(e){var t=e.i,a=e.j,n=e.val,r=E.state.totalCords;r[t][a]=n,E.setStateTracker({totalCords:r})},E.copy2dArray=function(e){var t=[];for(var a in e){var E=[];for(var n in e[a])E.push(e[a][n]);t.push(E)}return t},E.reset=function(){E.setState({totalCords:Object.freeze([["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]]),carrier:{start:null,direction:null},battleship:{start:null,direction:null},cruiser:{start:null,direction:null},submarine:{start:null,direction:null},destroyer:{start:null,direction:null},selected:0,currentDirection:"Direction",errorMessage:"",renderingCords:Object.freeze([["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]])}),E.buttons=[["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]],E.preEdit=[[]]},E.getOnMouseEnter=function(e,t){if(E.state.selected>=5||"building"!==E.props.game_state)return!0;var a=E.state,n=(a.currentDirection,a.selected),r=E.copy2dArray(E.state.totalCords),s=E.copy2dArray(E.state.totalCords),i=T[n];if("Vertical"===E.state.currentDirection)if(e+i.length>r.length)E.setStateTracker({errorMessage:"Can not add "+i.name+" with given direciton because ship is too big."});else{for(var o=0;o<i.length;o++){if(T.map((function(e){return e.name.toLowerCase()})).includes(E.state.totalCords[o+e][t]))return E.setStateTracker({errorMessage:"Can not add "+i.name+" with given direciton because places are occupied."}),!0;s[o+e][t]=i.name.toLowerCase()}E.setStateTracker({renderingCords:s})}else if(t+i.length>r[e].length)E.setStateTracker({errorMessage:"Can not add "+i.name+" with given direciton because ship is too big."});else{for(var l=0;l<i.length;l++){if(T.map((function(e){return e.name.toLowerCase()})).includes(E.state.totalCords[e][t+l]))return E.setStateTracker({errorMessage:"Can not add "+i.name+" with given direciton because places are occupied."}),!0;s[e][l+t]=i.name.toLowerCase()}E.setStateTracker({renderingCords:s})}},E.getOnMouseLeave=function(){"building"===E.props.game_state&&E.setStateTracker({errorMessage:"",renderingCords:E.copy2dArray(E.state.totalCords)})},E.state={totalCords:e.initialCords?E.copy2dArray(e.initialCords):Object.freeze([["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]]),carrier:{start:null,direction:null},battleship:{start:null,direction:null},cruiser:{start:null,direction:null},submarine:{start:null,direction:null},destroyer:{start:null,direction:null},selected:0,currentDirection:"Horizontal",errorMessage:"",renderingCords:e.initialCords?E.copy2dArray(e.initialCords):Object.freeze([["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]])},E.buttons=[["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]],E.preEdit=[[]],E}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.initialCords&&this.setState({totalCords:this.copy2dArray(e.initialCords),renderingCords:this.copy2dArray(e.initialCords)})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.totalCords,t.renderingCords),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return p.a.div(k(),"ingame"===e?4:5,"ingame"===e?4:5,S.color,w.color,I.color,O.color,D.color,"ingame"===e?50:40,"self"===t?"":"\n        .ingame {\n            cursor: pointer;\n            :hover {\n                background-color: #b0b0b0;\n            }\n        }\n        ")}(this.props.game_state,this.props.owner);return n.a.createElement(E,{style:"building"===this.props.game_state?{width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}:{}},"building"===this.props.game_state?n.a.createElement("h1",null,"Place your board"):null,"building"===this.props.game_state?n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement(v.a,{type:"radio",name:"options",defaultValue:0,onChange:function(t){e.setStateTracker({selected:t})}},n.a.createElement(y.a,{value:0,variant:"primary"},"Carrier"),n.a.createElement(y.a,{value:1,variant:"warning"},"Battleship"),n.a.createElement(y.a,{value:2,variant:"success"},"Cruiser"),n.a.createElement(y.a,{value:3,variant:"info"},"Submarine"),n.a.createElement(y.a,{value:4,variant:"primary"},"Destroyer"),n.a.createElement(b.a,null,n.a.createElement(b.a.Toggle,{variant:"dark",id:"dropdown-basic"},this.state.currentDirection),n.a.createElement(b.a.Menu,null,n.a.createElement(b.a.Item,{onClick:function(t){return e.setStateTracker({currentDirection:"Vertical"})}},"Vertical"),n.a.createElement(b.a.Item,{onClick:function(t){return e.setStateTracker({currentDirection:"Horizontal"})}},"Horizontal")))),n.a.createElement("h3",{style:{marginTop:10}},_[this.state.selected])):null,n.a.createElement.apply(n.a,["div",{className:"main"}].concat(Object(h.a)(a.map((function(t,a){return n.a.createElement.apply(n.a,["div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center"}}].concat(Object(h.a)(t.map((function(t,E){return n.a.createElement("div",{alt:t,id:a+"|"+E,onMouseEnter:function(t){var a=t.target.id.split("|");e.getOnMouseEnter(Number(a[0]),Number(a[1]))},onMouseLeave:function(t){e.getOnMouseLeave()},onClick:e.getOnClick,ref:function(t){e.buttons[a][E]=t},className:"box "+t+" "+e.props.game_state})})))))}))))),n.a.createElement("h2",{style:{color:"red",height:"1ch"}},this.state.errorMessage),"building"===this.props.game_state?n.a.createElement("div",{className:"bottom-btn-c"},n.a.createElement(C.a,{onClick:this.reset},"Reset"),this.state.carrier.start&&this.state.battleship.start&&this.state.cruiser.start&&this.state.submarine.start&&this.state.destroyer.start?n.a.createElement(C.a,{onClick:function(t){e.props.onBuildEnd({data:{totalCords:e.state.totalCords,carrier:e.state.carrier,battleship:e.state.battleship,cruiser:e.state.cruiser,submarine:e.state.submarine,destroyer:e.state.destroyer}})}},"Continue"):null):null)}}]),a}(E.Component),A=a(17);function j(){var e=Object(f.a)(["\n    h1, h2{\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"]);return j=function(){return e},e}var x=p.a.div(j()),M=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var E;return Object(o.a)(this,a),(E=t.call(this,e)).onBoxClick=function(e){if("self"===E.state.turn){var t,a,n=e.target.id.split("|").map((function(e){return Number(e)})),r=Object(g.a)(n,2);t=r[0],a=r[1],E.socket.emit("HIT",{game_id:E.props.gameId,user_id:E.props.userId,row:t,column:a}),E.setState({turn:"enemy"})}},E.copy2dArray=function(e){var t=[];for(var a in e){var E=[];for(var n in e[a])E.push(e[a][n]);t.push(E)}return t},E.state={turn:e.turn,playerCords:e.playerData?E.copy2dArray(e.playerData.totalCords):null,enemyCords:[["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E","E"]],self_hits:{carrier:0,battleship:0,cruiser:0,submarine:0,destroyer:0,E:0},total_sunks:0,isLost:!1,isWon:!1},E.socket=e.socket,E}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("MOVE_RECIEVED",(function(t){var a=t.row,E=t.column,n=e.state.self_hits,r=e.state.playerCords[a][E],s="E"!==r?"hit":"miss";n[r]++;var i=!1,o=T.filter((function(e){return e.name.toLowerCase()===r}));o.length>0&&(i=n[o[0].name.toLowerCase()]===o[0].length);var l=e.copy2dArray(e.state.playerCords),c=[],u=e.state.total_sunks;i?l=l.map((function(t,a){return t.map((function(t,E){return t===r||e.props.playerData.totalCords[a][E]===r?(c.push({i:a,j:E}),u++,"sunk"):t}))})):l[a][E]=s;var m=u>=T.map((function(e){return e.length})).reduce((function(e,t){return e+t}));e.setState({turn:"self",playerCords:l,self_hits:n,total_sunks:u,isLost:m}),e.socket.emit("HIT_FEEDBACK",{row:a,column:E,sunk:{isSunk:i,field:r,sunkCords:c,isLost:m},feedback:i?"sunk":s,game_id:e.props.gameId,user_id:e.props.userId})})),this.socket.on("BOARD_UPDATE",(function(t){var a=t.row,E=t.column,n=t.feedback,r=t.sunk,s=e.copy2dArray(e.state.enemyCords);r.isSunk?r.sunkCords.forEach((function(e){var t=e.i,a=e.j;s[t][a]="sunk"})):s[a][E]=n,e.setState({enemyCords:s,isWon:r.isLost})}))}},{key:"render",value:function(){if(this.state.isWon||this.state.isLost){var e=this.state.enemyCords.map((function(e){return e.filter((function(e){return"hit"===e||"sunk"===e})).length})).reduce((function(e,t){return e+t})),t=T.map((function(e){return e.length})).reduce((function(e,t){return e+t})),a=this.state.playerCords.map((function(e){return e.filter((function(e){return"hit"===e||"sunk"===e})).length})).reduce((function(e,t){return e+t}));return n.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement(A.a,{bg:this.state.isWon?"success":"danger",text:"white",style:{width:"80%",height:"80%"}},n.a.createElement(A.a.Header,null,this.state.isWon?"You Win":"You Lose"),n.a.createElement(A.a.Body,null,n.a.createElement(A.a.Title,null,"Battle against ",this.props.enemyName,this.state.isWon?" succeed.":" failed."," "),n.a.createElement(A.a.Text,null,this.state.isLost?"You shoot ".concat(e," coordinates but ").concat(t-e," more was needed."):"You win! Enemy was ".concat(t-a," hits behind you.")))))}return n.a.createElement(x,{style:{width:"100vw",height:"100vh"}},n.a.createElement("h1",null,"self"===this.state.turn?"Your Turn":"Enemy turn"),n.a.createElement(N,{game_state:"ingame",owner:"enemy",onBoxClick:this.onBoxClick,initialCords:this.state.enemyCords}),n.a.createElement("h2",null,"Your board"),n.a.createElement(N,{game_state:"ingame",owner:"self",initialCords:this.state.playerCords}))}}]),a}(E.Component),L=a(11),R=a(39),B=a(40),G=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var E;return Object(o.a)(this,a),(E=t.call(this,e)).createGame=function(){E.socket.emit("CREATE_GAME",Object(i.a)({room_name:E.state.roomName,username:E.state.username,user_id:E.state.userId},"username",E.state.username))},E.startGame=function(){E.socket.emit("STARTING_GAME",{game_id:E.state.gameId})},E.createRoomOnSubmit=function(){var e=E.state.username.trim(),t=E.state.roomName.trim();E.setState({username:e,roomName:t,isFormOneValidated:!0}),0!==e.length&&0!==t.length&&E.createGame()},E.connectGameOnSubmit=function(e){e.preventDefault();var t=E.state.username.trim(),a=E.state.gameId;E.setState({username:t,roomName:a,isFormOneValidated:!0}),0!==t.length&&-1!==a&&E.socket.emit("CONNECT_GAME",{game_id:E.state.gameId,username:t,user_id:E.state.userId})},E.state={game_state:"connecting",playerData:null,roomName:"",username:"",userId:"",isFormOneValidated:!1,gameId:-1,enemy:null,game:null,startable:!1,isHost:!1,opponentReady:!1},E}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket=d()("http://localhost:5000"),this.socket.on("INITIAL_USER_DATA",(function(t){e.setState({userId:t.user_id})})),this.socket.on("GAME_INFO",(function(t){e.setState({gameId:t.game_id,game_state:"waiting",isHost:!0})})),this.socket.on("OPPONENT_DISCONNECTED",(function(t){"build"!==e.state.game_state&&"waiting"!==e.state.game_state||e.setState({game_state:"waiting",startable:!1,enemy:null})})),this.socket.on("SUCCESS_CONNECTION",(function(t){var a=t.enemy,E=t.game;e.setState({enemy:a,gameId:E.id,roomName:E.name,game_state:"connecting"===e.state.game_state?"waiting":e.state.game_state,startable:!0})})),this.socket.on("START_GAME",(function(t){e.setState({game_state:"building"})})),this.socket.on("OPPONENT_READY",(function(t){e.setState({opponentReady:!0})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,"waiting"===this.state.game_state?n.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("h1",{style:{padding:"3vh"}},this.state.startable?"Ready":"Waiting for a player to join"),n.a.createElement("div",{style:{width:"70%",display:"flex",alignItems:"center",flexDirection:"column"}},n.a.createElement(B.a,{style:{width:"100%"}},n.a.createElement(B.a.Item,{active:!0},this.state.roomName),n.a.createElement(B.a.Item,{variant:"info"},"ID: ",this.state.gameId),n.a.createElement(B.a.Item,{variant:"success"},this.state.username),n.a.createElement(B.a.Item,{variant:this.state.startable?"danger":"light"},this.state.enemy?this.state.enemy.username:"Waiting for a connection...")),n.a.createElement(C.a,{style:{marginTop:"3vh",alignSelf:"flex-end"},size:"lg",disabled:!this.state.startable||!this.state.isHost,onClick:this.state.isHost?this.startGame:function(){}},this.state.isHost?"Start":"Waiting for the host to start..."))):null,"connecting"===this.state.game_state?n.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("div",{style:{width:"70%",height:"20%",marginTop:"10vh"}},n.a.createElement(R.a,null,n.a.createElement(A.a,null,n.a.createElement(A.a.Header,null,n.a.createElement(R.a.Toggle,{as:C.a,variant:"link",eventKey:"0"},"Create Game")),n.a.createElement(R.a.Collapse,{eventKey:"0"},n.a.createElement(A.a.Body,null,n.a.createElement(L.a,{ref:function(t){return e.createForm=t},validated:this.state.isFormOneValidated,onSubmit:function(t){t.preventDefault(),e.createRoomOnSubmit()}},n.a.createElement(L.a.Group,{controlId:"formUsername"},n.a.createElement(L.a.Label,null,"Username"),n.a.createElement(L.a.Control,{required:!0,placeholder:"Pick a username",value:this.state.username,onChange:function(t){t.preventDefault(),e.setState({username:t.target.value})}})),n.a.createElement(L.a.Group,{controlId:"formRoomname"},n.a.createElement(L.a.Label,null,"Room Name"),n.a.createElement(L.a.Control,{required:!0,placeholder:"Enter a room name",value:this.state.roomName,onChange:function(t){t.preventDefault(),e.setState({roomName:t.target.value})}})),n.a.createElement(C.a,{variant:"primary",type:"submit"},"Create"))))),n.a.createElement(A.a,null,n.a.createElement(A.a.Header,null,n.a.createElement(R.a.Toggle,{as:C.a,variant:"link",eventKey:"1"},"Connect a game")),n.a.createElement(R.a.Collapse,{eventKey:"1"},n.a.createElement(A.a.Body,null,n.a.createElement(L.a,{onSubmit:this.connectGameOnSubmit},n.a.createElement(L.a.Group,{controlId:"formUsernameConnect"},n.a.createElement(L.a.Label,null,"Username"),n.a.createElement(L.a.Control,{required:!0,placeholder:"Pick a username",value:this.state.username,onChange:function(t){t.preventDefault(),e.setState({username:t.target.value})}})),n.a.createElement(L.a.Group,{controlId:"formRoomnameConnect"},n.a.createElement(L.a.Label,null,"Game Id"),n.a.createElement(L.a.Control,{required:!0,placeholder:"Enter id of the game",value:this.state.gameId,onChange:function(t){t.preventDefault(),e.setState({gameId:Number(t.target.value)})}})),n.a.createElement(C.a,{variant:"primary",type:"submit"},"Connect")))))))):null,"building"===this.state.game_state?n.a.createElement(N,{isOpponentReady:this.state.opponentReady,onReady:function(){e.socket.emit("PLAYER_READY_UPDATE",{user_id:e.state.userId,ready_state:!0,game_id:e.state.gameId})},onBuildEnd:function(t){e.setState({game_state:"ingame",playerData:t.data})},game_state:this.state.game_state}):null,"ingame"===this.state.game_state?n.a.createElement(M,{turn:this.state.isHost?"self":"enemy",gameId:this.state.gameId,userId:this.state.userId,socket:this.socket,playerData:this.state.playerData,enemyName:this.state.enemy.username}):null)}}]),a}(E.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(139)}},[[95,1,2]]]);
//# sourceMappingURL=main.238144ae.chunk.js.map