import React, {Component} from 'react';  
import axios from 'axios';
// import src from '../assets/test_plot.jpg';

class fileUpload extends Component {

  state = {
    selectedFiles: null,
    result: null
  }

  fileSelectedHandler = (event) => {
    // event.preventDefault();
    console.log('fileSelectedHandler');
    console.log(event.target.files[0]);
    if (this.state.selectedFiles !== event.target.files) {
      this.setState({
        selectedFiles: event.target.files
      }); 
    }
    // const fileReader = new FileReader();
    // fileReader.onloadend = (e) => {
    //   const img = e.result;
    //   console.log(img);
    //   // // Create a new image.
    //   // var img = new Image();
    //   // // Set the img src property using the data URL.
    //   // img.src = reader.result;
  
    //   // // Add the image to the page.
    //   // fileDisplayArea.appendChild(img);
    // }
    // console.log(event.target.files);
    // fileReader.readAsDataURL(event.target.files);
    // // fileReader.readAsDataURL(event.target.files[1]); 
  }

  readFile = (file) => {
    const reader  = new FileReader();
    reader.onloadend = (e) => {
      console.log(e.target.result);
    }
  }

  fileUploadHandler = async (event) => {
    console.log('fileUploadHandler');

    if (this.state.selectedFiles[0]) {
      const reader1  = new FileReader();
      reader1.onloadend = (e) => {
        console.log(e.target.result);
        this.setState({
          image1: e.target.result
        });
      }
      reader1.readAsDataURL(this.state.selectedFiles[0]);
    }

    if (this.state.selectedFiles[1]) {
      const reader2  = new FileReader();
      reader2.onloadend = (e) => {
        console.log(e.target.result);
        this.setState({
          image2: e.target.result
        });
      }
      reader2.readAsDataURL(this.state.selectedFiles[1]);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    const { image2 } = this.state; 
    if (image2 !== prevState.image2) {
      const body = {
        image1: this.state.image1,
        image2: this.state.image2
      };
      console.log(body);
      const response = await axios.post('/api/openpiv', body);
      console.log(`response: ${response}`);
    }
    // this.setState({
    //   ...this.state,
    //   result: response
    // });
  }

  render() {
    const file_path = this.state.result;
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
