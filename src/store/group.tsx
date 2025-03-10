import { create } from 'zustand';
// Import the default request states
import {
    IDefaultRequestState
} from '../util/types';
import { getRequest, postRequest } from '../util/axios';
import { DEFAULT_REQUEST_ERROR, DEFAULT_REQUEST_LOADING, DEFAULT_REQUEST_STATE } from '../util/constant';

// Define the Skill interface
interface Role {
    id: number;
    name: string;
}

// Define the store interface
interface RollStore {
    initialRole: Role[];
    resetRole: () => void;
    filteredRole: Skill[];
    requestState: IDefaultRequestState;
    getRolefromBackend: () => Promise<void>;
    removeSelectedRole: (skillName: string, level?: string) => void;
    selectRoleWithLevel: (skillName: string, level?: string) => void;
}

// Define the Skill interface with more detailed level information
interface SkillLevel {
    level: string;
    // Add any additional level-specific properties
}

interface Skill {
    id: number;
    name: string;
    skillLevels?: SkillLevel[];
}

// Define the Skill Store interface
interface SkillStore {
    initial_skill: Skill[];
    resetSkill: () => void;
    selectedSkills: {
        name: string;
        level?: string;
    }[];
    requestState: IDefaultRequestState;

    // Methods
    getSkillfromBackend: () => Promise<void>;
    selectSkillWithLevel: (skillName: string, level?: string) => void;
    removeSelectedSkill: (skillName: string, level?: string) => void;
    clearSelectedSkills: () => void;
}

interface GroupStore {
    minRp: number;
    groupStudent: any;
    maxRp: number | null;
    getMaxRp: (num: number) => void;
    getMinRp: (num: number) => void;
    requestState: IDefaultRequestState;
    getGroupStudent: () => Promise<void>;
    CreateGroup: () => Promise<void>;
    setGroupStudents: (data: any) => Promise<void>;
    selectedStudent: any;
    openGroupStudentpopup: boolean;
    toogleGroupStudentpopup: () => void;
}

export const useGroupStore = create<GroupStore>((set, get) => ({
    minRp: 0,
    maxRp: 0,
    groupStudent: [],
    selectedStudent: [],
    openGroupStudentpopup: false,
    requestState: DEFAULT_REQUEST_STATE,
    toogleGroupStudentpopup: () => {
        set({ openGroupStudentpopup: !get().openGroupStudentpopup });
    },

    getMaxRp: (num: number) => {
        set({ maxRp: num });
    },
    getMinRp: (num: number) => {
        set({ minRp: num });
    },
    setGroupStudents: async (data) => {

        set({ selectedStudent: data })

    },
    CreateGroup: async () => {
        set({ requestState: DEFAULT_REQUEST_LOADING });
        const { minRp, maxRp, selectedStudent } = get();
        const { selectedSkills } = useSkillStore.getState();
        const { filteredRole } = useRoleStore.getState();

        try {
            const response: any = await postRequest('api/group/create', {
                "role": filteredRole,
                "name": "Group 1",
                "skills": selectedSkills,
                "maxRp": maxRp,
                "minRp": minRp,
                "students": selectedStudent,
            });
            console.log(response);

        } catch (error) {
            const errorState = {
                ...DEFAULT_REQUEST_ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
                status: error instanceof Error && 'response' in error ? (error as any).response?.status || 0 : 0
            };

            set({ requestState: errorState });
        }
    },
    getGroupStudent: async () => {
        set({ requestState: DEFAULT_REQUEST_LOADING });
        const { minRp, maxRp } = get();
        const { selectedSkills } = useSkillStore.getState();
        const { filteredRole } = useRoleStore.getState();


        try {
            const response: any = await postRequest('api/group/group/student', {
                "role": filteredRole,
                "skills": selectedSkills,
                "maxRp": maxRp,
                "minRp": minRp
            });

            set({ groupStudent: response.data });
        } catch (error) {
            const errorState = {
                ...DEFAULT_REQUEST_ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
                status: error instanceof Error && 'response' in error ? (error as any).response?.status || 0 : 0
            };

            set({ requestState: errorState });
        }
    }
}));

export const useSkillStore = create<SkillStore>((set, get) => ({
    initial_skill: [],
    selectedSkills: [],
    requestState: DEFAULT_REQUEST_STATE,

    // Fetch skills from backend
    getSkillfromBackend: async () => {
        set({ requestState: DEFAULT_REQUEST_LOADING });

        try {
            const response: any = await getRequest('api/group/skill');
            console.log(response);

            set({
                initial_skill: response.data,
                requestState: {
                    loading: false,
                    error: false,
                    message: 'Skills fetched successfully',
                    status: response.status
                }
            });
        } catch (error) {
            const errorState = {
                ...DEFAULT_REQUEST_ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
                status: error instanceof Error && 'response' in error ? (error as any).response?.status || 0 : 0
            };

            set({ requestState: errorState });
        }
    },

    // Select a skill with optional level
    selectSkillWithLevel: (skillName: string, level?: any) => {
        const { selectedSkills } = get();
        console.log(level.id);

        // Check if the skill is already selected
        const existingSkillIndex = selectedSkills.findIndex(
            skill => skill === level.id
        );
        console.log(existingSkillIndex);

        // If not already selected, add it
        if (existingSkillIndex === -1) {
            set({
                selectedSkills: [...selectedSkills, level.id]
            });
        }
    },

    resetSkill: () => {
        set({ selectedSkills: [] });
    },

    // Remove a selected skill
    removeSelectedSkill: (level?: any) => {
        const { selectedSkills } = get();

        const updatedSelectedSkills = selectedSkills.filter(
            skill => !(skill === level)
        );

        set({ selectedSkills: updatedSelectedSkills });
    },

    // Clear all selected skills
    clearSelectedSkills: () => {
        set({ selectedSkills: [] });
    }
}));

export const useRoleStore = create<RollStore>((set, get) => ({
    filteredRole: [],
    initialRole: [],
    requestState: DEFAULT_REQUEST_STATE,

    // Select role with level
    selectRoleWithLevel: (skillName: any, level?: any) => {
        const { filteredRole } = get();

        // Check if the skill is already selected
        const existingSkillIndex = filteredRole.findIndex(
            skill => skill === skillName.id
        );
        console.log(existingSkillIndex);

        // If not already selected, add it
        if (existingSkillIndex === -1) {
            set({
                filteredRole: [...filteredRole, skillName.id]
            });
        }
    },
    removeSelectedRole: (level?: any) => {
        const { filteredRole } = get();
        console.log(level)
        const updatedSelectedSkills = filteredRole.filter(
            skill => !(skill === level)
        );

        set({ filteredRole: updatedSelectedSkills });
    },

    resetRole: () => {
        set({ filteredRole: [] });
    },

    // Fetch roles from backend
    getRolefromBackend: async () => {
        set({ requestState: DEFAULT_REQUEST_LOADING });

        try {
            const response: any = await getRequest('api/group/role');
            console.log(response);

            set({
                initialRole: response.data,
                requestState: {
                    loading: false,
                    error: false,
                    message: 'Roles fetched successfully',
                    status: response.status
                }
            });
        } catch (error) {
            const errorState = {
                ...DEFAULT_REQUEST_ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
                status: error instanceof Error && 'response' in error ? (error as any).response?.status || 0 : 0
            };

            set({ requestState: errorState });
        }
    }
}));
