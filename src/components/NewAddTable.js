import React from 'react'

class NewAddTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employName: '',
            employID: '',
            employDetails: [],
            enableEdit:false,
            editedRowData: false,
        }
    }

    addText = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateTable = () => {
        var a = { employName: this.state.employName, employID: this.state.employID }
        this.setState(prevousState => ({
            employDetails: [...prevousState.employDetails, a],
            employName: '',
            employID: '',
            editedRowData:false
        })
        )
    }

    EditTable =(data,index) =>{
        this.setState({
            employName: data.employName,
            employID: data.employID,
            editedRowData : index,
            enableEdit:true
        })

    }

    SaveTable= () =>{
        const {employDetails, editedRowData } = this.state;
        console.log('llll',editedRowData)
        let array = employDetails
        let a = { employName: this.state.employName, employID: this.state.employID }
        array[editedRowData] = a;
        this.setState({
            employDetails: array,
            employName: '',
            employID: '',
            editedRowData: false ,
            enableEdit: false
        })
    }

    RemoveTable = (index) => {
        const {employDetails} = this.state;
        console.log('employDetails',index)
        employDetails.splice(index,1);
        this.setState({
            employDetails,
            employName: '',
            employID: '',
            enableEdit: false 
        })

    }


    render() {
        const { employName, employID, employDetails, editedRowData, enableEdit } = this.state;
console.log('k',employDetails);
        return (
            <div>
                <input name='employName' value={employName} onChange={this.addText}></input>
                <input name='employID' value={employID} onChange={this.addText}></input>
                {enableEdit ? <button onClick={this.SaveTable}>Save</button> : <button onClick={this.updateTable}>ADD</button>}
                {employDetails.length ? <table>
                    <tr>
                        <th>employName</th>
                        <th>employID</th>
                    </tr>
                    {employDetails.map((data,index) => {
                        return (
                        <tr>
                            <td>
                                {data.employName}
                            </td>
                            <td>
                                {data.employID}
                            </td>
                            <button disabled={editedRowData === index ? true : false} onClick={() => this.EditTable(data,index)}>EDIT</button>
                            <button onClick={() => this.RemoveTable(index)}>REmove</button>
                        </tr>
                    )
                    })
                    }
                </table>
                 : null}

            </div>

        )
    }
}
export default NewAddTable