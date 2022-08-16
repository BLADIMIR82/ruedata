import axios from "axios";
const URL = "https://crudcrud.com/api/c11b4e17f5d94d30a80c93e94ecf7da2/unicorns"

export const getMascotas = async () => {
  try {
    let data = await axios.get(`${URL}`);
    return data;
  } catch (error) {
    throw error;
  }
}; 
export const postMascotas= async (dataInput) => {

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
;
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
  
