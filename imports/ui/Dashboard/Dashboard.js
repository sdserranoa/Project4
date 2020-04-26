import React, { Component } from 'react'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'

/* Charts */
import SalesChart from './SalesChart'
import DietsChart from './DietsChart'
import ExpensesChart from './ExpensesChart'

/* ICONS */
import IncomeIcon from '@material-ui/icons/AttachMoney';
import ExpensesIcon from '@material-ui/icons/MoneyOff';
import RevenueIcon from '@material-ui/icons/AccountBalanceWallet';
import CartIcon from '@material-ui/icons/ShoppingCart';

export default class Dashboard extends Component {
    render() {
        return (
            <Container fluid role="contentinfo" className="mt-5">
                <h1>Dashboard</h1>
                <Row style={{ margin: '0 50px' }}>
                    <Col>
                        <div className="revenue-card income-card">
                            <Row>
                                <Col>
                                    <p className="revenue-text revenue-statistic">20.000</p>
                                </Col>
                                <Col xs="auto">
                                    <IncomeIcon />
                                </Col>
                                <Col xs={12}>
                                    <p className="revenue-text">Month's Income</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div className="revenue-card expenses-card">
                            <Row>
                                <Col>
                                    <p className="revenue-text revenue-statistic">20.000</p>
                                </Col>
                                <Col xs="auto">
                                    <ExpensesIcon />
                                </Col>
                                <Col xs={12}>
                                    <p className="revenue-text">Month's Expenses</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div className="revenue-card total-revenue-card">
                            <Row>
                                <Col>
                                    <p className="revenue-text revenue-statistic">20.000</p>
                                </Col>
                                <Col xs="auto">
                                    <RevenueIcon />
                                </Col>
                                <Col xs={12}>
                                    <p className="revenue-text">Month's Total Revenue</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div className="revenue-card orders-card">
                            <Row>
                                <Col>
                                    <p className="revenue-text revenue-statistic">20.000</p>
                                </Col>
                                <Col xs="auto">
                                    <CartIcon />
                                </Col>
                                <Col xs={12}>
                                    <p className="revenue-text">Month's Orders</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div style={{ margin: '30px 0' }}>
                    <Row>
                        <Col xs={12} xl={6}>
                            <SalesChart />
                        </Col>
                        <Col xs={12} xl={6}>
                            <DietsChart />
                        </Col>
                        <Col xs={12} style={{ marginTop: '15px' }}>
                            <ExpensesChart />
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}