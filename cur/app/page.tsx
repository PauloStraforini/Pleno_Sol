"use client";

import { Component } from "@/components/charts/bar_charts_mult";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, CartesianGrid, XAxis, Tooltip, YAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function Pages() {
  return (
    <main className="sm:ml-14 p-4">
      {/* Grade de cartões */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 com Gráfico */}
        <Card>
          <CardHeader>
            <CardTitle>Visitors Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[250px]">
              <AreaChart
                width={300}
                height={250}
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="desktop"
                  stroke="#8884d8"
                  fill="url(#desktopGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="mobile"
                  stroke="#82ca9d"
                  fill="url(#mobileGradient)"
                />
              </AreaChart>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Card 2 Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for Card 2</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Card 3 Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for Card 3</p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card>
          <CardHeader>
            <CardTitle>Card 4 Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for Card 4</p>
          </CardContent>
        </Card>

        <section className="col-span-2 lg:col-span-4">
          <Component />
        </section>
        

      </section>
      
    </main>
  );
}
