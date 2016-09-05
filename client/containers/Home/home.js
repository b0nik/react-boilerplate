import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as pageActions from './actions'
import 'whatwg-fetch';


function mapStateToProps(state) {
    return {
        title: state.home.title
    }
}
function mapDispatchToProps(dispatch) {
    return {
        homeActions: bindActionCreators(pageActions, dispatch)
    }
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        fetch('/homepage', {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
        )
            .then(
                response=> {
                    return response.json()
                }
            )
            .then(
                json=> {
                    this.state.loaded = true;
                    this.props.homeActions.getPage(json)
                }
            )

    }

    render() {
        const styles = require('./styles.less');
        let result;
        if (this.state.loaded) {
            result = (
                <div className={styles.wrap}><h1 className='title'>{this.props.title}</h1></div>
            )
        } else {
            result = (
                <p>loading...</p>
            )
        }

        return result;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
