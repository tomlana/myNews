const express = reuire('express')
const axios = require('axios')
const news = express.Router()
const moment = require('moment')
cons math = require('math')

news.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
        'contry=in&' +
        'api_Key={YOUR_API}' +

        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if (error.response){
            console.log(error)
        }
    }
})

news.post('/search', async(req,res)=>{
    const search=req.body.search

    try{
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey={YOUR_API}`

        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.artciles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

module.exports=news