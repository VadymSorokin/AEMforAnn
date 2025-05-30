
const buttonPlace = document.querySelector("coral-actionbar-secondary.coral3-ActionBar-secondary");
const buttonPlace1 = document.querySelector(".header-main.coral3-ActionBar");

const dataPath = document.querySelector(".pageinfo-unpublish-activator");
console.log('dataPath', dataPath);
const datePath = dataPath.getAttribute("data-path").split('.');
console.log('datePath', datePath);
/*const buttonSaveAll = `<button
id="buttonSave"
class="js-editor-PageInfo-closePopover cq-authoring-actions-save-all-activities coral3-Button coral3-Button--secondary"
title="Save All"
data-path="${datePath[0]}"
type="button"
autocomplete="off"
is="coral-button"
trackingfeature=""
trackingelement="save all"
tracking="ON"
size="M"
variant="secondary"
>
<coral-button-label>Save All</coral-button-label>
</button>`;*/


const buttonPublish = `<button
class="js-editor-PageInfo-closePopover cq-authoring-actions-quickpublish-activator coral3-Button coral3-Button--secondary"
title="Publish Page"
data-references-url="/libs/wcm/core/content/reference.json"
data-path="${datePath[0]}"
data-later="false"
data-edit="true"
data-url="/libs/wcm/core/content/sites/publishpagewizard.html"
data-replication-url="/bin/replicate.json"
type="button"
autocomplete="off"
is="coral-button"
trackingfeature=""
trackingelement="publish page"
tracking="ON"
size="M"
variant="secondary"
>
<coral-button-label>Publish Page</coral-button-label>
</button>`;

const option = document.getElementById("coral-id-33");
option.innerHTML='Products';


function insertButton(button, place) {
 /* place.insertAdjacentHTML("afterBegin", button);*/
   place.insertAdjacentHTML("beforeEnd", button);
  
}

/*insertButton(buttonSaveAll, buttonPlace);*/
insertButton(buttonPublish, buttonPlace);
console.log(datePath[0]);

/*const btn = document.getElementById("buttonSave");

function activatePageTrigger(){
    const pageTrigger = document.getElementById("pageinfo-trigger");
    pageTrigger.classList.add("is-selected");
    pageTrigger.classList.remove("is-selected");
    console.log("KUKU")
    return;
}


btn.onclick = function() {activatePageTrigger()};*/
/*
const pageInfoData = document.getQuerySelector('#pageinfo-data span');
console.log(pageInfoData);*/
