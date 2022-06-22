// MODAL

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

// DROP DOWN LIST

const comp = document.getElementById("skills");
const exp = document.getElementById("experience");
const form = document.getElementById("formation");
const select = document.getElementById("select")
const optList = document.querySelectorAll("option");

    select.addEventListener("change", function(e){
        const opt = this.selectedIndex;
        if(opt === 0){
            comp.style.order = 1;
            exp.style.order = 2;
            form.style.order = 3;
        }
        else if(opt === 1){
            comp.style.order = 1;
            exp.style.order = 3;
            form.style.order = 2;
        }
        if(opt === 2){
            comp.style.order = 2;
            exp.style.order = 1;
            form.style.order = 3;
        }
        if(opt === 3){
            comp.style.order = 3;
            exp.style.order = 1;
            form.style.order = 2;
        }
        if(opt === 4){
            comp.style.order = 2;
            exp.style.order = 3;
            form.style.order = 1;
        }
        if(opt === 5){
            comp.style.order = 3;
            exp.style.order = 2;
            form.style.order = 1;
        }
        
    })

