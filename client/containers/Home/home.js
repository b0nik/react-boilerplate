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
        const styles=require('./styles.less');

        return(
            <div className={styles.wrap}><h1 className='title'>{this.props.title}</h1></div>

        )
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Home);
