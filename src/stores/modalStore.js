import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    // state
    state: () => ({
        modal: {
            toggleModal: false,
            whichModal: null, //Change to null
            whichSubmitType: null, //Change to null
            classNames: ''
        }
    }),

    // actions
    actions: {
        openModal (modalType) {
            console.log("open modal touched", modalType)
            this.modal.toggleModal = true;
            this.modal.whichModal = modalType;

            switch (this.modal.whichModal) {
                case "DialogBox":
                    this.modal.whichSubmitType = "DialogSubmit";
                    this.modal.classNames = 'center-modal'
                    break;
                    
                case "NewShift":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'center-modal'
                    break;
                    
                case "NewTransaction":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'center-modal'
                    break;
                    
                case "NewEmployer":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'center-modal'
                    break;

                case "NewFilter":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'right-modal'
                    break;

                case "NewSchedule":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'center-modal'
                    break;

                case "undoCountDown":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'left-modal dark-inner-bg light-outer-bg'
                    break;

                default:
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = ''
                    break;
            }
            
            console.log(this, typeof this.modal.whichModal, "mutated");
        },
        closeModal (){
            this.modal.toggleModal = false;
        }
    }

    // getters
})

// pinia.useStore(useModalStore);