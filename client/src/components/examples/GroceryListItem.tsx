import { useState } from 'react';
import GroceryListItem from '../GroceryListItem';

export default function GroceryListItemExample() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="p-4">
      <GroceryListItem
        id="1"
        name="Omega 3 Fish Oil"
        location="Aisle 12, Health & Wellness"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}
