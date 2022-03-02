// logic around pizza
const pizza_resolver = (title = "noop") => {
  return {
    title: title,
    priece: Math.floor(Math.random() * 100),
  };
};

const user_resolver = () => {
  return {
    name: "mahdi",
  };
};

export default {
  Query: {
    pizza: pizza_resolver,
    user: user_resolver,
  },
};
