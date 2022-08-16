import axios from "axios";
// const URL = "https://crudcrud.com/api/9f9570622452477eb2d977ba1f2553c5/unicorns"
export const getMascotas = async () => {
  try {
    let data = await axios.get(`${URL}`);
    return data;
  } catch (error) {
    throw error;
  }
}; 
export const postMascotas= async (dataInput) => {
  console.log(dataInput);
  try {
    let data = await axios.post(`${URL}`, {
      dataInput,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const putMascotas = async (id, dataInput) => {
  // console.log(id, dataInput);
  try {
    let data = await axios.put(`${URL}/${id}`, {
      dataInput,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const  deleteMascotas= async (id) => {
    try {
        let data = await axios.delete(`${URL}/${id}`)
        return data
    }
    catch (error) {
        throw error
    }
};
  
