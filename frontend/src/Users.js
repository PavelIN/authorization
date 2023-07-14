import React from 'react';
import './users.css';
const Users = ({users}) => {

    
    return (
        <div className="users">
            {
             users.map((user)=>{
                return <div className='user__container'>
                    <spnan className="span">{`email:  ${user.email}`}</spnan>
                    <spnan className="span">{`Пароль:  ${user.password}`}</spnan>
                </div>
             })
            }
            
        </div>
    );
};

export default Users;