// logic around pizza
// root arg refers to Query obj    => Query {pizza {...}}
const pizza_resolver = (root, { title }) => {
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
