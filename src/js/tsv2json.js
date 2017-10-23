import tsv from 'node-tsv-json';

const inputFile = process.argv[2];
const outPutFile = process.argv[3];

tsv({
  input: inputFile,
  output: outPutFile,
  parseRows: false
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    // console.log(result);
    console.log('saul goodman')
  }
});