import myro from 'myro'

const COMPONENTS_LIST_ROUTE = 'COMPONENTS_LIST_ROUTE'
const COMPONENT_DISPLAY_ROUTE = 'COMPONENT_DISPLAY_ROUTE'

const route = myro({
  '/components': {
    name: 'components',
    props: COMPONENTS_LIST_ROUTE,
    routes: {
      '/:id': {
        name: 'component',
        props: COMPONENT_DISPLAY_ROUTE
      }
    }
  },
  '': {
    name: 'home',
    props: COMPONENTS_LIST_ROUTE // simply show ComponentsList
  }
})

export default route
export {
  COMPONENT_DISPLAY_ROUTE,
  COMPONENTS_LIST_ROUTE
}
