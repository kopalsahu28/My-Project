import React from 'react';

class ComponentB extends React.Component {
   
    render() {
        const updateCounter = this.props.updateCounter;       
        return (
            <div>
                <h2> {updateCounter} Times Link is CLicked</h2>
            </div>
        )


    }
}

export default ComponentB