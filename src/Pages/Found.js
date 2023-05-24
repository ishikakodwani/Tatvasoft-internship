import { useNavigate  } from "react-router-dom";
export const NotFound=()=> {
    const Navigate =useNavigate();
    const onHomePageButtonClick=()=>{
        Navigate("/");
    };
    const onAboutPageButtonClick=()=>{
        Navigate("/about");
    };
    return (<>

       <p> Not Found</p>
       <button onClick={onHomePageButtonClick}>Navigate to HomePage </button><br></br >
       <button onClick={onAboutPageButtonClick}>Navigate to AboutPage </button>
    </>);
};  