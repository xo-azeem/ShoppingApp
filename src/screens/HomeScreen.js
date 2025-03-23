import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import axios from 'axios';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => {
      if (category === 'men\'s clothing') {
        return product.category === "men's clothing";
      } else if (category === 'women\'s clothing') {
        return product.category === "women's clothing";
      } else if (category === 'jewelery') {
        return product.category === "jewelery";
      } else if (category === 'electronics') {
        return product.category === "electronics";
      }
      return false;
    });
    
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop360°</Text>
      </View>
      
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filter by category:</Text>
        <View style={styles.filterButtons}>
          <ScrollableFilter 
            activeFilter={activeFilter} 
            onFilterSelect={filterProducts} 
          />
        </View>
      </View>
      
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          Showing {filteredProducts.length} products
        </Text>
      </View>
      
      <ProductList products={filteredProducts} />
    </SafeAreaView>
  );
};

const ScrollableFilter = ({ activeFilter, onFilterSelect }) => {
  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'men\'s clothing', label: 'Men\'s Clothing' },
    { id: 'women\'s clothing', label: 'Women\'s Clothing' },
    { id: 'jewelery', label: 'Jewelry' },
    { id: 'electronics', label: 'Electronics' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
      {filters.map(filter => (
        <TouchableOpacity
          key={filter.id}
          style={[
            styles.filterButton,
            activeFilter === filter.id && styles.activeFilterButton
          ]}
          onPress={() => onFilterSelect(filter.id)}
        >
          <Text 
            style={[
              styles.filterButtonText,
              activeFilter === filter.id && styles.activeFilterText
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    padding: 12,
    backgroundColor: 'white',
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
  },
  filtersScroll: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: '#3498db',
  },
  filterButtonText: {
    fontWeight: '500',
    color: '#666',
  },
  activeFilterText: {
    color: 'white',
  },
  resultsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;