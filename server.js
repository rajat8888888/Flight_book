const PORT=8000
const axios = require("axios").default
const express=require('express')
const aap=express()
const cors=require('cors')
require('dotenv').config()
aap.use(cors())

aap.get('/flight',(req,res)=>{
  
const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
  }
  
  axios.request(options).then(function (response) {
      console.log(response.data)
      res.json(response.data.slice(0,6))
  }).catch(function (error) {
      console.error(error)
  })
})



aap.listen(PORT,()=>console.log('running on PORT'+PORT))