import React, { useContext, useEffect } from "react";
import { UserContext } from "contexts/UserContext"
import { notification } from "antd";
import { css } from "emotion";

const openNotificationWithIcon = type => {
    notification[type]({
        message: "Ant Design is working"
    });
};

interface IProps {

}

export const Page: React.FC<IProps> = () => {
    const [user, setUser] = useContext<any>(UserContext)

    useEffect(() => {
        openNotificationWithIcon("info");
    }, [])

    return (
        <div className={css(`padding: 12rem`)}>
            <h1>Laravel React Typescript Boilerplate</h1>

            <p>
                by {user.name} - <a href="https://twitter.com/grmcameron" target="_blank">
                    https://twitter.com/grmcameron
                </a>
            </p>

            <div className={"bg-blue-600 text-white p-4 mt-4"}>
                <p>
                    If you are seeing this then you have successfully
                    installed the boilerplate.
                </p>
            </div>
        </div >
    );
}