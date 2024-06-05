import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

interface Machine {
  name: string;
}

interface Category {
  name: string;
  machines: Machine[];
}

const StrengthTrainingMachines: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Upper Body",
      machines: [
        { name: "Bench Press" },
        { name: "Chest Fly Machine" },
        { name: "Pull-Up Bar" },
        { name: "Lat Pulldown Machine" },
        { name: "SEATED BICEP (Preacher curl)" },
        { name: "ISO-LATERAL BICEPS CURL" },
        { name: "BICEPS CURL - INSIGNIA SERIES" },
        { name: "SHOULDER PRESS" },
        { name: "ISO-LATERAL INCLINE PRESS" },
        { name: "ISO-LATERAL HORIZONTAL BENCH PRESS" },
        { name: "TRICEPS PRESS" },
        { name: "ISO-LATERAL WIDE PULLDOWN" },
        { name: "ROW MACHINE" },
        { name: "ISO-LATERAL WIDE CHEST PRESS" },
        { name: "PECTORAL FLY/REAR DELTOID" },
        { name: "LATERAL RAISE" },
        { name: "T BAR ROW" },
        { name: "ISO-LATERAL SHOULDER PRESS" },
        { name: "ISO-LATERAL ROW" },
        { name: "CHEST PRESS" },
        { name: "ISO-LATERAL BENCH PRESS" },
        { name: "PECTORAL FLY/REAR DELTOID" },
        { name: "ISO-LATERAL LOW ROW" },
        { name: "ISO-LATERAL FRONT LAT PULLDOWN" },
      ],
    },
    {
      name: "Lower Body",
      machines: [
        { name: "Leg Press Machine" },
        { name: "Squat Rack" },
        { name: "Leg Extension Machine" },
        { name: "Leg Curl Machine" },
      ],
    },
    {
      name: "Core",
      machines: [
        { name: "Abdominal Crunch Machine" },
        { name: "Roman Chair" },
        { name: "Cable Woodchopper" },
      ],
    },
    {
      name: "Full Body",
      machines: [
        { name: "Smith Machine" },
        { name: "Rowing Machine" },
        { name: "Cable Crossover Machine" },
      ],
    },
  ];

  // State to track which category is currently expanded
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Function to toggle expansion of categories
  const toggleExpansion = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null); // Collapse if already expanded
    } else {
      setExpandedCategory(categoryName); // Expand if not expanded
    }
  };

  return (
    <div>
      {categories.map((category, index) => (
       
        <Box key={index}>
  {/* Category name with red text color */}
  <Typography
    variant="h6"
    color={expandedCategory === category.name ? "primary" : "initial"}
    onClick={() => toggleExpansion(category.name)}
    style={{ cursor: "pointer", fontWeight: "bold" }} // Add fontWeight: "bold" here
  >
    {category.name}
  </Typography>
  {/* List of machines with black text color */}
     {expandedCategory === category.name && (
            <List>
              {category.machines.map((machine, index) => (
                <ListItem key={index}>
                  <ListItemText primary={machine.name} primaryTypographyProps={{ color: 'black' }} />
                </ListItem>
              ))}
            </List>
          )}
</Box>

        
      ))}
    </div>
  );
};

export default StrengthTrainingMachines;
