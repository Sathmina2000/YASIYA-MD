const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FVg2zR6B#VgacFENO6JllUjxH1jQoOe-QqCjGT2my0-QZhKl9fN8'
};
