import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'


class App extends React.Component{
  state= {
    userData : {},
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/kayode94')
    .then(response=>{
      console.log(response.data)
      this.setState({
        userData:response.data
      })
    })
    .catch(error=>{
      console.log('This is your error', error)
    })

    axios.get('https://api.github.com/users/kayode94/followers')
    .then(response=>{
      console.log(response.data)
      this.setState({
        followers: response.data
      })
    })
    .catch(error=>{
      console.log('This is your error', error)
    })
  }


  render(){
    return(
      <div>
        <UserCard userData={this.state.userData} followers={this.state.followers}/>
      </div>
    )
  }

}

export default App;
