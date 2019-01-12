import React from "react";
import {NavLink, Link} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ProductSection from "./LandingPage/Sections/ProductSection.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import './bootstrap.css';
import "./Search.css";
import "./quiz-style.css";

const dashboardRoutes = [];

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    }

    handleChange = (event) => {
        console.log(this.state.search);
        this.setState({search: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.search);

    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className="quiz">
                <Header className="quiz-header"
                    color="white"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks />}
                    brand="Brand name here"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <div className="transparent-box">
                    <form>
                         <div class="form-group">
                             <label for="search">Search makeup brands</label>
                             <input type="text" className="form-control" 
                                     value={this.state.search}
                                     onChange={this.handleChange}
                                     placeholder="Enter brand"></input>
                         </div>
                         <button type="submit" onClick={this.handleClick} className="btn btn-primary btn-md">Search</button>
                     </form>
                    </div>
                </div>
            // <div>
            //     <Header
            //         color="white"
            //         routes={dashboardRoutes}
            //         brand="Name goes here"
            //         rightLinks={<HeaderLinks />}
            //         fixed
            //         {...rest}
            //     />
            // <div class="jumbotron"></div>
            //     <div class="container">
            //         <form>
            //             <div class="form-group">
            //                 <label for="search">Search makeup brands</label>
            //                 <input type="text" className="form-control" 
            //                         value={this.state.search}
            //                         onChange={this.handleChange}
            //                         placeholder="Enter brand"></input>
            //             </div>
            //             <button type="submit" className="btn btn-primary btn-md">Search</button>
            //         </form>
            // </div>
            // <ProductList search={this.state.search}></ProductList>
            //<Footer></Footer>
            //</div>
        )
    }
}

class ProductList extends React.Component {
    render() {
        return (
        <div>

        </div>);
    }
}

class ProductItem extends React.Component {
    render() {
        return(
        <div>   

        </div>);
    }
}

export default Search;
