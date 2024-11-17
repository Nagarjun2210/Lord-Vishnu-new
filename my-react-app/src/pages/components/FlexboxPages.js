import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/paragraph.css";
import ReactGA from "react-ga4";
import "../styles/App.css";

const FlexboxPage = (title) =>  {
    const [glossaryToggleFlag, setGlossaryToggleFlag] = useState(false);
    const [linkActive, setLinkActive] = useState(0);
    const [content, setContent] = useState([]);
    const [glosary, setGlossary] = useState([]);
    const [subTitle, setSubTitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);

    var req_title = "";
    if (title === "ஆழ்வார்கள்"){
        req_title = "Azhvargal";
    }
    else if(title === "பகவத் கீதை"){
        req_title = "Bhagavatgita";
    }
    else {
        req_title = "Dasavatharam";
    }


    const addNewContent = (index, i) => {
        console.log("addnewcontent function called, index-", index);
        console.log("glosary", glosary);
        console.log(glosary.length);
        if(index>=0 && index<glosary.length){
            console.log("addnewcontent-if condition passed");
            const newIndex = index + 1;
            fetch(api_url + req_title + "/getNewContent/" + newIndex)
            .then(res => res.json())
            .then( res => {
                setSubTitle(glosary[index]);
                setContent(res[0].content.split('\n'));
                setCurrentIndex(index);
                setLinkActive(index);
            })
        }
        if(i==="navButton"){
            handleClick("NavBtnClk", title.concat(": NavBtn clicked: ", glosary[index]));
        }
        else if(i==="glosaryLinks"){
            handleClick("GlsItmClk", title.concat(": Glosary item clicked: ", glosary[index]));
        }
    }

    const api_url = "http://localhost:5030/";
    //Page view
    useEffect(() => {ReactGA.send({
        hitType: "pageview",
        page: title,
        title: title
    }); 
    fetch(api_url + req_title + "/getGlosary")
    .then(res => res.json())
    .then(res => {
        setGlossary(res.map(item => item.title));
        
    });
    console.log(title, " page rendered");}, []);
    
    useEffect(() => addNewContent(0, ""), [glosary]);
    //Event handlers
    const handleClick = (cat, l) => {
        ReactGA.event({
            category: cat,
            action: 'Click',
            label: l,
        });
        console.log(cat);
        console.log(l);
    };

    //scroll back to top
    useEffect(() => {
        if (contentRef.current) {
        contentRef.current.scrollTop=0;
    }
    }, [currentIndex]); 

    
    const toggleMenu = () => {
        if (glossaryToggleFlag === true) {
            setGlossaryToggleFlag(false);
        }
        else {
            setGlossaryToggleFlag(true);
        }
    }
    const myElement =  (
    <div>
        <div className="marginTop"></div>
        <div className="title_container">
            <p className="menu" onClick={() => toggleMenu()}>☰</p>
            <h1 className="title">{title}</h1>
        </div>
        <div className="fcontainer">
            <div className={`items glosary ${glossaryToggleFlag ? "active" : ""}`}>
                <h3>பொருளடக்கம்</h3>
                <div className="list-group">
                    {glosary.map((item, index) => (
                        <a key={index} className={`list-group-item onHover ${index === linkActive ? "active" : ""}`} onClick={() => {addNewContent(index, "glosaryLinks"); toggleMenu();}} >{item}</a>
                    ))}
                </div>
            </div>
            <div ref={contentRef} className="items content">
                <center className="guidedMessage"><p><b>Click the ☰ to see all the contents</b></p></center>
                <div className="header">
                    <h3>{subTitle}</h3>
                    <ul className="pager onHover">
                        <li onClick={() => addNewContent(currentIndex-1, "navButton")}><a>⇦</a></li>
                        <li> பக்கம் {(currentIndex + 1) + "/" + glosary.length} </li>
                        <li onClick={() => addNewContent(currentIndex+1, "navButton")}><a>⇨</a></li>
                    </ul>
                </div>
                {content.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
                <br/>
                <ul className="pager onHover">
                    <li onClick={() => addNewContent(currentIndex-1, "navButton")}><a>⇦</a></li>
                    <li> பக்கம் {(currentIndex + 1) + "/" + glosary.length} </li>
                    <li onClick={() => addNewContent(currentIndex+1, "navButton")}><a>⇨</a></li>
                </ul>
                <p><br/></p>
            </div>
        </div>
    </div>
);
return myElement;
};

export default FlexboxPage;
