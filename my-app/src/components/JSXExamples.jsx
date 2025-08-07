import React from "react";

function JSXExample(){

    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'sunny';
    const age = 25;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: "Nanthawat",
        lastName: "Sittipornchaiyakhun",
        age: 21,
        hobbies: ['play a game', 'watch a movies'],
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className = "jsx-example">
            <h1>JSX Example</h1>
            <section>
                <h2>display data</h2>
                {greeting}
                <p>hi!! {name} age {age} years</p>
                <p>this is {currentYear}</p>
                <p>my name is : {formatName(user)}</p>
            </section>
            <section>
                <h2>Attributes ใน JSX</h2>
                <div className = "card">
                    <p className="text-primary"> use className instead of class</p>
                </div>
                <button
                    onClick={() => alert('Button Clicked')}
                    onMouseEnter={() => console.log('Mouse Entered!')}
                >
                    Hover me or Click me!
                </button>
            </section>

            <div style={{
                backgroundColor: '#E8F5E8',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '10px'
            }}>
                <p style={{ color: '#2D4A2B', fontWeight: 'bold'}}>
                    Inline styles ใช้ object
                </p>    
            </div>
            
            <section>
                <h2>Conditional Rendering</h2>
                <p>
                </p>
            </section>

        </div>
    )
}

export default JSXExample;