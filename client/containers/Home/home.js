import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as pageActions from '../actions/PageActions'


function mapStateToProps(state) {
    return{
        title:state.home.title
    }
}
// function mapDispatchToProps(dispatch) {
//     return{
//         homeActions:bindActionCreators(changeTitle, dispatch)
//     }
//
// }

class Home extends Component{

    render(){
        return(
            <h1>{console.log(this.props)}{this.props.title}</h1>
        )
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Home);
