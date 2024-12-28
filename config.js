const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=6Y0kUCCJ#78-yrNVdSHL637sLXofUht_7W54v2Sqa4kMKnvi1ZVQ' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'hassan6262': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
