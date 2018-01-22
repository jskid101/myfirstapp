import React, { Component } from 'react';
import AddPodcast from './AddPodcast';
import DisplayPodcast from './DisplayPodcast.js';

function Rapper(props) {

    return (
      <div>
      <AddPodcast />
      <DisplayPodcast />
      </div>
    );
  }

export default Rapper;