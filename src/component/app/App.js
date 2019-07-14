import React from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import Example from '../example/Example';
import Dialog from '../dialog/Dialog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  onExampleClick(entry, args) {
    this.setState({
      show: true
    })
  }

  onItemClick(entry, args) {
    this.setState({
      show: false
    })
  }

  render() {
    const entry = {
      name: 'chris'
    }
    return (
      <div className="App">
        <Example text='确定' onClick={this.onExampleClick.bind(this)} show={false} />
        {this.state.show &&
          <Dialog onClick={this.onItemClick.bind(this)} />
        }
      </div>
    )
  }
}

export default App;
