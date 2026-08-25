class ModalController {

    constructor(modalElement) {
        this.modal = modalElement; 
        this.closeButton = this.modal.querySelector(".close-button"); 
        this.setupEvents();
    } 

    setupEvents() {
        // close quiz - close button
        this.closeButton.addEventListener("click", () => {
            this.close();
        }); 

        // close quiz - clicking outside the modal window 
        this.modal.addEventListener("click", (event) => {
            if(event.target === this.modal) {
                this.close();
            }
        }); 

        // close quiz - pressing Esc button
        document.addEventListener("keydown", (event) => {
            if(event.key === "Escape" && this.modal.classList.contains("active")) {
                this.close();
            }
        }); 
    } 

    open() {
        this.modal.classList.add("active");
    } 

    close() {
        this.modal.classList.remove("active");
    }
}