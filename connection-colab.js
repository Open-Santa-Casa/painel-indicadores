// let credentials = Credentials.createScoped(['https://www.googleapis.com/auth/spreadsheets']);
// let service = Sheets.newService(credentials);

// // Read data from the sheet
// let sheetId = 'your_sheet_id';
// let sheetName = 'Sheet1';
// let range = sheetName + '!A1:Z';
// let data = service.spreadsheets().values().get(sheetId, range).execute();

// // Write the data to a json file
// let file = DriveApp.createFile('data.json', JSON.stringify(data));


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
  
  function getAuth(){
    // Import the necessary libraries
    let jsonFile = DriveApp.getFileById("your_file_id");
    let jsonData = jsonFile.getBlob().getDataAsString();
    let credentials = JSON.parse(jsonData);
  
    // Use the credentials to access the Google Sheets API
    let service = Sheets.newService(credentials);
  }