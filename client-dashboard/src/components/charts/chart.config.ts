import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'Organizations',
    data: [183, 124, 115, 85, 143, 143, 96, 188],
  },
  {
    name: 'Businesses',
    data: [95, 84, 72, 44, 108, 108, 47, 176],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
};

export const TotalUserSeries = [
  {
    name: 'Subscriber',
    data: [183, 124, 115, 85, 143, 143, 96, 188],
  },
  {
    name: 'Non-Subscriber',
    data: [95, 84, 72, 44, 108, 108, 47, 176],
  },
];

export const TotalUserOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  },
  yaxis: {
    title: {
      text: 'No. of Users (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `${val} thousands`;
      },
    },
  },
};