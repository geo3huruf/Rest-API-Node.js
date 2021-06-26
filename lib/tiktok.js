const TikTokScraper = require('tiktok-scraper');

async function TiktokData(url) {
	const videoMeta = await TikTokScraper.getVideoMeta(url);
	    var videss = videoMeta.collector.slice( 0, 4 )
	    videss.forEach( function ( cd ) {
	        var textke = cd.text
	        var videone = cd.videoUrl
	        var WaterMark = cd.videoUrlNoWaterMarkm
	    });
    return ({
		Status: 200,
		Judul: textke,
		Video_URL: {
			WithWM: videone,
			WithoutWM: WaterMark
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
