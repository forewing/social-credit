const IMGS_PATH = "./imgs";
const IMGS_IND_MIN = 1;
const IMGS_IND_MAX = 40;
const IMGS_TOTAL = IMGS_IND_MAX - IMGS_IND_MIN + 1;

function getImagePath(id) {
    let parsed = parseInt(id);
    if (isNaN(parsed)) {
        parsed = IMGS_IND_MIN;
        console.log("not an int:", id);
    }
    if (parsed < IMGS_IND_MIN || parsed > IMGS_IND_MAX) {
        parsed = IMGS_IND_MIN;
        console.log("range exceed:", id);
    }

    return `${IMGS_PATH}/${parsed}.jpg`;
}

function getRandomId() {
    let target = Math.floor(Math.random() * (IMGS_TOTAL) + IMGS_IND_MIN);

    return target;
}

function appendImage(id) {
    let target = document.getElementById("target");
    let img = document.createElement("img");
    img.src = getImagePath(id);
    target.appendChild(img);
}

appendImage(getRandomId());
