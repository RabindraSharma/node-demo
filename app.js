const fs = require('fs')

const data = 
    {
        users:[{
        id:1,
        name:'rabindra',
        email:'sharma@gmail.com',
        phone:'88829455455'
    }]
}


fs.appendFile('file.txt', JSON.stringify(data),'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


fs.readFile('file.txt','utf8', (err,data) => {
  if (err) throw err;
  console.log(JSON.parse(JSON.stringify(data)));
});


