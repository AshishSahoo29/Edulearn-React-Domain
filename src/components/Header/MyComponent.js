export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.reset();
      }
    onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }

    render(){
        return (
            <form className="form-horizontal">
                <input type="text" className="form-control" value={this.state.inputValue}  name="title" />
                <button type="button" onClick={this.onSubmit} className="btn">Save</button>
            </form>
        );
    }

};