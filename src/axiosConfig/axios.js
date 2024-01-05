import axios from 'axios';
const axiosInstance= axios.create({
    baseURL : "https://api.jikan.moe/v4"
})

axiosInstance.interceptors.request.use((config)=>{
    // console.log(config);
    return config
},(err)=>{
    return Promise.reject(err)
});
axiosInstance.interceptors.response.use((response)=>{
    return response
},(err)=>{
    return Promise.rejected(err)
})

export default axiosInstance;

