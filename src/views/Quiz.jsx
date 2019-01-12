import React from "react";
import Component from "react";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

import { brands } from "../brands.js";

const style = {
  ...imagesStyles,
  cardTitle,
};

const dashboardRoutes = [];

export class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {round: 0, answered: false, correct: false};
    }

    noClick() { // they test on animals
        let round = this.state.round;
        if (!brands[round].crueltyFree) {
            this.setState({round: this.state.round, answered: true, correct: true});
        } else {
            this.setState({round: this.state.round, answered: true, correct: false});
        }
    }

    yesClick() { // they are cruelty-free
        let round = this.state.round;
        if (brands[round].crueltyFree) {
            this.setState({round: this.state.round, answered: true, correct: true});
        } else {
            this.setState({round: this.state.round, answered: true, correct: false});
        }
    }
    
    next() {
        this.setState({round: this.state.round + 1, answered: false, correct: false});
    }

    render() {
        const { classes, ...rest } = this.props;
        let url = brands[this.state.round].logo;
        url = require('./makeup-logos/' + url);

        let backroundColor = !this.state.answered ? "white" : this.state.correct ? "green" : "red";
        let buttons = <Button color="primary" onClick={() => this.next()}>Next</Button>;
        let text = !this.state.answered ? "Is this brand cruelty free?" : this.state.correct ? "Correct" : "Incorrect";
        if (!this.state.answered) {
            buttons = <div>
                <Button color="success" onClick={() => this.yesClick()}>Yes</Button>
                <Button color="danger" onClick={() => this.noClick()}>No</Button>
            </div>
        }

        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Card style={{width: "20rem"}}>
                    <img
                        style={{height: "180px", width: "auto", display: "block"}}
                        src={url}
                        alt="Makeup brand logo"
                    />
                    <CardBody>
                        <h4>{text}</h4>
                        {buttons}
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Quiz;
