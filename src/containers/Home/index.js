import React, { Component } from 'react';
import Header from '../../components/Header'
//同构： 一套React代码，在服务器端执行一次，再客户端再执行一次
import {connect} from 'react-redux'
import {getHomeList} from './store/action'

class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div>Home abc~~{this.props.name}!</div>
                {
                    this.props.list.map((item,index) => {
                        return <div key={index}>{item}</div>
                    })
                }
                <button onClick={() => { alert('click') }}>click</button>
            </div>
        )
    }
    
    componentDidMount() {
        this.props.getHomeList()
    }

}

// const Home = (props) => {
//     return (
//         <div>
//             <Header/>
//             <div>Home abc~~{props.name}!</div>
//             <button onClick={() => { alert('click') }}>click</button>
//         </div>
//     )
// }

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())   
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);