import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {

    const go_regist = () => {
        navigate("/register")
        window.location.reload()
    }

    const [condition1, setCondition1] = useState(null)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const vision = method === "login" ? 1 : 0
    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {

        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/')
                window.location.reload()
            } else {
                navigate('/login')
                window.location.reload()
            }
        } catch (error) {
            if (condition1 === true) {
                setCondition1(false)
                navigate('/login')
                window.location.reload()
            }
            else {
                alert("Please fill out the inputs")
                window.location.reload()
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container" onMouseMove={() => {
                if (username == null || password == null) {
                    setCondition1(false)
                }
                else {
                    setCondition1(true)
                }
            }}>
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                    if (username == null || password == null) {
                        setCondition1(false)
                    }
                    else {
                        setCondition1(true)
                    }
                }}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    if (username == null || password == null) {
                        setCondition1(false)
                    }
                    else {
                        setCondition1(true)
                    }
                }}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
        
        <button className="form-button" type="submit" onClick={go_regist} style={{ opacity: `${vision}`}}>
            Go Register
        </button>
        </div>
    );
}

export default Form