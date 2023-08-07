function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var statePaths = document.querySelectorAll(".state-path");
statePaths.forEach(function (statePath) {
  statePath.addEventListener("click", function () {
    var stateName = statePath.getAttribute("data-state");
    var stateInfo = getStateInfo(stateName);
    displayStateInfo(stateInfo);
  });
});

function getStateInfo(stateName) {
  var stateInfo = {
    name: stateName,
    crops: getCrops(stateName),
    problems: getProblems(stateName),
    solutions: getSolutions(stateName),
  };
  return stateInfo;
}

function getCrops(stateName) {
  var crops = [];
  switch (stateName) {
    case "Andhra Pradesh":
      crops = [
        "Rice",
        "Sugarcane",
        "Groundnut",
        "Cotton",
        "Turmeric",
        "Chili",
        "Mangoes",
      ];
      break;
    case "Arunachal Pradesh":
      crops = [
        "Rice",
        "Maize",
        "Millets",
        "Wheat",
        "Pulses",
        "Tea",
        "Oranges",
        "Apples",
      ];
      break;
    case "Assam":
      crops = [
        "Rice",
        "Tea",
        "Jute",
        "Sugarcane",
        "Pulses",
        "Oilseeds",
        "Ginger",
      ];
      break;
    case "Bihar":
      crops = [
        "Rice",
        "Wheat",
        "Maize",
        "Pulses",
        "Sugarcane",
        "Oilseeds",
        "Vegetables",
      ];
      break;
    case "Chhattisgarh":
      crops = [
        "Rice",
        "Maize",
        "Wheat",
        "Pulses",
        "Oilseeds",
        "Sugarcane",
        "Soybeans",
      ];
      break;
    case "Goa":
      crops = ["Rice", "Cashews", "Coconuts", "Areca Nuts", "Spices", "Fruits"];
      break;
    case "Gujarat":
      crops = [
        "Cotton",
        "Groundnut",
        "Wheat",
        "Rice",
        "Sugarcane",
        "Pulses",
        "Spices",
      ];
      break;
    case "Haryana":
      crops = [
        "Wheat",
        "Rice",
        "Sugarcane",
        "Mustard",
        "Cotton",
        "Fruits",
        "Vegetables",
      ];
      break;
    case "Himachal Pradesh":
      crops = [
        "Apples",
        "Pears",
        "Plums",
        "Cherries",
        "Rice",
        "Maize",
        "Wheat",
        "Pulses",
      ];
      break;
    case "Jammu and Kashmir":
      crops = [
        "Corn",
        "Millet",
        "Pulses",
        "cotton",
        "Wheat",
        "Barley",
        "tobacco",
      ];
      break;
    case "Jharkhand":
      crops = ["Rice", "Maize", "Pulses", "Oilseeds", "Wheat", "Vegetables"];
      break;
    case "Karnataka":
      crops = [
        "Rice",
        "Sugarcane",
        "Cotton",
        "Coffee",
        "Tea",
        "Spices",
        "Silk",
        "Mangoes",
      ];
      break;
    case "Kerala":
      crops = [
        "Coconut",
        "Rubber",
        "Tea",
        "Coffee",
        "Spices",
        "Rice",
        "Pepper",
        "Banana",
      ];
      break;
    case "Madhya Pradesh":
      crops = [
        "Wheat",
        "Rice",
        "Soybeans",
        "Pulses",
        "Oilseeds",
        "Sugarcane",
        "Cotton",
      ];
      break;
    case "Maharashtra":
      crops = [
        "Sugarcane",
        "Cotton",
        "Rice",
        "Wheat",
        "Pulses",
        "Oilseeds",
        "Fruits",
      ];
      break;
    case "Manipur":
      crops = [
        "Rice",
        "Maize",
        "Pulses",
        "Oilseeds",
        "Sugarcane",
        "Vegetables",
      ];
      break;
    case "Meghalaya":
      crops = ["Rice", "Maize", "Pulses", "Potatoes", "Oilseeds", "Fruits"];
      break;
    case "Mizoram":
      crops = ["Rice", "Maize", "Pulses", "Oilseeds", "Sugarcane", "Fruits"];
      break;
    case "Nagaland":
      crops = [
        "Rice",
        "Maize",
        "Millets",
        "Pulses",
        "Oilseeds",
        "Tea",
        "Coffee",
      ];
      break;
    case "Odisha":
      crops = [
        "Rice",
        "Pulses",
        "Oilseeds",
        "Sugarcane",
        "Cotton",
        "Tea",
        "Coconut",
      ];
      break;
    case "Punjab":
      crops = ["Wheat", "Rice", "Cotton", "Maize", "Sugarcane", "Vegetables"];
      break;
    case "Rajasthan":
      crops = [
        "Wheat",
        "Barley",
        "Pulses",
        "Oilseeds",
        "Cotton",
        "Spices",
        "Fruits",
      ];
      break;
    case "Sikkim":
      crops = [
        "Rice",
        "Maize",
        "Millets",
        "Pulses",
        "Tea",
        "Cardamom",
        "Ginger",
      ];
      break;
    case "Tamil Nadu":
      crops = [
        "Rice",
        "Sugarcane",
        "Cotton",
        "Millets",
        "Pulses",
        "Spices",
        "Bananas",
      ];
      break;
    case "Telangana":
      crops = ["Rice", "Cotton", "Maize", "Groundnut", "Turmeric", "Mangoes"];
      break;
    case "Tripura":
      crops = ["Rice", "Jute", "Tea", "Rubber", "Pulses", "Oilseeds", "Fruits"];
      break;
    case "Uttar Pradesh":
      crops = [
        "Wheat",
        "Rice",
        "Sugarcane",
        "Pulses",
        "Oilseeds",
        "Potatoes",
        "Fruits",
      ];
      break;
    case "Uttarakhand":
      crops = [
        "Rice",
        "Wheat",
        "Maize",
        "Millets",
        "Pulses",
        "Oilseeds",
        "Fruits",
      ];
      break;
    case "West Bengal":
      crops = [
        "Rice",
        "Jute",
        "Tea",
        "Sugarcane",
        "Potatoes",
        "Oilseeds",
        "Fruits",
      ];
      break;
    default:
      crops = [];
      break;
  }
  return crops;
}

