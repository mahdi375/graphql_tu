// logic around pizza
export const pizza_resolver = (title = "noop") => {
  return {
    title: title,
    priece: Math.floor(Math.random() * 100),
  };
};

export const user_resolver = () => {
  return {
    name: "mahdi",
  };
};
