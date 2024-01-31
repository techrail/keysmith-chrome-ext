 
let showPopup = false
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Access form data
    var formData = new FormData(event.target);
  
    // Convert FormData to a plain object
    var formDataObject = {};
    formData.forEach(function(value, key){
      formDataObject[key] = value;
    });
    

   showPopup = true
    chrome.runtime.sendMessage({bool : showPopup})

    saveFormData(formDataObject);
// Sample data to send to the background script
}


function saveFormData(formData) {
    // Get existing data from storage (if any)
    chrome.storage.local.get({ savedFormData: [] }, function (result) {
      var savedFormDataArray = result.savedFormData;
  
      // Add the new form data to the array
      savedFormDataArray.push(formData);
  
      // Save the updated array back to storage
      chrome.storage.local.set({ savedFormData: savedFormDataArray }, function () {
       
      });
    });
  }


document.addEventListener('submit', handleFormSubmission, true);



function retrieveSavedFormData() {
    chrome.storage.local.get({ savedFormData: [] }, function (result) {
      var savedFormDataArray = result.savedFormData;
      
      console.log("Retrieved form data from storage:", savedFormDataArray);
    });
  }
  
  // Call the function to retrieve saved form data
  retrieveSavedFormData();
  chrome.storage.local.clear()
