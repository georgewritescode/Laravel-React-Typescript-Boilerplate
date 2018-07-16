import React, { Component } from "react";
import { Button, notification } from "antd";
import { css } from "emotion";

const openNotificationWithIcon = type => {
    notification[type]({
        message: "Ant Design is working"
    });
};

export class Page extends Component {
    componentDidMount() {
        openNotificationWithIcon("info");
    }
    render() {
        return (
            <div className={css(`padding: 12rem`)}>
                <h1>Laravel React Typescript Boilerplate</h1>

                <a href="https://twitter.com/grmcameron" target="_blank">
                    <h4>by George</h4>
                </a>

                <div className={"bg-black text-white p-4 m-t-12"}>
                    <p>
                        If you are seeing this then you have successfully
                        installed all dependencies and Hot Module Reloading
                        should work!
                    </p>
                    <p>
                        Give it a go by editing Page.tsx. Why not change my name
                        to yours?
                    </p>
                </div>
            </div>
        );
    }
}
