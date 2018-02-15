'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	// Get the url
	var url = "/project/" + idNumber;

	$.get( url, addProject);

}


function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="detailsImg">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 
  var idNumber = result['id']

	$("#project"+idNumber+ " .details").html(projectHTML);
	$("#project"+idNumber+ " .content").html(result['summary']);
}

function tempCallBack(result){
}
