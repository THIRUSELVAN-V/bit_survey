import { create } from "zustand";
import { DEFAULT_REQUEST_LOADING, DEFAULT_REQUEST_STATE } from "../util/constant";
import {
  IDefaultRequestState
} from '../util/types';
import { getRequest, postRequest } from "../util/axios";
import { API } from "../util/endpoint";
type QuestionType = { id: number; label: string };

interface QuestionStore {
  question: string;
  setQuestion: (value: string) => void;

  selectedQuestionType: Set<string>;
  setSelectedQuestionType: (value: Set<string>) => void;

  selectedScale: Set<string>;
  setSelectedScale: (value: Set<string>) => void;

  selectedPreDefinedOptions: Set<string>;
  setSelectedPreDefinedOptions: (value: Set<string>) => void;
  
  isPreDefinedOptions: boolean;
  setIsPreDefinedOptions: (value: boolean) => void;

  options:{id:number,option:string}[]
  setOptions:(options:{id:number,option:string}[]) =>void
  
  isScore: boolean,
  setIsScore:(val:boolean)=>void;
  
  isOther: boolean,
  setIsOther:(val:boolean)=>void;

  scale: QuestionType[];
  predefinedOptions: QuestionType[];
  questionTypes: QuestionType[];
  requestState:IDefaultRequestState;

  getPredefinedOptions: () => Promise<void>
  getQuestionTypes: () => Promise<void>

  createQuestion: () => Promise<void>;
}

export const useQuestionStore = create<QuestionStore>((set,get) => ({
  question: "",
  setQuestion: (value) => set({ question: value }),

  selectedQuestionType: new Set(),
  setSelectedQuestionType: (value) => set({ selectedQuestionType: value }),

  selectedScale: new Set(),
  setSelectedScale: (value) => set({selectedScale: value}),

  selectedPreDefinedOptions: new Set(),
  setSelectedPreDefinedOptions: (value) => set({selectedPreDefinedOptions: value}),

  isPreDefinedOptions: false,
  setIsPreDefinedOptions: (value) => set({ isPreDefinedOptions: value }),

  options:[
    {id:1,option:""},
    {id:2,option:""},
    {id:3,option:""},
  ],
  setOptions:(options)=>set({options}),

  isScore: false,
  setIsScore:(val)=>set({isScore:val}),

  isOther: false,
  setIsOther:(val)=>set({isOther:val}),

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
      console.log(response);
      set({
        predefinedOptions: response.data.map((item:any) => ({
          id: item.id,
          label: item.type
      })),
          
        requestState: {
            loading: false,
            error: false,
            message: 'predefinedOptions fetched successfully',
            status: response.status
        }
    });
      
    }catch(err){
      console.log(err);
    }
  },
  
  getQuestionTypes: async ()=>{
    set({ requestState: DEFAULT_REQUEST_LOADING });
    try{
      const response:any = await getRequest(API?.QuestionTypes);
      console.log(response);
      set({
        questionTypes:response.data.map((item:any)=>({
          id:item.id,
          label:item.name,
        }))
      })
      

    }catch(err){
      console.log(err);
      
    }
  },

  createQuestion: async ()=>{
    const{
      question,
      selectedQuestionType,
      selectedScale,
      selectedPreDefinedOptions,
      isPreDefinedOptions,
      isScore,
      options,
      isOther,
    }=get()
    const formattedOptions = options.map(option => ({
      name: option.option  // take `option` value and map to `name`
    }));
    console.log("All",question,
      Array.from(selectedQuestionType)[0],
      Array.from(selectedScale)[0],
      Array.from(selectedPreDefinedOptions)[0],
      isPreDefinedOptions,
      isScore,
      formattedOptions,
      isOther,);
      
    
    set({ requestState: DEFAULT_REQUEST_LOADING });
    try{
      const response:any = await postRequest("api/survey/createquestion",
        {
          "questionTypeId": parseInt(Array.from(selectedQuestionType)[0]),
          "surveyId": 1,
          "question": question,
          "optionTypeId": 1,
          "isOther": isOther,
          "isActive": true,
          "isMultiple": false,
          "optionsType": "def",
          "options": formattedOptions
        
        })
      console.log(response);
      
    }catch(err){
      console.log("err:",err);
      
    }
  }

  

  


}));
