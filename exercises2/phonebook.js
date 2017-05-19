var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
console.log(phonebookDict.Alice);
delete phonebookDict.Alice;
console.log(phonebookDict.Alice);
phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict.Bob);


var personName = 'Elizabeth';
for (var numbers in phonebookDict){
  var value = phonebookDict[numbers];
  console.log(`${numbers}:${value}`);
}
