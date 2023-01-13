function ipcHoje(){
    let acumulado = new Array
    let valor = 2
    let comparativo = 2
    let res = JSON.parse(fetch('https://data.nasdaq.com/api/v3/datasets/BCB/7463.json?api_key=VvVq5F_yfmSh2zQhHUMF').getContentText())
    for (let i=(res['dataset']['data']).length - 13; i<(res['dataset']['data']).length;i++){
      //console.log(res['dataset']['data'][i][1])
      acumulado.push(res['dataset']['data'][i][1])
  
   
    }
    console.log(acumulado)
    for (let i=0; i<acumulado.length;i++){
      valor = ((acumulado[i]/100) * valor) + valor
      console.log(valor)
    }
    return valor/comparativo
  }
  
  function ipcFuturo(){
    let acumulado = new Array
    let valor = 2
    let comparativo = 2
    let res = JSON.parse(fetch('https://data.nasdaq.com/api/v3/datasets/BCB/7463.json?api_key=VvVq5F_yfmSh2zQhHUMF').getContentText())
    for (let i=(res['dataset']['data']).length - 13; i<(res['dataset']['data']).length;i++){
      //console.log(res['dataset']['data'][i][1])
      acumulado.push(res['dataset']['data'][i][1])
  
   
    }
   
  }
  
  
  function igpmHoje(){
    let acumulado = new Array
    let valor = 2
    let comparativo = 2
    
    let res = JSON.parse(fetch('https://data.nasdaq.com/api/v3/datasets/BCB/7449.json?api_key=VvVq5F_yfmSh2zQhHUMF').getContentText())
    for(let i =(res['dataset']['data']).length - 13; i<(res['dataset']['data']).length;i++){
      acumulado.push(res['dataset']['data'][i][1])
    }
      for (let i=0; i<acumulado.length;i++){
      valor = ((acumulado[i]/100) * valor) + valor
      console.log(valor)
    }
    return valor/comparativo
  
  }
  
  
  function igpmFuturo(){
    let acumulado = new Array
    let valor = 2
    let comparativo = 2
    
    let res = JSON.parse(fetch('https://data.nasdaq.com/api/v3/datasets/BCB/7449.json?api_key=VvVq5F_yfmSh2zQhHUMF').getContentText())
    for(let i =(res['dataset']['data']).length - 13; i<(res['dataset']['data']).length;i++){
      acumulado.push(res['dataset']['data'][i][1])
  
    }
     
  }