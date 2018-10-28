import React, { Component } from 'react';
import Header from '../../components/Header'
//同构： 一套React代码，在服务器端执行一次，再客户端再执行一次

const Home = () => {
    return (
        <div>
            <Header/>
            <div>Home abc~~lidehaor!!!!!</div>
            <button onClick={() => { alert('click') }}>click</button>
        </div>
    )

}

export default Home;