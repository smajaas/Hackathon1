//Display on the screen

document.body.innerHTML=`
<section>
<div class = "user-container">
<input class="name-search" placeholder="Enter the name">
<button onclick="searchUser()">Search</button>
</div>
<div class = "user-detail">
</div>

</section>`;

async function getAllUsers() {
    const data = await fetch("https://api.nationalize.io/?name=" + enterInput,
        {method:"GET"}
);

        const users = await data.json();
        console.log(users);
}               
    function searchUser () {
        enterInput=document.querySelector(".name-search").value;
    getAllUsers();
    displayDetails();
    }

async function displayDetails() {
    try {
        const data = await getAllUsers();
        console.log(data);
        let userslist = document.querySelector(".user-detail");
        const countryDet = data.country;

        let empty;
        if (countryDet == []) {
          return empty;
        }

        userslist.innerHTML = document.querySelector`(".user-container")
  <h3 class="first-country">Country Name1:<span style="color:Blue">${countryDet[0].country_id}</span> ,  Probability: <span style="color:red">${countryDet[0].probability}</span></h3>
  <h3 class="second-country">Country Name2:<span style="color:Blue">${countryDet[1].country_id}</span> , Probability: <span style="color:red">${countryDet[1].probability}</span></h3>
</div>`;
    } catch (error) {
        userslist.innerHTML = `<p class="Error handle">User Data Not found</p>`;
        console.log("Error occured")
    }
    
}




