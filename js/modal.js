class Modal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render() {
    const modalContainer = {
        "backgroundColor": "#fff",
        "width": "100px",
        "height": "100px",
        "borderRadius": "5px",
    }
      return (
          <div style={modalContainer}>
              <h1>hwllo</h1>
          </div>
      )
  }
}