export interface IQuiz{
    _id:String,
    InstituteID:string,
    SubjectId:string,
    QuizName:string,
    Questions:[
        {
            _id:string,
            Question:string,
            Answers:[String],
            CorrectAnswer:Number
        }
    ]
}