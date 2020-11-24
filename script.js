
// setTimeout(myName, 4000);
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json(res))
//     .then(result => console.log(result));

// fetch('https://cat-fact.herokuapp.com/facts')
//     .then(cat => cat.json(cat))
//     .then(response => console.log(response));

//https://developer.edamam.com/edamam-recipe-api

// async function getApi () {
//     var resolve = await fetch("https://api.edamam.com/search?q=spaghetti&app_id=893cba70&app_key=ebba3d924eadadef1d0115be02de0dfb&from=0&to=6&calories=591-722&health=immuno-supportive");
//     var result = await resolve.json(resolve);
//     console.log(result);
// }
// getApi();

fetch("https://api.edamam.com/search?q=spaghetti&app_id=893cba70&app_key=ebba3d924eadadef1d0115be02de0dfb&from=0&to=6&calories=591-722&health=immuno-supportive")
    .then(response => response.json(response))
    // .then(result => console.log(result.hits))
    .then(result => getResult(result.hits));

var app = document.getElementById("root");

function getResult (result) {

    result.forEach(result => {
        var foodDiv = document.createElement('div');
        foodDiv.className = 'main';
        var foodTitle = document.createElement('h4');
        foodTitle.innerText = result.recipe.label;
        var foodImage = document.createElement("img");
        foodImage.src = result.recipe.image;
        foodImage.alt = "img";
        var foodSource = document.createElement('p');
        foodSource.innerText = "Source: " + result.recipe.source;
        var cautions = document.createElement('b');
        cautions.innerText = "Caution: " + result.recipe.cautions;
        cautions.className = 'red';
        var foodLink = document.createElement('a');
        foodLink.innerText = "Recipe link";
        foodLink.href = result.recipe.url;


        app.appendChild(foodDiv);
        foodDiv.appendChild(foodTitle);
        foodDiv.appendChild(foodImage);
        foodDiv.appendChild(foodSource);
        foodDiv.appendChild(cautions);
        foodDiv.appendChild(foodLink);
    });
}
