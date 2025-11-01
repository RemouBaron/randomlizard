// Initialization
let audio = new Audio(browser.runtime.getURL('media/lizard.mp3'));
let random_lizard_chance = 0.01;

async function load_config() {
  let config = (await browser.storage.sync.get("random_lizard_chance")).random_lizard_chance;
  if (config) {
    random_lizard_chance = config;
  }
}
load_config();

// >:3
function annoy_user() {
	audio.play();
}

// Attach global event listener
document.addEventListener('click', (e)=>{
	if (Math.random() < random_lizard_chance) {
		annoy_user();
		e.stopImmediatePropagation(); 
		e.preventDefault();
	}
}, true)
