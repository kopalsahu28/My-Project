import React from 'react';
import UpdatedComponent from './withCounter'


class HoverCounter extends React.Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//      count: 0
//     }
//   }

//   incrementCount = () => {
//       this.setState(prevState => {
//           return { count: prevState.count + 1}
//       })
//   }

  render(){
    // const {count} = this.state;
    const { count, incrementCount } = this.props;

      return(
        //   <div><h2 onMouseOver={this.incrementCount}>Hover {count} times</h2></div>
          <div><h2 onMouseOver={incrementCount}>Hover {count} times</h2></div>

      )
  }
}
// export default HoverCounter
export default UpdatedComponent(HoverCounter)