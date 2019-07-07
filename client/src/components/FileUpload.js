import React, {Component} from 'react';  
import axios from 'axios';
// import src from '../assets/test_plot.jpg';

class fileUpload extends Component {

  state = {
    selectedFiles: null,
    result: null
  }

  fileSelectedHandler = (event) => {
    event.preventDefault();
    if (this.state.selectedFiles !== event.target.file) {
      this.setState({
        selectedFiles: event.target.files
      }); 
    }
  }

  fileUploadHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const fd = new FormData();
    fd.append('image_1', this.state.selectedFiles[0], this.state.selectedFiles[0].name);
    fd.append('image_2', this.state.selectedFiles[1], this.state.selectedFiles[1].name);
    const response = await axios.post('server:4000/api/upload', fd);
    
    this.setState({
      ...this.state,
      result: response
    });
  }

  render() {
    const file_path = this.state.result;
    console.log(file_path);
    return (
      <div className="fileUpload" >
        <input type="file" onChange={this.fileSelectedHandler} required multiple/>
        <button onClick={this.fileUploadHandler}> Upload </button>
        <br/>
        {file_path ? <img alt='img' src={require(`../assets/${file_path.data}`)} /> : null}
      </div>
    );
  }
}

export default fileUpload;
