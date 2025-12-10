function replaceWord(){
    let origText = document.getElementById('original-text').value;
    let replaceText = document.getElementById('replace-word').value;
    let targetText = document.getElementById('target-word').value;

    if(origText === '' || replaceText === '' || targetText === ''){
        alert('Please fill in all fields.');
        return;
    }

    let resultStr = origText.replace(targetText, replaceText);
    document.getElementById('txt-result').innerHTML = resultStr;
}

