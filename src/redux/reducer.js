const initialState = {
  data: [
    {
      id: 1,
      scrip: "AADR",
      quantity: 430,
      price: 50.3,
      avg_cost: 41.75,
      invested_amount: "17,952.07",
      portfolio_value: 22.06,
      unrealized: "$3,676.93",
      return: 20.48,
    },
    {
      id: 2,
      scrip: "MFEM",
      quantity: 210,
      price: 23.2,
      avg_cost: 22.5,
      invested_amount: "4,725.84",
      portfolio_value: 5.81,
      unrealized: "$146.16",
      return: 3.09,
    },
    {
      id: 3,
      scrip: "JPEM",
      quantity: 328,
      price: 52.5,
      avg_cost: 56.7,
      invested_amount: "18,597.60",
      portfolio_value: 22.86,
      unrealized: "-$1,377.60",
      return: -7.41,
    },
    {
      id: 4,
      scrip: "KEMQ",
      quantity: 801,
      price: 22.24,
      avg_cost: 41.75,
      invested_amount: "17,811.04",
      portfolio_value: 21.89,
      unrealized: "-$1,470.64",
      return: -8.26,
    },
    {
      id: 5,
      scrip: "KLDW",
      quantity: 523,
      price: 32.9,
      avg_cost: 26.32,
      invested_amount: "13,765.36",
      portfolio_value: 16.92,
      unrealized: "$3,441.34",
      return: 25.0,
    },
    {
      id: 6,
      scrip: "KOIN",
      quantity: 335,
      price: 25.4,
      avg_cost: 25.4,
      invested_amount: "8,509.00",
      portfolio_value: 10.46,
      unrealized: "$-",
      return: 0.0,
    },
  ],
  headerData: [
    {
      id: 1,
      first_box: {
        text1: "AADR",
        price: 50.3,

        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 430,
        cost: 41.75,
        invested_amount: 17952.07,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 22.06,
      },
      fourth_box: {
        unrealized: "$3676.93",
        return: 20.48,
      },
    },
    {
      id: 2,
      first_box: {
        text1: "MFEM",
        price: 23.2,

        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 210,
        cost: 22.5,
        invested_amount: 4725.84,
      },
      third_box: {
        market_value: 4121.21,
        portfolio_value: 5.81,
      },
      fourth_box: {
        unrealized: "$146.16",
        return: 3.09,
      },
    },
    {
      id: 3,
      first_box: {
        text1: "JPEM",
        price: 52.5,
        text4: "MSCI EAFE Index",
        text5: "Developed Market Equity",
        // text4: "S&P 500 Index",
        // text5: "US Equity",
      },
      second_box: {
        quantity: 328,
        cost: 44.9,
        invested_amount: 56.7,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 22.86,
      },
      fourth_box: {
        unrealized: "-$1377.60",
        return: "-7.41",
      },
    },
    {
      id: 4,
      first_box: {
        text1: "KEMPQ",
        price: 20.4,
        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 801,
        cost: 22.24,
        invested_amount: 17811.04,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 21.89,
      },
      fourth_box: {
        unrealized: "-$1470.64",
        return: -8.26,
      },
    },
    {
      id: 5,
      first_box: {
        text1: "KLDW",
        price: 32.9,
        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 523,
        cost: 26.32,
        invested_amount: 13765.36,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 16.92,
      },
      fourth_box: {
        unrealized: "$3441.34",
        return: 25.0,
      },
    },
    {
      id: 6,
      first_box: {
        text1: "KOIN",
        price: 25.4,

        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 335,
        cost: 25.4,
        invested_amount: 8509,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 10.46,
      },
      fourth_box: {
        unrealized: 0,
        return: 0,
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};
export default reducer;
