import React from "react";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

const dashboardRoutes = [];

export class Search extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Name goes here"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
                />
            </div>
        )
    }
}

export default Search;
