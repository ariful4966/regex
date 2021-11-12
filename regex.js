
//Color code validation
// const text = "#2A2A2A"; //#2A2A2A
// const regex = /#?([\da-fA-f]{2})([\da-fA-f]{2})([\da-fA-f]{2})/g;

//Phone Number Validation
// const text = "+8801863934966"; //+88-01863934966
// const regex = /(\+88)?-?01[1-9]\d{8}/g;

//email validation
const text = "ariful4966@gmail.com"; //ariful4966@gmail.com
const regex = /\S+[a-z0-9]\@\S+[a-z]\.\S+[a-z]/gi;

const matches = text.match(regex);

const index = text.search();

const replaced = text.replace(regex, "phone");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);
