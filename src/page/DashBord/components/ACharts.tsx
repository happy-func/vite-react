import React, { useEffect, useRef } from "react";

const ACharts = function () {
  const aChartRef = useRef(null);
  let option: { title: { text: string; }; legend: { data: string[]; }; polar: {}; tooltip: { trigger: string; axisPointer: { type: string; }; }; angleAxis: { type: string; startAngle: number; }; radiusAxis: {}; series: { coordinateSystem: string; name: string; type: string; data: number[][]; }[]; };

  const data = [];

  for (let i = 0; i <= 100; i++) {
    const theta = i / 100 * 360;
    const r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    data.push([r, theta]);
  }

  option = {
    title: {
      text: '极坐标双数值轴'
    },
    legend: {
      data: ['line']
    },
    polar: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    angleAxis: {
      type: 'value',
      startAngle: 0
    },
    radiusAxis: {
    },
    series: [{
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      data: data
    }]
  };

  useEffect(function () {
    // @ts-ignore
    const myChart = echarts.init(aChartRef.current);
    option && myChart.setOption(option);
  }, []);
  return <div ref={aChartRef} style={{
    width: '100%',
    height: '100%',
  }}/>
}

export default ACharts;
