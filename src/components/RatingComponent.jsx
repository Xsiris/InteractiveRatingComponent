import React from 'react'
import starIcon from '../img/icon-star.svg'
import RatingButtonComponent from './RatingButtonComponent'
import {useState} from 'react'
import thankyouGraphics from '../img/illustration-thank-you.svg'
import { ToastContainer, toast } from 'react-toastify';


const RatingComponent = () => {
    const [prevClickedRating, setPrevClickedRating] = useState("");

    function clickEventHandler(e){
        if(prevClickedRating != "" && prevClickedRating != e.target){
            prevClickedRating.classList.remove("bg-white");
            prevClickedRating.classList.remove("hover:bg-white");
            prevClickedRating.classList.remove("text-ratingVeryDarkBlue");
        }
        console.log(e.target);
        e.target.classList.toggle("bg-white");
        e.target.classList.toggle("hover:bg-white");
        e.target.classList.toggle("text-ratingVeryDarkBlue");
        setPrevClickedRating(e.target);
    }

    function handleSubmit(e){
        if(checkIsActive()){
            console.log("Submit Clicked: " + prevClickedRating.textContent);
            const ratingCard = document.getElementById('ratingCard');
            const thankyouCard = document.getElementById('thank-you');
            ratingCard.classList.add("hidden");
            thankyouCard.classList.remove("hidden");
            toast.success("Rating submitted successfully!");
        }
    }

    function checkIsActive(){
        if(prevClickedRating.classList != undefined && prevClickedRating.classList.contains("bg-white")){
            return true;
        }else{
            console.log("Please select a rating!");
            return false;
        }
    }

  return (
    <div className="h-full flex flex-col items-center justify-center">
        <div id="ratingCard" className="flex flex-col max-w-sm p-6 rounded-3xl bg-ratingDarkBlue">
            <div className="flex">
                <div className="p-4 bg-rating rounded-full self-start bg-ratingCustomBlue">
                    <img className="w-5" src={starIcon} alt="Star Icon" />
                </div>
            </div>
            <div>
                <h1 className="text-white py-5 text-3xl font-Overpass">How did we do?</h1>
                <p className="text-ratingLightGrey text-lg font-Overpass mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div>
                <ul className="flex justify-between text-ratingLightGrey mb-6">
                    <RatingButtonComponent onClickHandler={clickEventHandler} number="1" />
                    <RatingButtonComponent onClickHandler={clickEventHandler} number="2" />
                    <RatingButtonComponent onClickHandler={clickEventHandler} number="3" />
                    <RatingButtonComponent onClickHandler={clickEventHandler} number="4" />
                    <RatingButtonComponent onClickHandler={clickEventHandler} number="5" />
                </ul>
                <div onClick={handleSubmit} className="flex w-full items-center justify-center py-3 bg-ratingOrange rounded-3xl text-ratingVeryDarkBlue font-semibold tracking-wider hover:cursor-pointer hover:bg-white">
                    <button className="select-none">Submit</button>
                </div>
            </div>
        </div>
        <div>
            <div id="thank-you" className="hidden flex flex-col items-center justify-center max-w-sm px-6 py-9 rounded-3xl bg-ratingDarkBlue">
                <div className='py-2 mb-4'>
                    <img src={thankyouGraphics} alt="Thank-You" />
                </div>
                <p className="text-ratingOrange mb-4">
                    <div className="py-2 px-4 bg-ratingCustomBlue rounded-3xl mb-3">You selected {prevClickedRating.textContent} out of 5</div>
                </p>
                <div className="text-center">
                <h1 className="text-white mb-3 text-2xl font-Overpass"> Thank you!</h1>
                    <p className="text-ratingLightGrey text-lg font-Overpass">
                        We appreacite you taking the time to give a rating. Dont hesitate to get in touch!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RatingComponent
