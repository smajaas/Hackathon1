document.body.innerHTML=`
<h1><span>I</span>M<span>POSSIBLE</span></h1>
<h2 class ="heading1">Nationalize API<br></h2>
<h3 class = "heading2">Enter your Name below to search<br><br></h3>

<section>
<input class="name-search" placeholder="Enter the name">
<button onclick="searchUser()">Search</button>
<button onclick="reload()">Reset</button>
</section>
<div class = "users-detail">
</div>
`;

async function getAllUsers() {
    const data = await fetch("https://api.nationalize.io/?name=" + enterInput,
        {method:"GET"}
);
        const datas = await data.json();
        return datas;
}               
    function searchUser() {
     enterInput=document.querySelector(".name-search").value;
    getAllUsers();
    displayDetails();
    }

async function displayDetails() {
    try {
        const datas = await getAllUsers();
        console.log(datas);
        var allDetails = document.querySelector(".users-detail");
        var countryList = datas.country;

        let noData;
    if (countryList == []) {
      return noData;
    
        }

        allDetails.innerHTML = `<div class="user-container">
  <h3 class="country1">Country Name 1: ${countryList[0].country_id}, Probability: <span>${countryList[0].probability}</span><br></h3>
  <h3 class="country2">Country Name 2: ${countryList[1].country_id}, Probability: <span>${countryList[1].probability}</span></h3>
</div>
`;
    } catch (noData) {
           allDetails.innerHTML=`<p class ="Error-handle">User not found.Try Again...</p>`
            console.log("Error Occured");
    
    }
    
    }
    function reload() {
        location.reload(true/false);
}
 