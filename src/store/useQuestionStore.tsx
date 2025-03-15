import { create } from "zustand";
import { DEFAULT_REQUEST_LOADING, DEFAULT_REQUEST_STATE } from "../util/constant";
import {
  IDefaultRequestState
} from '../util/types';
import { getRequest, postRequest } from "../util/axios";
import { API } from "../util/endpoint";
type QuestionType = { id: number; label: string };

export interface Question {
  index: number;
  question: string;
  questionTypeId: number | null;
  preDefinedOptionsId: number | null;
  scaleId: number | null;
  isPreDefinedOptions: boolean;
  isScore: boolean;
  isOther: boolean;
  options: { id: number; option: string }[];
}
interface QuestionStore {

  survey:any;
  questions: any[];
  currentQuestions: Question[]; 
  setCurrentQuestionField: (index:number,field: keyof Question, value: any) => void;
  setCurrentQuestionsFromPreview: (previewData:{id:number,question:string,options:{id:number,option:string}[]}[]) => void;
  // addQuestion: () => Promise<void>;
  fetchAllQuestions: (surveyId:number) => Promise<void>;
  deleteOuestion: (surveyId:number,questionId:number) => Promise<void>;


  addNewQuestion: () => void;
  submitAllQuestions: () => Promise<void>;


 
  

  scale: QuestionType[];
  predefinedOptions: QuestionType[];
  questionTypes: QuestionType[];
  requestState:IDefaultRequestState;

  getPredefinedOptions: () => Promise<void>
  getQuestionTypes: () => Promise<void>
  createSurvey: (name:string) => Promise<any>

}
export const defaultQuestion = {
  index: 0,
  question: "",
  questionTypeId: null,
  scaleId: null,
  preDefinedOptionsId: null,
  isPreDefinedOptions: false,
  isScore: false,
  isOther: false,
  options: [
    { id: 1, option: "" },
    { id: 2, option: "" },
    { id: 3, option: "" },
  ],
};

