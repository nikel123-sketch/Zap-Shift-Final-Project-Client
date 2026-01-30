import React from 'react';

import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Component/Loading/Loading';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';



const AdminDashbord = () => {
    const axiosSecure = useAxiosSecure();
    const {data:delevaryStats=[],isLoading} = useQuery({
      queryKey: ["delevaryStatus-stats"],
      queryFn: async () => {
        const result =await axiosSecure.get(`/parcels/delevaryStatus/stats`);
        return result.data;
      },
    });
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(delevaryStats)

    // pie chart ---
    const pieChartdata=data=>{
        return data.map(item=>{
         return   {name:item.status, value:item.count}
        })
    }

    const COLORS = [
      "#4F46E5", // Indigo
      "#16A34A", // Green
      "#FBBF24", // Amber
      "#EF4444", // Red
      "#F97316", // Orange
      "#0EA5E9", // Sky Blue
      "#9333EA", // Purple
    ];

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Delivery Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delevaryStats.map((stats, i) => (
            <div
              key={i}
              className="stat bg-base-100 shadow-xl rounded-xl border hover:shadow-2xl transition"
            >
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2a4 4 0 014-4h4M7 7h.01M12 7h.01M17 7h.01M3 11l2-2m0 0l2 2m-2-2v6"
                  />
                </svg>
              </div>

              <div className="stat-title text-green-400 uppercase font-bold text-3xl">
                {stats._id}
              </div>

              <div className="stat-value text-primary">{stats.count}</div>

              <div className="stat-desc  font-bold text-xl">Total Parcels</div>
            </div>
          ))}
        </div>

        {/* Pie Chart */}

        <div className="w-full flex justify-center items-center mt-8 bg-base-100 shadow-xl rounded-xl p-6">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={pieChartdata(delevaryStats)}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              isAnimationActive={true}
            >
              {pieChartdata(delevaryStats).map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Legend
              verticalAlign="top"
              wrapperStyle={{ fontSize: "14px", fontWeight: "bold" }}
              formatter={(value, entry, index) => (
                <span style={{ color: COLORS[index % COLORS.length] }}>
                  {value}
                </span>
              )}
            />

            <Tooltip
              wrapperStyle={{ fontSize: "14px", backgroundColor: "#f9fafb" }}
              contentStyle={{ borderRadius: "6px" }}
              formatter={(value) => [`${value} parcels`, "Count"]}
            />
          </PieChart>
        </div>
      </div>
    );
};

export default AdminDashbord;