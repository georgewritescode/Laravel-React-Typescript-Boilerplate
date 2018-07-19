import React, { Component } from "react";
import { Button, notification } from "antd";
import { css } from "emotion";
import { observer, inject } from "mobx-react";

const openNotificationWithIcon = type => {
    notification[type]({
        message: "Ant Design is working"
    });
};

@inject("RootStore")
@observer
export class Page extends Component<any, any> {
    componentDidMount() {
        openNotificationWithIcon("info");
    }
    render() {
        return (
            <div className={css(`padding: 12rem`)}>
                <h1>Laravel React Typescript Boilerplate</h1>

                <a href="https://twitter.com/grmcameron" target="_blank">
                    <h4>by {this.props.RootStore.user.name}</h4>
                </a>

                <div className={"bg-blue-dark text-white p-4 mt-4"}>
                    <p>
                        If you are seeing this then you have successfully
                        installed all dependencies and Hot Module Reloading
                        should work!
                    </p>
                    <p>
                        Everything is ready for you to dive in. Why not change my name
                        to yours? (Hint: you'll have to edit the mobx store)
                    </p>
                </div>
            </div>
        );
    }
}
