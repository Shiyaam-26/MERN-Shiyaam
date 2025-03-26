import React, { useState } from 'react';

const Agro = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = {
    fruits: [
      { id: 'f1', name: 'APPLE', price: 120, unit: 'kg', rating: 3.7, location: 'SHIMOGA', origin: '' },
      { id: 'f2', name: 'GUAVA', price: 60, unit: 'kg', rating: 4.8, location: 'RAJKOT', origin: 'DEOGARH' },
      { id: 'f3', name: 'BANANA', price: 50, unit: 'kg', rating: 4.2, location: 'KOPPAMARTI', origin: 'BHIMUNIPATNAM' },
      { id: 'f4', name: 'MANGO', price: 130, unit: 'kg', rating: 4.7, location: 'GUNTUR', origin: 'KURNOOL' }
    ],
    vegetables: [
      { id: 'v1', name: 'SMALL ONION', price: 70, unit: 'kg', rating: 4.4, location: 'GUNTUR', origin: '' },
      { id: 'v2', name: 'TOMATO', price: 40, unit: 'kg', rating: 4.3, location: 'KARP', origin: '' },
      { id: 'v3', name: 'CARROT', price: 60, unit: 'kg', rating: 4.6, location: 'CHENNAI', origin: 'BHUBANESWAR' },
      { id: 'v4', name: 'POTATO', price: 50, unit: 'kg', rating: 4.5, location: 'SALEM', origin: 'DEHRADUN' }
    ],
    cereals: [
      { id: 'c1', name: 'BAJRA', price: 100, unit: 'kg', rating: 4.5, location: 'WARANGAL', origin: 'JODHPUR' },
      { id: 'c2', name: 'BLACK GRAM', price: 200, unit: 'kg', rating: 4.6, location: '', origin: 'KATIHAR' },
      { id: 'c3', name: 'GREEN GRAM', price: 180, unit: 'kg', rating: 4.5, location: 'GUNTUR', origin: 'BHUBANESWAR' },
      { id: 'c4', name: 'TOOR DAL', price: 120, unit: 'kg', rating: 4.7, location: 'SALEM', origin: 'DEHRADUN' }
    ],
    rice: [
      { id: 'r1', name: 'PONNI', price: 60, unit: 'kg', rating: 4.5, location: 'CHENNAI', origin: 'BHUBANESWAR' },
      { id: 'r2', name: 'KARUPPU KAVUNI', price: 120, unit: 'kg', rating: 4.6, location: 'GUNTUR', origin: 'KATIHAR' },
      { id: 'r3', name: 'BASMATI', price: 140, unit: 'kg', rating: 4.7, location: 'CHENGAND', origin: 'BHUBANESWAR' },
      { id: 'r4', name: 'MAPPILAI SAMBA', price: 110, unit: 'kg', rating: 4.4, location: 'SALEM', origin: 'DEHRADUN' }
    ]
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      color: '#333333',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      borderBottom: '1px solid #e0e0e0',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4CAF50',
    },
    authButtons: {
      display: 'flex',
      gap: '20px',
    },
    button: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#E8F5E9',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    searchInput: {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '200px',
    },
    cartIcon: {
      position: 'relative',
      marginLeft: '10px',
    },
    cartCount: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      backgroundColor: '#FF5722',
      color: 'white',
      fontSize: '12px',
      borderRadius: '50%',
      width: '18px',
      height: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainContent: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '0 0 15px 0',
      padding: '5px 0',
      borderBottom: '2px solid #E0E0E0',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '40px',
    },
    productCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    productImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '10px',
      backgroundColor: '#f0f0f0',
    },
    productName: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '5px',
    },
    productPrice: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    ratingContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '5px',
    },
    locationInfo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      marginBottom: '5px',
      color: '#666',
    },
    icon: {
      marginRight: '5px',
      width: '12px',
      height: '12px',
    },
    addToCartButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '6px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '12px',
      marginTop: 'auto',
      textAlign: 'center',
    },
    starRating: {
      display: 'flex',
    },
    star: {
      color: '#FFD700',
      fontSize: '12px',
      marginRight: '2px',
    },
    emptyStar: {
      color: '#e0e0e0',
      fontSize: '12px',
      marginRight: '2px',
    },
  };

  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div style={styles.starRating}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            style={i < fullStars ? styles.star : styles.emptyStar}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div style={styles.productCard}>
      <div style={styles.productImage}>
        {/* Placeholder for product image */}
      </div>
      <div style={styles.productName}>{product.name}</div>
      <div style={styles.productPrice}>₹ {product.price} /{product.unit}</div>
      <div style={styles.ratingContainer}>
        <RatingStars rating={product.rating} />
      </div>
      {product.location && (
        <div style={styles.locationInfo}>
          <span style={styles.icon}>📍</span>
          <span>{product.location}</span>
        </div>
      )}
      {product.origin && (
        <div style={styles.locationInfo}>
          <span style={styles.icon}>🚚</span>
          <span>{product.origin}</span>
        </div>
      )}
      <button 
        onClick={() => addToCart(product)}
        style={styles.addToCartButton}
      >
        ADD TO CART
      </button>
    </div>
  );

  const ProductSection = ({ title, productList }) => (
    <div>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.productGrid}>
        {productList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Agro ECart</div>
        <div style={styles.authButtons}>
          <button style={styles.button}>LOGIN</button>
          <button style={styles.button}>REGISTER</button>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.navigation}>
        <div style={styles.navLinks}>
          <button style={styles.button}>HOME</button>
          <button style={styles.button}>CATEGORY</button>
          <button style={styles.button}>FAVORITES</button>
          <button style={styles.button}>ORDERS</button>
        </div>
        <div style={styles.searchContainer}>
          <div>
            <input
              type="text"
              placeholder="Search Products..."
              style={styles.searchInput}
            />
          </div>
          <div style={styles.cartIcon}>
            🛒
            {cartItems.length > 0 && (
              <span style={styles.cartCount}>{cartItems.length}</span>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <ProductSection title="FRUITS" productList={products.fruits} />
        <ProductSection title="VEGETABLES" productList={products.vegetables} />
        <ProductSection title="CEREALS & PULSES" productList={products.cereals} />
        <ProductSection title="RICE" productList={products.rice} />
      </main>
    </div>
  );
};

export default Agro;