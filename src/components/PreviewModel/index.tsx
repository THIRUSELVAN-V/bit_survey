import React from 'react';
import { TextAreaComp } from '../textArea';
import { PreviewQuestions } from '../previewQuestions';
import { ButtonComponent } from '../button';

type Questions = {
    id: number;
    question: string;
    options: string[];
};

export const PreviewModel = () => {
    const [textAreaInput, setTextAreaInput] = React.useState<string>('');
    const [previewData, setPreviewData] = React.useState<Questions[]>([]);

    const handleTextAreaChange = (value: string) => {
        setTextAreaInput(value);

        // Check if the input ends with two newline characters
        if (value.endsWith('\n\n')) {
            const parsedQuestions = parseQuestions(value);
            if (parsedQuestions.length > 0) {
                setPreviewData((prev) => [...prev, ...parsedQuestions]);
                setTextAreaInput(''); // Clear the textarea after adding questions
            }
        }
    };

    const parseQuestions = (input: string): Questions[] => {
        const questions: Questions[] = [];
        const blocks = input.split('\n\n');

        blocks.forEach((block, index) => {
            const lines = block.split('\n').filter((line) => line.trim() !== '');

            if (lines.length > 0) {
                const question = lines[0];
                if (question) {
                    const options = lines.slice(1);
                    questions.push({
                        id: previewData.length + index + 1,
                        question: question,
                        options: options,
                    });
                }
            }
        });

        return questions;
    };

    const handleAddQuestions = () => {
        console.log('Preview Data:', previewData); // Log all preview data to the console
    };

    return (
        <div className='flex flex-row h-[595px] rounded-lg border-2'>
            {/* Left Section */}
            <div className='w-[55%] h-full px-4 py-2 bg-[#f4f5f5] border-r-2'>
                <p className='font-semibold pt-2'>Import Questions</p>
                <TextAreaComp
                    className='my-7 border-1'
                    placeholder='Add each question and answer choice on its own line. Press
enter on your keyboard twice to separate each question.

For Example:

What is your favorite color?
Blue
Orange
Green


What is your favorite shape?
Circle
Triangle
Square
Hexagon'
                    value={textAreaInput}
                    onChange={handleTextAreaChange}
                />
            </div>

            {/* Right Section */}
            <div className='w-[45%] flex flex-col h-full'>
                {/* Preview Content (Scrollable) */}
                <div className='px-4 py-2'>
                    <p className='font-medium text-[#777777] pt-2 pb-3'>Preview</p>
                </div>
                <div className='px-4 flex-1 overflow-y-auto scrollbar-hide'>
                    <div>
                        {previewData.map((previewQuestion) => (
                            <PreviewQuestions
                                key={previewQuestion.id}
                                question={previewQuestion.question}
                                options={previewQuestion.options}
                            />
                        ))}
                    </div>
                </div>

                {/* Button Footer */}
                <div className='px-4 py-2'>
                    <ButtonComponent
                        isIcon={false}
                        bgColor="bg-primary"
                        buttonText="Add Questions"
                        textClassName="text-background text-base"
                        baseClassName="border-none rounded-xl w-full"
                        handleOnClick={handleAddQuestions}
                    />
                </div>
            </div>
        </div>
    );
};