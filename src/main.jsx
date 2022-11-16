import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layouts from './components/Layouts'
import NuevoCLiente,{action as nuevoClienteAction} from './pages/NuevoCLiente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarCliente, {loader as editarCLienteLoader, action as editarCLienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layouts/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement:<ErrorPage/>

      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCLiente/>,
        action: nuevoClienteAction,
        errorElement:<ErrorPage/>
      },
      {
        path:'/clientes/:clientesid/editar',
        element: <EditarCliente/>,
        loader: editarCLienteLoader,
        action:editarCLienteAction,
        errorElement:<ErrorPage/>
         },
         {
          path:'/clientes/:clientesId/eliminar',
          action:eliminarClienteAction
         }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router ={router}/>
  </React.StrictMode>
)
