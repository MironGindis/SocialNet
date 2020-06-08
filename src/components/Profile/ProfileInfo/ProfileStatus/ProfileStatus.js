import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        defaultstatus: 'Hello anyone! =)',
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status,
            })
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
        this.state.editMode = !this.state.editMode;
        if (!this.state.editMode) {
            this.props.updateUserStatus(this.state.status);
        }
}
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })

    }
    render() {
        return (<div>

            {((!this.state.editMode)) ?<div>
                <span onDoubleClick={this.toggleEditMode}>{!this.props.status ? this.state.defaultstatus : this.props.status}</span>
            </div>:
                <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleEditMode} value={this.state.status}/>
                </div>}
        </div>)
    }

}

export default ProfileStatus;