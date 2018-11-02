import React, { Component } from 'react';
import Header from '../../components/Header'
//同构： 一套React代码，在服务器端执行一次，再客户端再执行一次
import {connect} from 'react-redux'
import {getHomeList} from './store/action'

class Home extends Component {

    getList() {
        const {list} = this.props;
        return list.map((item,index) => <div key={index}>{item}</div>)
    }

    render() {
        return(
            <div>
                <Header/>
                <div>Home abc~~{this.props.name}!</div>
                {
                    this.getList()
                }
                <button onClick={() => { alert('click') }}>click</button>
            </div>
        )
    }
    
    componentDidMount() {
        this.props.getHomeList()
    }

}

Home.loadData = () =>{
    
}

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