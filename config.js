const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~dN5nzKjC#6d5kSgt3dilvGJDEoM9eRNJVvDP96i4y5sVkiIiPMLo'
};
