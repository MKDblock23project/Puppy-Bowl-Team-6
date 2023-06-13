const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
//const cohortName = "2302-acc-et-web-pt-a";
// Use the APIURL variable for fetch requests
//const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

//GET /api/2302-acc-et-web-pt-a/players

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players"
    );
    const result = await response.json();
    console.log(result.data.players);
    return result.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players/${playerId}`);
    const result = await response.json(); 
    console.log('result after running json method on response: ', result)   
    console.log(result.data.player);    
    return result.data.player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

const deletePlayer = async (id) => {
  try {
    console.log('in delete')
    // fetch party details from server
    await fetch(`${"https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players"}/${id}`, {
      method: 'DELETE'
      });
  
} catch (error) {
  console.error(error);
}
}


const addNewPlayer = async (playerObj) => {
  try {

  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

//--- POST /api/2302-acc-et-web-pt-a/players/players/




/**
 * 
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * 
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */

//It takes an array of player objects, loops through them, and creates a string of HTML for each
// player, then adds that string to a larger string of HTML that represents all the players.
const renderAllPlayers = async (playerList) => {
  playerList.forEach((player) => {
    const playerDetailsElement = document.createElement("div");
    playerDetailsElement.classList.add("all-players-container");
    playerDetailsElement.innerHTML = `
            <h2>PLAYER DETAILS</h2>
            <p>${player.id}</p>
            <p>${player.breed}</p>
            <p>${player.status}</p>
            <img src= "${player.imageUrl}" width="500" height="500">
            <p><span class="green-background"></span> </p>
           <button id="get-detail" class="get-detail">See details </button>

           <button class="remove">Remove from roster</button>
        `;
      //show player details
      const getDetailButton = playerDetailsElement.querySelector("#get-detail");
      getDetailButton.addEventListener('click', async (event) => {
        event.preventDefault()
        await renderSinglePlayerById(player.id, playerDetailsElement)
      })
      //remove player
      const removeButton = playerDetailsElement.querySelector(".remove");
      removeButton.addEventListener('click', async (event) => {
        await deletePlayer(player.id)
        await renderAllPlayers(playerList)
      })

    playerContainer.appendChild(playerDetailsElement);
  });
  try {

  } catch (err) {
    console.error("Uh oh, trouble rendering players!", err);
  }
};

const renderSinglePlayerById = async (playerId, playerDetailsElement) => {
  console.log('GET DETAIL BUTTON IS WORKING!!!');
  const player = await fetchSinglePlayer(playerId)
  console.log('playerinfo', player)
  //First step: put player detail in HTML
  const singlePlayerElement = document.createElement("div");
  singlePlayerElement.classList.add("single-players-container");
  singlePlayerElement.innerHTML = `
          <h2>Single PLAYER DETAILS</h2>
          <p>${player.id}</p>
          <p>${player.breed}</p>
          <p>${player.status}</p>
          <button id="close-detail" class="close-detail">Close details </button>`
    const closeDetailButton = singlePlayerElement.querySelector(".close-detail");
      closeDetailButton.addEventListener('click', async (event) => {
        event.preventDefault()
        singlePlayerElement.remove()
      })
  //append it to document
  playerDetailsElement.appendChild(singlePlayerElement);
}  


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);
  renderNewPlayerForm();
};

init();
