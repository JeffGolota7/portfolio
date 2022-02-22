

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.data = require('../projectData.json');
        this.state = {
            name: '',
            appVersion: ''
        }
    }

    render() {
        return (
            <>
                <h2>{this.data}</h2>
            </>
        )
    }
}