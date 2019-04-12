import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PostList from "./components/PostList";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Message</h1>
                        <div>
                            <div><Link to="/">All Posts</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={PostList}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;