import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';

function Orders(props) {
    const order = useSelector(state => state.order);

    return (
        <Layout sidebar>
            <Card
                headerLeft="ORDER_ID"
            >
                <div
                    style={{
                        boxSizing: 'border-box',
                        padding: '100px'
                    }}
                >
                    <div className="orderTrack">
                        <div className="orderStatus">
                            <div className="point"></div>
                            <div className="orderInfo">
                                <div className="status">Ordered</div>
                                <div className="status">Fri, 2020</div>
                            </div>
                        </div>
                        <div className="orderStatus">
                            <div className="point"></div>
                            <div className="orderInfo">
                                <div className="status">Packed</div>
                                <div className="status">Fri, 2020</div>
                            </div>
                        </div>
                        <div className="orderStatus">
                            <div className="point"></div>
                            <div className="orderInfo">
                                <div className="status">Ordered</div>
                                <div className="status">Fri, 2020</div>
                            </div>
                        </div>
                        <div className="orderStatus">
                            <div className="point"></div>
                            <div className="orderInfo">
                                <div className="status">Ordered</div>
                                <div className="status">Fri, 2020</div>
                            </div>
                        </div>
                    </div>
                </div>

            </Card>
        </Layout>
    );
}

export default Orders;