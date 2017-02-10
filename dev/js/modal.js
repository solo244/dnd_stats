/* Close modals */
function closeModal(){
  $modal_all.removeClass("modal-open");
  $modal.removeClass("active-modal");
}

function openModal(){
  $modal_all.addClass("modal-open");
  $modal.removeClass("active-modal");
}

function changeLocation(){
  openModal();
  $(".modal-cities").addClass("active-modal");
}
