// FONTE: https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais.html => https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9300-contas-nacionais-trimestrais.html?=&t=series-historicas&utm_source=landing&utm_medium=explica&utm_campaign=pib#evolucao-taxa

function pibHoje() {
  let res = JSON.parse(
    fetch("https://servicodados.ibge.gov.br/api/v1/conjunturais?&d=s&user=ibge&t=5932&v=6562&p=199601-205701&ng=1(1)&c=11255(90707)", {
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


/**
 *  FONTE: https://servicodados.ibge.gov.br/api/docs/paises#api-acervo
 * 
 *  MODELO DE LINK: https://servicodados.ibge.gov.br/api/v1/paises/{paises}/indicadores/{indicadores}
 * 
 * 77818- Economia - Chegada de turistas
 * 77819- Economia - Gastos públicos com educação
 * 77820- Economia - Gastos públicos com saúde
 * 77821- Economia - Investimentos em pesquisa e desenvolvimento
 * 77822- Economia - Mulheres de 15 anos ou mais de idade economicamente ativas
 * 77823- Economia - PIB per capita
 * 77824- Economia - População de 15 anos ou mais de idade economicamente ativa
 * 77825- Economia - Total de exportações
 * 77826- Economia - Total de importações
 * 77827- Economia - Total do PIB
 * 77830- Indicadores sociais - Esperança de vida ao nascer
 * 77831- Indicadores sociais - Índice de desenvolvimento humano
 * 77832- Indicadores sociais - População com acesso à água potável
 * 77833- Indicadores sociais - População com acesso à rede sanitária
 * 77835- Indicadores sociais - Taxa bruta de matrículas para todos os níveis de ensino
 * 77836- Indicadores sociais - Taxa de alfabetização das pessoas de 15 anos ou mais de idade
 * 77838- Meio Ambiente - Áreas cultivadas
 * 77839- Meio Ambiente - Áreas de pastagens permanentes
 * 77840- Meio Ambiente - Áreas protegidas no total do território nacional
 * 77841- Meio Ambiente - Produção de gás natural
 * 77842- Meio Ambiente - Produção de petróleo
 * 77844- População - Densidade demográfica
 * 77845- População - Homens
 * 77846- População - Mulheres
 * 77847- População - População residente em área rural
 * 77848- População - População residente em área urbana
 * 77849- População - População
 * 77850- População - Taxa bruta de mortalidade
 * 77851- População - Taxa bruta de natalidade
 * 77852- População - Taxa média anual do crescimento da população
 * 77854- Redes - Assinaturas de telefonia celular
 * 77855- Redes - Assinaturas de telefonia fixa
 * 77857- Redes - Indivíduos com acesso à internet
 * 77829- Saúde - Consumo calórico
 * 77834- Saúde - Incidência de subnutrição
 */

let menuAPI = {"Economia - Chegada de turistas": 77818,"Economia - Gastos públicos com educação": 77819,"Economia - Gastos públicos com saúde": 77820,"Economia - Investimentos em pesquisa e desenvolvimento": 77821,"Economia - Mulheres de 15 anos ou mais de idade economicamente ativas": 77822,"Economia - PIB per capita": 77823,"Economia - População de 15 anos ou mais de idade economicamente ativa": 77824,"Economia - Total de exportações": 77825,"Economia - Total de importações": 77826,"Economia - Total do PIB": 77827,"Indicadores sociais - Esperança de vida ao nascer": 77830,"Indicadores sociais - Índice de desenvolvimento humano": 77831,"Indicadores sociais - População com acesso à água potável": 77832,"Indicadores sociais - População com acesso à rede sanitária": 77833,"Indicadores sociais - Taxa bruta de matrículas para todos os níveis de ensino": 77835,"Indicadores sociais - Taxa de alfabetização das pessoas de 15 anos ou mais de idade": 77836,"Meio Ambiente - Áreas cultivadas": 77838,"Meio Ambiente - Áreas de pastagens permanentes": 77839,"Meio Ambiente - Áreas protegidas no total do território nacional": 77840,"Meio Ambiente - Produção de gás natural": 77841,"Meio Ambiente - Produção de petróleo": 77842,"População - Densidade demográfica": 77844,"População - Homens": 77845,"População - Mulheres": 77846,"População - População residente em área rural": 77847,"População - População residente em área urbana": 77848,"População - População": 77849,"População - Taxa bruta de mortalidade": 77850,"População - Taxa bruta de natalidade": 77851,"População - Taxa média anual do crescimento da população": 77852,"Redes - Assinaturas de telefonia celular": 77854,"Redes - Assinaturas de telefonia fixa": 77855,"Redes - Indivíduos com acesso à internet": 77857,"Saúde - Consumo calórico": 77829,"Saúde - Incidência de subnutrição": 77834,}

function getSaudeData(paises, indicadores){
  let res = JSON.parse(fetch(String(`https://servicodados.ibge.gov.br/api/v1/paises/${paises}/indicadores/${indicadores}`, {
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
})).getContentText())
console.log(res)

}