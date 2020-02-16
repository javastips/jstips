const httpUrl = {};

/**
 * @param { string } sParam
 */
const GetURLParameter = function(sParam){
  const sPgeURL = window.location.search.substring(1);
  const sURLVariables = sPgeURL.split('&');
  for (let i = 0; i < sURLVariables.length; i++){
    let sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) return sParameterName[1];
  }
}

module.exports = {
  GetURLParameter
}
