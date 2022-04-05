import React from 'react';

import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-flex row'>
            <div className='col-sm-12 col-md-6'>
                <h1>MONTH WISE SELL</h1>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sell"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </div>
            <div className='col-sm-12 col-md-6'>
                <h1>INVESTMENT VS REVENUE</h1>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="investment"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                    />
                    <Pie
                        data={data}
                        dataKey="revenue"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    />
                </PieChart>
            </div>


        </div>
    );
};

export default DashBoard;