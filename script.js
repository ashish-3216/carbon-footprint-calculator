const fuelFactors = {
    'coal-anthracite': 103.69,
    'coal-bituminous': 93.28,
    'coal-sub-bituminous': 97.17,
    'coal-lignite': 97.72,
    'coal-mixed-commercial': 94.27,
    'coal-mixed-electric': 95.52,
    'coal-mixed-industrial-coking': 93.90,
    'coal-mixed-industrial': 94.67,
    'coal-coke': 113.67
};

const mobileCombustionFactors = {
    'aviation-gasoline': 8.31,
    'biodiesel': 9.45,
    'cng': 0.05444,
    'diesel': 10.21,
    'ethanol': 5.75,
    'kerosene-jet': 9.75,
    'lng': 4.50,
    'lpg': 5.68,
    'motor-gasoline': 8.78,
    'residual-fuel': 11.27
};

const electricityFactors = {
    'ASCC-Alaska': 1052.1,
    'ASCC-Miscellaneous': 495.8,
    'WECC-Southwest': 776.0,
    'WECC-California': 497.4,
    'ERCOT-All': 771.1,
    'FRCC-All': 813.8,
    'HICC-Miscellaneous': 1155.5,
    'HICC-Oahu': 1575.4,
    'MRO-East': 1479.6,
    'MRO-West': 936.5,
    'NPCC-New-England': 536.4,
    'WECC-Northwest': 602.1,
    'NPCC-NYC-Westchester': 885.2,
    'NPCC-Long-Island': 1200.7,
    'NPCC-Upstate-NY': 274.6,
    'Puerto-Rico-Miscellaneous': 1593.5,
    'RFC-East': 657.4,
    'RFC-Michigan': 1216.4,
    'RFC-West': 1000.1,
    'WECC-Rockies': 1124.9,
    'SPP-North': 952.6,
    'SPP-South': 970.4,
    'SERC-Mississippi-Valley': 801.0,
    'SERC-Midwest': 1369.9,
    'SERC-South': 893.3,
    'SERC-Tennessee-Valley': 933.1,
    'SERC-Virginia-Carolina': 623.0,
    'US-Average': 823.1
};

const vehicleFactors = {
    'medium-heavy-truck': 1.360,
    'passenger-car': 0.306,
    'light-duty-truck': 0.405,
    'medium-heavy-truck-c': 0.168,
    'rail': 0.022,
    'waterborne-craft': 0.082,
    'aircraft': 0.905
};

const materialFactors = {
    'aluminum-cans': 0.01,
    'aluminum-ingot': 0.01,
    'steel-cans': 0.01,
    'copper-wire': 0.01,
    'glass': 0.01,
    'hdpe': 2.80,
    'ldpe': 2.80,
    'pet': 2.05,
    'lldpe': 2.80,
    'pp': 2.80,
    'ps': 3.02,
    'pvc': 1.26,
    'pla': 0.01,
    'corrugated-containers': 0.05
};

const travelFactors = {
    'passenger-car': 0.306,
    'light-duty-truck': 0.405,
    'motorcycle': 0.376,
    'intercity-rail-northeast': 0.058,
    'intercity-rail-other': 0.150,
    'intercity-rail-average': 0.113,
    'commuter-rail': 0.133,
    'transit-rail': 0.093,
    'bus': 0.071,
    'air-travel-short-haul': 0.207,
    'air-travel-medium-haul': 0.129,
    'air-travel-long-haul': 0.163
};

