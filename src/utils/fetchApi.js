import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "726764c786msh4b3446f6eccec1dp18cbf7jsn72d597fc3787",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  })
  return data
}
