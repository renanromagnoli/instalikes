const puppeteer = require('puppeteer');

/*(async (user) => {
    const browser = await puppeteer.launch({headless: false}) //abrir o navegador
    const page = await browser.newPage() // abrir nova página
    await page.goto(`https://www.instagram.com/${user}/`) //acessar o link
    await page.screenshot({path: 'renaninsta.png'})

    await browser.close()
})('renan.romagnoli')*/

async function getProfilePage(user) {
    const browser = await puppeteer.launch() //abrir o navegador
    const page = await browser.newPage() // abrir nova página
    await page.goto(`https://www.instagram.com/${user}/`) //acessar o link
    await page.screenshot({path: 'renaninsta.png'})
    // const profileImage = document.querySelector('.IalUJ img').src
    
    
    const getPostsLinks = await page.evaluate(() => {
        const nodeLinks = document.querySelectorAll('.ySN3v a')
        const linksArray = [...nodeLinks]

        const linksHref = linksArray.map(({href}) => (
            href
        ))
        // .forEach(({href}) => console.log(href))
        return linksHref
    })
    // document.querySelectorAll('.v1Nh3 a').forEach(item => console.log(item.href.toString()
    // console.log(postsList)
    
    await browser.close()

    console.log(getPostsLinks)

    
}

getProfilePage('renan.romagnoli')
