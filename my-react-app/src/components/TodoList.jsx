import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'เรียน React พื้นฐาน', completed: true, day: 'จันทร์' },
        { id: 2, text: 'อ่าน midterm AI', completed: true, day: 'อังคาร' },
        { id: 3, text: 'ทำงาน Project DST', completed: false, day: 'พุธ' },
        { id: 4, text: 'อ่านสอบ midterm Backend', completed: false, day: 'พฤหัสบดี' },
        { id: 5, text: 'Weight Training', completed: false, day: 'ศุกร์' },
        { id: 6, text: 'Weight Training', completed: true, day: 'จันทร์' },
    ];

    const days = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"];

    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ</h3>

            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>

            {/* Group by Day */}
            <div style={{ margin: '20px 0' }}>
                {days.map(day => {
                    const dayTodos = todos.filter(todo => todo.day === day);

                    return (
                        <div key={day} style={{ marginBottom: '15px' }}>
                            <h4 style={{ marginBottom: '8px', color: '#444', textAlign: 'left'}}>{day}</h4>
                            {dayTodos.length > 0 ? (
                                dayTodos.map(todo => (
                                    <div
                                        key={todo.id}
                                        style={{
                                            padding: '12px',
                                            margin: '6px 0',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                                            {todo.completed ? '✅' : '⬜'}
                                        </span>
                                        <span style={{
                                            textDecoration: todo.completed ? 'line-through' : 'none',
                                            color: todo.completed ? '#666' : '#333'
                                        }}>
                                            {todo.text}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div style={{
                                    padding: '10px',
                                    border: '1px dashed #ccc',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    color: '#aaa'
                                }}>
                                    ไม่มีงานวันนี้
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;
