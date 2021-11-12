const text = '#2A2A2A'; //#2A2A2A
const regex = /#?([\da-fA-f]{2})([\da-fA-f]{2})([\da-fA-f]{2})/g;


const matches = text.match(regex);

const index = text.search();

const replaced = text.replace(regex, '#000000');

const testing = regex.test(text);

console.log(matches, index, replaced, testing);