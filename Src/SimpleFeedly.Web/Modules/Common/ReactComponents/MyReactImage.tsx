namespace SimpleFeedly.Common {

    export class MyReactImage extends React.Component<any, any> {
        constructor(props) {
            super(props);

            this.state = {
                src: props.src,
                errored: false,
            };
        }

        onError = () => {
            if (!this.state.errored) {
                this.setState({
                    src: this.props.fallbackSrc,
                    errored: true,
                });
            }
        }

        render(): React.ReactNode {
            const { src } = this.state;
            const {
                src: _1,
                fallbackSrc: _2,
                ...props
            } = this.props;

            return (
                <img src={src} onError={this.onError} {...props} />
            );
        }
    }
}