fetch('modules.json')

.then(function(response) {

    if(!response.ok) {
        throw new Error("Unable to load modules.json");
    }

    return response.json();

})

.then(function(data) {

    const container =
    document.getElementById('modules-container');

    const errorMessage = document.getElementById('error-message');

    container.innerHTML = "";
    errorMessage.textContent = "";

    const moduleList = document.createElement("ul");

    data.modules.forEach(function(module) {

        const listItem = document.createElement("li");

        listItem.textContent =
        module.name + " - " +
        module.hours + " hours";

        moduleList.appendChild(listItem);

    });

    container.appendChild(moduleList);

})

.catch(function(error) {

    const container = document.getElementById('modules-container');
    const errorMessage = document.getElementById('error-message');

    container.innerHTML = "";
    errorMessage.textContent = 
    "Error: Course modules could not be loaded."+
    "Please check your modules.json file.";

    console.error(error);

}); 