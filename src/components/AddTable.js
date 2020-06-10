import React from 'react';
import { connect } from "react-redux";
// import UpdatedComponent from './withCounter'
import { employDetails, addEmployDetails, removeEmployDetails, editEmployDetails } from './../actions/index'
import './AddTable.css';


class AddTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employName: '',
            employId: '',
            // empDetails: [],
            enableEdit: false,
            editedRow: false,
            enableUserData: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((response) =>
            response.json()).then(
                (result) => {
                    this.setState({
                        items: result.data
                    });
                })
    }

    getUserData = () => {
        this.props.employDetails(this.state.items);
        this.setState({
            enableUserData: true,
        })
    }

    updateTable = () => {
        let addEmployee = { id: this.state.employId, employee_name: this.state.employName, employee_salary: "30000" }
        // this.setState(prevousState => ({
        //     empDetails: [...prevousState.empDetails, a],
        //     employName: '',
        //     employId: ''
        // }))
        // this.props.incrementCount();
        if(this.state.employId && this.state.employName){
        const details = [addEmployee, ...this.props.empDetails]
        this.props.addEmployDetails(details);
        this.setState({
            employName: '',
            employId: '',
        })
        }
    }

    saveTableData = () => {
        let editData = [];
        const { editedRow } = this.state;
        editData =  Object.assign([], this.props.empDetails);
        editData.forEach((element, index) => {
            if(index === editedRow) {
                element.id = this.state.employId;
                element.employee_name = this.state.employName
            }
        });
        this.props.editEmployDetails(editData);
        this.setState({
            editedRow: false
        })
    }

    removeData = (indexData) => {
        const removeData = this.props.empDetails.filter((data, index) => index !== indexData)
        this.props.removeEmployDetails(removeData)

        // const { empDetails } = this.state;
        // empDetails.splice(index, 1);
        // this.setState({
        //     empDetails,
        //     employName: '',
        //     employId: '',
        //     enableEdit: false,
        //     editedRow: false
        // })
        // this.props.decrementCounter();
    }

    editData = (data, index) => {
        // let addEmployee = { id: data.employId, employee_name: data.employName, employee_salary: "30000" }
        this.setState({
            employName: data.employee_name,
            employId: data.id,
            enableEdit: true,
            editedRow: index
        })

    }

    addText = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { employName, employId, enableEdit, editedRow, enableUserData } = this.state;
        const { count } = this.props;
        return (
            <div>
                <h2>EMPLOYEE DETAILS</h2>
                <div class="container">
                    <label for="uname"><b>Employee Counter {count}: </b></label>
                    <label for="psw"><b> Employee Id: </b></label>
                    <input name='employId' placeholder="Employee Id" value={employId} onChange={this.addText}></input>
                    <label for="uname"><b> Employee Name: </b></label>
                    <input name='employName' placeholder="Employee Name" value={employName} onChange={this.addText}></input>
                    {enableEdit ?
                        <button class="btn_add" type="submit" onClick={this.saveTableData}>SAVE</button>
                        : enableUserData ?
                        <button class="btn_add" type="submit" onClick={this.updateTable}>ADD</button> : null}
                    <button class="btn_userData" onClick={this.getUserData}>Get Users Data</button>
                </div>
                <hr />
                <div>
                    {this.props.empDetails && this.props.empDetails.length ? <table>
                        <tr>
                            <th>EMPLOYEE_ID</th>
                            <th>EMPLOYEE_NAME</th>
                            <th>EMPLOYEE_SALARY</th>
                            <th>EDIT</th>
                            <th>REMOVE</th>
                        </tr>
                        {this.props.empDetails.map((data, index) => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.employee_name}</td>
                                    <td>{data.employee_salary}</td>
                                    <td><button disabled={editedRow === index ? true : false} 
                                    class={editedRow === index ? 'editDisableClass' : 'editClass'} 
                                    onClick={() => this.editData(data, index)}>EDIT</button> </td>
                                    <td><button onClick={() => this.removeData(index)}>REMOVE</button> </td>
                                </tr>
                            )
                        })}
                    </table> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    empDetails: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
    employDetails: (data) => dispatch(employDetails(data)),
    addEmployDetails: (data) => dispatch(addEmployDetails(data)),
    removeEmployDetails: (data) => dispatch(removeEmployDetails(data)),
    editEmployDetails : (data) => dispatch(editEmployDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTable)