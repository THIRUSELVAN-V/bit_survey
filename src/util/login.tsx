
import { useLoginStore } from "../store/login";

export function useLogin() {
    const { Login, logout, requestState } = useLoginStore();

    const handleLogin = async () => {
        try {
            const loginResult = await Login();
            localStorage.setItem('access_token', loginResult.token)

            return true;
        } catch (error) {
            console.error('Login failed', error);
            return false;
        }
    };
    const handleLogout = () => {
        // Remove the auth token cookie
        localStorage.removeItem('access_token');
        logout();
    };

    return {
        login: handleLogin,
        logout: handleLogout,
        requestState
    };
}