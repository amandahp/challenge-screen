import axios from 'axios'

export const getInstallment = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`)
  return response
}
