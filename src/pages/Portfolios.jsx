import React from 'react';
import "./Portfolios.css";


const valueProgress = [
    { 'name': 'progress__flask', 'title': 'Flask', 'value': '90%' },
    { 'name': 'progress__reactjs', 'title': 'ReactJs', 'value': '70%' },
    { 'name': 'progress__reactnative', 'title': 'ReactNative', 'value': '70%' },
]

function Portfolios() {
    return (
        <div className="wrapper">
            <div className="wrapper__left">
                <div className="img">
                    <img src="https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/36654393_2576644755694480_7366002752410877952_n.jpg?_nc_c at=100&ccb=2&_nc_sid=174925&_nc_eui2=AeHpaoSDVMmrMIbHSAHIzxSjkQgFTsflvBqRCAVOx-W8Gjd8I4qhI5e7esEqMdNbUQ4WqkrOcB-C2aH8h4KHYWcl&_nc_ohc=MsYukagXHyYAX-7mmBo&_nc_ht=scontent.fcgk8-1.fna&oh=9ebd00fb5ebed7a2ba749a3593b1424f&oe=5FEA94C9" alt="this-i-am" />
                </div>
                <div className="who__am__i">
                    <div className="my">
                        <h1>Teguh Atmayudha</h1>
                        <h2>Web Developer</h2>
                    </div>
                    <div className="link">
                        <a href="https://github.com/teguhatma" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/teguh-atmayudha-597a66176/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="wrapper__right">
                <h1>Skills</h1>
                {valueProgress.map((value) => (
                    <>
                        <h4>{value.title}</h4>
                        <div className="progress">
                            <div className={value.name} style={{ width: value.value }}></div>
                        </div>
                    </>
                ))}

                <h1 style={{ marginTop: '20px' }}>About Me</h1>
                <p>I am an informatics graduate who is very enthusiastic about python and javascript. Working hard and being disciplined is my principle and having fun is also part of me. So working hard and having fun is part of it. As a bonus, I am also a chess player so I am also a hard thinker. thank you</p>
            </div>
        </div>
    )
}

export default Portfolios
