import createHistory from 'history/createHashHistory'

const history = createHistory()

const Navigation = {
  getLocation: () => history.location.pathname,
  changeLocation: (action, url) => () => {
    history.push(url)
    return {
      then: cb => cb(action(url))
    }
  }
}

export default Navigation
