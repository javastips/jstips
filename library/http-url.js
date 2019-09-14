const httpUrl = {};

/**
 * @param { string } sParam
 */
httpUrl.GetURLParameter = function(sParam){
    const sPgeURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++){
      let sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) return sParameterName[1];
    }
}

httpUrl.post = function(datas, callback) {
  if(typeof datas === "object") {
    // parsing data to json

    // callback take req and res
      // return it with status
        // if status === 200
          // post data
        // else
          // return res with an error
  }
}
const { GetURLParameter } = httpUrl;

module.exports = {
  GetURLParameter
}
