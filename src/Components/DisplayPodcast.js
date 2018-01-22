import React, { Component } from 'react';
import DisplayTile from './DisplayTile';
import axios from 'axios';
import Header from './Header';

class DisplayPodcast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: [],
      author: '',
      title: '',
      category: ''
    }
    this.handleUpdateAuthor = this.handleUpdateAuthor.bind(this)
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this)    
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  componentDidMount() {
    axios.get('/api/podcasts').then((resp) => {
      this.setState({ display: resp.data }, ()=>console.log(this.state.display) )
    });

  }

  handleUpdate(){
    console.log('update click')
    axios.put('/api/podcasts', {display:this.state.display}).then((resp) => {
      console.log(resp)
    })
  }
  handleUpdateAuthor(event, updatedAuthor){
    console.log(event)
    console.log(updatedAuthor)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.author = updatedAuthor
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  handleUpdateTitle(event, updatedTitle){
    console.log(event)
    console.log(updatedTitle)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.title = updatedTitle
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  handleUpdateCategory(event, updatedCategory){
    console.log(event)
    console.log(updatedCategory)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.category = updatedCategory
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  
  render() {
    if (!this.state.display) {
      return <div>Empty Podcast Library</div>
    } else {
      return (
        <div>
        <Header />
          <div className="DisplayPodcast">
            {this.state.display.map((val) => {
              return (
                <div key={val._id} className='tile'>
                  {/* <img src="" alt=""/> */}
                  <DisplayTile 
                  handleUpdateAuthor = {this.handleUpdateAuthor}val={val} 
                  DisplayTile handleUpdateTitle = {this.handleUpdateTitle}val={val}
                  DisplayTile handleUpdateCategory = {this.handleUpdateCategory}val={val}
                  handleUpdate = {this.handleUpdate}/>
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }
}

export default DisplayPodcast;