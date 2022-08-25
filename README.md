# Mobiquitytest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Mobiquitytest

I have done a F1 project for Mobiquity test by creating an angular project using latest version with the help of angular-cli (@angular/cli": "~14.1.2")

# Question

We will use http://ergast.com/mrd/to create a single page application that presents a list that shows the F1 world champions starting from 2005 until now.Clicking on an item shows the list of the winners for every race for the selected year.We also request to highlight the row when the winner has been the world champion in the same season.

# What I did

Create an angular project using commands from Angular CLI,Install and build all the necessary packages.
Install bootstrap for styling purposes too.

In the app-component.ts file ,provided the http service calls to formulaService and subscribed there.
Passed the winners list from 2005 -2022 to season-winner component and used to display there by providing proper styles in cards.

While choosing a particular year by clicking on the button on each card ,we can see all the race winners for the same year(using modal). This is done by passing the parameters year and driver to a method in the same component and passed it to app-component using Output Emitter.

In app-component these details are passed to season-details.component .We are displaying all the data related to the incoming parameters and highlight the winner there in the modal pop-up.Clicking the link will directs to the respective URLs.

Also, a search option is provided for searching with a race name.
Used Prettier to format the code in Visual studio code
Unit testing is done for the Formulaservice and Component part.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
