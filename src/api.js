const getComponents = () => {
  const components = [{
    'id': 1,
    'name': 'button'
  },
    {
      'id': 2,
      'name': 'title'
    },
    {
      'id': 3,
      'name': 'header'
    }
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(components), 16)
  })
}

export {
  getComponents
}
