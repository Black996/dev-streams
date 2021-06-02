import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import { signIn, signOut } from "../actions";


class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => window.gapi.client.init({
            clientId: '562762553666-rouiq4l65q1kgr2klnafj78gkq30s04m.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        }))
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    }


    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <Button variant="contained" color="secondary" onClick={this.onSignOutClick}>Sign Out</Button>
            )
        } else {
            return (
                <Button variant="contained" onClick={this.onSignInClick}>
                    <Icon className="fab fa-google" style={{ fontSize: "15px", paddingRight: "5px" }} />
                    Sign In
                </Button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);