export const useQuestionStore = create<QuestionStore>((set,get) => ({

  survey:{},
  questions: [], 
  currentQuestions: [
    {
      index: 0,
      question: "",
      questionTypeId: null,
      scaleId: null,
      preDefinedOptionsId: null,
      isPreDefinedOptions: false,
      isScore: false,
      isOther: false,
      options: [
        { id: 1, option: "" },
        { id: 2, option: "" },
        { id: 3, option: "" },
      ],
    },
  ],
  setCurrentQuestionField: (index, field, value) => {
    set((state) => {
      const updatedQuestions = [...state.currentQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
      return { currentQuestions: updatedQuestions };
    });
  },
  setCurrentQuestionsFromPreview: (previewData) => {
    set({
      currentQuestions: previewData.map(({question, options }, index) => ({
        index,
        question,
        questionTypeId: 1,
        scaleId: null,
        preDefinedOptionsId: null,
        isPreDefinedOptions: false,
        isScore: false,
        isOther: false,
        options: options.map(({ id, option }) => ({ id, option })),
      })),
    });
  },
  addNewQuestion: () => {
    
    set((state) => ({
      currentQuestions: [...state.currentQuestions, { ...defaultQuestion, index: state.currentQuestions.length }],
    }));
  },
  
  submitAllQuestions: async () => {
    const { currentQuestions, fetchAllQuestions,survey } = get();

    const questionPayloads = currentQuestions.map((question) => ({
      questionTypeId: Number(question.questionTypeId),
      surveyId: survey.id,
      question: question.question,
      optionTypeId: 1,
      isOther: question.isOther,
      isActive: true,
      isMultiple: false,
      optionsType: "def",
      options: question.options.map((opt) => ({ name: opt.option })),
    }));
    // console.log("questionPayloads",questionPayloads);

    try {
      for (const payload of questionPayloads) {
        await postRequest("api/survey/createquestion", payload);
    }
      console.log("All questions added successfully!");

      // Fetch all questions again after adding
      fetchAllQuestions(survey?.id);

      // Reset state after submission
      set({ currentQuestions: [{ ...defaultQuestion }] });
    } catch (err) {
      console.error("Error adding questions:", err);
    }
  },





  // addQuestion: async () => {
  //   const { currentQuestion, fetchAllQuestions } = get();
    
  //   // Format the question data
  //   const formattedOptions = currentQuestion.options.map((opt) => ({
  //     name: opt.option,
  //   }));

  //   const questionPayload = {
  //     questionTypeId: Number(currentQuestion.questionTypeId),
  //     surveyId: 1,
  //     question: currentQuestion.question,
  //     optionTypeId: 1,
  //     isOther: currentQuestion.isOther,
  //     isActive: true,
  //     isMultiple: false,
  //     optionsType: "def",
  //     options: formattedOptions,
  //   };

  //   try {
  //     await postRequest("api/survey/createquestion", questionPayload);
  //     console.log("Question added successfully!");

  //     // Fetch all questions again after adding a new one
  //     fetchAllQuestions();

  //     // Reset current question for the next entry
  //     set({
  //       currentQuestion: {
  //         index: get().questions.length, // Increment question index
  //         question: "",
  //         questionTypeId: null,
  //         scaleId: null,
  //         preDefinedOptionsId: null,
  //         isPreDefinedOptions: false,
  //         isScore: false,
  //         isOther: false,
  //         options: [
  //           { id: 1, option: "" },
  //           { id: 2, option: "" },
  //           { id: 3, option: "" },
  //         ],
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Error adding question:", err);
  //   }
  // },
  fetchAllQuestions: async (surveyId) => {
    try {
      const response: any = await getRequest(`api/survey/get/${surveyId}`);
      set({ questions: response.data.surveyQuestions || [], survey: response.data });
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  },
  deleteOuestion: async (surveyId,questionId) => {
    const {fetchAllQuestions,survey} = get()
    try{
      const response = await postRequest("/api/survey/deletequestion",{surveyId:surveyId,questionId:questionId})
      // console.log(response);
      await fetchAllQuestions(survey?.id)
      
    }catch(err){
      console.log(err);
      
    }

  },
  createSurvey: async (name)=>{
    const {fetchAllQuestions} = get()
    try{
      const response:any = await postRequest("/api/survey/create",{name:name})
      await fetchAllQuestions(response?.data?.id)
      return response?.data?.id
      
    }catch(err){
      console.log(err);
      
    }
  },

  requestState: DEFAULT_REQUEST_STATE,
  scale: [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
  ],
  predefinedOptions: [
    { id: 1, label: "Agree - Disagree" },
    { id: 2, label: "True or False" },
  ],
  questionTypes: [
    { id: 1, label: "Single choice" },
    { id: 2, label: "Multiple choice" },
    { id: 3, label: "Matrix Type" },
  ],
  getPredefinedOptions:async () => {
    set({ requestState: DEFAULT_REQUEST_LOADING });
    try{
      const response: any = await getRequest(API?.PredefinedOptiond);
      // console.log(response);
      set({
        predefinedOptions: response.data.map(({ id, type }:{id:number; type:string}) => ({ id, label: type })),
        requestState: { loading: false, error: false, message: "Fetched successfully", status: response.status },
      });
      
    }catch(err){
      console.log(err);
    }
  },
  
  getQuestionTypes: async ()=>{
    set({ requestState: DEFAULT_REQUEST_LOADING });
    try{
      const response:any = await getRequest(API?.QuestionTypes);
      // console.log(response);
      set({
        questionTypes: response.data.map(({ id, name }:{id:number; name:string}) => ({ id, label: name })),
        requestState: { loading: false, error: false, message: "Fetched successfully", status: response.status },
      });
      

    }catch(err){
      console.log(err);
      
    }
  },

}));
