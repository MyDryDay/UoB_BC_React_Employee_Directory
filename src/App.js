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
    filteredList: [],
    ascending: true
  }

  // GET request to API for user data
  componentDidMount(){
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

  // Function to sort name & email in ascending order
  sortAsc = (arr) => {
    arr.sort((a, b) => {
      let personA = (a.name.first + a.name.last).toLowerCase();
      let personB = (b.name.first + b.name.last).toLowerCase();
      // localeCompare returns a number (1, 0, -1) depending on whether or not the string comes before, after or is equal
      // to the compareString in sort order. Also takes into account characters specific to the language set in the user's browser
      return personA.localeCompare(personB);
    });
    this.setState({filteredList: arr});
  }

  // Function to sort name & email in descending order
  sortDesc = (arr) => {
    arr.sort((a, b) => {
      let personA = (a.name.first + a.name.last).toLowerCase();
      let personB = (b.name.first + b.name.last).toLowerCase();
      return personB.localeCompare(personA);
    });
    this.setState({filteredList: arr});
  }

  // Function to sort age in ascending order
  sortAgeAsc = (arr) => {
    arr.sort((a, b) => {
      let personA = a.dob.age;
      let personB = b.dob.age;
      return personA - personB;
    });
    this.setState({filteredList: arr});
  }

  // Function to sort age in descending order
  sortAgeDesc = (arr) => {
    arr.sort((a, b) => {
      let personA = a.dob.age;
      let personB = b.dob.age;
      return personB - personA;
    });
    this.setState({filteredList: arr});
  }

  // Function to sort country in ascending order
  sortCountryAsc = (arr) => {
    arr.sort((a, b) => {
      let countryA = (a.location.country).toLowerCase();
      let countryB = (b.location.country).toLowerCase();
      return countryA.localeCompare(countryB);
    });
    this.setState({filteredList: arr});
  }

  // Function to sort country in descending order
  sortCountryDesc = (arr) => {
    arr.sort((a, b) => {
      let countryA = (a.location.country).toLowerCase();
      let countryB = (b.location.country).toLowerCase();
      return countryB.localeCompare(countryA);
    });
    this.setState({filteredList: arr});
  }

  // Function to handle whether to call ascending or descending sort function
  sort = (header) => {
    if(header === 'Name' || header === 'Email'){
      if(this.state.ascending === true){
        this.sortAsc(this.state.filteredList);
        this.setState({ascending: false});
      }
      if(this.state.ascending === false){
        this.sortDesc(this.state.filteredList);
        this.setState({ascending: true});
      }
    } else if(header === 'Age'){
      if(this.state.ascending === true){
        this.sortAgeAsc(this.state.filteredList);
        this.setState({ascending: false});
      }
      if(this.state.ascending === false){
        this.sortAgeDesc(this.state.filteredList);
        this.setState({ascending: true});
      }
    } else if(header === 'Country'){
      if(this.state.ascending === true){
        this.sortCountryAsc(this.state.filteredList);
        this.setState({ascending: false});
      }
      if(this.state.ascending === false){
        this.sortCountryDesc(this.state.filteredList);
        this.setState({ascending: true});
      }
    }
  }

  render(){

    return (
      // Replace this with what should actually be rendered

      <div className="App">
        <Header searchFunct = {this.search} />
        <Table employees = {this.state.filteredList} sortFunct = {this.sort}/>
      </div>
    );
  }
}

export default App;
