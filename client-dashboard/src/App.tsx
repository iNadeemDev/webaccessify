import React from "react";

import { Refine, AuthProvider } from "@pankod/refine-core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    CssBaseline,
    GlobalStyles,
    ReadyPage,
    ErrorComponent,
} from "@pankod/refine-mui";
import {
    AccountCircleOutlined,
    ChatBubbleOutline,
    PeopleAltOutlined,
    AddToQueue,
    StackedBarChartOutlined,
    Download,
    PaymentOutlined,
    Feedback,
    Widgets,
    Equalizer,
    InstallDesktop,
    Subscriptions

} from "@mui/icons-material";


import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { Title, Sider, Layout, Header } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";


import {
    Login,
    Home,
    Agents,
    Snippet,
    EditProfile,
    PropertyDetails,
    AllProperties,
    CreateProperty,
    AgentProfile,
    EditProperty,
    AllClients,
    Widget,
    MySites,
    AddSite,
    
} from "pages";

interface User {
    email: string;
    password: string;
}


const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("admin");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

function App() {
    const authProvider: AuthProvider = {
        login: async ({ email, password }) => {
            try {
                const response = await fetch("https://manage.cyclic.app/user/api/v1/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                if (response.status === 200) {
                    const { token } = await response.json();
                    localStorage.setItem(
                        "admin", token
                    );
                } else if (response.status === 403) {
                    localStorage.removeItem('admin');
                    window.location.replace('https://dashboard.webaccessify.com/')
                    throw new Error("Access denied");
                } else {
                    return Promise.reject();
                }
            } catch (err) {
                localStorage.removeItem("admin");
                console.log("Server is not running or not available");
            }
        },

        logout: () => {
            localStorage.removeItem("admin");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
            const token = localStorage.getItem("admin");
            if (token) {
                return Promise.resolve();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            try {

                const response = await axiosInstance.get('https://manage.cyclic.app/user/api/v1/userdata');
                if (response.status == 200) {   
                    return response.data
                } else if (response.status == 401 || response.status == 403) {
                    localStorage.removeItem("admin");
                    window.location.href = 'https://dashboard.webaccessify.com/';
                } else if (response.status == 500) {
                    alert("Internal Server Error!")
                } else {
                    localStorage.removeItem("admin");
                    window.location.replace('https://dashboard.webaccessify.com/');
                }
            } catch (error) {
                localStorage.removeItem("admin");
                window.location.replace('https://dashboard.webaccessify.com/');
                console.error(error);
                // alert("Server is not running or not available");
            }
        },

    };

    return (
        <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <Refine
                    dataProvider={dataProvider("https://dummyjson.com/users")}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    resources={[
                        {
                            name: "Installation",
                            options: { label: "Installation" },
                            list: Snippet,
                            icon: <InstallDesktop />,
                        },
                        {
                            name: "Widget",
                            options: { label: "Widget" },
                            list: Widget,
                            icon: <Widgets />,
                        },
                        {
                            name: "edit-profile",
                            options: { label: "Edit Profile " },
                            list: EditProfile,
                            icon: <AccountCircleOutlined />,
                        },
                    ]}
                    Title={Title}
                    Sider={Sider}
                    Layout={Layout}
                    Header={Header}
                    routerProvider={routerProvider}
                    authProvider={authProvider}
                    LoginPage={Login}
                    DashboardPage={Home}
                />
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;