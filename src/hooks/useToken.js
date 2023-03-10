import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";


const useToken = (user) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location?.state?.from?.pathname || "/";
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    // console.log(email);
    useEffect(() => {
        if (email) {
            fetch('https://go4fresh.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setToken(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken);

                });
        }
    }
        , [user, token, email]);
    return (
        [token, setToken]
    );
};

export default useToken;