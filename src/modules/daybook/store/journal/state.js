export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum molestiae voluptates, sunt aliquid magnam debitis eligendi itaque ratione ipsa sequi aperiam deleniti nulla corrupti quod voluptas similique ab iusto est! Minima, molestias, id quaerat, perspiciatis sit distinctio adipisci quia alias amet quam et. Est consequatur nostrum corporis ipsum cum",
      picture: null,
    },
    {
      id: new Date().getTime() + 10,
      date: new Date().toDateString(),
      text: "sunt aliquid magnam debitis eligendi itaque ratione ipsa sequi aperiam deleniti nulla corrupti quod voluptas similique ab iusto est! Minima, molestias, id quaerat, perspiciatis sit distinctio adipisci quia alias amet quam et. Est consequatur nostrum corporis ipsum cum",
      picture: null,
    },
    {
      id: new Date().getTime() + 20,
      date: new Date().toDateString(),
      text: "molestias, id quaerat, perspiciatis sit distinctio adipisci quia alias amet quam et. Est consequatur nostrum corporis ipsum cum",
      picture: null,
    },
  ],
});
