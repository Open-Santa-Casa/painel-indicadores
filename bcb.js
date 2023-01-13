
// https://www.bcb.gov.br/estatisticas
function indicadorInflacao(){
    let inflacaoObjeto = JSON.parse(fetch("https://www.bcb.gov.br/api/servico/sitebcb/indicadorinflacao", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  }).getContentText());
  return [inflacaoObjeto.conteudo[0]["taxaInflacao"], inflacaoObjeto.conteudo[0]["taxaMeta"]]
  }
  
  function ipcaValue(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/servico/sitebcb/bcdatasgs/?tronco=estatisticas&guidLista=323626f4-c92f-46d6-bac7-55bf88f6430b&serie=13522&dataInicial=30/12/2012&dataFinal=30/12/2022", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "if-none-match": "\"8ae2e92e-a2fb-4752-b706-d94a9b4a199a\"",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_ga=GA1.3.2017943787.1672335410; _gid=GA1.3.1599042800.1672335410; bcb-aceitacookie=true; _gat_gtag_UA_65460906_3=1",
        "Referer": "https://www.bcb.gov.br/estatisticas",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    }).getContentText())
    ano = Number(res['conteudo'].length) -13
    let media = 0
    for (let i = ano; i<res['conteudo'].length; i++){
      media = Number(res['conteudo'][i]["valor"]) + media
      }
    return (media/12)
  }
  
  function ipcaValueFuturo(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/servico/sitebcb/datavalor/?tronco=estatisticas&guidLista=24B1BB18-E0FC-4FB0-9A5D-FC22208369CA&data=2022-11-01", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "if-none-match": "\"109e54da-b2b3-4fe8-921d-23c59eb8492f\"",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_ga=GA1.3.2017943787.1672335410; _gid=GA1.3.1599042800.1672335410; bcb-aceitacookie=true; _gat_gtag_UA_65460906_3=1",
        "Referer": "https://www.bcb.gov.br/estatisticas",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    }).getContentText())
    ano = Number(res['conteudo'].length) -24
    let media = 0
    for (let i = ano; i<(res['conteudo'].length - 12); i++){
      media = res['conteudo'][i]['valor'] + media
      }
    return (media/12)
  }
  
  function metaSelic(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/conteudo/sitebcb/indicadortaxaselic/ultima", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  }).getContentText())
    return (res['conteudo'][0]['MetaSelic'])
  }
  
  function selicHoje(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/conteudo/sitebcb/indicadortaxaselic", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  }).getContentText());
  console.log(res['conteudo'][1]['TaxaSelicEfetivaAnualizada'])
      return res['conteudo'][1]['TaxaSelicEfetivaAnualizada']
  }
  
  function dolarHoje(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/servico/sitebcb/indicadorCambio", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "if-none-match": "\"00915230-963f-4141-a9cf-ee2cd29d7109\"",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_ga=GA1.3.2017943787.1672335410; bcb-aceitacookie=true; _gid=GA1.3.262621533.1672664696; BIGipServer~site_internet_azure_p_as3~site_internet_azure_p~pool_cluster_sharepoint_443_p=rd2o00000000000000000000ffffac11d083o443; TS01d548bc=01b3424a9d9bfbf14809bb5f45b89547949cd404109e06d5cd521e0863d8ead482b158dbcb26a6129b77999341219649bacbd68b5b; dtCookie=5E3533DFB759A9D564DC9DDCE4DAA3F1|X2RlZmF1bHR8MQ; TS01d9825e=012e4f88b34fad86dbd7c536a9dec3bcd74534d620cc6782da7916029f5e672335fe592942f14cd1c9557626a5f68a81d5c41f20fb",
      "Referer": "https://www.bcb.gov.br/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).getContentText())
    return res['conteudo'][0]['valorCompra']
  }
  
  function taxaCambioNominal(){
    let res = JSON.parse(fetch("https://www.bcb.gov.br/api/servico/sitebcb/bcdatasgs/?tronco=estatisticas&guidLista=323626f4-c92f-46d6-bac7-55bf88f6430b&serie=1&dataInicial=03/01/2013&dataFinal=03/01/2023", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "if-none-match": "\"8f27d378-eaea-4b86-b2d7-ad66fe887402\"",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_ga=GA1.3.2017943787.1672335410; bcb-aceitacookie=true; _gid=GA1.3.262621533.1672664696; BIGipServer~site_internet_azure_p_as3~site_internet_azure_p~pool_cluster_sharepoint_443_p=rd2o00000000000000000000ffffac11d083o443; dtCookie=5E3533DFB759A9D564DC9DDCE4DAA3F1|X2RlZmF1bHR8MQ; TS01d9825e=012e4f88b34fad86dbd7c536a9dec3bcd74534d620cc6782da7916029f5e672335fe592942f14cd1c9557626a5f68a81d5c41f20fb; TS01d548bc=01b3424a9d0d5641626cf6ca4a844072a2a1c0472a59c0b4b2f9ee308267313e2f7c0a0e02de33dd7415e0881cbcc67ab656e7ae8e; _gat=1",
      "Referer": "https://www.bcb.gov.br/estatisticas",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).getContentText())
    console.log(res['conteudo'][(res['conteudo'].length -1)])
  }
  
  
  
  