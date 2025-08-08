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
                    <p className="text-primary"> ใช้ className แทน class</p>
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
                    สถานะ : {isLoggedIn ? 'ล็อกอินแล้ว' : 'ยังไม่ได้ล็อกอิน'}
                </p>
                
                {hasNotification > 0 && (
                    <div className="notification">
                        คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}

                {(() => {
                    if (user.age >= 18){
                        return <p>{formatName(user)} เป็นผู้ใหญ่</p>
                    }
                    else {
                        return <p>{formatName(user)} ยังเป็นเด็ก</p>
                    }
                })()}

            </section>

            <section>
                <h2>display Lists</h2>
                <h3>{user.firstName} hobbies:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: "เสื้อ", price: 590, inStock: true},
                        { id: 2, name: "กางเกง", price: 1290, inStock: true},
                        { id: 3, name: "รองเท้า", price: 2790, inStock: false},
                    ].map(product => (
                        <div>
                            <span>{product.name}</span>
                            <span> -฿ {product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' มีสินค้า' : ' สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>

                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>

            </section>

            <section>
                <h2>Event Handling ใน JSX</h2>
                <input
                    type = "text"
                    placeholder = "พิมพ์อะไรก็ได้..." 
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />

                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">-- JavaScript --</option>
                    <option value="py">-- Python --</option>
                    <option value="java">-- Java --</option>
                    <option value="go">-- Go --</option>
                </select>
            </section>

            <section>
                <h2> Comment ใน JSX</h2>
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    )
}

export default JSXExample;