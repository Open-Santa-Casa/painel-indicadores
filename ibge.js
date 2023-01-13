// 77820 - Gasto com Saúde; 77821 - Pesquisa; 
function pibHoje(){
    let res = JSON.parse(fetch("https://servicodados.ibge.gov.br/api/v1/conjunturais?&d=s&user=ibge&t=5932&v=6562&p=199601-205701&ng=1(1)&c=11255(90707)", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  }).getContentText())
    let media = 0
    for (let i=(res.length -4); i<res.length; i++){
      media = Number(res[i]["v"]) + media
    }
    return (media/4)
  }