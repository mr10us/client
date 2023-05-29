import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ItemPage from "./pages/ItemPage"
import Items from "./pages/Items"

import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth,
    },
    {
        path: SHOP_ROUTE + '/:type/:id',
        Component: ItemPage,
    },
    {
        path: SHOP_ROUTE + '/:type',
        Component: Items
    }
]