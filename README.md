<a href="https://githubsfdeploy.herokuapp.com?owner=effordDev&repo=sf-flow-navigate-to-record&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

`@api recordId` - Id of record to navigate to
`@api objectAPIName` - Api name of object (Ex. `Application__c`)

`@api pageName` - The unique name of the Experience Builder page. The value for name is the API Name value for a supported page. The API Name field can only be defined when a new page is being created, and must be unique. If the API Name isn’t defined upon page creation, it’s automatically generated. The value of `home` is reserved for the landing page of any Experience Builder site in your org. 