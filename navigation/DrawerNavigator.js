import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import { render } from "react-dom";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }} />
        </Drawer.Navigator>
    );
};
componentDidMount() {
    let theme;
    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    onabort("value", function(snapshot) {
        theme = snapshot.val().current_theme
    });
    this.setState({ light_theme: theme === "light" ? true : false})
}
render() {
    let props = this.props;
    return(
        <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor:"e91e63",
            inactiveTintColor: this.state.light_theme ? "black":"wite",
        }}
        drawerContent={props => <CustomSideBarMenu {...props}/>}>
            <Drawer.Screen
            name="Home"
            component={StackNavigator}
            options={{ unmountOnBlur : true}}/>

<Drawer.Screen
            name="Profileme"
            component={Profile}
            options={{ unmountOnBlur : true}}/>

<Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ unmountOnBlur : true}}/>

        </Drawer.Navigator>
    )
}



export default DrawerNavigator;
