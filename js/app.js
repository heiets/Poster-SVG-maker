var Article = React.createClass({
  getInitialState: function(){
    return {  current: 0,
     title: 'title',
     desc: 'desc',
     date: 'date',
     price: 'price',
     fontColor: 'black',
     bgcolor: 'blue',
     align: 'start',
     xTitle: 10,
     xDesc: 10,
     xDate: 10,
     xPrice: 10,
     yTitle: 10,
     yDesc: 10,
     yDate: 10,
     yPrice: 10,
     fontSize: 55

   };
 },
 change: function(e) {
  this.setState({
   [e.target.id]: e.target.value || this.state[e.target.id]
 })
  document.getElementById("checkboxTitle").checked = false
  document.getElementById("checkboxDesc").checked = false
  document.getElementById("checkboxDate").checked = false
  document.getElementById("checkboxPrice").checked = false
  document.getElementById("checkbox" + e.target.id.substring(0,1).toUpperCase() + e.target.id.substring(1)).checked = true
},
changeFontSize: function(e) {
  this.setState({
   fontSize: e.target.value
 })  
},
changeTemplate: function(e) {
  this.setState({
   current: +e.target.id 
 })  
  console.log(this.state.current);
},
changePlace: function(e) {
  var x = 0;
  var y = 0;
  switch (e.target.id) {
    case 'leftPlace':
    x = -3;
    break;
    case 'rightPlace':
    x = 3;
    break;
    case 'upPlace':
    y = -3;
    break;
    case 'downPlace':
    y = 3;
    break;
    default:
    x = 0;
    y = 0;
  }
  if (document.getElementById("checkboxTitle").checked) {
    this.setState({
      xTitle: this.state.xTitle + x,
      yTitle: this.state.yTitle + y
    })
  }
  else if (document.getElementById("checkboxDesc").checked) {
    this.setState({
      xDesc: this.state.xDesc + x,
      yDesc: this.state.yDesc + y
    })
  }
  else if (document.getElementById("checkboxDate").checked) {
    this.setState({
      xDate: this.state.xDate + x,
      yDate: this.state.yDate + y
    })
  }
  else if  (document.getElementById("checkboxPrice").checked) {
    this.setState({
      xPrice: this.state.xPrice + x,
      yPrice: this.state.yPrice + y
    })
  }
  else {
    this.setState({
      xTitle: this.state.xTitle + x,
      yTitle: this.state.yTitle + y,
      xDesc: this.state.xDesc + x,
      yDesc: this.state.yDesc + y,
      xDate: this.state.xDate + x,
      yDate: this.state.yDate + y,
      xPrice: this.state.xPrice + x,
      yPrice: this.state.yPrice + y
    })
  }
  
},
changeAlign: function(e) {
  var value;
  switch (e.target.id) {
    case 'left':
    value = 'start';
    break;
    case 'center':
    value = 'middle';
    break;
    case 'right':
    value = 'end';
    break;
    default:
    value = 'start';
  }
  console.log(value);
  this.setState({
   align: value
 })
},
render: function () {
  var styleTemplate = {
    fontSize: this.state.fontSize,
    marginBottom: 100
  }
  var templatesListDom = [
  <div key={1} >
  <ul className="list-group">
  <li className="list-group-item">
  <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.changeTemplate} id="1">
  {}
  </button>
  </li>
  </ul>
  </div>
  ]
  var templatesListArr = []
  var templatesList = [
  <div key={1} >
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <polygon fill={this.state.bgcolor} fillOpacity=".5" points="595.3,0 595.3,841.9 0,841.9"/>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>,
  <div key={2}>
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <path fill={this.state.bgcolor} fillOpacity=".5" d="M595.3,639C526,570.2,418.5,526,297.7,526S69.3,570.2,0,639v202.9h595.3V639z"/>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>,
  <div key={3}>
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <path fill={this.state.bgcolor} fillOpacity=".5" d="M0,225.2v616.7h566.8C278.1,762.2,55.6,523,0,225.2z"/>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>,
  <div key={3}>
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <rect y="488.5" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="353.4"/>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>,
  <div key={4}>
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <g>
  <polygon fill="none" points="595.3,745.3 0,67.9 0,96.5 595.3,774  "/>
  <polygon fill="none" points="210.2,841.9 0,602.7 0,631.4 185,841.9  "/>
  <polygon fill="none" points="595.3,388.8 253.7,0 228.5,0 595.3,417.4  "/>
  <polygon fill="none" points="366.8,841.9 0,424.4 0,453.1 341.6,841.9  "/>
  <polygon fill="none" points="595.3,210.5 410.3,0 385.1,0 595.3,239.2  "/>
  <polygon fill="none" points="523.5,841.9 0,246.2 0,274.8 498.3,841.9  "/>
  <polygon fill="none" points="595.3,32.2 567,0 541.8,0 595.3,60.9  "/>
  <polygon fill="none" points="0,781 0,841.9 53.5,841.9   "/>
  <polygon fill="none" points="595.3,567.1 97,0 71.8,0 595.3,595.7  "/>
  <polygon fill={this.state.bgcolor} points="498.3,841.9 0,274.8 0,424.4 366.8,841.9   "/>
  <polygon fill={this.state.bgcolor} points="595.3,841.9 595.3,774 0,96.5 0,246.2 523.5,841.9  "/>
  <polygon fill={this.state.bgcolor} points="595.3,595.7 71.8,0 0,0 0,67.9 595.3,745.3   "/>
  <polygon fill={this.state.bgcolor} points="185,841.9 0,631.4 0,781 53.5,841.9  "/>
  <polygon fill={this.state.bgcolor} points="341.6,841.9 0,453.1 0,602.7 210.2,841.9   "/>
  <polygon fill={this.state.bgcolor} points="595.3,417.4 228.5,0 97,0 595.3,567.1  "/>
  <polygon fill={this.state.bgcolor} points="595.3,239.2 385.1,0 253.7,0 595.3,388.8   "/>
  <polygon fill={this.state.bgcolor} points="595.3,60.9 541.8,0 410.3,0 595.3,210.5  "/>
  <polygon fill={this.state.bgcolor} points="595.3,0 567,0 595.3,32.2  "/>
  </g>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>,
  <div key={5}>
  <svg width="595.3" height="841.9" >
  <rect y="0" fill={this.state.bgcolor} fillOpacity=".5" width="595.3" height="841.9"/>
  <g>
  <polygon fill={this.state.bgcolor} points="446.5,0 446.5,0 148.8,0 148.8,148.8 297.7,148.8 297.7,260 458.6,260 458.6,544.2 595.3,544.2 595.3,0   "/>
  <polygon fill={this.state.bgcolor} points="297.7,581.9 136.7,581.9 136.7,297.6 0,297.6 0,841.9 148.8,841.9 148.8,841.9 446.5,841.9 446.5,693.1 297.7,693.1   "/>
  </g>
  <text x={this.state.xTitle + '%'} y={(this.state.yTitle + 0) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.title}</text>
  <text x={this.state.xDesc  + '%'} y={(this.state.yDesc + 5) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.desc}</text>
  <text x={this.state.xDate  + '%'} y={(this.state.yDate + 10) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.date}</text>
  <text x={this.state.xPrice + '%'} y={(this.state.yPrice + 15) + '%'} textAnchor={this.state.align} style={styleTemplate} fill={this.state.fontColor}>{this.state.price}</text>
  </svg>
  </div>
  ];
  for (var i = 0; i < templatesList.length; i++) {
    templatesListArr.push(
    <div key={i} >
    <div className="list-group-item">
    <button type="button" className="btn btn-default btn-block" onClick={this.changeTemplate} id={i}>
    {i+1}
    </button>
    </div>
    </div>
    )
  }
  return (
  <div>
  <div className="templateList col-md-2">
  <div className="jumbotron">
  {templatesListArr}
  </div>
  </div>
  <div className="template col-md-5">
  {templatesList[this.state.current]}
  </div>
  <div className="menu col-md-5">
  <div className="jumbotron">
  <div className="row">
  <div className="input-group">
  <input type="text" onChange={this.change} onFocus={this.change} className="form-control" placeholder="Title" id="title" />
  <span className="input-group-addon">
  <input type="checkbox" id="checkboxTitle" /> 
  </span>
  </div>
  <div className="input-group">
  <input type="text" onChange={this.change} onFocus={this.change} className="form-control" placeholder="Desc"  id="desc"/> 
  <span className="input-group-addon">
  <input type="checkbox" id="checkboxDesc" /> 
  </span>
  </div>
  <div className="input-group">
  <input type="text" onChange={this.change} onFocus={this.change} className="form-control" placeholder="Date"  id="date"/>
  <span className="input-group-addon">
  <input type="checkbox" id="checkboxDate" /> 
  </span>
  </div>
  <div className="input-group">
  <input type="text" onChange={this.change} onFocus={this.change} className="form-control" placeholder="Price" id="price"/>
  <span className="input-group-addon">
  <input type="checkbox" id="checkboxPrice" />  
  </span>
  </div>
  <div className="input-group">Back color 
  <input type="color" onChange={this.change} id="bgcolor" />Font color 
  <input type="color" onChange={this.change} id="fontColor" />
  <input type="number" min="1" id="toTitle"  onChange={this.changeFontSize} value={this.state.fontSize}/>
  </div>
  </div>
  <div className="row">
  <div className="btn-toolbar" role="toolbar">
  <div className="btn-group align-group">
  <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.changeAlign} id="left">
  <span className="glyphicon glyphicon-align-left" aria-hidden="true">
  </span>
  </button>
  <button type="button" className="btn btn-default" aria-label="Center Align" onClick={this.changeAlign} id="center">
  <span className="glyphicon glyphicon-align-center" aria-hidden="true">
  </span></button> <button type="button" className="btn btn-default" aria-label="Right Align" onClick={this.changeAlign} id="right">
  <span className="glyphicon glyphicon-align-right" aria-hidden="true"></span></button>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="btn-toolbar" role="toolbar">
  <div className="btn-group arrows-group">
  <button type="button" className="btn btn-default btn-sm" id="leftPlace" onClick={this.changePlace}>
  Left
  </button>
  <button type="button" className="btn btn-default btn-sm" id="upPlace" onClick={this.changePlace}>
  Up
  </button>
  <button type="button" className="btn btn-default btn-sm" id="downPlace" onClick={this.changePlace}>
  Down
  </button>
  <button type="button" className="btn btn-default btn-sm" id="rightPlace" onClick={this.changePlace}>
  Right
  </button>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="btn-toolbar" role="toolbar">
  <div className="btn-group download-group">
  <button type="button" className="btn btn-default btn-sm">
  <span className="glyphicon glyphicon-download-alt" aria-hidden="true">
  <a className="bookmarklet" href="javascript:javascript: (function () { var e = document.createElement('script'); e.setAttribute('src', 'https://nytimes.github.io/svg-crowbar/svg-crowbar.js'); e.setAttribute('class', 'svg-crowbar'); document.body.appendChild(e); })();">Download</a>
  </span>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}
});
var App = React.createClass({
  render: function () {
    return (
    <div className = 'app'>
    <Article />
    </div>
    );
  }
});
ReactDOM.render(
<App />,
document.getElementById('root')
)
;