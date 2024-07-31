import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToRecord extends NavigationMixin(
    LightningElement
) {
    @api recordId
    @api objectAPIName = ''
    @api pageName = ''
    
    connectedCallback() {

        const nav = {}

        if (this.recordId && this.objectAPIName) {
            nav.type = 'standard__recordPage'
            nav.attributes = {
                recordId: this.recordId,
                objectApiName: this.objectAPIName,
                actionName: 'view',
            }
        } else {
            nav.type = 'comm__namedPage'
            nav.attributes = {
                pageName: this.pageName // This specifies the home page of the community
            }
    }

        this[NavigationMixin.GenerateUrl](nav).then((url) => {
            console.log({url})
            window.location.href = url;
        })
        .catch(error => {
            console.error(error)
        })
    }
}