import React from 'react';
import './App.css';
import CardxList from './components/CardxList';
import SearchBox from './SearchBox';
import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      users:[],
      searchText: ''
    }
    console.log('constructor')
  }
  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        this.setState({users:data})
    })
    .catch(err => {
        console.log(err)
    })
  }
  // onTextChange = (e) => {
  //   // console.log(e.target.value)
  //   // this.setState({searchText: e.target.value})
  //   this.state.searchText = e.target.value
  // }
  onButtonClick = (textValue) => {
    console.log('Textvalue is => ', textValue)
    this.setState({searchText: textValue})
    // this.setState({searchText: this.state.searchText})
  }
  render() {
    // console.log('render')
    const {users, searchText} = this.state
    // console.log('Seachtext :', searchText);
    const filterUsers = users.filter( item =>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
      <div className="tc">
        <SearchBox onBtn={this.onButtonClick}/> 
        <CardxList robots={filterUsers} />
      </div>
    )
  }
}
// line 46 onTextChange={this.onTextChange}
export default App;