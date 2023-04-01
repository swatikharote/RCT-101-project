import { createContext, useState } from "react";

export const AuthContext = createContext()

const userDetails = [{ email: "swati123@gmail.com", name: "Swati", password: "1234" },
{ email: "dsds@gmail.com", name: "Vishal", password: "123sdgav4" }
]




export default function AuthContextProvider({ children }) {

    const [isAuth, setisAuth] = useState(false);
    const [name, setName] = useState("")
    const [searchData, setSearchData] = useState([])
    const [searchStr, setSearchStr] = useState("")

    const Login = (email, password) => {
        const res = userDetails.filter((e) => e.email == email && e.password == password)
        if (res.length == 1) {
            setisAuth(true);
            setName(res[0].name);

        } else {
            setisAuth(false)
            alert("Please Enter correct Email & password")
        }
    }


    const updateSearchData = (data) => {
        setSearchData(data)
    }

    const updateSearchStr = (str) => {
        setSearchStr(str)
    }

    return (
        <AuthContext.Provider value={{ isAuth, Login, name, searchData, updateSearchData, searchStr, updateSearchStr }}>{children}</AuthContext.Provider>



    )

}