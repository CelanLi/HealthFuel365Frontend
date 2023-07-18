# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
    │   ├── adminService.js [communicate with the backend and implement functions related to the management system such as CRUD the product, promo code etc.]
    │   ├── alternativeService.js []
    │   ├── orderService.js [communicate with the backend and implement functions related to orders such as creating orders, processing Paypal, getting order info etc.]
    │   ├── productDetailService.js []
    │   ├── productService.js
    │   ├── recommendationService.js [communicate with backend and get recommended product list]
    │   ├── shoppingCartService.js [communicate with the backend and implement functions related to shopping carts such as getting product list and summary price, deleting product items/managing the quantity, validating and removing promo code etc.]
    │   └── userService.js [communicate with backend and implement functions related to users such as register, log in, profile management, address management and so on ]
    │
    ├── util
    │   ├── avatar.js [util functions used to deal with avatars, like compression, encoding and decoding]
    │   ├── constants.js []
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
