import React from 'react'
import { PublicRoute } from './PublicRoute'
import { HomePage } from 'pages/HomePage'

const routes = [
  { path: '/home', component: HomePage },
  { path: '*', component: HomePage }
]

const buildRoutes = () => {
  return routes.map((route, index) => {
    return <PublicRoute key={`route-${index}`} {...route} />
  })
}

export default buildRoutes
