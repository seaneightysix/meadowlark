

const express = require('express');
const app = express();
//set up handlebars view engine
const handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) =>{
    res.render('home');
});

app.get('/about', (req, res, next) =>{
    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});

// custom 404 page
app.use((req, res, next) =>{
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

//array of fortune cookies
let fortunes = [
'Counquer your fears or they will conquer you.',
'Rivers need springs.',
"Do not fear what you don't know",
'You will have a pleasant surprise.',];


app.listen(app.get('port'), () =>{
    console.log('Express started on http: //localhost:' + 
                app.get('port') + '; press Ctrl-C to terminate.');
});



