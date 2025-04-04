import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {



    state = {
        
        name: "",
        email: "",
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        console.log(this.state);
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        console.log(this.props);
        //this.props.history.push("/");
    }
    render() {
    return(
        <>
        <h2 align='center'>Add user</h2>
        <div class='outer-form'>
        <Link to="/">
                    <button className="ui button blue right">Back to ContactList</button>

                    </Link>

                    <form onSubmit={this.handleSubmit }>
            <div class='form-div'>
                <div class='inside'>
            <label class='form-label'>Name :</label>
            <input type="text" name="name" class='input-box' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value}) }></input>
            </div>
            <div class='inside'>
            <label class='form-label' >Email :</label>
            <input type="text" name="email" class='input-box' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
            </div>
            <div class='button-div'>
            <button >Add</button>
            </div>
            </div>
        </form>
        </div>
        </>
    )
}
}

export default AddContact;