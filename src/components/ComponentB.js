import React from 'react';

class ComponentB extends React.Component {

    render() {
        const userData = this.props.data;
        const {clickCounter} = this.props;

        const items = userData && userData.length && userData.map((data) => {
            return <li><b>NAME:</b> {data.name}, <b>Age:</b> {data.Age}</li>
        });

        return (
            <div>
                <h3>User Data</h3>
                <ul onClick={clickCounter}>
                    {items}</ul>
            </div>
        )


    }
}

export default ComponentB