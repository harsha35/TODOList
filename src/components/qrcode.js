import React from 'react';
import QrReader from 'react-qr-reader';
import  './scanner.css';
class Scanner extends React.Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      console.log(data)
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="body">
          <div className="heading">Align the QR Code within the frame to scan!!</div>
          <br/>
        <QrReader
        className="Qr"
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        
        <p className="result">{this.state.result}</p>
      </div>
    )
  }
}
export default Scanner;