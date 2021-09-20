import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css} from 'aphrodite'
import AppContext from '../App/AppContext'
import { useContext } from 'react';

export default function Header(props) {
    const { user, logOut } = useContext(AppContext);
    return (
        <div className={props.className}>
            <img src={logo} alt="logo" className={css(styles.appHeaderImg)}/>
            <h1>School dashboard</h1>
            {user.isLoggedIn && <section id="logoutSection"><p>Welcome {user.email} <a onClick={logOut}>(logout)</a></p></section>}
        </div>
    )
}


const styles = StyleSheet.create({
    appHeaderImg: {
        width: "200px",
        height: "200px",
    }
})