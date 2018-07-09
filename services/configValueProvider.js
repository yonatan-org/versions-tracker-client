const config = require('config');

exports.getValue = (configValueName) => {
    const processValue = process.env[configValueName];
    return processValue ? processValue : config.get(configValueName);
};