// import components
import Button from './components/Button'
import Title from './components/Title'

const getComponents = () => {
  const components = [
    {
      'id': 1,
      'name': 'button',
      'component': Button,
      'defaults': {
        'texts': {
          'text': 'button component'
        }
      }
    },
    {
      'id': 2,
      'name': 'title',
      'component': Title,
      'defaults': {
        'texts': {
          'text': 'title component'
        }
      }
    }
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(components), 16)
  })
}

export {
  getComponents
}
