import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SvmU5001DayPiwData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://node-server-svm.onrender.com/getSvmU5001DayPiwData');  // Updated endpoint
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>SVM U500 1 Day PIW Data</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Closed</th>
                        <th>Return Of U500</th>
                        <th>Direction Of U500</th>
                        <th>Crash Indicator U500 1</th>
                        <th>Performance CI Of U500 10 (Window 5)</th>
                        <th>Forecast CI Of U500 10 (Window 5)</th>
                        <th>Market Crash Of U500 10 (Window 5)</th>
                        <th>Performance DI Of U500 10 (Window 5)</th>
                        <th>Forecast DI Of U500 10 (Window 5)</th>
                        <th>Market Crash DI Of U500 10 (Window 5)</th>
                        <th>BackTest Profit (Window 5)</th>
                        <th>Performance CI Of U500 10 (Window 10)</th>
                        <th>Forecast CI Of U500 10 (Window 10)</th>
                        <th>Market Crash Of U500 10 (Window 10)</th>
                        <th>Performance DI Of U500 10 (Window 10)</th>
                        <th>Forecast DI Of U500 10 (Window 10)</th>
                        <th>Market Crash DI Of U500 10 (Window 10)</th>
                        <th>BackTest Profit (Window 10)</th>
                        <th>Performance CI Of U500 10 (Window 30)</th>
                        <th>Forecast CI Of U500 10 (Window 30)</th>
                        <th>Market Crash Of U500 10 (Window 30)</th>
                        <th>Performance DI Of U500 10 (Window 30)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.no_}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.closed}</td>
                            <td>{item.ReturnOfU500}</td>
                            <td>{item.directionOfU500}</td>
                            <td>{item.CrashIndicatorU500_1__}</td>
                            <td>{item.PerformanceCIOfU500_10__Window5}</td>
                            <td>{item.ForecastCIOfU500_10__Window5}</td>
                            <td>{item.MarketCrashOfU500_10__Window5}</td>
                            <td>{item.PerformanceDIOfU500_10__Window5}</td>
                            <td>{item.ForecastDIOfU500_10__Window5}</td>
                            <td>{item.MarketCrashDIOfU500_10__Window5}</td>
                            <td>{item.BackTest_Profit_Window5}</td>
                            <td>{item.PerformanceCIOfU500_10__Window10}</td>
                            <td>{item.ForecastCIOfU500_10__Window10}</td>
                            <td>{item.MarketCrashOfU500_10__Window10}</td>
                            <td>{item.PerformanceDIOfU500_10__Window10}</td>
                            <td>{item.ForecastDIOfU500_10__Window10}</td>
                            <td>{item.MarketCrashDIOfU500_10__Window10}</td>
                            <td>{item.BackTest_Profit_Window10}</td>
                            <td>{item.PerformanceCIOfU500_10__Window30}</td>
                            <td>{item.ForecastCIOfU500_10__Window30}</td>
                            <td>{item.MarketCrashOfU500_10__Window30}</td>
                            <td>{item.PerformanceDIOfU500_10__Window30}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SvmU5001DayPiwData;
