import React from 'react';

import { Button } from '../../../../components/common/Button';
import { Preloader } from '../../../../components/Preloader';
import { useGetUserQuery } from '../../../../api/userApi';
import { openExitProfileModal } from '../../../../store/modalsSlice';

import './UserData.scss';
import { useDispatch } from 'react-redux';

export function UserData({ setEditUser }) {
  const dispatch = useDispatch();

  const { data = {}, isSuccess, isLoading } = useGetUserQuery();
  const handleClickExit = () => {
    dispatch(openExitProfileModal());
  };

  return (
    <>
      {isSuccess ? (
        <div>
          <div className='user__wrapper'>
            <p className='user__label'>Родитель</p>
            <p className='user__text'>
              {isLoading ? ' ' : `${data.first_name} ${data.last_name}`}
            </p>
          </div>
          <div className='user__wrapper'>
            <p className='user__label'>Телефон</p>
            <p className='user__text'>{isLoading ? ' ' : `${data.phone}`}</p>
          </div>
          <div className='user__wrapper'>
            <p className='user__label'>Email</p>
            <p className='user__text'> {isLoading ? ' ' : `${data.email}`}</p>
          </div>
          <div className='user__btns'>
            <Button
              type='button'
              width='188px'
              size='small'
              color='orange-fill'
              onClick={(e) => {
                setEditUser(true);
              }}
            >
              Изменить
            </Button>
            <Button
              type='button'
              width='188px'
              size='small'
              color='orange-empty'
              onClick={() => handleClickExit()}
            >
              Выход
            </Button>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}
