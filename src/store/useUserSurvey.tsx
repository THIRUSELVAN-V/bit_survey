import React from 'react'
import { create } from 'zustand';
import { getRequest } from '../util/axios';

interface UserQuestion {
  questions: any[];
  fetchAllQuestions: () => Promise<void>
}



export const useUserSurvey = create<UserQuestion>((set) => ({
  questions: [],



  fetchAllQuestions: async () => {
    try {
      const response: any = await getRequest("api/survey/get/1");
      console.log(response,"res");
      
      set({ questions: response.data.surveyQuestions || [] });
    } catch (err) {
      console.error("Error in fetching :", err);
    }
  }
}))
