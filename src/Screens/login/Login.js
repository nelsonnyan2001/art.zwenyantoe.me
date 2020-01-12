import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import { Link } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleUserName = this.handleUserName.bind(this);
    }

    credentials = {
        cyka: "blyat",
        katty_alith32: "kattycattykatty"
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
        if (this.state.username in this.credentials && this.state.password === this.credentials[this.state.username]) {
            this.props.history.push('/secret')
        }
        else {
            document.getElementById("inputForm").reset();
            ReactDOM.render("incorrect", document.getElementById('incorrectText'));
        }

    }

    render() {
        return (
            <div className="container-login">
                <Link to='/'
                    className="link-home">«--home--«
                </Link>
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
                            placeholder="имя пользователя"
                            onChange={this.handleUserName} />
                        <input
                            type="password"
                            placeholder="пароль"
                            className="inputStyling"
                            onChange={this.handlePassword} />
                        <input
                            className="inputStyling"
                            value="авторизоваться"
                            type="submit" />
                    </form>
                    <div id="incorrectText"
                        className="incorrectInput">
                        <br />
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;
