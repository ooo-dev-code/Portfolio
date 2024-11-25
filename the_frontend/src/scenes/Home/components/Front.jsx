import React from 'react'

function Front() {
    return (
        <div>
            <div className='Page'>
                <div className="LeftPage">
                    <div className='TextStyle'>
                        <h1 style={{ fontSize: "5rem"}}>
                            My Portfolio
                        </h1>
                        <h3>
                            A Portfolio to show you all my works
                        </h3>
                        <p style={{ width: 400}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis aliquid porro tempore, earum deserunt. Necessitatibus itaque laborum voluptas atque at, laboriosam aperiam voluptates. Neque nisi blanditiis voluptates cumque aspernatur.</p>
                    </div>
                </div>
                <div className="RightPage">
                    <div className="A">
                        <div className="OpR">Name: -----------</div>
                        <div className="OpR">Surname: ---------</div>
                        <div className="OpR">Job: ---------</div>
                        <div className="OpR">Company: ---------</div>
                        <div className="OpR">Experience: ---------</div>
                    </div>
                    

                    <div className="B">
                        <div className="OpR2">Personnality: -----------</div>
                        <div className="OpR2">Principal Programming Language: ---------</div>
                        <div className="OpR2">Languages: ---------</div>
                        <div className="OpR2">Degrees: ---------</div>
                        <div className="OpR2">Others: ---------</div>
                    </div>
                </div>
            </div>
            <button className='BtnFront'>
                Start
            </button>
        </div>
    )
}

export default Front
