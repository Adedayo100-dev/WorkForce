import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    // state
    state: () => ({
        modal: {
            toggleModal: false,
            whichModal: null, //Change to null
            args: null, // This is the data argument/parameter that may be passed with the modal invocation like id
            whichSubmitType: null, //Change to null
            classNames: ''
        }
    }),

    // actions
    actions: {
        openModal (modalType, data) {
            console.log("open modal touched", modalType)
            this.modal.toggleModal = true;
            this.modal.whichModal = modalType;
            this.modal.args = data;

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

                case "ScheduleDetails":
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = 'center-modal'
                    break;

                default:
                    this.modal.whichSubmitType = null;
                    this.modal.classNames = ''
                    break;
            }
            
            console.log(this.modal.args, "activated");
        },
        closeModal (){
            this.modal.toggleModal = false;
        }
    }

    // getters
})

// pinia.useStore(useModalStore);