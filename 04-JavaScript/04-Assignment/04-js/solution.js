

function calculateTax() {
    // Define tax rates and income ranges using closures
    const taxRates = [
      { range: [0, 250000], rate: 0 },
      { range: [250001, 500000], rate: 0.05 },
      { range: [500001, 1000000], rate: 0.1 },
      { range: [1000001, 5000000], rate: 0.2 },
      { range: [5000001, Infinity], rate: 0.3 }
    ];
  
    // Return a function that calculates tax based on income
    return function(income) {
      // Find the appropriate tax rate based on income range
      const applicableRate = taxRates.find(({ range }) => income >= range[0] && income <= range[1]);
  
      if (applicableRate) {
        // Calculate and return the tax amount in Rupees
        return income * applicableRate.rate;
      } else {
        // Handle invalid income ranges
        throw new Error('Invalid income range');
      }
    };
  }
  
  // Example usage:
  const calculateTaxForIncome = calculateTax();
  const income = 300000; // Assuming income is in Rupees
  const taxAmount = calculateTaxForIncome(income);
  
  console.log(`For an income of ₹${income}, the tax amount is ₹${taxAmount}`);
  

  