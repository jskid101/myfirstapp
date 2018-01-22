import React, { Component } from 'react';
// import DisplayPodcast from './DisplayPodcast';
import axios from 'axios';

function handleDelete(id){
    axios.delete(`./api/podcasts/${id}`)
}

function DisplayTile(props){

    const val = props.val 
    
    return (
        <div>
            {/* <div>{val.author}</div>   */}
            <input type="text" onChange={(e)=>props.handleUpdateAuthor(val._id, e.target.value)} defaultValue={val.author}/>
            <input type="text" onChange={(e)=>props.handleUpdateTitle(val._id, e.target.value)} defaultValue={val.title}/>
            <input type="text" onChange={(e)=>props.handleUpdateCategory(val._id, e.target.value)} defaultValue={val.category}/>
            {/* <div>{val.title}</div>  
            <div>{val.category}</div>  */}
            <button onClick={()=>props.handleUpdate()}>Update</button>
            <button onClick={()=>handleDelete(val._id)}>Delete</button>
        </div>
      );
}


export default DisplayTile;