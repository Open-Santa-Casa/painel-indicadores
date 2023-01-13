function correlation() {
    x = [2,3,5,8,13,21,29,50,71,92,97,189,218,268]

    let n = x.length;
    let x_sum = 0;
    let y_sum = 0;
    let xy_sum = 0;
    let x_squared_sum = 0;
    let y_squared_sum = 0;
    for (let i = 0; i < n; i++) {
        x_sum += x[i];
        y_sum += i;
        xy_sum += x[i] * i;
        x_squared_sum += x[i] * x[i];
        y_squared_sum += i * i;
    }
    let corr = (n * xy_sum - x_sum * y_sum) / 
                (Math.sqrt(n * x_squared_sum - x_sum * x_sum) * 
                Math.sqrt(n * y_squared_sum - y_sum * y_sum));
    console.log(corr)
    return corr;
}

function linearTrend(x, y) {
    let n = x.length;
    let x_sum = 0;
    let y_sum = 0;
    let xy_sum = 0;
    let x_squared_sum = 0;
    let y_squared_sum = 0;
    for (let i = 0; i < n; i++) {
        x_sum += x[i];
        y_sum += y[i];
        xy_sum += x[i] * y[i];
        x_squared_sum += x[i] * x[i];
        y_squared_sum += y[i] * y[i];
    }
    let m = (n * xy_sum - x_sum * y_sum) / (n * x_squared_sum - x_sum * x_sum);
    let b = (y_sum - m * x_sum) / n;
    let y_predicted = x.map((val)=>(m*val)+b);
    let y_mean = y_sum/n;
    let ss_res = y.reduce((acc,val,i)=> acc + (val-y_predicted[i])*(val-y_predicted[i]),0);
    let ss_tot = y.reduce((acc,val)=> acc + (val-y_mean)*(val-y_mean),0);
    let r2 = 1 - (ss_res/ss_tot);
    return {slope: m, intercept: b, r2:r2};
}

function movingAverage(data, windowSize) {
    let result = [];
    for (let i = windowSize - 1; i < data.length; i++) {
        let sum = 0;
        for (let j = i - (windowSize - 1); j <= i; j++) {
            sum += data[j];
        }
        result.push(sum / windowSize);
    }
    return result;
}

function weightedMovingAverage(data, windowSize) {
    let weights = [];
    for (let i = 1; i <= windowSize; i++) {
        weights.push(i);
    }
    let sumWeights = weights.reduce((a, b) => a + b, 0);
    let result = [];
    for (let i = windowSize - 1; i < data.length; i++) {
        let sum = 0;
        for (let j = i - (windowSize - 1); j <= i; j++) {
            sum += data[j] * weights[j - (i - (windowSize - 1))];
        }
        result.push(sum / sumWeights);
    }
    return result;
}

function exponentialSmoothing(data, alpha) {
    let result = [data[0]];
    for (let i = 1; i < data.length; i++) {
        let forecast = alpha * data[i-1] + (1 - alpha) * result[i-1];
        result.push(forecast);
    }
    return result;
}

function Holt(data, alpha, beta) {
    let l = data[0];
    let b = data[1] - data[0];
    let result = [l];
    let level;
    let trend;
    for (let i = 1; i < data.length; i++) {
        level = alpha * data[i] + (1 - alpha) * (l + b);
        trend = beta * (level - l) + (1 - beta) * b;
        l = level;
        b = trend;
        result.push(level + trend);
    }
    return result;
}

function regressionLinear() {
  x = [2,3,5,8,13,21,29,50,71,92,97,189,218,268]

    // Calcular a inclinação (m)
    let x_sum = 0;
    let y_sum = 0;
    let xy_sum = 0;
    let x_squared_sum = 0;
    for (let i = 0; i < x.length; i++) {
        x_sum += x[i];
        y_sum += i;
        xy_sum += x[i] * i;
        x_squared_sum += x[i] * x[i];
    }
    let m = (x.length * xy_sum - x_sum * y_sum) / (x.length * x_squared_sum - x_sum * x_sum);

    // Calcular o intercepto (b)
    let b = (y_sum - m * x_sum) / x.length;

    // retornando inclinação e intercepto
  
    let newX = x.length + 1
    console.log(newX*m + b)
    return newX*m + b;
}

function predicaoLinear(){
  arrayData = [2,3,5,8,13,21,29,50,71,92,97,189,218,268]
  // Import the LinearRegression class
  let lr = LinearRegression.new();

  // Define your data
  let indexGrupo1= arrayData.length / 80
  let x = arrayData.slice(0,indexGrupo1);
  let y = arrayData.slice(indexGrupo1+1,arrayData.length);

  // Train the model
  lr.setXValues(x);
  lr.setYValues(y);

  // Make predictions
  let predictions = [];
  for (let i = 1; i <= 12; i++) {
      predictions.push(lr.predictY(i));
  }
  console.log(predictions)
}
