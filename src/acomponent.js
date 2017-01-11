import createElement from 'inferno-create-element'

var message = 'subcomponent'

function MyComponent(props) {
  return createElement('div', null, [
    message,
    createElement('h5', null, 'myworld'),
    props.headelem()
  ])
}

function MyOtherComponent(props) {
  return (
    <div>Hello
      <h1>World12345</h1>
      <h3>{props.message}</h3>
      <p>
        {props.children}
      </p>
      {props.headelem()}

    </div>
  )
  // return <div className={styles.red}>Hello worlddd</div>;
}

export default MyOtherComponent
