import React from 'react';
import ComponentC from './ComponentC.js';
import ComponentB from './ComponentB.js';

class ComponentA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ name: 'Akash', Age: 25 },
            { name: 'Kopal', Age: 25 },
            { name: 'Amit', Age: 25 },
            { name: 'Neha', Age: 25 },
            { name: 'Rupal', Age: 25 }
            ],
            updateCounter: 0
        }
    }

    clickCounter = () => {
        this.setState({
            updateCounter: this.state.updateCounter + 1
        })
    }

    render() {

        return (

            <div>
                <ComponentB data={this.state.data} clickCounter={this.clickCounter} />
                <ComponentC updateCounter={this.state.updateCounter} />
            </div>

        )


    }
}

export default ComponentA