// UserCollection.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"; // Import redirect for navigation
import { getUserById } from "@/lib/actions/user.actions";
import {Collection} from "./Collection"; // Adjust the import path as needed
import { IImage } from "@/lib/database/models/image.model";

// Define the props for the UserCollection component
interface UserCollectionProps {
  images: IImage[]; // Array of images
  totalPages: number; // Total number of pages
  page: number; // Current page number
}

const UserCollection = async ({
  images,
  totalPages,
  page,
}: UserCollectionProps) => {
  const { userId } = auth();
  
  if (!userId) {
    // Handle redirection if no user is authenticated
    redirect("/sign-in");
    return null; // Optional: You can also return an error message or redirect component
  }

  const user = await getUserById(userId);
  
  // Filter images for this user
  const userImages = images.filter((image) => image.author._id.toString() === user._id.toString());

  return (
    <Collection 
      images={userImages} 
      totalPages={totalPages} 
      page={page} 
      hasSearch={true} // Or pass this based on your logic
    />
  );
};

export default UserCollection;
