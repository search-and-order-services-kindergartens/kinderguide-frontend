import React from 'react';
import { User } from './components/User/User';
import './Profile.scss';

export function Profile() {
  return (
    <section className='profile'>
      <div className='wrapper'>
        <h1 className='profile__title'>Личный кабинет</h1>
        <User />
      </div>
    </section>
  );
}
