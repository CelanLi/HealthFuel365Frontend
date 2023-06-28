// Add
import Welcome from "../views/welcomepage/index";
import Homepage from "../views/homepage/index";
import Product from "../views/allproducts/index";
import Detail from "../views/productdetail/index";
import Faqs from "../views/faqs/index";
import ShoppingCart from "../views/shoppingcart/index";
import Order from "../views/order/index";
import AppLayout from '../components/layout'; 
import MyAccount from '../views/me/myaccount'
import AddressManagement from "../views/me/addressmanagement"
import MyProfile from "../views/me/myprofile"
import MyOrder from "../views/me/myorder"
import OrderDetail from "../views/me/orderdetail"
import ProfileEdit from "../views/me/profileedit";
import Login from "../views/login/index";
import Register from "../views/register/index";
import AdminLayout from "../views/admin/component/layout";
import ProductManagement from "../views/admin/productManagement";
import UserManagement from "../views/admin/userManagement";
import PromoCodeManagement from "../views/admin/promoCodeManagement";
import OrderManagement from "../views/admin/orderManagement";

export const routers = [
  {
    // go to welcomepage
    path: "/", // http://www.healthfuel365.com
    element: <Welcome />,
    

 
    // children: [
    //   {
    //     index: true,
    //     element: (<Home />)
    //   },
    //   {
    //     path: '/Menu11',
    //     element: (<Menu11 />)
    //   },
    //   {
    //     path: '/Menu22',
    //     element: (<Menu22 />)
    //   }
    // ]
  },
  {
    // log in Page
    path: "/login", // http://www.healthfuel365.com/login
    element: <Login />,
  },
  {
    // register Page
    path: "/register", // http://www.healthfuel365.com/register
    element: <Register />,
  },
  {
    // Admin Page
    path:'admin', //http://www.healthfuel365.com/admin
    element: <AdminLayout />, 
    children: [
      {
        index: true,
        element: <UserManagement />,
      },
      {
        path:'productManagement', //http://www.healthfuel365.com/admin/productManagement
        element: <ProductManagement />
      },
      {
        path:'userManagement', //http://www.healthfuel365.com/admin/productManagement
        element: <UserManagement />
      },
      {
        path:'promoCodeManagement', //http://www.healthfuel365.com/admin/promoCodeManagement
        element: <PromoCodeManagement />
      },
      {
        path:'orderManagement', //http://www.healthfuel365.com/admin/orderManagement
        element: <OrderManagement />
      },
    ]
  },
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      // {
      //   index: true,
      //   element: lazyLoad(<Home />),
      // },
      {
        // Homepage
        path: "/homepage", // http://www.healthfuel365.com/homepage
        element: <Homepage />,
      },
      {
        // All Products Page
        path: "product", // http://www.healthfuel365.com/product
        // element: <Product />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            // Product Detail Page
            path: "detail/:id", // http://www.healthfuel365.com/product/detail
            element: <Detail />,
          },
        ],
      },
      {
        // FAQs Page
        path: "/faqs", // http://www.healthfuel365.com/faqs
        element: <Faqs />,
      },

      {
        // Shopping Cart Page
        path: "/shoppingCart", // http://www.healthfuel365.com/shoppingCart
        element: <ShoppingCart />,
      },

      {
        // Order Page
        path: "/order", // http://www.healthfuel365.com/order
        element: <Order />,
      },

  {
    //go to My Account Page
    path:'myaccount', //http://www.healthfuel365.com/myaccount
    children: [
      {
        index: true,
        element: <MyAccount />
      },
      {
        path:'profileEdit', //http://www.healthfuel365.com/myaccount/profileEdit
        element: <ProfileEdit />
      },
      {
        path:'addressManagement',
        element: <AddressManagement />
      },
      {
        path:'myprofile',
        element: <MyProfile />
      },
      {
        path:'myorder',
        children: [
          {
            path:'',
            element: <MyOrder />,
          },
          {
            path:'orderdetail/:orderId',
            element: <OrderDetail />
          }
        ]
      },
    ]
  },

    ]
  }
]