import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inquiries</h1>

      {inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <ul>
          {inquiries.map((inquiry) => (
            <li key={inquiry.id}>
              <p><b>Name:</b> {inquiry.name}</p>
              <p><b>Email:</b> {inquiry.email}</p>
              <p><b>Message:</b> {inquiry.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

