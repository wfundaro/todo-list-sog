import useTodos from "../../hooks/useTodos";

const useHome = () => {
  const { todos } = useTodos();
  return {
    todos,
  };
};

export default useHome;
