const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environment/environment.ts';
const targetProdPath = './src/environment/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: false,
  apiUrl: '${process.env.API_URL}'
};
`;

const envProdConfigFile = `
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);
fs.writeFileSync(targetProdPath, envProdConfigFile);
