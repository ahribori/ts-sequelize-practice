const yaml = require('js-yaml');
const fs = require('fs');

export interface Config {
    host: string;
    username: string;
    password: string;
    database: string;
}

let config: Config | null;

try {
    config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
} catch (e) {
    console.log(e);
}

export default config;
