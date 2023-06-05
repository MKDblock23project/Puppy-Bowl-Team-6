// JavaScript Requirements:
// Use the DOM to generate and manipulate HTML and styles according to the requirements
// Use functions to isolate and re-use code
// Use ES6 modules to export and import methods and properties
// Demonstrates the use of fetch, async, and await to leverage CRUD against a REST API to perform common functions of a website
// Functionality Requirements:
// Fetching and rendering all puppy players in the browser
// Viewing a single puppy player and their details
// Remove a puppy from the roster

const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-et-web-pt-a';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${2302-acc-et-web-pt-a}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

//--- {
 //--- success: false, // or true
//--- error: {
 //---   name: "ErrorName",
 //---    message: "This is an error message."
  //--- }, // or null
//--- data: {
//---    example: "This is an example of a data message."
//--- } // or null
//--- }
//--- GET /api/2302-acc-et-web-pt-a/players
//--- try {
//---    const response = await fetch(
//---       'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players'
//---      );
//---      const result = await response.json();
//---      console.log(result);
//---    } catch (err) {
//---      console.error(err);
 //---   }



const fetchAllPlayers = async () => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};
//--- GET /api/2302-acc-et-web-pt-a/players/PLAYER-ID
//---try {
//---const response = await fetch(
//---    'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players/1'
//---  );
//---  const result = await response.json();
//---  console.log(result);
//---} catch (err) {
//--- console.error(err);
//--- }

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

//--- POST /api/2302-acc-et-web-pt-a/players/players/


const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};
//--- DELETE /api/2302-acc-et-web-pt-a/players/PLAYER-ID
//---fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players', {
//---    method: 'DELETE',
//---});
//---try {
//---  const response = await fetch(
//---    'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players/1',
//---    {
//---      method: 'DELETE',
//---    }
//---  );
//---  const result = await response.json();
 //--- console.log(result);
//---} catch (err) {
//---  console.error(err);
//---}
 

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
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
const renderAllPlayers = (playerList) => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};
//---GET /api/2302-acc-et-web-pt-a/teams
//---try {
//---    const response = await fetch(
//---        'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/teams'
//---      );
//---      const result = await response.json();
//---      console.log(result);
//---    } catch (err) {
 //---     console.error(err);
//---    }
    
/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();