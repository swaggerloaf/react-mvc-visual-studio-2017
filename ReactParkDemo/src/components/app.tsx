import * as React from "react";

export interface AppProps { name: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {
    render() {
        return <h1>Let's go for a {this.props.name} react spin!</h1>
    }
}
