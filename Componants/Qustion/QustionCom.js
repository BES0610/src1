import { useContext, useEffect, useState } from "react";
import "./Qustion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button"
import {TestContext} from "../../App";

function QustionCom() {

    let style = {
        display: "none"
    };


let CardBackGround = document.getElementsByClassName('card-Click');
let TextCol = document.getElementsByClassName('Col-Mark');


    let backGroundFun = () => {
        for (let btn of CardBackGround) {
            btn.addEventListener('click', () => { 
                for (let other of CardBackGround) {
                    if (other === btn) {
                        other.classList.add("active");
                    }else{
                        other.classList.remove("active");
                    }
                }
            });
        }
    }
    

    let lableColFun = () => {
        for (let btn of TextCol) {
            btn.addEventListener('click', () => {
                for (let other of TextCol) {
                    if(other === btn) {
                        other.classList.add("Col-Lable");
                    }else{
                        other.classList.remove("Col-Lable");
                    }
                }
            });
        }
    }


    let RemoveBackGround = () => {
            for(let i of CardBackGround) {
                i.classList.remove("active");
            }
            for(let i of TextCol) {
                i.classList.remove("Col-Lable");
            }
    }

        


let [isclckedLeft, setisclckedLeft] = useState(false);
let [isclckedRight, setisclckedRight] = useState(false);
let [finlequstion, setfinlequstion] = useState(false);

let [currentQustion, setcurrentQustion] = useState(0);

    const  questionsLeft = [
        {
        id: 1,
        text: "What is the capital of America?",
        options: [
            { id: 1, text: "Answer 1  left", isCorrect: false },
        ],
    },
    {
            id: 2,
            text: "What year was the Constitution of America written?",
            options: [
                { id: 2, text: "Answer 2  left", isCorrect: true },
            ],
        },
        {
            text: "Who was the second president of the US?",
            options: [
                { id: 3, text: "Answer 3  left", isCorrect: true },
            ],
        },
        {
            id: 4,
            text: "What is the largest state in the US?",
            options: [
                { id: 4, text: "Answer 4 left", isCorrect: false },
            ],
        },
        {
            id: 5,
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 5, text: "Answer 5 left", isCorrect: false },
          ],
        },
    ];


const  questionsRight = [
    {
    id: 1,
    text: "What is the capital of America?",
    options: [
        { id: 6, text: "Answer 1  Right", isCorrect: false },
    ],
},
{
        id: 2,
        text: "What year was the Constitution of America written?",
        options: [
            { id: 7, text: "Answer 2  Right", isCorrect: true },
        ],
    },
    {
        text: "Who was the second president of the US?",
        options: [
            { id: 8, text: "Answer 3  Right", isCorrect: true },
        ],
    },
    {
        id: 4,
        text: "What is the largest state in the US?",
        options: [
            { id: 9, text: "Answer 4 Right", isCorrect: false },
        ],
    },
    {
        id: 5,
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 10, text: "Answer 5 Right", isCorrect: false },
    ],
},
];
    

let clcked = (cli) => {
    if(currentQustion + 1 <  questionsLeft.length || currentQustion + 1 <  questionsRight.length) {
        setcurrentQustion(currentQustion + 1);
    }else{
        setfinlequstion(true);
    }
}

let isclickLeftFun = () => {
    setisclckedLeft(true);
}
let isclickRightFun = () => {
    setisclckedRight(true);
}


        let {HandlingFun, sendDataToDatabase, generatePDF, testFun} = useContext(TestContext);


    return (
        <>
<button onClick={HandlingFun}>Click me to handle PDFs</button>
                    {/* <button onClick={() => toPDF()}>Download PDF</button> */}
                    {/* <h1 className={test ? "yallo": "blue"}>Basle </h1> */}
            {finlequstion ? 
            <>
                <div>
                <h1>Thanks For you</h1>
                <h3>Your Answer Was Sended And You Will Receve Mail Soon</h3>
                <Link to={"/Individual"}><Button Text="DashBord">Dashbord</Button></Link>
                </div>
            </>
            : 

            <>
                    <div class="container">
            <div class="banner text w-100">

                <img class=" pb-5" src="https://twindix.com/wp-content/uploads/2023/08/Logo-w.png" alt="ss" />
                <div class="progress d-block" id="prog-bar">
                    <div id="progress-done"></div>
                </div>
            </div>
        </div>



        <div class="container">
        <p class="question-text text-center mt-5 pt-3"> Choose The  Correct phrase</p>

<form id="quiz-form" method="post" action="{{ route('store-answer') }}" class=" mt-4" autocomplete="off">
    <input type="hidden" id="question-index-input" name="question_index" value="{{ $current_C['q_num'] }}"/>
    <input type="hidden" id="user-choice" name="user_choice[]" value="" />
    <div id="options-container" class="  Resbosive-Box card-deck d-flex  align-items-center ">


        <div class="card option-card w-100 card-Click" 
        onClick={() => {
            backGroundFun()
            lableColFun()
            isclickLeftFun()
        }
            } >

            <div class="card-body w-100" >
                    <input class="form-check-input  text-center" type="hidden" name="answer" id="option_r"
                        value="{{ $current_C['q_num'] . '/' . $current_C['is_correct'] }}" autocomplete="off" required />
                <label  class="  Col-Mark form-check-label w-100 text-center" for="option_r{{ $questionIndex }}" >
                { questionsLeft[currentQustion].options.map((options) => {
                        return (<span key={options.id} id={options.id} Class="TextPos" for="option_r{{ $questionIndex }}" > {options.text} </span>)
                })}
                </label>
            </div>
        </div>

        <div class="card option-card w-100 card-Click"
                onClick={() => {
                    backGroundFun()
                    lableColFun()
                    isclickRightFun()
                }
            }
        >
            <div class="card-body w-100" >
                    <input class="form-check-input  text-center" type="hidden" name="answer" id="option_r"
                        value="{{ $current_C['q_num'] . '/' . $current_C['is_correct'] }}" autocomplete="off" required />
                <label  class="  Col-Mark form-check-label w-100 text-center" for="option_r{{ $questionIndex }}">
                { questionsRight[currentQustion].options.map((options) => {
                    return (<span key={options.id}id={options.id} Class="TextPos" for="option_r{{ $questionIndex }}"> {options.text} </span>)
                })}
                </label>
            </div>
        </div>

    </div>
    <div class="button-container d-flex justify-content-center  mt-4">

                {isclckedLeft || isclckedRight ? 
                <>
            <button type="button" id="next-button" class=" Back-Btn btn btn-primary py-3 button" onClick={() =>  {
            RemoveBackGround()
            clcked()       
            }} >Next</button>
                </>
                :  
            <button type="button" id="next-button" class=" Back-Btn btn btn-primary py-3 button" onClick={() =>  {
                alert("Please Choose Option")
                    }} >Next</button>
                }
        <button type="submit" id="finish-button" class="btn btn-primary py-3 button"
            style={style}>Send
        </button>
    </div>
</form>
        </div>
            </>
            }
        </>
    )
}

export default QustionCom