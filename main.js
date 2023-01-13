// @ts-nocheck
const fetch = UrlFetchApp.fetch

function refreshIndicador(){
  
  const ss = SpreadsheetApp
  const sheet = ss.openById('1cvtJ-Pmmu-y1xXNcsYgTxtzLIYBuoXiHPw2fdR_LB8M').getActiveSheet()

  let taxaMeta = indicadorInflacao()
  sheet.getRange("C7").activate().setValue(indicadorInflacao()[0])
  sheet.getRange("D7").activate().setValue(indicadorInflacao()[1])
  sheet.getRange("C8").activate().setValue(indicadorInflacao()[0])
  sheet.getRange("D8").activate().setValue(ipcaValueFuturo())
  sheet.getRange("C9").activate().setValue(ipcHoje())
  sheet.getRange("C10").activate().setValue(igpmHoje())
  sheet.getRange("C11").activate().setValue(selicHoje())
  sheet.getRange("D11").activate().setValue(metaSelic())
  sheet.getRange("C12").activate().setValue(dolarHoje())
  sheet.getRange("C13").activate().setValue(pibHoje())
  

}
