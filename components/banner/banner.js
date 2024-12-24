"use client";  // Add this directive at the top
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Search from '../search/search';

const Banner = () => {
  

  return (
    <section className={`${style['banner']}`}>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <div className={style['banner-container']}>

              <div className={style['only-stiky']}>
              <Link className="navbar-brand" href='/'><img src="/images/logo.svg"  className={style['banner-box-logo']} alt="" /></Link>
              </div>


              <div className={style['banner-box']}>
                <div>
                  <img src="../images/01.png" alt="Explore Bahrain" />
                  <h4>Explore</h4>
                </div>
                <div>
                  <img src="../images/02.png" alt="Plan Bahrain" />
                  <h4>Plan</h4>
                </div>
                <div>
                  <img src="../images/03.png" alt="Book Bahrain" />
                  <h4>Book</h4>
                </div>
                <div>
                  <img src="../images/04.png" alt="Experience Bahrain" />
                  <h4>Experience</h4>
                </div>
              </div>


              <div className={style['only-stiky']}>
              <div className='d-flex'>
              <img src="../images/05.png" alt="Explore Bahrain"  className={style['profile-icon']} />Johnny Depp 
              </div>
              
              </div>

            </div>

            <span className={style['serch-div']}><Search /></span>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
