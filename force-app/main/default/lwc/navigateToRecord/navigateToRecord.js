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
            nav = {
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: this.objectAPIName,
                    actionName: 'view',
                },
            }
        } else {
            nav = { 
                type: 'standard__namedPage',
                attributes: {
                    pageName: this.pageName // This specifies the home page of the community
                }
            }
        }

        this[NavigationMixin.GenerateUrl](nav).then((url) => {
            window.location.href = url;
        });
    }
}