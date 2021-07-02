const TikTokScraper = require('tiktok-scraper');

async function TiktokData(url) {
	const videoMeta = await TikTokScraper.getVideoMeta(url,{
	    sessionList: ['sid_tt=58ba9e34431774703d3c34e60d584475;'],
	    headers: {
	        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4131.165 Safari/537.36',
	        referer: 'https://www.tiktok.com/',
	        cookie: 'sid_tt=58ba9e34431774703d3c34e60d584475; tt_csrf_token=JTDJu6QrXN4ewYua1ejGrRmJ'
	}});
	    var videss = videoMeta.collector.slice( 0, 4 )
	    videss.forEach( function ( cd ) {
	        var textke = cd.text
	        var videone = cd.videoUrl
	    });
    return ({
		Status: 200,
		Judul: textke,
		Video_URL: {
			WithWM: videone,
		}
	});
}

const Tiktok = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('masukan text nya kak.') }
    try {
		TiktokData(url).then(data => {
			resolve(data);
		});
    } catch (error) {
        reject({
			code:400,
			message: error
		});
    }
})

module.exports = Tiktok
