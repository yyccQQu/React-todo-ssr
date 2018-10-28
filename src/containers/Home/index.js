import React, { Component } from 'react';
import Header from '../../components/Header'
//同构： 一套React代码，在服务器端执行一次，再客户端再执行一次
import {connect} from 'react-redux'


const Home = (props) => {
    return (
        <div>
            <Header/>
            <div>Home abc~~{props.name}!</div>
            <button onClick={() => { alert('click') }}>click</button>
        </div>
    )

}

const mapStateToProps = state => ({
    name: state.name
})


export default connect(mapStateToProps,null)(Home);