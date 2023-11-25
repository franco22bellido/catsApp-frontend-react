import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { registerRequest, loginRequest, catsRequest} from '../api/auth'

export const AuthContext = createContext();

export const useAuth = ()=> {
    const context = useContext(AuthContext);
    if(!context){ throw new Error("useAuth must be used within an AuthProvider")}

    return context;
}

export const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setErrors]  =  useState([]);
    const [loading, setLoading] = useState(true);

    const signUp = async (values)=> {

        try {
            const res = await registerRequest(values);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            if(!Array.isArray(error.response.data?.message)){
                return setErrors([error.response.data.message]);
            }{
                return setErrors(error.response.data.message);
            }
        }
    }
    const signIn = async (user)=> {
        try {
            const res = await loginRequest(user);

            let newUserToString = JSON.stringify(res.data);
            window.localStorage.setItem('user', newUserToString);
            setUser(res.data);
            return setIsAuthenticated(true);
        } catch (error) {
            if(!Array.isArray(error.response.data?.message)){
                return setErrors([error.response.data?.message]);
            }else {
                return setErrors(error.response.data?.message);
            }
        }
    }
    const loadCats = async (token)=> {
        try {
            
            const res = await catsRequest(token);
            return res;
        } catch (error) {
            return error;
        }
    }
    const validateToken = async ()=> {
        try {
            const userString = window.localStorage.getItem('user');
            const userObject = JSON.parse(userString);
            const res = await loadCats(userObject?.token);

            if(res.response?.status === 401){
                setUser(null);
                setLoading(false);
                setIsAuthenticated(false);
                return 
            }else {
                setUser(userObject);
                setLoading(false);
                setIsAuthenticated(true);
                return;
            }
        } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
            console.log(error);
            return
        }
    }

    useEffect(()=> {
        validateToken();
    }, []);

    useEffect(()=> {
        if (error.length > 0){
            const timer = setTimeout(()=> {
                setErrors([]);
            }, 7000);
           
            return ()=> clearTimeout(timer);
        }
    }, [error])
    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                user,
                isAuthenticated,
                error,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}