const tips = [
    "Reduce Energy Consumption: Switch to energy-efficient appliances, use programmable thermostats, and seal leaks around windows and doors.",
    "Switch to Renewable Energy: Consider using solar panels or wind turbines for a renewable energy source.",
    "Use Energy-Efficient Transportation: Opt for public transportation, carpool, or drive a fuel-efficient vehicle.",
    "Reduce Water Usage: Install water-saving fixtures and take shorter showers.",
    "Reduce, Reuse, Recycle: Cut down on waste by reusing items, recycling materials, and reducing overall consumption.",
    "Conserve Resources: Opt for products with minimal packaging and buy in bulk to reduce waste.",
    "Plant Trees: Trees absorb CO2 and provide numerous environmental benefits.",
    "Support Sustainable Practices: Choose products and companies that focus on sustainability and environmentally-friendly practices.",
    "Reduce Meat Consumption: Incorporate more plant-based meals into your diet to reduce the carbon footprint of your food.",
    "Use LED Light Bulbs: They consume less energy and last longer than traditional bulbs.",
    "Unplug Electronics: Unplug devices when not in use to avoid phantom energy consumption.",
    "Opt for Energy-Efficient Windows: Install double-glazed windows to improve insulation and reduce energy use.",
    "Use a Programmable Thermostat: Automatically adjust your heating and cooling to reduce energy consumption.",
    "Install a Rain Barrel: Collect rainwater for gardening and reduce water usage from your tap.",
    "Choose Energy Star Appliances: Look for the Energy Star label when purchasing new appliances.",
    "Insulate Your Home: Proper insulation can significantly reduce heating and cooling costs.",
    "Support Local Businesses: Buying local reduces transportation emissions and supports your community.",
    "Avoid Single-Use Plastics: Use reusable bags, bottles, and containers to cut down on plastic waste.",
    "Switch to a Green Energy Provider: Choose an energy supplier that offers renewable energy options.",
    "Drive Less: Walk, bike, or use public transport to reduce vehicle emissions.",
    "Conserve Paper: Opt for digital documents and double-sided printing to reduce paper waste.",
    "Participate in a Carbon Offset Program: Offset your carbon footprint by supporting environmental projects.",
    "Compost Organic Waste: Reduce landfill waste and create nutrient-rich compost for gardening.",
    "Reduce Hot Water Usage: Take shorter showers and use cold water for laundry when possible.",
    "Choose Eco-Friendly Products: Look for items made from recycled or sustainable materials.",
    "Maintain Your Vehicle: Regular maintenance ensures your car runs efficiently and reduces emissions.",
    "Opt for Energy-Efficient Heating and Cooling: Use systems that have high energy efficiency ratings.",
    "Install Low-Flow Fixtures: Use low-flow toilets, showerheads, and faucets to conserve water.",
    "Participate in Tree Planting: Join local initiatives to plant trees and enhance green spaces.",
    "Use Public Transportation: Reduce your carbon footprint by opting for buses, trains, or subways.",
    "Reduce Food Waste: Plan meals and store food properly to minimize waste.",
    "Choose Non-Toxic Cleaning Products: Use environmentally-friendly cleaning solutions to reduce chemical exposure.",
    "Buy in Bulk: Purchasing products in bulk reduces packaging waste and often lowers costs.",
    "Educate Others: Share your knowledge about reducing carbon footprints with friends and family.",
    "Adopt a Minimalist Lifestyle: Focus on quality over quantity to reduce consumption and waste.",
    "Use a Clothesline: Dry clothes naturally to save energy used by electric dryers.",
    "Support Renewable Energy Projects: Invest in or support projects that focus on renewable energy sources.",
    "Reduce Air Travel: Opt for alternative modes of transportation when possible and limit frequent flying.",
    "Choose Sustainable Seafood: Purchase seafood from sources that are certified sustainable.",
    "Participate in Local Cleanups: Engage in community clean-up events to reduce environmental pollution.",
    "Invest in Energy-Efficient Home Improvements: Consider upgrades such as better insulation or solar panels.",
    "Encourage Sustainable Agriculture: Support farming practices that are environmentally friendly and reduce carbon footprints.",
    "Reduce Packaging Waste: Choose products with minimal packaging or bring your own containers.",
    "Opt for Digital Subscriptions: Reduce physical media by subscribing to digital versions of magazines and newspapers.",
    "Practice Eco-Friendly Gardening: Use organic methods and avoid harmful chemicals in your garden."
];

