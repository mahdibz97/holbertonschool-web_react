import React from "react";
import { StyleSheet, css} from 'aphrodite'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableSubmit: false,
            email: null,
            password: null,
        }
        this.logIn = this.props.logIn
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit(e) {
        e.preventDefault()
        this.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value})
        if (this.state.email && this.state.password) this.setState({enableSubmit: true})
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
        if (this.state.email && this.state.password) this.setState({enableSubmit: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className={css(styles.appBody)}> 
                    <p>Login to access the full dashboard</p>
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className={css(styles.seperator)}>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" value={this.state.email || ""} onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className={css(styles.seperator)}>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" value={this.state.password || ""} onChange={this.handleChangePassword}></input>
                        </div>
                        <div className={css(styles.seperator)}>
                            <input type="submit" value="Submit" disabled={!this.state.enableSubmit}></input>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
    }

const styles = StyleSheet.create({
    appBody: {
        height: "70%",
        padding: "1rem",
        fontSize: "1.2rem",
        fontWeight: "500",
        '@media (max-width: 900px)': {
            flexDirection: "row"
        }
    },
    seperator: {
        display: 'inline',
		'@media (max-width: 900px)': {
			display: 'block',
		},
    }
})
    