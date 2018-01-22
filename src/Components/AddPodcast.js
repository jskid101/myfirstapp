import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';


class AddPodcast extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      author: '',
      title: '',
      category: ''
    }
    this.handleUpdateAuthor = this.handleUpdateAuthor.bind(this);
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
  }
  handleUpdateAuthor(event){
    this.setState({
      author: event.target.value
    })
    
  }
  handleUpdateTitle(event){
    this.setState({
      title: event.target.value
    })
  }
  handleUpdateCategory(event){
    this.setState({
      category: event.target.value
    })
    
  }
  add(){
    // let podcast = this.state
    axios.post('/api/podcasts/', this.state)
    .then(function (resp) {
    
    })
    .catch(function (error) {
    });
  
  }
  render() {
    return (
      <div className="AddPodcast">
        <Header />
        Add Podcast: 
        <input onChange={this.handleUpdateAuthor}
        placeholder="author"/>
        <input onChange={this.handleUpdateTitle}
        placeholder="title"/>
        <input onChange={this.handleUpdateCategory}
        placeholder="category"/>
        <button
        onClick={()=>this.add()}>Post</button>
      </div>
    );
  }
}

export default AddPodcast;