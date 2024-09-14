import {
    createBrowserRouter,
    RouterProvider,
  }from 'react-router-dom';

  import Frontpage from '../views/frontpage';
  import Signup from '../views/signup';
  import Login from '../views/login';
  import Dashboard from '../views/Dashboard';
  import Detailcards from '../component/detail card';
  import Searchdetail from '../component/search detail';
  import Bill from '../component/bill';
  import Orderconfirm from '../component/confirm-order';
  const router=createBrowserRouter([
{
    path:'/',
    element:<Frontpage/>,
},
{
    path:'/signup',
    element:<Signup/>,
},
{
  path:'/login',
  element:<Login/>,
},
{
  path:'/dashboard',
  element:<Dashboard/>
},
{
  path:'/detail/:idCategory',
  element:<Detailcards/>
},
{
  path:'/searchdetail/:idmeal/:CATEGORY',
  element:<Searchdetail/>
},
{
  path:'/bill',
  element:<Bill/>
},
{
  path:'/order',
  element:<Orderconfirm/>
}

  ])

function Router(){
    return<RouterProvider router={router}/>
}
export default Router