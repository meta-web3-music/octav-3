const products = [1, 2, 3, 1, 2, 3];

const PostProducts = () => {
  return (
    <div className="flex flex-nowrap overflow-x-auto">
      {products.map((e) => (
        <div key={e} className="mr-14 my-2">
          <img
            className="rounded-2xl w-24 h-24 min-w-min"
            src={`/images/product${e}.png`}
          />
          <p>Product</p>
          <p className="text-xs">$50</p>
        </div>
      ))}
    </div>
  );
};
export default PostProducts;