// Function to retrieve problems faced based on state name
function getProblems(stateName) {
  var problems = [];
  switch (stateName) {
    case "Andhra Pradesh":
      problems = [
        "Water scarcity",
        "Pest infestation",
        "Lack of storage facilities",
      ];
      break;
    case "Arunachal Pradesh":
      problems = [
        "Landslides",
        "Limited access to markets",
        "Seasonal variations",
      ];
      break;
    case "Assam":
      problems = ["Floods", "Soil erosion", "Lack of mechanization"];
      break;
    case "Bihar":
      problems = [
        "Inadequate irrigation facilities",
        "Low productivity",
        "Post-harvest losses",
      ];
      break;
    case "Chhattisgarh":
      problems = ["Deforestation", "Soil degradation", "Poor infrastructure"];
      break;
    case "Goa":
      problems = ["Land encroachment", "Unregulated mining", "Climate change"];
      break;
    case "Gujarat":
      problems = [
        "Water pollution",
        "Pesticide misuse",
        "Inefficient use of resources",
      ];
      break;
    case "Haryana":
      problems = [
        "Depletion of groundwater",
        "Crop residue burning",
        "Lack of crop diversification",
      ];
      break;
    case "Himachal Pradesh":
      problems = [
        "Seasonal labor shortage",
        "Lack of cold storage facilities",
        "Disease management",
      ];
      break;
    case "Jammu and Kashmir":
      problems = [
        "Unpredictable weather conditions",
        "Limited access to credit and financial services",
        "Land disputes and fragmentation",
      ];
      break;
    case "Jharkhand":
      problems = [
        "Land degradation",
        "Inadequate credit facilities",
        "Lack of marketing infrastructure",
      ];
      break;
    case "Karnataka":
      problems = ["Unpredictable rainfall", "Invasive pests", "Soil erosion"];
      break;
    case "Kerala":
      problems = [
        "Disease outbreaks",
        "Climate change impacts",
        "Low profitability",
      ];
      break;
    case "Madhya Pradesh":
      problems = [
        "Pests and diseases",
        "Lack of access to credit",
        "Market price fluctuations",
      ];
      break;
    case "Maharashtra":
      problems = [
        "Water mismanagement",
        "Crop failure",
        "Inadequate storage facilities",
      ];
      break;
    case "Manipur":
      problems = [
        "Limited access to credit",
        "Inefficient farming practices",
        "Lack of post-harvest infrastructure",
      ];
      break;
    case "Meghalaya":
      problems = [
        "Hill slope farming challenges",
        "Soil erosion",
        "Transportation difficulties",
      ];
      break;
    case "Mizoram":
      problems = [
        "Jhum cultivation impacts",
        "Limited access to markets",
        "Soil fertility decline",
      ];
      break;
    case "Nagaland":
      problems = [
        "Land scarcity",
        "Weed and pest management",
        "Inadequate storage facilities",
      ];
      break;
    case "Odisha":
      problems = [
        "Cyclones and natural disasters",
        "Land degradation",
        "Limited access to credit",
      ];
      break;
    case "Punjab":
      problems = [
        "Depletion of groundwater",
        "Residue management",
        "Lack of crop diversification",
      ];
      break;
    case "Rajasthan":
      problems = [
        "Water scarcity",
        "Saline and alkaline soils",
        "Climate change impacts",
      ];
      break;
    case "Sikkim":
      problems = [
        "Limited land availability",
        "Soil erosion",
        "Marketing challenges",
      ];
      break;
    case "Tamil Nadu":
      problems = [
        "Droughts",
        "Pest and disease outbreaks",
        "Declining groundwater levels",
      ];
      break;
    case "Telangana":
      problems = [
        "Lack of irrigation facilities",
        "Poor soil fertility",
        "Inadequate farm mechanization",
      ];
      break;
    case "Tripura":
      problems = [
        "Slope erosion",
        "Pests and diseases",
        "Limited access to credit",
      ];
      break;
    case "Uttar Pradesh":
      problems = [
        "Poor drainage facilities",
        "Crop diseases",
        "Post-harvest losses",
      ];
      break;
    case "Uttarakhand":
      problems = [
        "Land fragmentation",
        "Soil erosion",
        "Lack of marketing infrastructure",
      ];
      break;
    case "West Bengal":
      problems = [
        "Salinity intrusion",
        "Floods",
        "Inefficient use of resources",
      ];
      break;
    default:
      problems = [];
      break;
  }
  return problems;
}

