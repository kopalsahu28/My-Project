
import React from 'react';


class EmployeeDetails extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => this.props.employDetails(this.props.data)}>Get Users Data</button>
            </div>
        );
    }
}


export default EmployeeDetails;














