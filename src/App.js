import './App.css';

// import react
import React from 'react';
// import components
import Header from './components/Header';
import Table from './components/Table';
// import & install axios npm package to handle API calls
import axios from 'axios';

class App extends React.Component {
  // Declare states
  state = {
    employees: {},
    filteredList: []
  }

  // GET request to API for user data
  async componentDidMount(){
    // Set API URL to a variable
    let API = "https://randomuser.me/api/?results=25";

    // Call GET on API
    axios.get(API).then((res) => {
      // Once GET request is succesful, set states
      this.setState({
        employees: res.data.results,
        filteredList: res.data.results
      })
    })
  }

  // Function to search
  search = (query) => {
    // Filters the employees array and creates a new one; filtered
    const filtered = this.state.employees.filter((employee) => {
      // Create a variable called fullName that holds any employee's whole name
      const fullName = (`${employee.name.title} ${employee.name.first} ${employee.name.last}`).toLowerCase();
      // Returns any employees whose names include the query term
      // So employees can be searched by title, first name or last name
      return fullName.includes(query);
    })
    this.setState({filteredList: filtered});
  }

  // Function to sort table results in ascending order

  // Function to sort table results in descending order

  // Function to handle whether to call ascending or descending sort function
  render(){

    return (
      // Replace this with what should actually be rendered

      <div className="App">
        <Header searchFunct = {this.search} />
        <br></br>
        <Table employees = {this.state.filteredList}/>
      </div>
    );
  }
}

export default App;
