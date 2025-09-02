import React from 'react';
import profile from './profile.jpg'

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={profile}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        Nanthawat Sittipornchaiyakhun
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักพัฒนา React มือใหม่ที่กำลังเรียนรู้
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;