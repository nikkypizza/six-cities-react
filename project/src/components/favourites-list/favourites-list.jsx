import React from 'react';
import { arrayOf, objectOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppRoute } from '../../const.js';
import { changeCity } from '../../store/action.js';
import { adPropTypes } from '../../propTypes/ad.js';

import FavoritePlacesList from '../favourite-places-list/favourite-places-list.jsx';


function FavoritesList({ adsObj }) {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(adsObj).map(([key, value]) => (
          <li key={key} className="favorites__locations-items">

            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" onClick={({ target }) => dispatch(changeCity(target.textContent))} to={AppRoute.ROOT}>
                  <span>{key}</span>
                </Link>
              </div>
            </div>
            <FavoritePlacesList places={value} />

          </li>
        ))}
      </ul>
    </>
  );
}

FavoritesList.propTypes = {
  adsObj: objectOf(arrayOf(adPropTypes)),
};

export default FavoritesList;
