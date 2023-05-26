// 新增
import Welcome from "../views/welcomepage/index";
import Homepage from "../views/homepage/index";
import Product from "../views/allproducts/index";
import Detail from "../views/productdetail/index";
import Faqs from "../views/faqs/index";
import ShoppingCart from "../views/shoppingcart/index";
import Order from "../views/order/index";
import AppLayout from '../components/layout'; 
import MyAccount from '../views/me/myaccount'

export const routers = [
  {
    // 进入welcomepage
    path: "/", // http://www.healthfuel365.com
    element: <Welcome />,

    // 路由嵌套，子路由的元素需使用<Outlet />
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
    path: "/",
    element: <AppLayout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      // {
      //   index: true,
      //   element: lazyLoad(<Home />),
      // },
      {
        // 进入Homepage
        path: "/homepage", // http://www.healthfuel365.com/homepage
        element: <Homepage />,
      },
      {
        // 进入All Products Page
        path: "product", // http://www.healthfuel365.com/product
        // element: <Product />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            // 进入Product Detail Page
            path: "detail", // http://www.healthfuel365.com/product/detail
            element: <Detail />,
          },
        ],
      },
      {
        // 进入FAQs Page
        path: "/faqs", // http://www.healthfuel365.com/faqs
        element: <Faqs />,
      },

      {
        // 进入Shopping Cart Page
        path: "/shoppingCart", // http://www.healthfuel365.com/shoppingCart
        element: <ShoppingCart />,
      },

      {
        // 进入Order Page
        path: "/order", // http://www.healthfuel365.com/order
        element: <Order />,
      },

  {
    //go to My Account Page
    path:'/myaccount', //http://www.healthfuel365.com/myaccount
    children: [
      {
        index: true,
        element: <MyAccount />
      },
      // {
      //   path:'myorder', //http://www.healthfuel365.com/myaccount/myorder
      //   element: <MyOrder/>
      // }
    ]
  },
]; 