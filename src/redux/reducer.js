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
        text1: "ITOT",
        price: 283.3,

        text4: "S&P 500 Index",
        text5: "US Equity",
      },
      second_box: {
        quantity: 150,
        cost: 44.9,
        invested_amount: 6736.98,
      },
      third_box: {
        market_value: 9542.56,
        portfolio_value: 40,
      },
      fourth_box: {
        unrealized: 2805.58,
        return: 10,
      },
    },
    {
      id: 2,
      first_box: {
        text1: "EFA",
        price: 68.9,

        text4: "MSCI EAFE Index",
        text5: "Developed Market Equity",
      },
      second_box: {
        quantity: 150,
        cost: 32.2,
        invested_amount: 4830.21,
      },
      third_box: {
        market_value: 4121.21,
        portfolio_value: 20,
      },
      fourth_box: {
        unrealized: 709,
        return: -15,
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};
export default reducer;
