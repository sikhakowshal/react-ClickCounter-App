import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="count-text">
            The Button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <div className="button-container">
            <button className="button" onClick={this.onIncrement}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
