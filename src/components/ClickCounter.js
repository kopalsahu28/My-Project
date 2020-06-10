import React from 'react';
import UpdatedComponent from './withCounter'


class ClickCounter extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //    count: 0
  //   }
  // }

  // incrementCount = () => {
  //     this.setState(prevState => {
  //         return { count: prevState.count + 1}
  //     })
  // }

  render() {
    // const {count} = this.state;
    const {count, incrementCount } = this.props;
    return (
      // <div><button onClick={this.incrementCount}>Clicked {count} times</button></div>
      <div><button onClick={incrementCount}>Clicked {count} times</button></div>
    )
  }
}
// export default ClickCounter
export default UpdatedComponent(ClickCounter)