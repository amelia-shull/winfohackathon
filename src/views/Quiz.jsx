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
import "./quiz-style.css";


const style = {
  ...imagesStyles,
  cardTitle,
};

const dashboardRoutes = [];

export class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {round: 0, answered: false, correct: false, number: 0};
    }

    noClick() { // they test on animals
        let round = this.state.round;
        if (!brands[round].crueltyFree) {
            this.setState({round: this.state.round, answered: true, correct: true, number: this.state.number + 1});
        } else {
            this.setState({round: this.state.round, answered: true, correct: false, number: this.state.number});
        }
    }

    yesClick() { // they are cruelty-free
        let round = this.state.round;
        if (brands[round].crueltyFree) {
            this.setState({round: this.state.round, answered: true, correct: true, number: this.state.number + 1});
        } else {
            this.setState({round: this.state.round, answered: true, correct: false, number: this.state.number});
        }
    }
    
    next() {
        this.setState({round: this.state.round + 1, answered: false, correct: false, number: this.state.number});
    }

    resetGame() {
        this.setState({round: 0, answered: false, correct: false, number: 0})
    }

    render() {

        if (this.state.round  == brands.length) {
            return(
                <div className="quiz">
                <Header className="quiz-header"
                    color="white"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks />}
                    brand="Brand goes here"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <div className="transparent-box">
                    <h2>Game Over!</h2>
                    <Card style={{width: "20rem"}} className="card">
                        <CardBody>
                            <h3>{this.state.number + " correct out of " + brands.length}</h3>
                            <Button color="primary" onClick={() => this.resetGame()}>Play Again</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            )
        }




        const { classes, ...rest } = this.props;
        let url = brands[this.state.round].logo;
        url = require('./makeup-logos/' + url);

        let backroundColor = !this.state.answered ? "white" : this.state.correct ? "green" : "red";
        let buttons = <Button color="primary" onClick={() => this.next()}>Next</Button>;
        let isCrueltyFree = brands[this.state.round].crueltyFree ? " is cruelty-free!": " is not cruelty-free :("
        isCrueltyFree = brands[this.state.round].brand + isCrueltyFree;
        let text = !this.state.answered ? "Is this brand cruelty-free?" : this.state.correct ? "Correct. " + isCrueltyFree: "Incorrect. " + isCrueltyFree;
        if (!this.state.answered) {
            buttons = <div>
                <Button color="success" onClick={() => this.yesClick()}>Yes</Button>
                <Button color="danger" onClick={() => this.noClick()}>No</Button>
            </div>
        }

        return (
            <div className="quiz">
                <Header className="quiz-header"
                    color="white"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks />}
                    brand="Ethical Cosmetics"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <div className="transparent-box">
                    <h2>Test your knowledge on cruelty-free brands!</h2>
                    <p>You may be surprised. Many of your favorite brands could test on animals.</p>
                    <Card style={{width: "22rem"}} className="card">
                        <img
                            style={{height: "180px", display: "block", objectFit: "contain"}}
                            src={url}
                            alt="Makeup brand logo"
                        />
                        <CardBody>
                            <h4>{text}</h4>
                            {buttons}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Quiz;
