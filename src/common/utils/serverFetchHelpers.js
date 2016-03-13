// Server side rendering: Fetches initial data for all components at a
// particular route.
export function fetchRouteComponentsData(dispatch, routerProps) {
  return fetchComponentsData(dispatch, routerProps, routerProps.components)
}

export function fetchComponentsData(dispatch, routerProps, components) {
  return components.filter((component) => {
    if (typeof component.fetchData === 'function') {
      return true
    }
  }).map((component) => {
    return component.fetchData(dispatch, routerProps)
  })
}
