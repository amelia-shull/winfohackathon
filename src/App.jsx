
import React, { Component } from 'react'; //import React Component
import { Switch, Route } from 'react-router-dom';
class App extends Component {

    getHikes = (hikes) => {

        this.setState({ hikes: hikes });
    }

    constructor(props) {
        super(props);

        this.state = { hikes: undefined };
    }

    render = () => {
        return (
            <div >
                <NavBar />
                <Switch>
                    <Route path='/Account' component={Account} />
                    <Route path='/trail/:hikeId' component={TrailInfo} />
                    <Route path='/SavedHikes' component={SavedHikes} />
                    <Route component={HomePage} />
                </Switch>
                <Footer id="footer" />
            </div>
        )
    }
}

export default App;