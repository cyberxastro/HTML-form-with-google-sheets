# HTML-form-with-google-sheets
Connecting HTML form with google sheets

This repositary will help you to know that how we can connect the HTML form with thw google sheets with the help of the less amount of code.

# Setup & Installation
First of all we have to create a HTML form and then setup a google sheets consisting of the header names as same as the HTMl form heading
Secondly we have to setup the google sheets such that it will store your all data according to the names of the headers of the HTML form
In the google Sheets go to the Extension 
 
![Screenshot 2022-11-01 174249](https://user-images.githubusercontent.com/109857735/199230410-a24a56b4-a591-431d-8420-0ba2d6f8e3d4.jpg)

After clicking on the EXTENSIONS button click on the "Apps Script" and then paste the below block of code in it 
First of all paste the below 2 lines, in the first line change the name of sheet, i have the sheet name as "Sheet 1", you can directly copy and paste the second line and then below block of code in that Apps Scripts

```
var sheetName = 'Sheet1'
  
var scriptProp = PropertiesService.getScriptProperties()
 
function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
	var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
	var sheet = doc.getSheetByName(sheetName)

	var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
	var nextRow = sheet.getLastRow() + 1

	var newRow = headers.map(function(header) {
	  return header === 'timestamp' ? new Date() : e.parameter[header]
	})

	sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

	return ContentService
	  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
	  .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
	return ContentService
	  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
	  .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
	lock.releaseLock()
  }
}
```
# Connecting the Google sheets to the HTML form

After completing the above steps, click on the run, then simply click on the Deploy button and click on the New Deployment Click the Gear icon next to the elect Type text and select Web App, Fill out the required fields and depoly the app, again reun the App Script and you're done., You'll get the Script link then copy script link and then paste it in the index.js file and you're good to go.

# Adding New Field

If you want to add the new field then simply add the field name in the Google Sheet and then You're Done The Data gets reflect within the 10-15 minutes.

# Compatibility 

It is compatible with every browser (Windows, Mac ,etc)

# Credits

https://github.com/astroxhacker
