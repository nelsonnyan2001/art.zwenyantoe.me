import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleUserName = this.handleUserName.bind(this);
    }

    handleUserName = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    }

    handlePassword = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.username === "admin" && this.state.password === "bigshitter69") {
            this.props.history.push('/home')
        }
        else {
            document.getElementById("inputForm").reset();
            ReactDOM.render("incorrect", document.getElementById('incorrectText'));
        }


    }

    render() {
        return (
            <div className="container-login">
                <div className="login-text">
                    <p>login</p>
                </div>
                <div className="formHolder">
                    <form
                        id="inputForm"
                        className="formHolder"
                        onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            className="inputStyling"
                            onChange={this.handleUserName} />
                        <input
                            type="password"
                            className="inputStyling"
                            onChange={this.handlePassword} />
                        <input
                            className="inputStyling"
                            value="log in"
                            type="submit" />
                    </form>
                    <div id="incorrectText"
                        className="incorrectInput">
                            <br/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;
