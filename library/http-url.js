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

const { GetURLParameter } = httpUrl;

module.exports = {
  GetURLParameter
}
