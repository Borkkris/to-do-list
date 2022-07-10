// let inputs = $('input');
// inputs.show(); // Make the element(s) visible
// inputs.hide(); // Hide the element(s)

// inputs.fadeOut(); // Fade the element(s) out and then hide them
// inputs.fadeIn(); // Fade the element(s) in and show them
// inputs.fadeToggle(); // Fade the element(s) in or out depending on whether they're currently visible or not

// inputs.slideDown(); // Slide the element(s) out of view and then hide them
// inputs.slideUp(); // Slide the element(s) into view and show them
// inputs.slideToggle(); // Slide the element(s) in or out

// // You could obtain what’s assigned to the src attribute in the following way:
// var imageSource =  $('.my-image').attr('src');
// console.log(imageSource); // this will log: https://picsum.photos/200/300

// // For example, you can create new DOM elements like this:
// let newElement = $('<div class="new-class">Content is here!</div>');
// $('body').append(newElement);

// // traverse between DOM
// let input = $('input');
// input.parent(); // Get the parent element
// input.children(); // Get all children
// input.closest('.container'); // Go up the hierarchy of parents until the selector matches
// input.siblings(); // Get all siblings

// // In jQuery, it’s very easy to add a class:

// let inputs = $('input');
// inputs.addClass('my-class');

// // You can also create, remove, append, and empty elements:
// input.remove(); // Delete the element
// $('body').append(input); // Like .appendChild
// $('body').empty(); // Remove all children of the element

// // Using jQuery to "fetch" an API
// $.ajax('https://yesno.wtf/api', { dataType: 'json' }).then(function (responseJSON) {
//   console.log(responseJSON); // This is the parsed JSON response
// });

let li = $('#list');

li.addClass("delete");

li.on("click", function() {
    li.addClass("strike");
  }); 