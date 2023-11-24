import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CardProperty } from '@components/pageComponents';
import { Button, LandingIllustrator } from '@components/baseComponents';
import { BUTTON } from '@common/constant';
import { SearchBar } from '@components/compositeComponents';

export const Home: React.FC = (): React.JSX.Element => {
  // TODO: Replace with API
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const respont = async () => {
      const res = await fetch('http://localhost:5000/api/v1/property');
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.message);
      }
      setProperties(data);
    };
    respont();
  }, []);

  return (
    <div className="w-full">
      <section className="section-landing">
        <LandingIllustrator />
        <div className="searching-bar">
          <div className="searching-text__wrapper">
            <h1 className="searching-title">Meet your new Home</h1>
            <p className="searching-subtitle">
              The easiest way to faind where you belong
            </p>
          </div>
          <SearchBar />
        </div>
      </section>
      <section className="home-section__properties">
        <div className="cards-title">
          <h2 className="cards__title">Find an Apartment you love</h2>
          <p className="cards__subtitle">Home for rent a the best price</p>
        </div>
        <div className="grid-cards">
          <CardProperty data={properties} />
        </div>
      </section>
      <section className="home-section-action">
        <div className="action-text-wrapper">
          <p className="action-text">
            Gettin someone to rent your apartment has
          </p>
          <p className="action-text">never been easier</p>
        </div>
        <Link to="/signup" className="action-btn-wrapper">
          <Button
            typeBtn={BUTTON.TYPE.PRIMARY}
            type="button"
            size={BUTTON.SIZE.LARGE}
          >
            Create an account now
          </Button>
        </Link>
      </section>
    </div>
  );
};