// Function to retrieve solutions based on state name
function getSolutions(stateName) {
  var solutions = [];
  switch (stateName) {
    case "Andhra Pradesh":
      solutions = [
        "Promote water conservation techniques",
        "Implement integrated pest management practices",
        "Invest in storage infrastructure development",
      ];
      break;
    case "Arunachal Pradesh":
      solutions = [
        "Implement soil conservation measures",
        "Strengthen market linkages for farmers",
        "Promote climate-resilient farming techniques",
      ];
      break;
    case "Assam":
      solutions = [
        "Develop flood-resistant varieties",
        "Implement soil erosion control measures",
        "Introduce modern farm machinery and equipment",
      ];
      break;
    case "Bihar":
      solutions = [
        "Expand irrigation facilities and water management",
        "Promote modern agricultural practices",
        "Invest in post-harvest infrastructure development",
      ];
      break;
    case "Chhattisgarh":
      solutions = [
        "Encourage afforestation and sustainable land use practices",
        "Promote soil conservation and organic farming",
        "Improve rural infrastructure and transportation",
      ];
      break;
    case "Goa":
      solutions = [
        "Strengthen land management regulations",
        "Promote sustainable mining practices",
        "Support climate change adaptation strategies",
      ];
      break;
    case "Gujarat":
      solutions = [
        "Promote water pollution control measures",
        "Encourage integrated pest management practices",
        "Promote efficient use of resources through technology",
      ];
      break;
    case "Haryana":
      solutions = [
        "Promote water-efficient irrigation techniques",
        "Encourage crop residue management practices",
        "Support diversification towards high-value crops",
      ];
      break;
    case "Himachal Pradesh":
      solutions = [
        "Provide incentives for labor availability during peak seasons",
        "Develop cold storage and food processing infrastructure",
        "Enhance disease surveillance and management systems",
      ];
      break;
    case "Jammu and Kashmir":
      solutions = [
        "Promote climate-resilient farming practices and techniques",
        "Improve access to credit and financial services for farmers",
        "Facilitate land consolidation and dispute resolution mechanisms",
      ];
      break;
    case "Jharkhand":
      solutions = [
        "Promote land conservation and rejuvenation techniques",
        "Improve access to credit and financial services for farmers",
        "Invest in rural infrastructure and marketing facilities",
      ];
      break;
    case "Karnataka":
      solutions = [
        "Promote water harvesting and efficient irrigation practices",
        "Strengthen pest and disease surveillance and control",
        "Implement soil conservation measures",
      ];
      break;
    case "Kerala":
      solutions = [
        "Implement disease prevention and control strategies",
        "Support climate change adaptation and mitigation efforts",
        "Promote value addition and marketing support for farmers",
      ];
      break;
    case "Madhya Pradesh":
      solutions = [
        "Enhance pest and disease management practices",
        "Facilitate easy access to credit and financial services",
        "Promote farmer producer organizations for better market access",
      ];
      break;
    case "Maharashtra":
      solutions = [
        "Encourage efficient water management techniques",
        "Promote climate-smart agricultural practices",
        "Invest in post-harvest infrastructure and cold storage facilities",
      ];
      break;
    case "Manipur":
      solutions = [
        "Expand access to credit and financial services for farmers",
        "Promote sustainable farming practices",
        "Develop storage and processing facilities for crops",
      ];
      break;
    case "Meghalaya":
      solutions = [
        "Introduce terrace farming and soil conservation practices",
        "Improve transportation infrastructure for better market access",
        "Promote farmer training and capacity building programs",
      ];
      break;
    case "Mizoram":
      solutions = [
        "Promote sustainable shifting cultivation techniques",
        "Develop market linkages for farmers",
        "Implement soil fertility improvement measures",
      ];
      break;
    case "Nagaland":
      solutions = [
        "Support land management and consolidation initiatives",
        "Promote integrated pest and weed management practices",
        "Invest in storage and cold chain infrastructure",
      ];
      break;
    case "Odisha":
      solutions = [
        "Strengthen disaster preparedness and resilience in agriculture",
        "Promote soil conservation and sustainable land use practices",
        "Facilitate easy access to credit and financial services for farmers",
      ];
      break;
    case "Punjab":
      solutions = [
        "Promote sustainable groundwater management practices",
        "Encourage residue management and alternative uses",
        "Support crop diversification programs",
      ];
      break;
    case "Rajasthan":
      solutions = [
        "Promote efficient water use and conservation techniques",
        "Develop salinity and alkalinity management strategies",
        "Support climate change adaptation measures for agriculture",
      ];
      break;
    case "Sikkim":
      solutions = [
        "Facilitate land consolidation and land management initiatives",
        "Promote soil erosion control and conservation practices",
        "Improve market infrastructure and value chain development",
      ];
      break;
    case "Tamil Nadu":
      solutions = [
        "Promote water-efficient irrigation systems",
        "Strengthen pest and disease surveillance and control",
        "Encourage soil fertility management practices",
      ];
      break;
    case "Telangana":
      solutions = [
        "Improve irrigation infrastructure and water management",
        "Promote soil health and nutrient management practices",
        "Facilitate access to farm machinery and equipment",
      ];
      break;
    case "Tripura":
      solutions = [
        "Promote soil and water conservation practices",
        "Strengthen pest and disease management strategies",
        "Enhance access to credit and financial services for farmers",
      ];
      break;
    case "Uttar Pradesh":
      solutions = [
        "Develop efficient drainage systems and water management",
        "Implement disease management and prevention measures",
        "Invest in post-harvest infrastructure and value addition",
      ];
      break;
    case "Uttarakhand":
      solutions = [
        "Promote sustainable land use and soil conservation practices",
        "Strengthen marketing infrastructure and market linkages",
        "Support farmer training and capacity building programs",
      ];
      break;
    case "West Bengal":
      solutions = [
        "Implement salinity intrusion prevention and control measures",
        "Enhance flood management and preparedness in agriculture",
        "Promote resource-use efficiency and sustainable farming practices",
      ];
      break;
    default:
      solutions = [];
      break;
  }
  return solutions;
}

// Function to display state information in a box
function displayStateInfo(stateInfo) {
  var infoBox = document.getElementById("state-info-box");
  var content = "<h2>" + stateInfo.name + "</h2>";
  content += "<h3>Crops:</h3><ul>";
  stateInfo.crops.forEach(function (crop) {
    content += "<li>" + crop + "</li>";
  });
  content += "</ul>";
  content += "<h3>Problems:</h3><ul>";
  stateInfo.problems.forEach(function (problem) {
    content += "<li>" + problem + "</li>";
  });
  content += "</ul>";
  content += "<h3>Solutions:</h3><ul>";
  stateInfo.solutions.forEach(function (solution) {
    content += "<li>" + solution + "</li>";
  });
  content += "</ul>";
  infoBox.innerHTML = content;
}
