import React from 'react';
import './App.css';
import { Body } from './components/body'
class App extends React.Component {
  constructor(props){
    super(props)
    console.log('App',this.props)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
//或許之後改用function
class Header extends React.Component{
  constructor(props) {
    super(props);
    console.log('Header',this.props)
  }
  render() { 
    return(
      <header>Header</header>
    )
  }
}
class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log('Footer',this.props)
  }
  render() { 
    return (
      <footer>
        <hr></hr>
        Footer
      </footer>
    );
  }
}
export default App;
