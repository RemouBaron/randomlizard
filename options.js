async function saveConfig(chance) {
  await browser.storage.sync.set({ random_lizard_chance: chance });
  refreshUI();
}

async function getConfig() {
  return (await browser.storage.sync.get("random_lizard_chance")).random_lizard_chance;
}

async function refreshUI() {
  chance = await getConfig();
  document.querySelector("#chance-value").innerHTML = chance*100;
}

document.querySelector("#submit").addEventListener("click", (e)=>{
  e.preventDefault();
  saveConfig(document.querySelector("#chance").value/100);
});

refreshUI();

// Initialize config to 1% by default
(async()=>{
	let value = await getConfig();
	if (!value && value != 0) {
		saveConfig(0.01);
	}
})();
