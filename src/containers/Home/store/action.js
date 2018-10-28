import axios from 'axios'


export const getHomeList = () => {
    return (dispatch) => {
        // https://blog.csdn.net/Mario_faker/article/details/79618235
        // https://www.cnblogs.com/apgy/p/8466133.html
        axios.get('/api/v2/movie/in_theaters').then((res)=>{
            const data = res.config.url.split('/').splice(1,4);
            console.log( data,'res')
            // dispatch(changeList(data))
        }).catch((err)=>{
            console.log(err,'error')
        })
    }
}