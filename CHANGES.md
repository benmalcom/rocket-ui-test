Below are my actions/decisions concerning the UI project.

### Implementations

* Added a Collapsible component to the `components` folder, this serves as a component that resides inside each list item and shows a collapsible detail about the launch item 
* Removed the `layout` from the `ConnectedView`, because this causes unnecessary re-renders of the whole app for any component that uses the `ConnectedView` component 
* Rendered the `layout` as the application container housing the `routes` (conventional practice)
* Refactored the `ConnectedView` component to only serve on purpose; connect any component inheriting it to redux store
* Implemented tests for the most important components; `Collapsible` and `Launch`
* Added prop type validations
* General code refactors

### UI/UX Improvements

* Added a `load more` button for pagination (15 per page) to avoid loading all items in one request
* Added mobile responsiveness for mobile devices and tabs
