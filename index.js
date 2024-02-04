const form = document.querySelector("form");
const input = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const defaultResults = document.querySelector(".default-results");
// const button = document.getElementById("show-more-button");

//Function to hide default results

  
// }

// // Function to show default results
 function showDefaultResults() {
    defaultResults.style.display = "flex";
}


  

// Function to search for phones
async function searchPhone() {
  let inputData = input.value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputData}`;

  try {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log("API Response:", responseData);

    if (responseData.status && Array.isArray(responseData.data)) {
      const results = responseData.data;

      // Hide default results when there are search results
    //   hideDefaultResults();

      searchResult.innerHTML = "";

      results.forEach((result) => {
        const imgcontainer = document.createElement('div');
        imgcontainer.classList.add('search-result');

        const image = document.createElement('img');
        image.src = result.image;

        const phoneName = document.createElement('p');
        phoneName.textContent = result.phone_name;

        imgcontainer.appendChild(image);
        imgcontainer.appendChild(phoneName);

        searchResult.appendChild(imgcontainer);
      });

      button.style.display = "block";
      setSearchPerformed("true");
    } else {
      console.error("Invalid API response structure. Expected 'status' and 'data' properties.");
      
      // Show default results when there are no search results
      showDefaultResults();
    }
  } catch (error) {
    console.error("Error fetching or parsing the API response:", error);
    
    // Show default results on error
    showDefaultResults();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchPhone();
});

button.addEventListener("click", () => {
  searchPhone();
});


if(searchResult.innerHTML===""){
    showDefaultResults();
}
    