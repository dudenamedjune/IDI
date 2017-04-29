var axios = require('axios');
var mscognitive = require('./keys.js');

var helpers = {
	convertText: function(imgURL){
		return axios({
			method: 'post',
			url: imgURL,
			//url: 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation=true',
			headers: {
				'Content-Type': 'application/json',
				'Ocp-Apim-Subscription-Key': mscognitive.ocpapimsubkey
			}
		}).then(function(data){
			console.log(data);
			return (data);
		})
	}
}
module.exports = helpers;