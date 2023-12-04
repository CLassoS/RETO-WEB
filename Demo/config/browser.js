const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");

const chrome = exports.chrome = {
    browserName: 'chrome', 'goog:chromeOptions': {
    args: ['--start-maximized']},
acceptInsecureCerts: true,};

const all = exports.all = [chrome];

exports.config = configBuild(config, {
    capabilities: all
});
