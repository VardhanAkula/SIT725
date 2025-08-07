// Alert button handler
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

// Function to add cards to the UI
const addCards = (items) => {
  $("#card-section").empty(); // Clear previous cards
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

// Submit form data to server
const submitForm = () => {
  let formData = {
    title: $("#title").val(),
    image: $("#image").val(),
    link: $("#link").val(),
    description: $("#description").val()
  };

  $.post("/api/projects", formData, (response) => {
    if (response.statusCode == 200) {
      alert("Project added successfully!");
      getProjects(); // Reload cards
    } else {
      alert("Failed to add project.");
    }
  });
};

// Get all projects from backend
const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    } else {
      alert("Failed to load projects.");
    }
  });
};

// On document ready
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  $("#clickMeButton").click(() => {
    clickMe();
  });

  $("#formSubmit").click(() => {
    submitForm();
  });

  getProjects(); // Fetch projects from MongoDB
});
