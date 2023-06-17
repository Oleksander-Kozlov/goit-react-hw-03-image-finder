export const BTNLoadMore = ({onChange}) => {
  return (
    <button
      onClick={
        onChange()
      }
    >
      Load More
    </button>
  );
};