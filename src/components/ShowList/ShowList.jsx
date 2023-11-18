import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { searchMessage } from '../../utils/emptyPageMessage';
import { Preloader } from '../Preloader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { BigMap } from '../BigMap/BigMap';
import { EmptyPage } from '../common/EmptyPage';

import './ShowList.scss';

const schoolName = ['школа', 'школы', 'школ'];
const gardenName = ['детский сад', 'детксих сада', 'детских садов'];

function getName(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

export const ShowList = ({ data, selected, isLoading, fullData }) => {
  const user = useSelector((state) => state.auth.user);
  const [isList, setIsList] = useState(true);

  function toggleList() {
    setIsList(!isList);
  }

  return (
    <section className='show-list'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='show-list__infoWrapper'>
            {selected === 'favorites' && !user ? (
              <div className='show-list__info'>
                <div className='show-list__icons' />
                <p className='show-list__paragraph'>
                  <Link to='/' className='show-list__link'>
                    Авторизуйтесь
                  </Link>
                  , чтобы сохранить список избранного для просмотра на этом и
                  других устройствах
                </p>
              </div>
            ) : selected === 'catalog' ? (
              <p className='show-list__info'>
                Найдено {data.length}{' '}
                {selected === 'schools'
                  ? getName(data.length, schoolName)
                  : getName(data.length, gardenName)}
              </p>
            ) : null}
            {selected !== 'favorites' &&
              data.length !== 0 &&
              (isList ? (
                <Button onClick={toggleList} variant='link'>
                  На карте
                </Button>
              ) : (
                <Button onClick={toggleList} variant='link'>
                  Списком
                </Button>
              ))}
          </div>
          {data.length !== 0 && isList ? (
            <div className='show-list__items'>
              {data.map((card) => {
                return <Card key={`${card.type}_${card.id}`} cardData={card} />;
              })}
            </div>
          ) : data.length !== 0 && !isList ? (
            <div className='show-list__mapWrapper'>
              <BigMap key={fullData.id} cardData={fullData} />
            </div>
          ) : (
            <EmptyPage variant='catalog' data={searchMessage} />
          )}
        </>
      )}
    </section>
  );
};
