import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Register</h1>
        <SearchBox placeholder="Search Monster" handleChange={e => this.setState({ searchfield: e.target.value })}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
