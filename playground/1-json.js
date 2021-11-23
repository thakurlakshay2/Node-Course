

const fs=require('fs');
// const book={
//     title:'Advance Physics',
//     author:'Resnic haliday'
// };

// const bookJSON=JSON.stringify(book);
// // console.log(bookJSON);

// // const parseData=JSON.parse(bookJSON);
// // console.log(parseData);

// fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());