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
      '" alt="Project Image">' +
      "</div><div class='card-content'>" +
      "<span class='card-title activator grey-text text-darken-4'>" +
      item.title +
      '<i class="material-icons right">more_vert</i></span>' +
      '<p><a href="' +
      item.link +
      '" target="_blank" rel="noopener noreferrer">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      "<span class='card-title grey-text text-darken-4'>" +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p></div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

// Submit form data to server
const submitForm = () => {
  let formData = {
    title: $("#title").val(),
    image: $("#image").val(),
    link: $("#link").val(),
    description: $("#description").val(),
  };

  // Basic validation
  if (
    !formData.title ||
    !formData.image ||
    !formData.link ||
    !formData.description
  ) {
    alert("Please fill out all fields.");
    return;
  }

  $.post("/api/projects", formData, (response) => {
    if (response.statusCode === 200) {
      alert("Project added successfully!");
      getProjects(); // Reload cards

      // Reset the form and close modal
      $("#projectForm")[0].reset();
      $(".modal").modal("close");
    } else {
      alert("Failed to add project.");
    }
  }).fail(() => {
    alert("Server error. Please try again later.");
  });
};

// Get all projects from backend
const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    } else {
      alert("Failed to load projects.");
    }
  }).fail(() => {
    alert("Server error. Please try again later.");
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  $("#clickMeButton").click(() => {
    clickMe();
  });

  $("#formSubmit").click((e) => {
    e.preventDefault(); // Prevent default link behavior
    submitForm();
  });

  getProjects(); // Fetch projects on page load
});
