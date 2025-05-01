import TOURS from "../datasets/tours.json";

export const useToursService = () => {
  const list = () => {
    return Promise.resolve(TOURS);
  };

  const get = (id: number) => {
    return Promise.resolve(TOURS.filter((tour) => tour.id === id));
  };

  const getBySlug = (slug: string) => {
    return Promise.resolve(TOURS.filter((tour) => tour.slug === slug));
  };

  return {
    list,
    get,
    getBySlug,
  };
};
