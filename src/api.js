const getComponents = () => {
  const components = [{
    'id': 1,
    'name': 'button'
  }, {
    'id': 2,
    'name': 'title'
  }]

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(components), 16)
  })
}

export {
  getComponents
}
