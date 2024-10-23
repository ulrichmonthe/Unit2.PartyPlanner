const fetchParties = async () => {
    try {
      const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2408-FTB-MT-WEB-PT/events');
      const result = await response.json();
      
      if (result.success) {
        renderParties(result.data);  // Call the function to render parties
      } else {
        console.error('API error:', result.error.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  // Function to render parties
  const renderParties = (parties) => {
    const partyListContainer = document.getElementById('party-list');
    partyListContainer.innerHTML = ''; // Clear any existing content
  
    parties.forEach(party => {
      const partyDiv = document.createElement('div');
      partyDiv.classList.add('party-item');
      
      // HTML for each party
      partyDiv.innerHTML = `
        <h3>${party.name}</h3>
        <p>${party.description}</p>
        <p>Date: ${new Date(party.date).toLocaleDateString()}</p>
        <p>Location: ${party.location}</p>
        <button class="delete-btn" data-party-id="${party.id}">Delete</button>
      `;
  
      partyListContainer.appendChild(partyDiv);
    });
  
    // Attach event listeners for the delete buttons (if needed)
    attachDeleteEventListeners();
  };
  
  // Call the fetch function when the page loads
  fetchParties();

 

// After fetching the party data from the API
const renderPartiesList = (partiesList) => {
    const partyList = document.getElementById('party-list');
    
    // Clear the party list
    partyList.innerHTML = '';
  
    // Loop through parties and dynamically create elements
    parties.forEach(party => {
      const partyDiv = document.createElement('div');
      partyDiv.classList.add('party-item');
  
      partyDiv.innerHTML = `
        <h3>${party.name}</h3>
        <p>${party.description}</p>
        <p>Date: ${new Date(party.date).toLocaleDateString()}</p>
        <p>Location: ${party.location}</p>
        <button class="delete-btn" data-party-id="${party.id}">Delete</button>
      `;
  
      partyList.appendChild(partyDiv);
    });
  
    // Attach delete event listeners dynamically
    attachDeleteEventListeners();
  };



