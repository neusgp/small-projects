import cibo from "./cibo.js";
const table = document.getElementById("table");

//Here I'm looping through the "cibo" array. In your case should be an array of objects representing your events.
cibo.forEach((item) => {
    // important that you pass as an argument each "item" of the array, in order to access it.
    // For each food, I'm creating a div. I'm storing it into a variable.
    const tableDiv = document.createElement("div");
    //Next step is adding some html to the div, as you can see I'm acessing the values ob each "cibo" (item);
    tableDiv.innerHTML += `<p>${item.name}</p><p>${item.calories}</p>`;
    // I also add a class to the new div, to give it some style (see styles.css),
    tableDiv.classList.add("table_item");
    //Finally, I attach the new div to the table.
    table.appendChild(tableDiv);
});

// I think this is more practical and clean. This way you only need to code the style once. 
//You avoid using a table and hardcoding the html. And each time you want to add a new event, 
//you only have to go to events.js and add a new object to the array.

//  :*