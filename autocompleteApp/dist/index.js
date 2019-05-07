const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

// const select = document.querySelector('select#select-ui');
// //Search the state.json and fileter it
// select.addEventListener('change', (e) => console.log(e.target.value));
const searchState = async (searchText) => {
	const res = await fetch('../data/states.json');
	const state = await res.json();
	//get matches to current text input
	let matches = state.filter((state) => {
		const regex = new RegExp(`^${searchText}`, 'gi');
		return state.name.match(regex) || state.abbr.match(regex);
	});
	searchText.length === 0 ? (matches = []) : null;
	outputHtml(matches);
};

const outputHtml = (matches) => {
	if (matches.length > 0) {
		const html = matches
			.map(
				(match) => `
    <div class="card card-body mb-1">
      <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital} </span>
      </h4>
      <small>Lat: ${match.lat} / Long: ${match.long} </small>
    </div> `
			)
			.join('');
		matchList.innerHTML = html;
	} else {
		matchList.innerHTML = '';
	}
};

search.addEventListener('input', () => searchState(search.value));
