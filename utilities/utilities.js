function getInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    const convertesText = parseInt(text);
    return convertesText;
}

function setInnerText(id , value) {
    document.getElementById(id).innerText = value;
}