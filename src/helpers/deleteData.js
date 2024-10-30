import axios from "axios";

export const deleteData = async (url, id) => {
  await axios.delete(`${url}/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
