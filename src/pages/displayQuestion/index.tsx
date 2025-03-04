import React from 'react';
import { OptionsBox, QuestionDisplay } from '../../components';
import { questionData } from '../../pages/displayQuestion/utils';

export const DisplayQuestion = () => {
    // Set the question type manually (e.g., 'multi-choice' or 'single-choice')
    const questionType: 'single-choice' | 'multi-choice' = 'multi-choice';

    // Filter questions that match the current questionType
    const filteredQuestions = questionData.filter((q) => q.type === questionType);


    const OptionsData = [
        "Require an answer to this question",
        "Shuffle answers for each respondent (does not apply to 'Other' or 'None of the Above' answer choices)",
        "Shuffle questions for each respondent ",
        "Skip based on responent’s answer"
    ]

    return (
        <div className="bg-background min-h-full rounded-md p-4 flex flex-col">
            {filteredQuestions.length > 0 ? (
                // Render all questions of the specified type
                filteredQuestions.map((question,index) => (
                    <QuestionDisplay
                        key={question.id}
                        id={question.id}
                        question={question.question}
                        options={question.options}
                        questionType={question.type as 'single-choice' | 'multi-choice'}
                        index={index}
                    />
                ))
            ) : (
                // Display a message if no questions match the type
                <p className="text-content2-100">No questions of type "{questionType}" found.</p>
            )}

            
            <OptionsBox
            options={OptionsData}
            className=""/>
        </div>
    );
};