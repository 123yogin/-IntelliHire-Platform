import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, X } from 'lucide-react';

const ExamResults: React.FC = () => {
  const { latestExamResult } = useApp();

  if (!latestExamResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No exam result available.</p>
      </div>
    );
  }

  const { questions, answers, score, totalMarks, percentage, status } = latestExamResult;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exam Results</h1>
          <p className="text-gray-600 mb-6">Here's a detailed breakdown of your performance.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-blue-700">Score</p>
              <p className="text-2xl font-bold text-blue-900">{score}/{totalMarks}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-green-700">Percentage</p>
              <p className="text-2xl font-bold text-green-900">{percentage.toFixed(2)}%</p>
            </div>
            <div className={`p-4 rounded-lg ${status === 'pass' ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className={`text-sm font-medium ${status === 'pass' ? 'text-green-700' : 'text-red-700'}`}>Status</p>
              <p className={`text-2xl font-bold capitalize ${status === 'pass' ? 'text-green-900' : 'text-red-900'}`}>{status}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Answer Review</h2>
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = q.correctAnswer !== undefined && userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className="p-4 border rounded-lg">
                  <p className="font-medium text-gray-800 mb-3">{index + 1}. {q.question}</p>
                  
                  {q.type === 'mcq' && q.options && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">Your answer: 
                        <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {userAnswer !== undefined ? ` ${q.options[userAnswer]}` : ' Not Answered'}
                        </span>
                      </p>
                      {!isCorrect && q.correctAnswer !== undefined && (
                        <p className="text-sm text-green-700">Correct answer: 
                          <span className="font-semibold"> {q.options[q.correctAnswer as number]}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {q.type === 'subjective' && (
                     <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">Your answer: 
                        <span className="italic">"{userAnswer || 'Not Answered'}"</span>
                      </p>
                  )}
                  
                  <div className="mt-3 flex items-center">
                    {isCorrect ? (
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-2" />
                    )}
                    <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {latestExamResult.violations.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Violations Recorded</h2>
              <div className="space-y-4">
                {latestExamResult.violations.map((v) => (
                  <div key={v.id} className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">{v.description}</p>
                      <p className="text-xs text-red-600">{new Date(v.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamResults; 