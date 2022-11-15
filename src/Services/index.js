import axios from 'axios'

const baseUrl = "https://shareme-node.herokuapp.com/";
/**
   * *Fetching all Videos from DB
   * @returns promise of all Videos
   */
export const getAllVideos = async () => {
  try {
    const { data } = await axios.get(baseUrl + 'shareme/api/v1')
    return data;
  }
  catch (e) {
    console.log("Error " + e)
  }
}