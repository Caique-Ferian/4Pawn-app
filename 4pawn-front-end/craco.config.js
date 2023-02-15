const CracoAlias = require("craco-alias");
//https://stackoverflow.com/questions/57070052/create-react-app-typescript-3-5-path-alias
module.exports = {
   plugins: [
     {
        plugin: CracoAlias,
        options: {
           source: "tsconfig",
           // baseUrl SHOULD be specified
           // plugin does not take it from tsconfig
           baseUrl: "./src",
           /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
           tsConfigPath: "./tsconfig.paths.json"
        }
     }
  ]
};