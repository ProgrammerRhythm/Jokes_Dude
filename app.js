// http://www.icndb.com/api/



document.getElementById('getData').addEventListener('click', loadJokes);

function loadJokes(e) {
   document.getElementById('see').style.display = 'block';
    let number = document.getElementById('number').value;
    console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = "<h3>Loading.....</h3>";
    }
    xhr.onload = function(){
        if (this.status==200) {
           let output = JSON.parse(this.responseText);
           let update = output.value;
           let up = "<ol>";

           update.forEach(function(item) {
            value = item.joke;
            up += `<li>${item.joke}</li>`;
            console.log(up);
           });
           up += "</ol>";

           document.getElementById('output').innerHTML = up;
        //    console.log(update);
        }
    }

    xhr.send();
}