const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://www.instagram.com/renan.romagnoli/'

const getData = async (url) => {
    const response = await axios.get(url)
    return response.data
}

const acesso =  async () => {
    const response = await getData(URL)
    let $ = cheerio.load(response)
    
    // const nodeList = $('.ySN3v a')
    const nodeList = $('div.nZSzR h2').text()
    // const listArray = [...nodeList]
    console.log(nodeList)
}

acesso()