  
  import ProductList from '../components/ProductList'; // <-- ADD THIS IMPORT

  const CollectionsPage = () => {
    return (
      <div className="container page-container"> {/* Added page-container for common styling */}
        <h1 className="page-title">Our Collections</h1>
        <ProductList />
      </div>
    );
  };

  export default CollectionsPage;
  