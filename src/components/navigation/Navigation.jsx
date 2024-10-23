import AccountsSvg from '/public/svg/nav-images/AccountsSvg'
import DashBoard from '/public/svg/nav-images/DashBoardSvg'
import Transactions from '/public/svg/nav-images/TransactionsSvg'
import InvestmentsSvg from '/public/svg/nav-images/InvestmentsSvg'
import CreditCardsSvg from '/public/svg/nav-images/CreditCardsSvg'
import LoansSvg from '/public/svg/nav-images/LoansSvg'
import ServicesSvg from '/public/svg/nav-images/ServicesSvg'
import MyPrivilegesSvg from '/public/svg/nav-images/MyPrivilegesSvg'
import Settings from '/public/svg/nav-images/SettingsSvg'

import { TabsList as BaseTabsList } from '@mui/base/TabsList'
import { styled } from '@mui/system'
import { buttonClasses } from '@mui/base/Button'
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab'

export default Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__logo">
                <a href="#">
                    <img src="/public/images/logo/logo-default.png" alt="" />
                </a>
            </div>
            <TabsList className="navigation__main">
                <Tab className="nav__item" value={0}>
                    <DashBoard className="nav__item__svg" />
                    Dashboard
                </Tab>
                <Tab className="nav__item" value={1}>
                    <Transactions className="nav__item__svg" />
                    Transactions
                </Tab>
                <Tab className="nav__item" value={2}>
                    <AccountsSvg className="nav__item__svg" />
                    Accounts
                </Tab>
                <Tab className="nav__item" value={3}>
                    <InvestmentsSvg className="nav__item__svg" />
                    Investments
                </Tab>
                <Tab className="nav__item" value={4}>
                    <CreditCardsSvg className="nav__item__svg" />
                    Credit Cards
                </Tab>
                <Tab className="nav__item" value={5}>
                    <LoansSvg className="nav__item__svg" />
                    Loans
                </Tab>
                <Tab className="nav__item" value={6}>
                    <ServicesSvg className="nav__item__svg" />
                    Services
                </Tab>
                <Tab className="nav__item" value={7}>
                    <MyPrivilegesSvg className="nav__item__svg" />
                    My Privileges
                </Tab>
                <Tab className="nav__item" value={8}>
                    <Settings className="nav__item__svg" />
                    Setting
                </Tab>
            </TabsList>
        </div>
    )
}

const Tab = styled(BaseTab)`
    &:hover {
    }

    &:focus {
    }

    &.${tabClasses.selected} {
        color: blue !important;

        &::before {
            content: '' !important;
            position: absolute !important;
            height: 100% !important;
            border-radius: 3px !important;
            width: 6px !important;
            background-color: #1814f3 !important;

            left: 0 !important;
            transform: translateX(-50%) !important;
        }

        .nav__item__svg {
            fill: #1814f3 !important;
        }
    }
`

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `

  
  `
)
