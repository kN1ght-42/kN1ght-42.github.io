import React from 'react'

import { TabPanel } from '@mui/base/TabPanel'

const Header = () => {
    return (
        <header className="header">
            <div className="header__desktop">
                <h1 className="header__title">
                    <TabPanel value={0}>Dashboard</TabPanel>
                    <TabPanel value={1}>Transactions</TabPanel>
                    <TabPanel value={2}>Accounts</TabPanel>
                    <TabPanel value={3}>Investments</TabPanel>
                    <TabPanel value={4}>Credit Cards</TabPanel>
                    <TabPanel value={5}>Loans</TabPanel>
                    <TabPanel value={6}>Services</TabPanel>
                    <TabPanel value={7}>My Privileges</TabPanel>
                    <TabPanel value={8}>Setting</TabPanel>
                </h1>
                <div className="header__main">
                    <div className="header__search">
                        <input
                            className="header__search__input"
                            type="text"
                            placeholder="Search for something "
                            required
                        />
                        <button className="header__search__button">
                            <img src="/public/svg/defaults/search.svg" alt="" />
                        </button>
                    </div>
                    <button
                        className="header__button header__button_notification"
                        aria-label="Setting button"
                    >
                        <img src="/public/svg/defaults/settings.svg" alt="" />
                    </button>
                    <button
                        className="header__button header__button_notification"
                        aria-label="Notification button"
                    >
                        <img
                            src="/public/svg/defaults/notifications.svg"
                            alt=""
                        />
                    </button>
                    <button className="profile__button">
                        <img
                            src="/public/images/profile-images/charleneReem-img.jpg"
                            alt=""
                        />
                    </button>
                </div>
            </div>
            <div className="header__mobile">
                <div className="header__top">
                    <button
                        className="burger__menu"
                        aria-label="Burger menu button"
                    >
                        <img src="/public/svg/defaults/burger.svg" alt="" />
                    </button>
                    <h1 className="header__title">
                        <TabPanel value={0}>Dashboard</TabPanel>
                        <TabPanel value={1}>Transactions</TabPanel>
                        <TabPanel value={2}>Accounts</TabPanel>
                        <TabPanel value={3}>Investments</TabPanel>
                        <TabPanel value={4}>Credit Cards</TabPanel>
                        <TabPanel value={5}>Loans</TabPanel>
                        <TabPanel value={6}>Services</TabPanel>
                        <TabPanel value={7}>My Privileges</TabPanel>
                        <TabPanel value={8}>Setting</TabPanel>
                    </h1>
                    <button className="profile__button">
                        <img
                            src="/public/images/profile-images/charleneReem-img.jpg"
                            alt=""
                        />
                    </button>
                </div>
                <div className="header__search">
                    <input
                        className="header__search__input"
                        type="text"
                        placeholder="Search for something "
                        required
                    />
                    <button className="header__search__button">
                        <img src="/public/svg/defaults/search.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
