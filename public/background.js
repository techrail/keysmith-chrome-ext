chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ passwords: [] });
  // console.log("HelloWorld")
});

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;

  chrome.scripting.executeScript({
    target: { tabId },
    function: new_page_load,
  });
});

// background.js
var popup = false
// Recieve message from content-script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Show popup value:" , request.bool );
    popup = request.bool
    
  }
);


//On submition the extension should show a pop up asking for permission to save the password

const new_page_load = async () => {
  let inputs = document.getElementsByTagName('input');
  const inputLength = inputs.length;
  // console.log(inputs);


  for (let i = 0; i < inputLength ; i++) {
    const input = inputs.item(i)

    if (input.type !== 'password' || input.name !== 'password') continue;

    const { passwords } = await chrome.storage.sync.get('passwords');
    const pagePassword = passwords.find(
      password => password.url === location.href,
    );

      console.log(popup);
     if (popup) {
      const popupDiv = document.createElement('div');
      popupDiv.style.position = 'absolute';
      // const inputRect = emailField.getBoundingClientRect();
      popupDiv.style.right = '100px'; //inputRect.left + "px";
      popupDiv.style.top = '0px'; //inputRect.top - (inputRect.height + 220) + "px";
      popupDiv.style.backgroundColor = 'white';
      popupDiv.style.width = '300px';
      popupDiv.style.height = '150px';
      popupDiv.style.padding = '0px 10px 0px 10px';
      popupDiv.style.borderRadius = '5px';
      popupDiv.style.border = 'solid 1px black';
      popupDiv.style.flex = 'row';
      popupDiv.style.justifyContent = "center"
      popupDiv.style.zIndex = "9999"
      popupDiv.style.overflowY = "<hidden></hidden>"

      const heading = document.createElement('h2');
      heading.innerText = 'Keysmith';
      heading.style.margin = "10px 0px 0px 0px"
    
      const prompt = document.createElement("p")
      prompt.innerHTML = "Do you want to save the password to Keysmith?"
      prompt.style.margin = "0px"
      prompt.style.fontSize = "16px"

      const buttonGroup = document.createElement("div")
      buttonGroup.style.flex = "col";
      buttonGroup.style.justifyContent = "space-between"
      const yesButton = document.createElement("button")
      const noButton = document.createElement("button")
      yesButton.innerHTML = "Yes"
      yesButton.style.padding = "5px 10px 5px 10px"
      yesButton.style.backgroundColor = "#4f46e5"
      
      noButton.innerHTML = "No"
      noButton.style.padding = "5px 10px 5px 10px"
      noButton.style.backgroundColor = "#e02424"

      noButton.addEventListener("click", ()=>{
          popupDiv.remove()
      })

      buttonGroup.appendChild(yesButton)
      buttonGroup.appendChild(noButton)

      popupDiv.appendChild(heading);
      popupDiv.appendChild(prompt);
      popupDiv.appendChild(buttonGroup)
      // popupDiv.appendChild(lable);
      // popupDiv.appendChild(userName);

      document.body.appendChild(popupDiv);

      // console.log(popupDiv)
    }

    // heading.innerText = "hey"
  }
};