
const ModelData = require("./mock.json");

const startNewExam = async (req, res) => {

  try {
    // const { userId ,examId } = req.body
    const { type } = req.params

    if(type === "topic") {
      return res.status(200).json({ ...ModelData});
    }
    if(type === "random") {
      return res.status(200).json({ data:[], statusCode: 200 });
    }
  
  } catch (error) {
    console.log("err:", error);
  }
};

const getUserExamProgress = async (req, res) => {

  const data= {
      "meta": {
        "code": 200000,
        "type": "SUCCESS",
        "message": "Get review success",
        "service": "dtts",
        "extraMeta": null
      },
      "data": {
        "sessionId": 1,
        "examId": 2,
        "type": "topic",
        "createdAt": "2023-08-31 22:24:11",
        "endAt": "2023-09-02 22:24:11",
        "status": "inprogress",
        "reviews": [
          {
            "questionId": "4",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": true,
            "isCorrect": true
          },
          {
            "questionId": "5",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": false,
            "isCorrect": true
          },
          {
            "questionId": "6",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": false,
            "isCorrect": false
          },
          {
            "questionId": "7",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": false,
            "isCorrect": true
          },
          {
            "questionId": "8",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": true,
            "isCorrect": true
          },
          {
            "questionId": "9",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": true,
            "isCorrect": true
          },
          {
            "questionId": "10",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": true,
            "isCorrect": true
          },
          {
            "questionId": "11",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": false,
            "isCorrect": false
          },
          {
            "questionId": "12",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": false,
            "isCorrect": true
          },
          {
            "questionId": "13",
            "questionContent": [
              {
                "content": "Bạn nên làm gì trước khi quay đầu xe",
                "language": "vi"
              },
              {
                "content": "Check the sign to see if U-turns are allowed",
                "language": "en"
              }
            ],
            "bookmark": true,
            "isCorrect": true
          }
        ]
      }
    
  }
  try {
  
      return res.status(200).json({...data});
   
  } catch (error) {
    console.log("err:", error);
  }
};

const answersExam = async (req, res) => {
  try {
    const dataResponse = {
      "meta": {
          "code": 200000,
          "type": "SUCCESS",
          "message": "Answer question successfully",
          "serviceId": "dtts",
          "extraMeta": null 
      },
      "data": {
          "answerId": "9",
          "questionId": "1",
          "sessionId": "21",
          "isBookmark": true,
          "answered": [1,2]
      }
  }
  
    const { sessionId ,questionId, optionIds } = req.body

    return res.status(200).json({ data: [], statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};



module.exports = {
  startNewExam,
  answersExam,
  getUserExamProgress
};
