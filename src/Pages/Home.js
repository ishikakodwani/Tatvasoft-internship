export const Home=()=> {
    const ButtonClick=()=>{
     alert("Button Clicked");
        };
    return (<>
       <p> HomePage</p>
       <button onClick={ButtonClick}>ClickMe!</button>
    </>);
};