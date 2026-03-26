import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Properties</h1>

      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <p><b>Title:</b> {property.title}</p>
              <p><b>Price:</b> {property.price}</p>
              <p><b>Status:</b> {property.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

