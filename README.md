# MyStore

This project is a full single-page representation of an ecommerce application, built with Angular.  

Scaffolding for this project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.  

This application includes the following features to simulate an end user making a purchase via website:
- **Product List**, which displays the available products for the user to choose and add to their cart (in various quantities)
- **Product Details**, which displays more information about any particular product
- **Shopping Cart**, which includes the products that the user has added to their cart
- **Checkout Form**, which collects information about the user (e.g., name, address, payment details, etc.)
- **Order Confirmation**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

## Technology Architecture

**Components**
- Cart
- Nav Bar
- Order Confirmation
- Product Item
- Product Item Detail
- Product List

**Models**
- Cart Item
- Product
- Order

**Services**
- Cart Service
- Order Service
- Product Service

Product data is fetched via data.json (locally), however, code utilizes HttpClient.get() so that retrieval via external API is easily configurable.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
