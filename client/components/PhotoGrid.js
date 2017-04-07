import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {

  render() {
    return (
      <div className="photo-grid"> 
            {
                this.props.posts.map( (post, index) => 
                    <Photo {...this.props} key={index} index={index} post={post} />) 
            }
      </div>
      )
  }

}


export default PhotoGrid;
