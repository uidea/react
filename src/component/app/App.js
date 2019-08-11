import React from 'react';
import Example from '../example/Example';
import { increment } from "../../actions/exampleAction";
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = () => {
    this.props.dispatch(increment())
  }

  render() {
    return (
      <div className="App">
        <Example text='增加' onClick={this.onItemClick} />
        <p>{this.props.number}</p>
        <button onClick={() => this.props.dispatch({ type: 'INCREMENT_ASYNC' })} >异步增加</button>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default connect(
  state => ({
    number: state.number,
    name: state.name
  })
)(App);
