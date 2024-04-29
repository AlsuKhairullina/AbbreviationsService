  let dataGlobal;

  let url = "https://raw.githubusercontent.com/AlsuKhairullina/Portfolio/master/sample%20(1).json";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dataGlobal = data;
    return data;
  };

  (async () => {
    await getData();
    //console.log(dataGlobal);
  })();

  let input = document.getElementById("input");
  var ul = document.getElementById('list');
  var nameDiv = document.getElementById("fullName");

  console.log(dataGlobal);
    
  input.addEventListener("keyup", (e) => {
    removeElements();
    for (var key in dataGlobal) {

      if (
        key.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        let listItem = document.createElement("li");
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.onclick = function() { displayNames(this.textContent) };
        let word = "<b>" + key.substr(0, input.value.length) + "</b>";
        word += key.substr(input.value.length);
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
        }
      }
    });


    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
          var key = input.value;
          var fullName = dataGlobal[key];
          nameDiv.textContent = "The correct abbreviation is: " + fullName;
        }
    });

    function displayNames(value) {
      input.value = value;
      removeElements();
    }

    function removeElements() {
      let items = document.querySelectorAll(".list-items");
      items.forEach((item) => {
        item.remove();
      });
      nameDiv.textContent = "";
    }