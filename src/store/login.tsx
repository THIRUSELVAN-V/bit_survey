import { create } from 'zustand'


// Import the default request states
import {
    IDefaultRequestState
} from '../util/types';
import { getRequest, postRequest } from '../util/axios';
import { DEFAULT_REQUEST_ERROR, DEFAULT_REQUEST_LOADING, DEFAULT_REQUEST_STATE } from '../util/constant';

// Define the Skill interface
interface Data {
    email: string;
}

// Define the store interface
interface SkillStore {
    LoginData: Data;
    requestState: IDefaultRequestState;
    Login: any;
    logout: () => void;
    setLoginData: (data: string) => void;
}

export const useLoginStore = create<SkillStore>((set, get) => ({
    LoginData: {
        email: "raj@gmail.com",
    },
    setLoginData: (data: string) => {
        set({
            LoginData: {email:data}
        });
    },
    // Use the default request state from your types
    requestState: DEFAULT_REQUEST_STATE,

    // Method to login
    Login: async () => {
        // Set loading state
        set({ requestState: DEFAULT_REQUEST_LOADING });

        try {
            const { LoginData } = get()
            // Replace with your actual backend endpoint
            const response:any = await postRequest('api/auth', { email: LoginData.email });
            console.log(response.data)
            // Assuming response.data contains the token
            return {
                token: response.data,
            };
        } catch (error) {
            // Handle any errors during fetching
            const errorState = {
                ...DEFAULT_REQUEST_ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
                status: error instanceof Error && 'response' in error ? (error as any).response?.status || 0 : 0
            };

            set({
                requestState: errorState
            });

            throw error;
        }
    },

    // Logout method to clear authentication
    logout: () => {
        set({
            LoginData: { email: '' },
            requestState: DEFAULT_REQUEST_STATE
        });
    }
}));

// Custom hook to manage login with react-cookie


