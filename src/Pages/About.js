import { useNavigate  } from "react-router-dom";
export const About=()=> {
    const Navigate =useNavigate();
    const onHomePageButtonClick=()=>{
        Navigate("/");
    };
    return (<>

       <p> AboutPage</p>
       <button onClick={onHomePageButtonClick}>Navigate to HomePage </button>
    </>);
};   