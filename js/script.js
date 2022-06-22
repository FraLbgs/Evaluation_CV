const btnList = document.querySelectorAll(".info-btn");

function createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);
    document.getElementById("modal-parent").insertBefore(modal, document.getElementById("info-list"));

    modal.addEventListener("click", function() {
        this.remove();
    });

    return modalContent;
}


for(const btn of btnList){
    btn.addEventListener("click", function(e){
        const modalContent = createModal();
        modalContent.innerHTML = '<i class="fa fa-times modal-close" aria-hidden="true"></i>';
        const content = document.getElementById(this.dataset.info).innerHTML;
        modalContent.innerHTML += content;
    });
}