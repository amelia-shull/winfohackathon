import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Why cruelty-free makeup?</h2>
            <h5 className={classes.description}>test
              It's 2019, animal testing is no longer necessary to determine if cosmetic products are safe. 
              Yet, animal testing is still very common. It's not just mice and rats either. Bunnies and Beagles
              are very commonly tested on. In 2013 it was estimated that 67,772 dogs and 24,221 cats were used
              in animal testing in the US. You can do your part by buying cruelty-free cosmetics. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Cruelty-free product"
                description="A product is deemed cruelty-free if the company doesn't test any of its products on
                animals regardless of laws."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Cruelty-free ingredients"
                description="Another important part of cruelty-free makeup is that none of the ingredients used have been tested on animals.
                There is a bank of over 7,000 ingredients that are known to be safe for cosmetic use. Companies can just refernce that."
                icon={Chat}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Vegan"
                description="Vegan products are different than cruelty-free products. For example, a product could be vegan but ingredients could have been tested on animals. 
                Cruelty-free and vegan aren't mutually exlcusive and that's important to remember."
                icon={Chat}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
