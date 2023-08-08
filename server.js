const express = require('express');
const app = express(); // this is just express. A var created to use express
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const rappers = {
	'21 savage':{
		'age':29,
		'birthName': 'Savior',
		'birthLocation': 'Paris, France'
	},
	'chance the rapper':{
		'age':28,
		'birthName': 'Cauliflower',
		'birthLocation': 'Chicago, Illinois'
	},
	'dylan':{
		'age':28,
		'birthName': 'Dylan',
		'birthLocation': 'Dylan'
	}
}

app.get('/',(request, response) => {
	response.sendFile(__dirname +'/index.html')
})

app.get('/api/:rapperName', (request, response) => { //:specifies that its a param and not part of the url
	const rappersName = request.params.rapperName.toLowerCase();
	if(rappers[rappersName]) {
		response.json(rappers[rappersName])
	}
	else {
		response.json(rappers['dylan'])
	}

})
app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on ${PORT}`)
})


