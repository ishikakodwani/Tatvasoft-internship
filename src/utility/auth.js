import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { RoutePaths } from "../utility/path";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const initialValues = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    roleId: 0,
    role: "",
    password: "",
  }
  const initialState = {
    setUser: () => {},
    user: initialValues,
  };
export const AuthContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
  const [appInitialize, setAppInitialize] = useState(false);
  const [user, _setUser] = useState(initialValues);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const setUser = (user) => {
    console.log("ishikakodwani1@gmail.com", user);
    //localStorage.setItem(Shared.LocalStorageKeys.USER, JSON.stringify(user));
    _setUser(user);
  };
  useEffect(() => {
    const itemStr =
      //JSON.parse(localStorage.getItem(Shared.LocalStorageKeys.USER)) ||
      initialValues;
    // if the item doesn't exist, return null
    if (!itemStr.id) {
      navigate(`${RoutePaths.Login}`);
    }
    _setUser(itemStr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (pathname === RoutePaths.Login && user.id) {
      navigate(RoutePaths.BookListing);
    }

    if (!user.id) {
      return;
    }
    // const access = Shared.hasAccess(pathname, user);
    // if (!access) {
    //   toast.warning("Sorry, you are not authorized to access this page");
    //   navigate(RoutePaths.BookListing);
    //   return;
    // }
    setAppInitialize(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, user]);

  let value = {
    user,
    setUser,
    appInitialize,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
