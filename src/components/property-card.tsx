export function PropertyCard({ property }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>{property.title}</h3>
      <p>Price: {property.price}</p>
      <p>Status: {property.status}</p>
    </div>
  );
}

