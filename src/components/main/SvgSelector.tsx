import React from "react";

type Props = {
  id: string;
};

const SvgSelector = ({ id }: Props) => {
  switch (id) {
    case "menu":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25 18H21.75M3 13H21.75M3 8H15.5"
            stroke="#1D1E20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case "bag":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.7982 22.3958H16.4939C19.6879 22.3958 22.1383 21.2421 21.4424 16.5988L20.6319 10.3058C20.2028 7.98886 18.725 7.10213 17.4282 7.10213H6.82566C5.50986 7.10213 4.1178 8.05561 3.62199 10.3058L2.81154 16.5988C2.2204 20.7177 4.60407 22.3958 7.7982 22.3958Z"
            stroke="#1D1E20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.65527 6.87332C7.65527 4.38783 9.67016 2.37294 12.1556 2.37294C13.3525 2.36787 14.5021 2.83977 15.3502 3.68431C16.1983 4.52885 16.6751 5.67644 16.6751 6.87332"
            stroke="#1D1E20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.06641 11.5644H9.11408"
            stroke="#1D1E20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1399 11.5644H15.1876"
            stroke="#1D1E20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case "heart":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.80075 17.3782C7.99192 16.2649 6.30918 14.9547 4.78266 13.471C3.70945 12.4024 2.89243 11.0998 2.39417 9.66284C1.49754 6.87526 2.54486 3.68403 5.47585 2.7396C7.01626 2.24369 8.69859 2.52713 9.99667 3.50124C11.2952 2.52832 12.977 2.24499 14.5175 2.7396C17.4485 3.68403 18.5033 6.87526 17.6067 9.66284C17.1084 11.0998 16.2914 12.4024 15.2182 13.471C13.6917 14.9547 12.0089 16.2649 10.2001 17.3782L10.0042 17.5L9.80075 17.3782Z"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.116 5.8775C14.0037 6.16109 14.6345 6.95809 14.7133 7.89582"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case "star":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.78671 1.00431C4.01122 0.313322 4.98878 0.313323 5.21329 1.0043L5.49706 1.87766C5.66441 2.39269 6.14435 2.74139 6.68588 2.74139H7.60419C8.33073 2.74139 8.63281 3.6711 8.04502 4.09815L7.3021 4.63792C6.86399 4.95622 6.68067 5.52043 6.84801 6.03546L7.13178 6.90881C7.3563 7.5998 6.56544 8.17439 5.97765 7.74734L5.23473 7.20758C4.79662 6.88927 4.20338 6.88927 3.76527 7.20758L3.02235 7.74734C2.43456 8.17439 1.6437 7.5998 1.86822 6.90881L2.15199 6.03546C2.31933 5.52043 2.13601 4.95622 1.6979 4.63792L0.954978 4.09815C0.367192 3.6711 0.669274 2.74139 1.39582 2.74139H2.31412C2.85565 2.74139 3.33559 2.39269 3.50294 1.87766L3.78671 1.00431Z"
            stroke="auto"
            stroke-width="0.5"
          />
        </svg>
      );
      break;
    case "arrow-left":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.42725 12.7857H20.0522"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7288 19.0611L4.42676 12.7861L10.7288 6.51009"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 13.125C10.6066 13.125 13.125 10.6066 13.125 7.5C13.125 4.3934 10.6066 1.875 7.5 1.875C4.3934 1.875 1.875 4.3934 1.875 7.5C1.875 10.6066 4.3934 13.125 7.5 13.125Z"
            stroke="auto"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 4.375V7.5L8.75 9.375"
            stroke="auto"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.80541 17.296C13.9423 17.296 17.2959 13.9424 17.2959 9.8055C17.2959 5.66863 13.9423 2.31503 9.80541 2.31503C5.66854 2.31503 2.31494 5.66863 2.31494 9.8055C2.31494 13.9424 5.66854 17.296 9.80541 17.296Z"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.0151 15.4043L17.9518 18.3333"
            stroke="auto"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    default:
      return <></>;
      break;
  }
};

export default SvgSelector;
