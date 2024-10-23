import { useState } from 'react'
import './assets/index.scss'

import * as React from 'react'

import { StyledEngineProvider } from '@mui/system'
import Navigation from './components/navigation/Navigation'

import { TabsList as BaseTabsList } from '@mui/base/TabsList'
import { styled } from '@mui/system'
import { Tabs } from '@mui/base/Tabs'
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel'
import Header from './components/header/Header'

function App() {
    return (
        <Tabs defaultValue={8}>
            <Navigation />
            <Header />
            <div className="main__content">
                <TabPanel value={0}>Dashboard</TabPanel>
                <TabPanel value={1}>Transactions</TabPanel>
                <TabPanel value={2}>Accounts</TabPanel>
                <TabPanel value={3}>Investments</TabPanel>
                <TabPanel value={4}>Credit Cards</TabPanel>
                <TabPanel value={5}>Loans</TabPanel>
                <TabPanel value={6}>Services</TabPanel>
                <TabPanel value={7}>My Privileges</TabPanel>
                <TabPanel className="settings-module" value={8}>
                    <div className="settings-module__inner">
                        <div className="settings-module__tabs">
                            <button className="settings-module__tabs__item settings-module__tabs__item_active">
                                Edit Profile
                            </button>
                            <button className="settings-module__tabs__item">
                                Preferences
                            </button>
                            <button className="settings-module__tabs__item">
                                Security
                            </button>
                        </div>
                        <form className="settings-module__main">
                            <div className="settings-module__main__left">
                                <img
                                    className="settings-module__main__image"
                                    src="/public/images/profile-images/charleneReem-img.jpg"
                                    alt=""
                                />
                                <button className="button__edit-image">
                                    <img
                                        src="/public/svg/defaults/pencil.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="settings-module__main__right">
                                <div className="settings-module__main__right__inputs">
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value="Charlene Reed"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="nickname">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            id="nickname"
                                            value="Charlene Reed"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value="charlenereed@gmail.com"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="name">Password</label>
                                        <input
                                            type="password"
                                            id="name"
                                            value="12313123"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="dateOfBirth">
                                            Date of Birth
                                        </label>
                                        <input
                                            type="date"
                                            id="dateOfBirth"
                                            value="1990-01-25"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="address">
                                            Present Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            value="Present Address"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="permanentAddress">
                                            Permanent Address
                                        </label>
                                        <input
                                            type="text"
                                            id="permanentAddress"
                                            value="San Jose, California, USA"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="name">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            value="San Jose"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="name">
                                            Postal Code
                                        </label>
                                        <input
                                            type="number"
                                            id="name"
                                            value="45962"
                                        />
                                    </div>
                                    <div className="settings-module__main__right__inputs__item">
                                        <label htmlFor="name">Country</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value="USA"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="button__submit"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}

const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `
 
  `
)

export default App
