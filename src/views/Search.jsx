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

import "./Search.css";
import "./quiz-style.css";
import './bootstrap.css';
import { DATA } from './brands-1.js';
const dashboardRoutes = [];

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            dataArray: [],
            brand: undefined
        };
    }

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }

    handleClickBrand = (event) => {
        event.preventDefault();
        let filteredData = DATA.filter((item) => {
            // console.log(item.brand);
            // console.log(item.brand.toLowerCase().includes(this.state.search));
            return item.brand.toLowerCase().includes(this.state.search.toLowerCase());
        });
        this.setState({dataArray: filteredData, brand:true});
    }

    handleClickProduct = (event) => {
        event.preventDefault();
        let filteredData = DATA.filter((item) => {
            return item.product_name.toLowerCase().includes(this.state.search.toLowerCase());
        });
        this.setState({dataArray: filteredData, brand:false});
    }

    render() {
        const { classes, ...rest } = this.props;
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
                    <form>
                         <div class="form-group">
                             <h3>Search makeup brands</h3>
                             <input type="text" className="form-control" 
                                     value={this.state.search}
                                     onChange={this.handleChange}
                                     placeholder="Enter brand"></input>
                         </div>
                         <button type="text" onClick={this.handleClickBrand} className="btn btn-primary btn-md btn-pad">Search Brand</button>
                         <button type="text" onClick={this.handleClickProduct} className="btn btn-primary btn-md btn-pad">Search Product</button>
                     </form>
                     <ProductList data={this.state.dataArray} brand={this.state.brand}></ProductList>
                </div>
            </div>
        )
    }
}

class ProductList extends React.Component {
    render() {
        if (this.props.data.length === 0 && this.props.brand) {
            return (
                <div>
                    <h4>No cruelty-free products from this brand :(</h4>
                </div>
            )
        }
        console.log(this.props.data);
        let renderedProduct = this.props.data.map((item, index) => {
            return <ProductItem data={item} key={index}></ProductItem>
        })
        return (
        <div className="card-columns">
            {renderedProduct}
        </div>);
    }
}

class ProductItem extends React.Component {
    render() {
        let item = this.props.data;
        console.log(item);
        return(
            <div className="card">
                <img src={item.image_url}
                 className="card-img-top" alt={item.product_name}></img>
                <div className="card-body">
                <h5 className="card-title bold">{item.brand}</h5> 
                <h5 className="card-title">{item.product_name}</h5> 
                <h6 className="card-title">{"Price: " + item.price}</h6>                     
                </div>
            </div>
        );
    }
}

export default Search;
