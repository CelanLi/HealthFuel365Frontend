# HealthFuel365
Our health foods platform named "HealthFuel365" is an online store that offers food retailing and recommends suitable products based on your dietary preferences, and health goals.
## Table of contents
* [Installition](#installation)
* [Usage](#usage)
* [Test Accounts](#test-accounts)
* [Folder Structure](#folder-structure)

## Installition
Install dependencies by run the following command in Terminal:
```bash
   npm install
```
## Usage
After completing the environment configuration and dependency installation, you can run:
```bash
   npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Test Accounts
## Folder Structure

```bash
├── public
└── src
    ├── assets
    │   ├── font
    │   └── images
    │       ├── category
    │       ├── homepage [store images of homepage]
    │       │   ├── junkfood [store images in the alternative block]
    │       │   └── suppliers [store images of suppliers]
    │       ├── myaccount [store images of myaccount]
    │       ├── nova_score
    │       └── nutri_score
    ├── components
    │   ├── add_to_sc_button
    │   ├── category
    │   ├── footer
    │   ├── layout
    │   ├── loading
    │   ├── nutri
    │   ├── product
    │   └── topnav
    ├── models
    ├── routers
    ├── services
    │   ├── adminService.js [communicate with the backend and implement functions related to the management system such as admin log in, CRUD the product, promo code etc.]
    │   ├── alternativeService.js [communicate with the backend and get alternatives product list]
    │   ├── orderService.js [communicate with the backend and implement functions related to orders such as creating orders, processing Paypal, getting order info etc.]
    │   ├── productDetailService.js [communicate with the backend and get product detail by product id]
    │   ├── productService.js [communicate with the backend and impelement functions realted to products such as getting all products, get product by name and add product to shopping cart etc.]
    │   ├── recommendationService.js [communicate with backend and get recommended product list]
    │   ├── shoppingCartService.js [communicate with the backend and implement functions related to shopping carts such as getting product list and summary price, deleting product items/managing the quantity, validating and removing promo code etc.]
    │   └── userService.js [communicate with backend and implement functions related to users such as register, log in, profile management, address management and so on ]
    │
    ├── util
    │   ├── avatar.js [util functions used to deal with avatars, like compression, encoding and decoding]
    │   ├── constants.js [used to store route]
    │   ├── cookie.js [util functions used to manage cookies]
    │   └── request.js [util functions used to sets up an Axios instance with request and response interceptors for handling API requests and responses]
    │
    └── views
        ├── admin
        │   ├── component
        │   │   ├── addProduct
        │   │   ├── layout
        │   │   ├── topnav
        │   │   └── updateProduct
        │   ├── login
        │   ├── orderManagement
        │   │   └── orderDetail
        │   ├── productManagement
        │   ├── promoCodeManagement
        │   │   └── components
        │   │       ├── add_promocode
        │   │       └── edit_promocode
        │   └── userManagement
        ├── allproducts
        │   └── components
        │       ├── filter
        │       ├── product_list
        │       └── sort
        ├── faqs
        ├── homepage
        │   └── components
        │       ├── alternatives
        │       ├── carousel
        │       └── recommendation
        ├── login
        │   └── components
        ├── me
        │   ├── addressmanagement
        │   ├── components
        │   │   ├── me_address
        │   │   ├── me_info
        │   │   ├── me_nav
        │   │   ├── me_order
        │   │   ├── me_order_product
        │   │   └── me_profile
        │   ├── myaccount
        │   ├── myorder
        │   ├── myprofile
        │   ├── orderdetail
        │   │   └── component
        │   │       ├── order_detail_address
        │   │       ├── order_detail_product
        │   │       └── order_detail_service
        │   └── profileedit
        │       └── component
        ├── order
        │   └── components
        │       ├── or_add_address
        │       ├── or_additional_service
        │       ├── or_address
        │       ├── or_delivery
        │       └── or_summary
        ├── productdetail
        │   └── components
        │       ├── content_level
        │       └── nova
        ├── register
        │   └── components
        ├── shoppingcart
        │   └── components
        │       ├── sc_item_counter
        │       ├── sc_summary
        │       └── shoppingcart_item
        └── welcomepage
```
