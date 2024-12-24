"use client";
import React, { useEffect } from 'react';
import style from './style.module.css';
import { FaBusAlt } from "react-icons/fa";
import { IoMdBoat } from "react-icons/io";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import MapEmbed from './map-embed';
import { LuArrowRightCircle } from "react-icons/lu";

const GettingAroundTab = () => {


    return (
        <section className={style.innerpage}>
            <div className={`container ${style['light-bg']}`}>
                <div className="row pb-2">
                    <div className={`pr-0 ${style['country-container-box']}`}>
                        <div className={style['country-container']}>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className={`nav nav-tabs border-0 ${style['country-nav-tabs']}`} id="myTab" role="tablist">
                                        <li className={`nav-item ${style['country-nav-item']}`} role="presentation">
                                            <button
                                                className={`nav-link active border-0 ${style['around-nav-link']} ${style['active-tab']}`}
                                                id="tour-tab-unique"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tour-unique"
                                                type="button"
                                                role="tab"
                                                aria-controls="tour-unique"
                                                aria-selected="true"
                                            >
                                                <FaBusAlt />
                                            </button>
                                        </li>
                                        <li className={`nav-item ${style['country-nav-item']}`} role="presentation">
                                            <button
                                                className={`nav-link border-0 ${style['around-nav-link']}`}
                                                id="train-tab-unique"
                                                data-bs-toggle="tab"
                                                data-bs-target="#train-unique"
                                                type="button"
                                                role="tab"
                                                aria-controls="train-unique"
                                                aria-selected="false"
                                            >
                                                <FaTrainSubway />
                                            </button>
                                        </li>
                                        <li className={`nav-item ${style['country-nav-item']}`} role="presentation">
                                            <button
                                                className={`nav-link border-0 ${style['around-nav-link']}`}
                                                id="plane-tab-unique"
                                                data-bs-toggle="tab"
                                                data-bs-target="#plane-unique"
                                                type="button"
                                                role="tab"
                                                aria-controls="plane-unique"
                                                aria-selected="false"
                                            >
                                                <MdAirplanemodeActive />
                                            </button>
                                        </li>
                                        <li className={`nav-item ${style['country-nav-item']}`} role="presentation">
                                            <button className={`nav-link border-0 ${style['around-nav-link']}`}
                                                id="boat-tab-unique"
                                                data-bs-toggle="tab"
                                                data-bs-target="#boat-unique"
                                                type="button"
                                                role="tab"
                                                aria-controls="boat-unique"
                                                aria-selected="false"
                                            >
                                                <IoMdBoat />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <div className='row'>
                                        <div className={`col-md-6 pb-3 ${style['mpt-15']}`}>
                                            <label>From where in Bahrain?</label>
                                            <select className='form-control'>
                                                <option>Select</option>
                                                <option>Place</option>
                                                <option>Place</option>
                                            </select>
                                        </div>
                                        <div className='col-md-6 pb-3'>
                                            <label>To where in Bahrain?</label>
                                            <select className='form-control'>
                                                <option>Select</option>
                                                <option>Place</option>
                                                <option>Place</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="tour-unique"
                                        role="tabpanel"
                                        aria-labelledby="tour-tab-unique"
                                    >
                                        <div className={style['getting-around']}>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        {/*  <MapEmbed /> */}

                                                        <div className='table-responsive pt-3'>
                                                            <table className={`table ${style['country-table']}`}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Departs</th>
                                                                        <th></th>
                                                                        <th>Arriving</th>

                                                                        <th>Departs</th>
                                                                        <th></th>
                                                                        <th>Arriving</th>

                                                                        <th>Departs</th>
                                                                        <th></th>
                                                                        <th>Arriving</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className='border'>
                                                                        <td colSpan="9">
                                                                            <p className='py-0'>Next Available</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='border'>
                                                                        <td className={style['bg-1']}>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                        <td className={style['bg-1']}><LuArrowRightCircle /></td>
                                                                        <td className={style['bg-1']}>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                        <td><LuArrowRightCircle /></td>
                                                                        <td>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                        <td className={style['bg-1']}>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                        <td className={style['bg-1']}><LuArrowRightCircle /></td>
                                                                        <td className={style['bg-1']}>
                                                                            <p>01:00 PM</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="train-unique"
                                        role="tabpanel"
                                        aria-labelledby="train-tab-unique"
                                    >
                                        <div className={style['documentation-container']}>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <p>Dummy Text</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="plane-unique"
                                        role="tabpanel"
                                        aria-labelledby="plane-tab-unique"
                                    >
                                        <div className={style['documentation-container']}>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <p>Dummy Text</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="boat-unique"
                                        role="tabpanel"
                                        aria-labelledby="boat-tab-unique"
                                    >
                                        <div className={style['documentation-container']}>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <p>Dummy Text</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GettingAroundTab;
