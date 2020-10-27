import './App.css';
import React from 'react'
import axios from 'axios'



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
      <div className='App'>
        <h1>GitHub UserCard</h1>
        <div className='info'>
          <img src = {this.state.userData.avatar_url}/>
          <h1>Github Current User: {this.state.userData.name}</h1>
          <h2>User Name: {this.state.userData.login}</h2>
          <h4>My Bio: {this.state.userData.bio}</h4>
        </div>
        <div className='user-followers'>
          <h3>Followers: {this.state.userData.followers}</h3>
          <h3>Following: {this.state.userData.following}</h3>
        </div>
        <div className='follower-card'>
          {this.state.followers.map((follower)=>(
            <div className='follow-info'>
              <img src={follower.avatar_url}/>
              <h3>GitHub Follower: {follower.login}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  }

}

export default App;
