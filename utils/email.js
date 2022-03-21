const emails = require('email-generator');

console.log(emails.generateEmail())

const getEmail = () =>{
    return emails.generateEmail();
}

exports.getEmail = getEmail