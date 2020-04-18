namespace SimpleFeedly.Web.Rss {

    export interface HelloReactProps {
        something: string;
    }

    export class HelloReact extends React.Component<HelloReactProps>
    {
        handleClick = (e) => {
            Q.warning("My name is " + this.props.something);
        }

        render(): React.ReactNode {
            var something = this.props.something;
            return (
                <React.Fragment>
                    <div onClick={this.handleClick} style={{ padding: "40px", textAlign: "center", verticalAlign: "middle" }}>Hello {something}</div>
                </React.Fragment>
            );
        }
    }
}