import axios from "axios";

var getData = (url) =>
{
   return axios.get(url);
}

var addNewData = (url,obj) =>
{
    return axios.post(url);
}

var updateData = (url,obj) =>
{
    return axios.update(url);
}

var deleteData = (url) =>
{
    return axios.delete(url);
}

var DAL = {
    getData,
    addNewData,
    updateData,
    deleteData
}

export default DAL;