const API = require("OBA-wrapper/node");
const api = {
    request: async function(query, maxLength){
        const api = new API({
            key: "1e19898c87464e239192c8bfe422f280"
        });
        const stream = await api.createStream(`search/${query}{${maxLength}}`);
      
        stream
          .pipe(console.log)
          .catch(console.error);
      },



}

module.exports = api