function getRandomTips(numTips) {
    const shuffled = tips.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTips);
}

function updatePersonalizedTips() {
    const selectedTips = getRandomTips(5);
    const tipsText = selectedTips.length ? selectedTips.join('\n') : 'No tips available at the moment.';
    document.getElementById('personalized-tips').innerText = tipsText;
}

function calculateCarbonFootprint() {
    const fuelType = document.getElementById('fuel-type').value;
    const fuelAmount = parseFloat(document.getElementById('fuel-amount').value) || 0;
    const mobileFuelType = document.getElementById('mobile-fuel-type').value;
    const mobileFuelAmount = parseFloat(document.getElementById('mobile-fuel-amount').value) || 0;
    const egridSubregion = document.getElementById('egrid-subregion').value;
    const electricityAmount = parseFloat(document.getElementById('electricity-amount').value) || 0;
    const vehicleType = document.getElementById('vehicle-type').value;
    const vehicleDistance = parseFloat(document.getElementById('vehicle-distance').value) || 0;
    const materialType = document.getElementById('material-type').value;
    const materialAmount = parseFloat(document.getElementById('material-amount').value) || 0;
    const travelType = document.getElementById('travel-type').value;
    const travelDistance = parseFloat(document.getElementById('travel-distance').value) || 0;
    const fuelEmissions = (fuelFactors[fuelType] || 0) * fuelAmount;
    const mobileEmissions = (mobileCombustionFactors[mobileFuelType] || 0) * mobileFuelAmount;
    const electricityEmissions = (electricityFactors[egridSubregion] || 0) * electricityAmount / 2204.62; 
    const vehicleEmissions = (vehicleFactors[vehicleType] || 0) * vehicleDistance;
    const materialEmissions = (materialFactors[materialType] || 0) * materialAmount;
    const travelEmissions = (travelFactors[travelType] || 0) * travelDistance;
    const totalEmissions = fuelEmissions + mobileEmissions + electricityEmissions + vehicleEmissions + materialEmissions + travelEmissions;
    document.getElementById('result').textContent = `Total Carbon Footprint: ${totalEmissions.toFixed(2)} kg CO2`;
    updatePersonalizedTips();
    saveRecord(fuelAmount, mobileFuelAmount, electricityAmount, vehicleDistance, materialAmount, travelDistance, totalEmissions);
}

function saveRecord(fuelConsumption, mobileCombustion, electricityConsumption, transportation, wasteMaterial, businessTravel, totalFootprint) {
    const records = JSON.parse(localStorage.getItem('carbonFootprintRecords')) || [];
    const record = {
        date: new Date().toLocaleDateString(),
        fuelConsumption: fuelConsumption,
        mobileCombustion: mobileCombustion,
        electricityConsumption: electricityConsumption,
        transportation: transportation,
        wasteMaterial: wasteMaterial,
        businessTravel: businessTravel,
        totalFootprint: totalFootprint
    };
    records.push(record);
    localStorage.setItem('carbonFootprintRecords', JSON.stringify(records));
}

function clearRecords() {
    localStorage.removeItem('carbonFootprintRecords');
    loadRecords();
}

function loadRecords() {
    const records = JSON.parse(localStorage.getItem('carbonFootprintRecords')) || [];
    const tableBody = document.querySelector('#records-table tbody');

    tableBody.innerHTML = '';

    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.fuelConsumption} mmBtu</td>
            <td>${record.mobileCombustion} liters</td>
            <td>${record.electricityConsumption} MWh</td>
            <td>${record.transportation} vehicle-miles</td>
            <td>${record.wasteMaterial} short tons</td>
            <td>${record.businessTravel} miles</td>
            <td>${record.totalFootprint.toFixed(2)} kg CO2</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('fuel-type')) {
        document.getElementById('calculate-button').addEventListener('click', calculateCarbonFootprint);
    } 
    else if (document.querySelector('#records-table')) {
        loadRecords();
        document.getElementById('clear-records-button').addEventListener('click', clearRecords);
    }
});
