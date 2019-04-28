import React, {Component} from 'react';
import Subject from "./Componets/Subject"
import TOC from "./Componets/TOC"
import Content from "./Componets/Content"
import Content2 from "./Componets/Content2"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Subject:{title:'WEB', sub:'World Wide Web!'},
      TOC:[
        {id:1, title:'HTML', desc:'HTML is information.'},
        {id:2, title:'CSS', desc:'CSS is design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ],
      Content2:{data:'props, state 복습중입니다.'}
    }
  }
  render() {
    return (
      <div className="App">

        <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}>
        </Subject>

        <TOC data={this.state.TOC}></TOC>

        <Content title="HTML" desc="HTML is Hyeper Text Markup Language."></Content>

        <Content2 data={this.state.Content2.data}></Content2>

      </div>
    );
  }
}

export default App;
