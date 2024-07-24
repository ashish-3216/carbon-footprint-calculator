document.addEventListener('DOMContentLoaded', function() {
    const carbonForm = document.getElementById('carbonForm');
    carbonForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get values from form inputs
        const transportation = parseFloat(document.getElementById('transportation').value);
        const energy = parseFloat(document.getElementById('energy').value);
        const waste = parseFloat(document.getElementById('waste').value);
        
        // Calculate total carbon footprint (dummy calculation for demonstration)
        const totalCarbonFootprint = calculateCarbonFootprint(transportation, energy, waste);
        
        // Display total carbon footprint
        const carbonFootprintElement = document.getElementById('carbonFootprint');
        carbonFootprintElement.textContent = `Your estimated carbon footprint is ${totalCarbonFootprint.toFixed(2)} tons CO2e/month.`;
        document.getElementById('carbonResults').classList.remove('hidden');
        
        // Generate personalized recommendations
        const recommendations = generateRecommendations(transportation, energy, waste);
        
        // Update recommendations section in HTML
        updateRecommendations(recommendations);
        
        // Fetch articles and resources
        fetchArticles();
        
        // Clear form inputs
        carbonForm.reset();
    });
    
    // Function to calculate carbon footprint (dummy function for demonstration)
    function calculateCarbonFootprint(transportation, energy, waste) {
        // Dummy calculation (replace with actual calculation based on emission factors)
        const footprint = transportation * 0.5 + energy * 0.2 + waste * 0.1;
        return footprint;
    }
    
    // Function to generate personalized recommendations based on user input
    function generateRecommendations(transportation, energy, waste) {
        // Dummy data for demonstration (replace with actual logic and data)
        const recommendationsData = {
            transportation: {
                highMileage: "Consider carpooling or using public transportation to reduce vehicle emissions.",
                moderateMileage: "Optimize driving routes and maintain your vehicle regularly for fuel efficiency.",
                lowMileage: "Continue your efforts in reducing mileage and explore electric vehicle options."
            },
            energy: {
                highUsage: "Switch to energy-efficient appliances and lighting to reduce electricity consumption.",
                moderateUsage: "Implement energy-saving practices such as turning off lights and using power-saving modes.",
                lowUsage: "Monitor energy usage closely and aim for further reductions through efficient use."
            },
            waste: {
                highWaste: "Increase recycling efforts and reduce waste generation by opting for reusable products.",
                moderateWaste: "Review waste disposal practices and aim for further reduction through composting.",
                lowWaste: "Continue efforts to minimize waste generation and explore zero-waste alternatives."
            }
        };
        
        let recommendations = [];
        
        // Determine recommendation based on transportation input
        if (transportation >= 1000) {
            recommendations.push(recommendationsData.transportation.highMileage);
        } else if (transportation >= 500) {
            recommendations.push(recommendationsData.transportation.moderateMileage);
        } else {
            recommendations.push(recommendationsData.transportation.lowMileage);
        }
        
        // Determine recommendation based on energy input
        if (energy >= 1000) {
            recommendations.push(recommendationsData.energy.highUsage);
        } else if (energy >= 500) {
            recommendations.push(recommendationsData.energy.moderateUsage);
        } else {
            recommendations.push(recommendationsData.energy.lowUsage);
        }
        
        // Determine recommendation based on waste input
        if (waste >= 50) {
            recommendations.push(recommendationsData.waste.highWaste);
        } else if (waste >= 20) {
            recommendations.push(recommendationsData.waste.moderateWaste);
        } else {
            recommendations.push(recommendationsData.waste.lowWaste);
        }
        
        return recommendations;
    }
    
    // Function to update recommendations section in HTML
    function updateRecommendations(recommendations) {
        const recommendationList = document.getElementById('recommendationList');
        recommendationList.innerHTML = ''; // Clear previous recommendations
        
        recommendations.forEach(function(recommendation) {
            const li = document.createElement('li');
            li.textContent = recommendation;
            recommendationList.appendChild(li);
        });
    }
    
    // Function to fetch articles and resources from provided URLs
    function fetchArticles() {
        const articleUrls = [
            'https://www.un.org/sustainabledevelopment/climate-action/',
            'https://squareup.com/gb/en/townsquare/sustainable-business-practices',
            'https://www.un.org/en/climatechange/raising-ambition/renewable-energy#:~:text=Renewable%20energy%20sources%20%E2%80%93%20which%20are,or%20pollutants%20into%20the%20air.',
            'https://www.constellation.com/energy-101/energy-innovation/how-to-reduce-your-carbon-footprint.html'
        ];
        
        const articlesContainer = document.getElementById('articles');
        
        articleUrls.forEach(url => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    const title = doc.title;
                    const content = doc.querySelector('body').textContent;
                    
                    const articleElement = createArticleElement(title, content);
                    articlesContainer.appendChild(articleElement);
                })
                .catch(error => console.error('Error fetching article:', error));
        });
    }
    
    // Helper function to create an article element
    function createArticleElement(title, content) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        
        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(contentElement);
        
        return articleDiv;
    }
});
